function level4()
{
    wall1f=createSprite(40,320,40,460);
    wall2f=createSprite(490,80,940,40);
    wall3f=createSprite(940,320,40,460);
    wall4f=createSprite(490,560,940,40);
  
    iwall1f=createSprite(800,320,160,40);
    iwall2f=createSprite(710,320,20,360);

    iwall3f=createSprite(120,250,120,40);
    iwall4f=createSprite(120,370,120,40);
    iwall5f=createSprite(170,350,40,60);
    iwall6f=createSprite(170,270,40,60);

    coin1f=createSprite(110,170,20,20)
    coin2f=createSprite(110,490,20,20)
    coin3f=createSprite(870,170,20,20)
    coin4f=createSprite(870,490,20,20)
    coin5f=createSprite(450,290,20,20)
    coin6f=createSprite(550,290,20,20)
    coin7f=createSprite(550,390,20,20)
    coin8f=createSprite(450,370,20,20)
    coin9f=createSprite(750,270,20,20)
    

    b1=createSprite(490,340,40,440);
    b2=createSprite(490,320,430,40);
    
    mb1=createSprite(490,320,40,430);
    mb2=createSprite(490,320,430,40);
    mb3=createSprite(810,190,20,210);
    mb4=createSprite(810,190,210,20);

    //enemy at starting
    e1f=createSprite(210,170,20,20)
    e2f=createSprite(290,270,20,20)
    e3f=createSprite(290,370,20,20)
    e4f=createSprite(210,490,20,20)
    
    //enemy at ending
    e5f=createSprite(670,170,20,20)
    e6f=createSprite(750,170,20,20)
    e7f=createSprite(890,270,20,20)
    e8f=createSprite(890,390,20,20)
    e9f=createSprite(750,490,20,20)

    fl4=createSprite(670,490,20,20)
    fl4.addImage(fin)

    nlbutton4= createSprite(490,290,140,60);
    nlbutton4.addImage(nb)
    nlbutton4.visible=false

   wall1f.shapeColor=c2
   wall2f.shapeColor=c2
   wall3f.shapeColor=c2
   wall4f.shapeColor=c2
   iwall1f.shapeColor=c2
   iwall2f.shapeColor=c2
   iwall3f.shapeColor=c2
   iwall4f.shapeColor=c2
   iwall5f.shapeColor=c2
   iwall6f.shapeColor=c2
   b1.shapeColor=c3
   b2.shapeColor=c3
   mb1.shapeColor=c2
   mb2.shapeColor=c2
   mb3.shapeColor=c2
   mb4.shapeColor=c2
   e1f.shapeColor=c3
   e2f.shapeColor=c3
   e3f.shapeColor=c3
   e4f.shapeColor=c3
   e5f.shapeColor=c3
   e6f.shapeColor=c3
   e7f.shapeColor=c3
   e8f.shapeColor=c3
   e9f.shapeColor=c3

  coin1f.shapeColor=c4
  coin2f.shapeColor=c4
  coin3f.shapeColor=c4
  coin4f.shapeColor=c4
  coin5f.shapeColor=c4
  coin6f.shapeColor=c4
  coin7f.shapeColor=c4
  coin8f.shapeColor=c4
  coin9f.shapeColor=c4

}
function visible4()
{
    if(gamestate=="slevel4")
    {
       v4=true;

       if(player.isTouching(coin1f))
      {
        pc.play();  
       coin1f.destroy()
       score=score+10
      }
        
      if(player.isTouching(coin2f))
      {
       pc.play();
       coin2f.destroy()
       score=score+10
      }  
      if(player.isTouching(coin3f))
      {
       pc.play();
       coin3f.destroy()
       score=score+10
      }  
      if(player.isTouching(coin4f))
      {
       pc.play();
       coin4f.destroy()
       score=score+10
      }
      if(player.isTouching(coin5f))
      {
        pc.play();  
       coin5f.destroy()
       score=score+10
      }
        
      if(player.isTouching(coin6f))
      {
       pc.play();
       coin6f.destroy()
       score=score+10
      }  
      if(player.isTouching(coin7f))
      {
       pc.play();
       coin7f.destroy()
       score=score+10
      }  
      if(player.isTouching(coin8f))
      {
       pc.play();
       coin8f.destroy()
       score=score+10
      }
      if(player.isTouching(coin9f))
      {
       pc.play();
       coin9f.destroy()
       score=score+10
      }


      mb1.rotation=mb1.rotation+2
      mb2.rotation=mb2.rotation+2
      mb3.rotation=mb3.rotation+5
      mb4.rotation=mb4.rotation+5

      if(cv=="c")
      {
        cv="d"
        e1f.velocityY=5
        e2f.velocityY=-10
        e3f.velocityY=10
        e4f.velocityY=-5
        e5f.velocityY=7
        e6f.velocityY=5
        e7f.velocityX=-5
        e8f.velocityX=-5
        e9f.velocityY=10
      }

 if(player.isTouching(e1f)||player.isTouching(e2f)||player.isTouching(e3f)||
       player.isTouching(e4f)||player.isTouching(e5f)||player.isTouching(e6f)||
       player.isTouching(e7f)||player.isTouching(e8f)|| player.isTouching(e9f)||
        player.isTouching(b1)||player.isTouching(b2))
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
    else
    {
        v4=false;
    }
    wall1f.visible=v4
    wall2f.visible=v4
    wall3f.visible=v4
    wall4f.visible=v4
   
    iwall1f.visible=v4
   iwall2f.visible=v4
   iwall3f.visible=v4
   iwall4f.visible=v4
   iwall5f.visible=v4
   iwall6f.visible=v4

   b1.visible=v4
   b2.visible=v4

  mb1.visible=v4
  mb2.visible=v4
  mb3.visible=v4
  mb4.visible=v4
  
  e1f.visible=v4
  e2f.visible=v4
  e3f.visible=v4
  e4f.visible=v4
  e5f.visible=v4
  e6f.visible=v4
  e7f.visible=v4
  e8f.visible=v4
  e9f.visible=v4
  fl4.visible=v4

coin1f.visible=v4
coin2f.visible=v4
coin3f.visible=v4
coin4f.visible=v4
coin5f.visible=v4
coin6f.visible=v4
coin7f.visible=v4
coin8f.visible=v4
coin9f.visible=v4

}

function level4collide()
{

    e1f.bounceOff(wall4f)
    e1f.bounceOff(wall2f)

    e1f.bounce(e4f)

    e2f.bounceOff(wall2f)
    e2f.bounceOff(b2)

    e3f.bounceOff(wall4f)
    e3f.bounceOff(b2)

    e4f.bounceOff(wall4f)
    e4f.bounceOff(wall2f)
    
    e5f.bounceOff(wall2f)
    e5f.bounceOff(b2)
    
    e6f.bounceOff(iwall1f)
    e6f.bounceOff(wall2f)

    e7f.bounceOff(wall3f)
    e7f.bounceOff(iwall2f)

    e8f.bounceOff(iwall2f)
    e8f.bounceOff(wall3f)
    e8f.bounceOff(e9f)

    e9f.bounceOff(iwall1f)
    e9f.bounceOff(wall4f)

  player.collide(wall1f);
  player.collide(wall2f);
  player.collide(wall3f);
  player.collide(wall4f);
  
  player.collide(iwall1f);
  player.collide(iwall2f);
  player.collide(iwall3f);
  player.collide(iwall4f);
  player.collide(iwall5f);
  player.collide(iwall6f);

  player.collide(mb1)
  player.collide(mb2)
  player.collide(mb3)
  player.collide(mb4)

}