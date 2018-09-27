

// I am declaring the function setup
function setup() {
  //set frame rate
  frameRate( 4 );

  // Creating canvas the size of browser
  createCanvas( windowWidth, 900 );

  //Color background blue
  background( 'pink' );
}

// I am declaring my first variable
let angle = 0;

// Declare draw function
function draw() {

  //Sandbox
  push();

  // No cursor
  noCursor()

  //Create element controlled by mouse
  translate( mouseX, mouseY )

  //Create no stroke
  stroke(0);

  //Make the cirlce yellow
  fill('yellow')

  //Create Circle
  ellipse(0, 0, 200, 200);

  //Sandbox
  pop();

  //Sandbox
  push();

  // Element in relation to canvas
  translate( width*0.5, height*0.5 );

  //Angle of rotation
      rotate( radians(angle) );

      //Create rectangle
      rect(0, 0, 100, 100);

      //Fill in rectangle as white
      fill('white');

      //Execute variable
       angle = angle + 45;

       //Sandbox
       pop();
}
