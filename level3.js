function level3()
{
    wall1t=createSprite(40,300,40,460);
    wall2t=createSprite(490,60,940,40);
    wall3t=createSprite(940,300,40,460);
    wall4t=createSprite(490,540,940,40);
    
    iwall1t=createSprite(440,450,760,20);
    iwall2t=createSprite(540,370,760,20);
    iwall3t=createSprite(440,290,760,20);
    iwall4t=createSprite(540,190,760,20);
    iwall5t=createSprite(850,140,20,40);

    coin1t=createSprite(90,310,20,20)
    coin2t=createSprite(110,150,20,20)
    coin3t=createSprite(810,330,20,20)
    coin4t=createSprite(490,130,20,20)
    coin5t=createSprite(830,390,20,20)
    coin6t=createSprite(830,290,20,20)
    coin7t=createSprite(210,230,20,20)
    coin8t=createSprite(210,350,20,20)
    coin9t=createSprite(570,130,20,20)


    fl3=createSprite(900,130,40,20);
    fl3.addImage(fin);


    nlbutton3= createSprite(490,290,140,60);
    nlbutton3.addImage(nb)

    nlbutton3.visible=false

    e1t=createSprite(290,490,20,20)
    e2t=createSprite(790,490,20,20)
    e3t=createSprite(290,410,20,20)
    e4t=createSprite(390,410,20,20)
    e5t=createSprite(490,450,20,20)
    e6t=createSprite(590,430,20,20)
    e7t=createSprite(290,410,20,20)
    e8t=createSprite(530,310,20,20)
    e9t=createSprite(590,330,20,20)
    e10t=createSprite(260,310,20,20)
    
    e11t=createSprite(210,110,20,20)
    e12t=createSprite(250,170,20,20)
    e13t=createSprite(290,110,20,20)
    e14t=createSprite(330,170,20,20)
    e15t=createSprite(370,110,20,20)
    e16t=createSprite(410,170,20,20)
    e17t=createSprite(450,110,20,20)
    e18t=createSprite(490,170,20,20)
    e19t=createSprite(530,110,20,20)
    e20t=createSprite(570,170,20,20)
    e21t=createSprite(610,110,20,20)
    e22t=createSprite(650,170,20,20)
    e23t=createSprite(690,110,20,20)
    e24t=createSprite(730,170,20,20)

wall1t.shapeColor=c2
wall2t.shapeColor=c2
wall3t.shapeColor=c2
wall4t.shapeColor=c2
iwall1t.shapeColor=c2
iwall2t.shapeColor=c2
iwall3t.shapeColor=c2
iwall4t.shapeColor=c2
iwall5t.shapeColor=c2

coin1t.shapeColor=c4
coin2t.shapeColor=c4
coin3t.shapeColor=c4
coin4t.shapeColor=c4
coin5t.shapeColor=c4
coin6t.shapeColor=c4
coin7t.shapeColor=c4
coin8t.shapeColor=c4
coin9t.shapeColor=c4

e1t.shapeColor=c3
e2t.shapeColor=c3
e3t.shapeColor=c3
e4t.shapeColor=c3
e5t.shapeColor=c3
e6t.shapeColor=c3
e7t.shapeColor=c3
e8t.shapeColor=c3
e9t.shapeColor=c3
e10t.shapeColor=c3
e11t.shapeColor=c3
e12t.shapeColor=c3
e13t.shapeColor=c3
e14t.shapeColor=c3
e15t.shapeColor=c3
e16t.shapeColor=c3
e17t.shapeColor=c3
e18t.shapeColor=c3
e19t.shapeColor=c3
e20t.shapeColor=c3
e21t.shapeColor=c3
e22t.shapeColor=c3
e23t.shapeColor=c3
e24t.shapeColor=c3
}
 
function level3collide()
{
    player.collide(wall1t);
    player.collide(wall2t);
    player.collide(wall3t);
    player.collide(wall4t);

    player.collide(iwall1t);
    player.collide(iwall2t);
    player.collide(iwall3t);
    player.collide(iwall4t);
    player.collide(iwall5t);

    e1t.bounceOff(wall4t)
    e1t.bounceOff(iwall1t)

    e2t.bounceOff(wall4t)
    e2t.bounceOff(iwall1t)

    e3t.bounceOff(iwall1t)
    e3t.bounceOff(iwall2t)

    e4t.bounceOff(iwall1t)
    e4t.bounceOff(iwall2t)
    
    e5t.bounceOff(iwall1t)
    e5t.bounceOff(iwall2t)
    
    e6t.bounceOff(iwall1t)
    e6t.bounceOff(iwall2t)

    e7t.bounceOff(iwall1t)
    e7t.bounceOff(iwall2t)

    e8t.bounceOff(iwall3t)
    e8t.bounceOff(iwall2t)
    
    e9t.bounceOff(iwall3t)
    e9t.bounceOff(iwall2t)

    e10t.bounceOff(iwall3t)
    e10t.bounceOff(iwall2t)

    e11t.bounceOff(wall2t)
    e11t.bounceOff(iwall4t)

    e12t.bounceOff(wall2t)
    e12t.bounceOff(iwall4t)

    e13t.bounceOff(wall2t)
    e13t.bounceOff(iwall4t)

    e14t.bounceOff(wall2t)
    e14t.bounceOff(iwall4t)
    
    e15t.bounceOff(wall2t)
    e15t.bounceOff(iwall4t)
    
    e16t.bounceOff(wall2t)
    e16t.bounceOff(iwall4t)

    e17t.bounceOff(wall2t)
    e17t.bounceOff(iwall4t)

    e18t.bounceOff(wall2t)
    e18t.bounceOff(iwall4t)

    e19t.bounceOff(wall2t)
    e19t.bounceOff(iwall4t)

    e20t.bounceOff(wall2t)
    e20t.bounceOff(iwall4t)

    e21t.bounceOff(wall2t)
    e21t.bounceOff(iwall4t)
    
    e22t.bounceOff(wall2t)
    e22t.bounceOff(iwall4t)
    
    e23t.bounceOff(wall2t)
    e23t.bounceOff(iwall4t)

    e24t.bounceOff(wall2t)
    e24t.bounceOff(iwall4t)
    
}

function visible3()
{
    if(gamestate=="slevel3")
    {
      v3=true

      if(player.isTouching(coin1t))
      {
        pc.play();  
       coin1t.destroy()
       score=score+30
      }
        
      if(player.isTouching(coin2t))
      {
       pc.play();
       coin2t.destroy()
       score=score+30
      }  
      if(player.isTouching(coin3t))
      {
       pc.play();
       coin3t.destroy()
       score=score+30
      }  
      if(player.isTouching(coin4t))
      {
       pc.play();
       coin4t.destroy()
       score=score+30
      }
      if(player.isTouching(coin5t))
      {
        pc.play();  
       coin5t.destroy()
       score=score+30
      }
        
      if(player.isTouching(coin6t))
      {
       pc.play();
       coin6t.destroy()
       score=score+30
      }  
      if(player.isTouching(coin7t))
      {
       pc.play();
       coin7t.destroy()
       score=score+30
      }  
      if(player.isTouching(coin8t))
      {
       pc.play();
       coin8t.destroy()
       score=score+30
      }
      if(player.isTouching(coin9t))
      {
       pc.play();
       coin9t.destroy()
       score=score+30
      }

      if(cv=="c")
      {
        cv="d"
        e1t.velocityY=1
        e2t.velocityY=1.1
        e3t.velocityY=1.2 
        e4t.velocityY=1
        e5t.velocityY=-1.1
        e6t.velocityY=1.2
        e7t.velocityY=-1
        e8t.velocityY=-1.1
        e9t.velocityY=-1.2
        e10t.velocityY=1
        e11t.velocityY=1
        e12t.velocityY=1.1
        e13t.velocityY=1.2   
        e14t.velocityY=1
        e15t.velocityY=-1.1
        e16t.velocityY=1.2
        e17t.velocityY=-1
        e18t.velocityY=1
        e19t.velocityY=1
        e20t.velocityY=1.1
        e21t.velocityY=1.2    
        e22t.velocityY=1
        e23t.velocityY=-1.1
        e24t.velocityY=1.2
  
         
       }   
      
       if(player.isTouching(e1t)||player.isTouching(e2t)||player.isTouching(e3t)||
       player.isTouching(e4t)||player.isTouching(e5t)||player.isTouching(e6t)||
       player.isTouching(e7t)||player.isTouching(e8t)|| player.isTouching(e9t)||
        player.isTouching(e10t)||player.isTouching(e11t)||player.isTouching(e12t)||
        player.isTouching(e13t)|| player.isTouching(e14t)|| player.isTouching(e15t)|| 
        player.isTouching(e16t)|| player.isTouching(e17t)|| player.isTouching(e18t)|| 
        player.isTouching(e19t)|| player.isTouching(e20t)|| player.isTouching(e21t)|| 
        player.isTouching(e22t)|| player.isTouching(e23t)||player.isTouching(e24t))
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
     v3=false
    }
    wall1t.visible=v3
    wall2t.visible=v3
    wall3t.visible=v3
    wall4t.visible=v3
   iwall1t.visible=v3
   iwall2t.visible=v3
   iwall3t.visible=v3
   iwall4t.visible=v3
   iwall5t.visible=v3

   fl3.visible=v3

  coin1t.visible=v3
  coin2t.visible=v3
  coin3t.visible=v3
  coin4t.visible=v3
  coin5t.visible=v3
  coin6t.visible=v3
  coin7t.visible=v3
  coin8t.visible=v3
  coin9t.visible=v3
   
   e1t.visible=v3
   e2t.visible=v3
   e3t.visible=v3
   e4t.visible=v3
   e5t.visible=v3
   e6t.visible=v3
   e7t.visible=v3
   e8t.visible=v3
   e9t.visible=v3
  e10t.visible=v3
  e11t.visible=v3
  e12t.visible=v3
  e13t.visible=v3
  e14t.visible=v3
  e15t.visible=v3
  e16t.visible=v3
  e17t.visible=v3
  e18t.visible=v3
  e19t.visible=v3
  e20t.visible=v3
  e21t.visible=v3
  e22t.visible=v3
  e23t.visible=v3
  e24t.visible=v3
  
  }