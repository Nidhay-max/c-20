var m,f;


function setup() {
  createCanvas(1200,800);
  f=createSprite(400, 200, 50, 50);
  m=createSprite(800, 400, 100, 10);
  m.shapeColor="green";
  f.shapeColor="green";
}

function draw() {
  background("cyan");  
  m.x=World.mouseX;
  m.y=World.mouseY;  
  
  if(m.x-f.x<m.width/2 + f.width/2 && f.x-m.x<m.width/2 + f.width/2 &&
    m.y-f.y<m.width/2 + f.width/2 && f.y-m.y<m.width/2 + f.width/2){

    m.shapeColor="red";
    f.shapeColor="red";

  }
  else{
    m.shapeColor="green";
    f.shapeColor="green";
  }
  
  
  
  drawSprites();
  


}