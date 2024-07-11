//
// From video tutorial
// https://www.youtube.com/watch?v=1h6vZl-OuB0
//
let stars           =   [];
let starsNb         =   500;

let starDepthMin    =   1;
let starDepthMax    =   400;

let starDiameterMin =   0;
let starDiameterMax =   10;

let scale_factor    =   100;
let speedSlider;


function setup() {

    createCanvas(windowWidth, windowHeight);
    speedSlider =   createSlider(0.1, 20, 2, 0.1);

    for( let i = 0; i < starsNb ; i++ ) {
        stars[ i ]  =
            createVector(
                random( -width  * scale_factor, width  * scale_factor ),
                random( -height * scale_factor, height * scale_factor ),
                random( starDepthMin, starDepthMax )
            );
    }
}

function draw() {

    background(0);
    translate( width / 2, height / 2 );

    for (let star of stars) {

        let px = star.x / star.z;
        let py = star.y / star.z;

        let d = map(
                    star.z,
                    starDepthMin   , starDepthMax   ,
                    starDiameterMax, starDiameterMin
                );

        let alpha = map(star.z, starDepthMin, starDepthMax, 255, 0 );
        fill( 255, 255 ,255, alpha);
        noStroke();
        circle( px, py, d );

        star.z -= speedSlider.value();

        // Trail
        stroke(alpha);
        strokeWeight(d);
        line(
            px, py,
            //px * 0.9, star.y / star.z+3
            //px * - (1 - 0.9), py * 0.9
            px * (1-speedSlider.value()/100), py * (1-speedSlider.value()/100)
        );

        if (star.z < starDepthMin) {
            // Reinit the star with a random position on background
            star.x  =   random( -width  * scale_factor, width  * scale_factor );
            star.y  =   random( -width  * scale_factor, width  * scale_factor );
            star.z  =   starDepthMax; // endless depth loop
        }
    }

}
