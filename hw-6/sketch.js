//Define global variables
let bgColor; //background bgColor
let centerX, centerY;
let circle; {}
circle.pos1x = 56;
circle.pos1y = 46;
circle.pos2x = 55;
circle.pos2y = 55;
let multMax = .05;
let greenFill = 20;
var fr = 10

function setup() {

    createCanvas(windowWidth, 800);
    // createCanvas(windowWidth, windowHeight);
    bgColor = color(255, 51, 153);
    //set background
    background(bgColor);
    //set frameRate
    frameRate(fr)


    // Set initial position
   circle.pos1x = circle.pos1x + 2;
   circle.pos1y = circle.pos1y - 2;
   circle.pos2x = random(width);
   circle.pos2y = random(height);
}


function draw() {
  centerX = width * 0.5;
    centerY = height * 0.5;





  }
