function level5()
{
    wall1fe=createSprite(40,320,40,460);
    wall2fe=createSprite(490,80,940,40);
    wall3fe=createSprite(940,320,40,460);
    wall4fe=createSprite(490,560,940,40);

    d1=createSprite(470,340,20,440)

    coin1fe=createSprite(110,170,20,20)
    coin2fe=createSprite(110,510,20,20)
    coin3fe=createSprite(870,170,20,20)
    coin4fe=createSprite(870,510,20,20)
    coin5fe=createSprite(450,290,20,20)
    coin6fe=createSprite(550,290,20,20)
    coin7fe=createSprite(550,390,20,20)
    coin8fe=createSprite(450,370,20,20)
    coin9fe=createSprite(750,270,20,20)

    iwall1fe=createSprite(490,490,660,20);
    iwall2fe=createSprite(490,430,700,20);
    iwall3fe=createSprite(490,350,740,20);
    iwall4fe=createSprite(490,270,780,20);
    iwall5fe=createSprite(490,190,820,20);
    
    wall1fe.shapeColor=c2
    wall2fe.shapeColor=c2
    wall3fe.shapeColor=c2
    wall4fe.shapeColor=c2

    iwall1fe.shapeColor=c3
    iwall2fe.shapeColor=c3
    iwall3fe.shapeColor=c3
    iwall4fe.shapeColor=c3
    iwall5fe.shapeColor=c3

  coin1fe.shapeColor=c4
  coin2fe.shapeColor=c4
  coin3fe.shapeColor=c4
  coin4fe.shapeColor=c4
  coin5fe.shapeColor=c4
  coin6fe.shapeColor=c4
  coin7fe.shapeColor=c4
  coin8fe.shapeColor=c4
  coin9fe.shapeColor=c4

    d1.shapeColor=c2

    fl5=createSprite(600,520,40,40)
    fl5.addImage(fin)

    cpfe=createSprite(430,150,20,20)
    cpfe.addImage(chp)
    cpfe.scale=2

    xfe=90
    yfe=530

    cpfec="c"
  
}
function visible5()
{
    if(gamestate=="slevel5")
    {
        v5=true

     
        if(player.isTouching(coin1fe))
        {
          pc.play();  
         coin1fe.destroy()
         score=score+50
        }
          
        if(player.isTouching(coin2fe))
        {
         pc.play();
         coin2fe.destroy()
         score=score+50
        }  
        if(player.isTouching(coin3fe))
        {
         pc.play();
         coin3fe.destroy()
         score=score+50
        }  
        if(player.isTouching(coin4fe))
        {
         pc.play();
         coin4fe.destroy()
         score=score+50
        }
        if(player.isTouching(coin5fe))
        {
          pc.play();  
         coin5fe.destroy()
         score=score+50
        }
          
        if(player.isTouching(coin6fe))
        {
         pc.play();
         coin6fe.destroy()
         score=score+50
        }  
        if(player.isTouching(coin7fe))
        {
         pc.play();
         coin7fe.destroy()
         score=score+50
        }  
        if(player.isTouching(coin8fe))
        {
         pc.play();
         coin8fe.destroy()
         score=score+50
        }
        if(player.isTouching(coin9fe))
        {
         pc.play();
         coin9fe.destroy()
         score=score+50
        }
        if(player.isTouching(cpfe))
        {
        cpfec="d"
        }
        if(cpfec=="d")
        {  
          xfe=cpfe.x
          yfe=cpfe.y
        }

  if(cv=="c")
    {
      cv="d"
     
     iwall1fe.velocityX=-50
     iwall2fe.velocityX=40
     iwall3fe.velocityX=-30 
     iwall4fe.velocityX=20
     iwall5fe.velocityX=-5
    }

    if(player.isTouching(iwall1fe)||player.isTouching(iwall2fe)||player.isTouching(iwall3fe)||
    player.isTouching(iwall4fe)||player.isTouching(iwall5fe))
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
       player.x=xfe
       player.y=yfe
     }

    }
     else
     {
     v5=false
     }

     wall1fe.visible=v5
     wall2fe.visible=v5
     wall3fe.visible=v5
     wall4fe.visible=v5
    iwall1fe.visible=v5
    iwall2fe.visible=v5
    iwall3fe.visible=v5
    iwall4fe.visible=v5
    iwall5fe.visible=v5
    d1.visible=v5

    fl5.visible=v5

coin1fe.visible=v5
coin2fe.visible=v5
coin3fe.visible=v5
coin4fe.visible=v5
coin5fe.visible=v5
coin6fe.visible=v5
coin7fe.visible=v5
coin8fe.visible=v5
coin9fe.visible=v5
cpfe.visible=v5

}
function level5collide()
{
    player.collide(wall1fe)
    player.collide(wall2fe)
    player.collide(wall3fe)
    player.collide(wall4fe)
    player.collide(d1)

    iwall1fe.bounceOff(wall1fe)
    iwall1fe.bounceOff(wall3fe)

    iwall2fe.bounceOff(wall1fe)
    iwall2fe.bounceOff(wall3fe)

    iwall3fe.bounceOff(wall1fe)
    iwall3fe.bounceOff(wall3fe)

    iwall4fe.bounceOff(wall1fe)
    iwall4fe.bounceOff(wall3fe)

    iwall5fe.bounceOff(wall1fe)
    iwall5fe.bounceOff(wall3fe)
}