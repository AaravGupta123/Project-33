
var snowman,hailstoneImg;
var ball1;



function preload(){
  snowBg = loadImage("snow1.jpg");
  hailstoneImg = loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(snowBg); 
  if(frameCount%100 === 0){
    var snowfall = createSprite(random(30,780),-20,50,50);
    snowfall.velocityY = 5;
    snowfall.addImage("hailstone",hailstoneImg);
    snowfall.scale = 0.15;
  }
  

   
  drawSprites();
}