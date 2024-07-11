let offset = 20;

// Set the noise level and scale.
let noiseLevel = 80;
let noiseScale = 0.003;

function setup() {
  createCanvas(600, 600);
  stroke(255);
  strokeWeight(4);

  describe('Some wavy points.');
}

function draw() {
  background( 0 );

  // Iterate from top to bottom.
  for (let y = 0; y < height; y += offset) {
    // Iterate from left to right.
    for (let x = 0; x < width; x += offset) {
      // Scale the input coordinates.
      let nx = noiseScale * x;
      let ny = noiseScale * y;
      let nt = noiseScale * frameCount;

      // Compute the noise value.
      let d = noiseLevel * noise(nx, ny, nt);

      // Draw the point.
      point( x + (d - noiseLevel/2), y + (d - noiseLevel/2) );
    }
  }
}
