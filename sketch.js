var player,pi;

//npc's level1
var edges,wall1,wall2,wall3,wall4,wall5;
var udwall1,udwall2,udwall3,udwall4,udwall5;
var ddwall1,ddwall2,ddwall3,ddwall4,ddwall5;
var iwall1,iwall2,iwall3,iwall4;
var ifwall1,ifwall2,ifwall3,ifwall4;

//npc's start menu
var swall1,swall2,swall3,swall4,swall5;
var sudwall1,sudwall2,sudwall3,sudwall4,sudwall5;
var sddwall1,sddwall2,sddwall3,sddwall4,sddwall5;
var siwall1,siwall2,siwall3,siwall4;
var sifwall1,sifwall2,sifwall3,sifwall4;

var fl,fl2;
var e1,e2;
var c1,c2,c3,v0,v1,v2,cv,s,ss,pc,death;
//other 
var gamestate,pbbox,nlbutton,pb,nb,vic,b,fin,pc;
var score,vics,ps,chp;

function preload()
{
  pb=loadImage("pb.png")
  nb=loadImage("nb.png")
  vic=loadImage("victory.png")
  b=loadImage("b.png")
  fin=loadImage("fin.png")
  vics=loadSound("vic.mp3")
  dead=loadSound("dead.mp3")
  pc=loadSound("pc.wav")
  chp=loadImage("cp.png")
}

function setup() 
{
  createCanvas(1000, 600);
 
  c1="blue"
  c2="cyan"
  c3="red"
  c4="yellow"
  cv="c";
  cp="c"
  ps="c"
 
  death=0
  score=0
  gamestate="start";


  player=createSprite(600,310,20,20);
  
  startmenu();
  level1();
  level2();
  level3();
  level4();
  level5()
  
}

function draw()
{
  if(gamestate!=="finish")
  {
    background(b);
  }


  edges=createEdgeSprites(); 

  visibles();
  visible1();
  visible2();
  visible3();
  visible4();
  visible5();
  

  if(gamestate=="start" && mousePressedOver(pbbox))
  {
    pbbox.destroy();
    
    gamestate="slevel1";
  
  }

  if(gamestate=="slevel1")
  { 
    if(cp=="c")
    {
      cp="d"
      player.x=90
      player.y=310
    }

   colliderset();

   level1color();

   level1collide(); 

   level1uvelocity();

   enemymovement()  
   
   if(player.isTouching(fl))
   {
     nlbutton.visible=true;
    if(ps=="c")
    { 
      score=score+32
      vics.play()
      ps="d"
    }
   
     if(mousePressedOver(nlbutton))
     {
       nlbutton.destroy();
       
       gamestate="slevel2" 
       ps="c"
       cp="c"
       cv="c"
     }

   }
 
  }
 

  if(gamestate=="slevel2")
  {

    if(cp=="c")
    {
      cp="d"
      player.x=90
      player.y=490
    }

    level2collide()

    if(player.isTouching(fl2))
    {
      nlbutton2.visible=true
      if(ps=="c")
    {
      score=score+32
      vics.play()
      ps="d"
    }

      if(mousePressedOver(nlbutton2))
      {
        nlbutton2.destroy();
  
        gamestate="slevel3" 
        ps="c"
        cp="c"
        cv="c"
      }
    }
  }


  if(gamestate=="slevel3")
  {

    if(cp=="c")
    {
      cp="d"
      player.x=90
      player.y=490
    }

    level3collide();

    if(player.isTouching(fl3))
    {
       nlbutton3.visible=true;
       if(ps=="c")
       {
        score=score+32
         vics.play()
         ps="d"
       }

       if(mousePressedOver(nlbutton3))
       {
         nlbutton3.destroy();
   
         gamestate="slevel4" 
         ps="c"
         cv="c"
         cp="c"
       }
    }
  }
if(gamestate=="slevel4")
{
  if(cp=="c")
    {
      cp="d"
      player.x=90
      player.y=310
    }

  level4collide()

if(player.isTouching(fl4)){
 
  nlbutton4.visible=true;

  if(ps=="c")
  {
    score=score+32
    vics.play()
    ps="d"
  }

  if(mousePressedOver(nlbutton4))
  {
    nlbutton4.destroy();

    gamestate="slevel5" 
    ps="c"
    cv="c"
    cp="c"
  }
  
}}


if(gamestate=="slevel5")
{
  if(cp=="c")
    {
      cp="d"
      player.x=90
      player.y=530
    }

  level5collide()
  
  if(player.isTouching(fl5))
  {
    if(ps=="c")
    {
      score=score+32
      vics.play()
      ps="d"
    }
   gamestate="finish"
  }

}

if(gamestate=="finish")
{
 background(vic)
}
if(keyDown("W") && ps=="c")
{ 
  player.y=player.y-10
}

if(keyDown("S") && ps=="c")
{
  player.y=player.y+10
}
if(keyDown("A") && ps=="c")
{
  player.x=player.x-10
}

if(keyDown("D")&& ps=="c")
{
  player.x=player.x+10
}


  for(var i=0;i<=1000; i+=20)
  {
    line(20+i,0,20+i,600);
  }
  for(var y=0;y<=600; y+=20)
  {
    line(0,20+y,1000,20+y)
  }

  player.collide(edges[0]);
  player.collide(edges[1]);
  player.collide(edges[2]);
  player.collide(edges[3]);



  drawSprites()
  

  fill("black")

  text("x: "+mouseX + ", y: " + mouseY,mouseX,mouseY)
  
  textSize(28)
  text("Total Deaths:"+ death ,650,40 );
  text("Total Score:"+ score ,100,40 );

  if(gamestate=="start")
  {
    fill("white")
    text("INSTRUCTIONS",230,210)
    text("CONTROLS",650,210)

    textSize(20)
    fill("yellow")

    text("1.Blue is for Player.",200,250)
    text("2.Yellow is for points.",200,290)
    text("3.Red are the enemy.",200,320)
    text("4.If you touches enemy death will increase.",200,360)
    text("and your position will reset ",200,380)
    text("5.If you collect coins your score will increase",200,410)
    text("6.The goal is to reach flag. ",200,440)
    text("7.Odinary flags are checkpoints",200,470)
    
    fill("orange")
    textSize(30)
    text("W - For up",650,270)
    text("A - For left",650,310)
    text("D - For right",650,350)
    text("S - For down",650,390)

  }

  
  if(cpfec=="d")
  {
    fill("Yellow")
  text("Checkpoint Reached",350,40)
  }
}
