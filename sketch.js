var cat, cat1, catWalking, cat4 ;
var mouse, mouse1, mouseWalking, mouse4 ;
var backgroundIMG ;
var tom, jerry ;

function preload() {
    cat1 =loadAnimation("images/cat1.png")
    catWalking =loadAnimation("images/cat2.png", "images/cat3.png")
    cat4 =loadAnimation("images/cat4.png")
    mouse1 =loadAnimation("images/mouse1.png")
    mouseWalking =loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouse4= loadAnimation("images/mouse4.png")
    backgroundIMG= loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
     tom = createSprite(800,500,100,100)
     jerry = createSprite(200,500,100,100)
     tom.addAnimation("standingTom",cat1)
     tom.addAnimation("walkingTom",catWalking)
     tom.addAnimation("sittingTom",cat4)
     tom.scale = 0.2;
     jerry.addAnimation("eatingJerry",mouse1)
     jerry.addAnimation("walkingJerry",mouseWalking)
     jerry.addAnimation("sittingJerry",mouse4)
     jerry.scale = 0.2 ;

}

function draw() {

    background(backgroundIMG);
     if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
         tom.velocityX = 0 ;
         tom.changeAnimation("sittingTom",cat4)
         jerry.changeAnimation("sittingJerry",mouse4)
         tom.x = 300;
     }

    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARROW) {
      tom.velocityX = -5 ;
      tom.changeAnimation("walkingTom",catWalking)
      jerry.changeAnimation("walkingJerry",mouseWalking)
  }

}
