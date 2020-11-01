var mr,fr
function setup() {
  createCanvas(800,400);
 fr= createSprite(400, 200, 50, 100);
 mr= createSprite(200,250,80,50)
 fr.shapeColor="blue"
 mr.shapeColor="yellow"
 mr.velocityX=3
 fr.velocityX=-3
}

function draw() {
  background(255,255,255);
  //mr.x=World.mouseX
  //mr.y=World.mouseY  
  if(mr.x-fr.x< mr.width/2+fr.width/2 &&
    fr.x-mr.x< mr.width/2+fr.width/2&&
    mr.y-fr.y< mr.height/2+fr.height/2 &&
      fr.y-mr.y< mr.height/2+fr.height/2) {
        fr.shapeColor="green"
        mr.shapeColor="green"    
      }
      else{fr.shapeColor="blue"
      mr.shapeColor="blue"}
      if(mr.x-fr.x< mr.width/2+fr.width/2 &&
        fr.x-mr.x< mr.width/2+fr.width/2) {
          mr.velocityX=mr.velocityX*(-1)
          fr.velocityX=fr.velocityX*(-1)
        }
  drawSprites();
}