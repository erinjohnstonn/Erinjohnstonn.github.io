var img;
var month

function setup() {
	createCanvas(windowWidth, windowHeight);
	img = loadImage("assets/tree.png");
	month = month();

	// Comment out and write month = 5; to check what it will look like
	console.log(month);
}

function draw() {
	background(0);
	image(img, 0, 0);
}

	if (month < 12 && month >= 3 ){
                // if month is fall

		if(month < 12 && month >= 9) {
			fill ('red');

	} else if( < 6 && month >= 3 ) {
		 fill ('#fae');

	 } else if ( < 8 && month >= 6  ) {
		 fill ('rgb(0,255,0)');
		}

		ellipse(600, 400, 60, 60);
	  ellipse(300, 500, 60, 60);
	  ellipse(210, 200, 60, 60);
	  ellipse(600, 200, 60, 60);
	  ellipse(450, 110, 60, 60);
	  ellipse(470, 150, 60, 60);
	  ellipse(480, 200, 60, 60);
	  ellipse(490, 250, 60, 60);
	  ellipse(500, 300, 60, 60);
	  ellipse(500, 100, 60, 60);
		}

}
