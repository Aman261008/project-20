var cat,catImg,catImg1,catImg2,mouse,mouseImg,mouseImg1,mouseImg2;
var garden,gardenImg;
function preload() {
    //load the images here
   gardenImg=loadImage("images/garden.png");
    catImg=loadImage("images/cat1.png");
mouseImg=loadImage("images/mouse1.png");
catImg1=loadAnimation("images/cat2.png","images/cat3.png");
catImg2=loadImage("images/cat4.png");
mouseImg1=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg2=loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(900,900);
    //create tom and jerry sprites here
garden=createSprite(500,500,1000,1000);
garden.addImage(gardenImg);
garden.scale=1.15;
cat=createSprite(750,800,50,50);
cat.addImage(catImg);
cat.scale=0.1;
mouse=createSprite(250,800,50,50);
mouse.addImage(mouseImg);
mouse.scale=0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(keyCode===LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg1);
        mouse.changeAnimation("mouseTeasing",mouseImg1);

    }
    if(keyCode===RIGHT_ARROW){
        cat.addAnimation("catRunning",catImg1);
        cat.changeAnimation("catRunning",catImg1);
        cat.velocityX=-1;

    }
    if(cat.x-mouse.x<(cat.width-mouse.width/2)){
        cat.addAnimation("catRun",catImg2);
        cat.changeAnimation("catRun",catImg2);
        mouse.addAnimation("mouseSearch",mouseImg2);
        mouse.changeAnimation("mouseSearch",mouseImg2);
        cat.velocityX=0;
    }
        drawSprites()
}
