var r1
var r2

function setup() {
  createCanvas(400,400);
  
 r1 =  createSprite(200, 200, 50,50);
 r2 = createSprite(100,100,20,20);
}


function draw() {
  background("yellow");  
  drawSprites();
r2.x =  World.mouseX;
r2.y = World.mouseY;
/*algorithm 1 : if 2 rectangle they will change colour
to green and red otherwise they will remain at blue*/
if(r2.x-r1.x<=r2.width/2+r1.width/2 && 
  r1.x-r2.x<=r1.width/2+r2.width/2 && 
  r2.y-r1.y<=r2.height/2+r1.height/2 &&
  r1.y-r2.y<=r1.height/2+r2.height/2){

r1.shapeColor = ("green");
r2.shapeColor = ("red");

  }

  else{

    r1.shapeColor = ("blue");
    r2.shapeColor = ("blue");

  }

}
