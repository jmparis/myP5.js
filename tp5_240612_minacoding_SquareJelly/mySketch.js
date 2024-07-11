
function setup() {
  t = 0;
}


function  draw  () {

  t++;
  createCanvas(W=720,W);
  background( 0, 9 );
  noStroke();
  N=noise;

  for(y=0 ; y<W ; y+=29 ) {
      for( x=0 ; x<W ; x+=29 ) {

      fill( N(x,y,t/W)*W%255, N(x,y,t/W+4)*W%255, N(x,y,t/W+8)*W%255);
      if  ( N( x, y, t/W, 9 ) > 0.5 ) {
        square( x, y, 25 );
      }
      
      //filter(BLUR);
      //filter(POSTERIZE);
    }
  }
}
