function level1()
{

  wall1=createSprite(40,340,40,460);
  wall2=createSprite(220,100,400,40);
  wall3=createSprite(940,340,40,460);
  wall4=createSprite(760,100,400,40);
  wall5=createSprite(220,560,400,40);
  wall6=createSprite(760,560,400,40);

  udwall1=createSprite(440,140,40,40);
  udwall2=createSprite(470,180,20,40);
  udwall3=createSprite(490,210,20,20);
  udwall4=createSprite(540,140,40,40);
  udwall5=createSprite(510,180,20,40);

  ddwall1=createSprite(440,520,40,40);
  ddwall2=createSprite(470,480,20,40);
  ddwall3=createSprite(490,450,20,20);
  ddwall4=createSprite(540,520,40,40);
  ddwall5=createSprite(510,480,20,40);

  iwall1=createSprite(120,250,120,40);
  iwall2=createSprite(120,370,120,40);
  iwall3=createSprite(170,350,40,60);
  iwall4=createSprite(170,270,40,60);
  
  ifwall1=createSprite(860,250,120,40);
  ifwall2=createSprite(860,370,120,40);
  ifwall3=createSprite(860,350,40,60);
  ifwall4=createSprite(860,270,40,60);

  coin1=createSprite(110,170,20,20)
  coin2=createSprite(110,490,20,20)
  coin3=createSprite(870,170,20,20)
  coin4=createSprite(870,490,20,20)

  coin1.shapeColor=c4
  coin2.shapeColor=c4
  coin3.shapeColor=c4
  coin4.shapeColor=c4


  e1=createSprite(70,171,20,20);
  e2=createSprite(910,170,20,20);

  fl= createSprite(910,310,20,60);
  fl.addImage(fin);
  nlbutton= createSprite(490,290,140,60);
  nlbutton.addImage(nb)
  nlbutton.visible=false
}

function level1color()
{
  player.shapeColor=c1
  wall1.shapeColor=c2;
  wall2.shapeColor=c2;
  wall3.shapeColor=c2;
  wall4.shapeColor=c2;
  wall5.shapeColor=c2;
  wall6.shapeColor=c2;

  iwall1.shapeColor=c2;
  iwall2.shapeColor=c2;
  iwall3.shapeColor=c2;
  iwall4.shapeColor=c2;

  ifwall1.shapeColor=c2;
  ifwall2.shapeColor=c2;
  ifwall3.shapeColor=c2;
  ifwall4.shapeColor=c2;

  udwall1.shapeColor=c2;
  udwall2.shapeColor=c2;
  udwall3.shapeColor=c2;
  udwall4.shapeColor=c2;
  udwall5.shapeColor=c2;

  ddwall1.shapeColor=c2;
  ddwall2.shapeColor=c2;
  ddwall3.shapeColor=c2;
  ddwall4.shapeColor=c2;
  ddwall5.shapeColor=c2;

  e1.shapeColor=c3
  e2.shapeColor=c3
}

function level1collide()
{
  
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);

  player.collide(udwall1);
  player.collide(udwall2);
  player.collide(udwall3);
  player.collide(udwall4);
  player.collide(udwall5);

  player.collide(ddwall1);
  player.collide(ddwall2);
  player.collide(ddwall3);
  player.collide(ddwall4);
  player.collide(ddwall5);
  
  player.collide(iwall1);
  player.collide(iwall2);
  player.collide(iwall3);
  player.collide(iwall4);

  player.collide(ifwall1);
  player.collide(ifwall2);
  player.collide(ifwall3);
  player.collide(ifwall4);

  
}

function level1uvelocity()
{
 
  if(gamestate=="slevel1" && cv=="c"){
  e1.x=70
  e1.y=171
  e2.x=910
  e2.y=170
  e1.velocityX=10;
  e2.velocityX=-10
  cv="d"
}
}
 function enemymovement()
{
  if(e1.isTouching(wall1))
  {
    e1.velocityX=10;
    e1.velocityY=0;
  }

  if(e1.isTouching(udwall2))
  {
    e1.velocityX=0;
    e1.velocityY=10;
    e1.x=e1.x-1.5;
  }
  if(e1.isTouching(ddwall1))
  {
    e1.velocityX=-10;
    e1.velocityY=0;
    e1.y=e1.y-0.5 
  }
  if(e1.isTouching(ddwall2))
  {
    e1.velocityX=0;
    e1.velocityY=-10;
    e1.x=e1.x-2.5; 
  }
  if(e1.isTouching(udwall1))
  {
    e1.velocityX=-10;
    e1.velocityY=0;
    e1.y=e1.y+2.5; 
  }

  if(e2.isTouching(wall3))
  {
    e2.velocityX=-10;
    e2.velocityY=0;
  }

  if(e2.isTouching(udwall5))
  {
    e2.velocityX=0;
    e2.velocityY=10;
    e2.x=e2.x+1.5;
  }
  if(e2.isTouching(ddwall4))
  {
    e2.velocityX=10;
    e2.velocityY=0;
    e2.y=e2.y-0.5 
  }
  if(e2.isTouching(ddwall5))
  {
    e2.velocityX=0;
    e2.velocityY=-10;
    e2.x=e1.x+2.5; 
  }
  if(e2.isTouching(udwall4))
  {
    e2.velocityX=-10;
    e2.velocityY=0;
    e2.y=e2.y+2.5; 
  }

  if(player.isTouching(e1)||player.isTouching(e2))
  { 
    if(score<10)
    {
      score=0
    }
    if(score>=10)
    {
      score=score-10
    }
    dead.play();
    death=death+1
    player.x=90
    player.y=310
  }
}

function colliderset()
{
  ddwall1.setCollider("rectangle",0,0,41,41);
  ddwall2.setCollider("rectangle",0,0,21,41);
  udwall2.setCollider("rectangle",0,0,21,41);
  udwall1.setCollider("rectangle",0,0,41,41)
 
 
  ddwall4.setCollider("rectangle",0,0,41,41);
  ddwall5.setCollider("rectangle",0,0,21,41);
  udwall5.setCollider("rectangle",0,0,21,41);
  udwall4.setCollider("rectangle",0,0,41,41)
}
function visible1()
{
  if(gamestate=="slevel1"){
   v1=true
    
   if(player.isTouching(coin1))
   {
     pc.play();  
    coin1.destroy()
    score=score+10
   }
     
   if(player.isTouching(coin2))
   {
    pc.play();
    coin2.destroy()
    score=score+10
   }  
   if(player.isTouching(coin3))
   {
    pc.play();
    coin3.destroy()
    score=score+10
   }  
   if(player.isTouching(coin4))
   {
    pc.play();
    coin4.destroy()
    score=score+10
   }

}
  else
{
  v1=false
}
  wall1.visible=v1
  wall2.visible=v1
  wall3.visible=v1
  wall4.visible=v1
  wall5.visible=v1
  wall6.visible=v1 
  udwall1.visible=v1
  udwall2.visible=v1
  udwall3.visible=v1
  udwall4.visible=v1
  udwall5.visible=v1
  ddwall1.visible=v1
  ddwall2.visible=v1
  ddwall3.visible=v1
  ddwall4.visible=v1
  ddwall5.visible=v1
  ifwall1.visible=v1
  ifwall2.visible=v1
  ifwall3.visible=v1
  ifwall4.visible=v1
  iwall1.visible=v1
  iwall2.visible=v1
  iwall3.visible=v1
  iwall4.visible=v1
  coin1.visible=v1
  coin2.visible=v1
  coin3.visible=v1
  coin4.visible=v1

  
  e1.visible=v1
  e2.visible=v1

  fl.visible=v1
  
}

//level1 finished


