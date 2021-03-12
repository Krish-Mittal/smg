function level2()
{
    wall1s=createSprite(40,300,40,460);
    wall2s=createSprite(490,60,940,40);
    wall3s=createSprite(940,300,40,460);
    wall4s=createSprite(490,540,940,40);
    
    iwall1s=createSprite(95,450,90,20);
    iwall2s=createSprite(95,390,90,20);
    iwall3s=createSprite(130,430,20,60);
    iwall4s=createSprite(90,330,60,20);
    iwall5s=createSprite(110,310,20,60);
    iwall6s=createSprite(150,270,20,60);
    iwall7s=createSprite(170,250,60,20);
    iwall8s=createSprite(190,230,20,60);
    iwall9s=createSprite(230,190,20,60);
    iwall10s=createSprite(250,170,60,20);
    iwall11s=createSprite(270,150,20,60);
    iwall12s=createSprite(290,130,60,20);
    iwall13s=createSprite(310,110,20,60);
   
    iwall14s=createSprite(120,250,120,40);
    iwall15s=createSprite(120,370,120,40);//
    iwall16s=createSprite(170,350,40,60);
    iwall17s=createSprite(170,270,40,60);
    
    ifwall1s=createSprite(860,250,120,40);
    ifwall2s=createSprite(860,370,120,40);
    ifwall3s=createSprite(860,350,40,60);
    ifwall4s=createSprite(860,270,40,60);
  
    coin1s=createSprite(70,310,20,20)
    coin2s=createSprite(90,150,20,20)
    coin3s=createSprite(910,310,20,20)
    coin4s=createSprite(490,130,20,20)
    coin5s=createSprite(830,330,20,20)
    coin6s=createSprite(830,290,20,20)
    coin7s=createSprite(210,290,20,20)
    coin8s=createSprite(210,330,20,20)
    coin9s=createSprite(570,130,20,20)


    mb1s=createSprite(519,310,690,20)
    mb2s=createSprite(519,310,20,390)

    fl2=createSprite(900,130,40,20)
    fl2.addImage(fin);

    nlbutton2= createSprite(490,290,140,60);
    nlbutton2.addImage(nb)

    nlbutton2.visible=false


wall1s.shapeColor=c2
wall2s.shapeColor=c2
wall3s.shapeColor=c2
wall4s.shapeColor=c2

iwall1s.shapeColor=c2
iwall2s.shapeColor=c2
iwall3s.shapeColor=c2
iwall4s.shapeColor=c2
iwall5s.shapeColor=c2
iwall6s.shapeColor=c2
iwall7s.shapeColor=c2
iwall8s.shapeColor=c2
iwall9s.shapeColor=c2
iwall10s.shapeColor=c2
iwall11s.shapeColor=c2
iwall12s.shapeColor=c2
iwall13s.shapeColor=c2
iwall14s.shapeColor=c2
iwall15s.shapeColor=c2
iwall16s.shapeColor=c2
iwall17s.shapeColor=c2

coin1s.shapeColor=c4
coin2s.shapeColor=c4
coin3s.shapeColor=c4
coin4s.shapeColor=c4
coin5s.shapeColor=c4
coin6s.shapeColor=c4
coin7s.shapeColor=c4
coin8s.shapeColor=c4
coin9s.shapeColor=c4

ifwall1s.shapeColor=c2
ifwall2s.shapeColor=c2
ifwall3s.shapeColor=c2
ifwall4s.shapeColor=c2

mb1s.shapeColor=c3
mb2s.shapeColor=c3
}
 
function level2collide()
{
    player.collide(wall1s);
    player.collide(wall2s);
    player.collide(wall3s);
    player.collide(wall4s);

    player.collide(iwall1s);
    player.collide(iwall2s); 
    player.collide(iwall3s);
    player.collide(iwall4s);
    player.collide(iwall5s);
    player.collide(iwall6s);
    player.collide(iwall7s);
    player.collide(iwall8s);
    player.collide(iwall9s);
    player.collide(iwall10s);
    player.collide(iwall11s);
    player.collide(iwall12s);
    player.collide(iwall13s);
    player.collide(iwall14s);
    player.collide(iwall15s);
    player.collide(iwall16s);
    player.collide(iwall17s);
   
    player.collide(ifwall1s);
    player.collide(ifwall2s); 
    player.collide(ifwall3s);
    player.collide(ifwall4s);

    mb1s.bounceOff(iwall5s)
    mb1s.bounceOff(wall3s)

    mb2s.bounceOff(wall2s)
    mb2s.bounceOff(wall4s)

  }

function visible2()
{
    if(gamestate=="slevel2")
    {
      v2=true

      if(player.isTouching(coin1s))
   {
     pc.play();  
    coin1s.destroy()
    score=score+100
   }
     
   if(player.isTouching(coin2s))
   {
    pc.play();
    coin2s.destroy()
    score=score+10
   }  
   if(player.isTouching(coin3s))
   {
    pc.play();
    coin3s.destroy()
    score=score+100
   }  
   if(player.isTouching(coin4s))
   {
    pc.play();
    coin4s.destroy()
    score=score+10
   }
   if(player.isTouching(coin5s))
   {
     pc.play();  
    coin5s.destroy()
    score=score+100
   }
     
   if(player.isTouching(coin6s))
   {
    pc.play();
    coin6s.destroy()
    score=score+10
   }  
   if(player.isTouching(coin7s))
   {
    pc.play();
    coin7s.destroy()
    score=score+10
   }  
   if(player.isTouching(coin8s))
   {
    pc.play();
    coin8s.destroy()
    score=score+10
   }
   if(player.isTouching(coin9s))
   {
    pc.play();
    coin9s.destroy()
    score=score+10
   }


      if(cv=="c")
      {
        cv="d"
        mb1s.velocityX=6
        mb2s.velocityY=6
      }

     if(player.isTouching(mb1s)||player.isTouching(mb2s))
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
         player.y=490
       }

    }
    else
    {
      v2=false
    }
    wall1s.visible=v2
    wall2s.visible=v2
    wall3s.visible=v2
    wall4s.visible=v2
   iwall1s.visible=v2
   iwall2s.visible=v2
   iwall3s.visible=v2
   iwall4s.visible=v2
   iwall5s.visible=v2
   iwall6s.visible=v2
   iwall7s.visible=v2
   iwall8s.visible=v2
   iwall9s.visible=v2
   iwall10s.visible=v2
   iwall11s.visible=v2
   iwall12s.visible=v2
   iwall13s.visible=v2
   iwall14s.visible=v2
   iwall15s.visible=v2
   iwall16s.visible=v2
   iwall17s.visible=v2
   ifwall1s.visible=v2
   ifwall2s.visible=v2
   ifwall3s.visible=v2
   ifwall4s.visible=v2
   
   coin1s.visible=v2
   coin2s.visible=v2
   coin3s.visible=v2
   coin4s.visible=v2
   coin5s.visible=v2
   coin6s.visible=v2
   coin7s.visible=v2
   coin8s.visible=v2
   coin9s.visible=v2

   mb1s.visible=v2
   mb2s.visible=v2
   fl2.visible=v2
}