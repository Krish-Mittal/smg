
function startmenu(){
swall1=createSprite(40,340,40,460);
swall2=createSprite(220,100,400,40);
swall3=createSprite(940,340,40,460);
swall4=createSprite(760,100,400,40);
swall5=createSprite(220,560,400,40);
swall6=createSprite(760,560,400,40);

sudwall1=createSprite(440,140,40,40);
sudwall2=createSprite(470,180,20,40);
sudwall3=createSprite(490,210,20,20);
sudwall4=createSprite(540,140,40,40);
sudwall5=createSprite(510,180,20,40);

sddwall1=createSprite(440,520,40,40);
sddwall2=createSprite(470,480,20,40);
sddwall3=createSprite(490,450,20,20);
sddwall4=createSprite(540,520,40,40);
sddwall5=createSprite(510,480,20,40);

siwall1=createSprite(120,250,120,40);
siwall2=createSprite(120,370,120,40);
siwall3=createSprite(170,350,40,60);
siwall4=createSprite(170,270,40,60);

sifwall1=createSprite(860,250,120,40);
sifwall2=createSprite(860,370,120,40);
sifwall3=createSprite(860,350,40,60);
sifwall4=createSprite(860,270,40,60);

pbbox =createSprite(490,290,140,60);


  swall1.shapeColor=c2;
  swall2.shapeColor=c2;
  swall3.shapeColor=c2;
  swall4.shapeColor=c2;
  swall5.shapeColor=c2;
  swall6.shapeColor=c2;

  siwall1.shapeColor=c2;
  siwall2.shapeColor=c2;
  siwall3.shapeColor=c2;
  siwall4.shapeColor=c2;

  sifwall1.shapeColor=c2;
  sifwall2.shapeColor=c2;
  sifwall3.shapeColor=c2;
  sifwall4.shapeColor=c2;

  sudwall1.shapeColor=c2;
  sudwall2.shapeColor=c2;
  sudwall3.shapeColor=c2;
  sudwall4.shapeColor=c2;
  sudwall5.shapeColor=c2;

  sddwall1.shapeColor=c2;
  sddwall2.shapeColor=c2;
  sddwall3.shapeColor=c2;
  sddwall4.shapeColor=c2;
  sddwall5.shapeColor=c2;

  pbbox.shapeColor="orange"
  pbbox.addImage(pb)
  
}


function visibles()
{
  if(gamestate=="start")
  {
    v0=true
  }
  else
  {
    v0=false
  }
  swall1.visible=v0
  swall2.visible=v0
  swall3.visible=v0
  swall4.visible=v0
  swall5.visible=v0
  swall6.visible=v0 
  sudwall1.visible=v0
  sudwall2.visible=v0
  sudwall3.visible=v0
  sudwall4.visible=v0
  sudwall5.visible=v0
  sddwall1.visible=v0
  sddwall2.visible=v0
  sddwall3.visible=v0
  sddwall4.visible=v0
  sddwall5.visible=v0
  sifwall1.visible=v0
  sifwall2.visible=v0
  sifwall3.visible=v0
  sifwall4.visible=v0
  siwall1.visible=v0
  siwall2.visible=v0
  siwall3.visible=v0
  siwall4.visible=v0
}
