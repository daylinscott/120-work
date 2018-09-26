// I am declaring the function setup
function setup() {

  // Creating 900x900 canvas
  createCanvas ( 900, 900 );

  //Color background pink
  background( 'pink' );
}

// Declare draw function
function draw() {
  fill( 'yellow' )
  ellipse( 450, 300, 400, 400 )

  //Creates yellow circle for skull

  fill('blue')
  ellipse( 450, 200, 150, 150 )

  //Creates blue circle for colored part of eye

  fill('black')
  ellipse( 450, 200, 75, 75 )

  //Creates black circle for pupil

  fill('white')
  ellipse( 425, 175, 50, 50 )

  //Creates glare on eyeball

  fill('red')
  rect(340, 325, 225, 100 );

  //Creates rectangle for mouth

  fill('yellow')
  ellipse( 450, 530, 75, 75 )

  //Creates ellipse for neck

  fill('yellow')
  ellipse( 450, 600, 100, 100 )

  //Creates ellipse continuing neck

  fill('yellow')
  ellipse( 450, 800, 300, 300 )

  //Creates ellipse for body



}
