let size    =  4;    // Squares are 'size' pixels sided
let factor  =  0.01;

function setup() {
  createCanvas( 600, 600 );
  noStroke();
}


function draw() {
  background( 220 );
  
  // random
  for (i = 0; i <= width; i += size ) {
    for (j = 0; j <= height ; j += size ) {
      fill( random() * 255, random() * 255, random() * 255 );
      square( i, j, size );
    }
  }

  noloop();
}
