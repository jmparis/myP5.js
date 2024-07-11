let size    =  4;    // Squares are 'size' pixels sided
let factor  =  0.01;

function setup() {
  createCanvas( 600, 600 );
  noStroke();
}


function draw() {
  background( 220 );
  
  // Perlin noise
  for (i = 0; i <= width; i += size ) {
    for (j = 0; j <= height ; j += size ) {
      fill(
        noise( (i +  50) * factor, (j +  50) * factor ) * 255,
        noise( (i + 100) * factor, (j + 100) * factor ) * 255,
        noise(  i        * factor,  j        * factor ) * 255
      );
      
      square( i, j, size );
    }
  }


  noloop();
}
