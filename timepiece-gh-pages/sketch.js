var img;
var season;
var y=0;
var springSound;
var summerSound;
var fallSound;
var winterSound;

function preload() {

	winterSound = loadSound('assets/winter.mp3');
	summerSound = loadSound('assets/summer.mp3');
	springSound = loadSound('assets/Bird.mp3');
	// summerSound = loadSound('Bird.mp3');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	img = loadImage("assets/tree.png");
 season = month();

	// Comment out and write season = 5; to check what it will look like
	console.log(season);
}

function draw() {
	background(0);
	image(img, 0, 0);
	if (season == 12||season<3){
		winterSound.play();
		image(img, 0, 0);
		for(var a = 0; a<1000 ; a++) {
			if(a % 2 == 1) { // COPY IF + ELSE IF TO AFFECT EVERY OTHER CIRCLE IN THE LINE
				ellipse(10*a+0, y*10, 5, 5); // x position, y position
			}
			else if(a % 3 == 2) {
				ellipse(10*a, y+50, 5, 5);
			}
			else {
 		ellipse(10*a,y,5,5);
	}
		}
		for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
		ellipse(20*a, y+50, 5, 5); //
	} //
	for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
	ellipse(20*a, y+200, 5, 5); //
} //
for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
ellipse(20*a, y+300, 5, 5); //
} //
for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
ellipse(20*a, y+250, 5, 5); //
} //
for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
ellipse(20*a, y+350, 5, 5); //
} //
for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
ellipse(20*a, y+400, 5, 5); //
} //
for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
ellipse(20*a, y+450, 5, 5); //
} //
for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
ellipse(20*a, y+20, 5, 5); //
} //
for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
ellipse(20*a, y+500, 5, 5); //
} //
for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
ellipse(20*a, y+530, 5, 5); //
} //
for(var a = 0; a<1000 ; a++) { // THESE THREE LINES TO CREATE NEW LINE OF CIRCLES
ellipse(20*a, y+560, 5, 5); //
} //
		for(var a = 0; a<1000 ; a++) {
		ellipse(20*a, y+100, 5, 5);
		}
		for(var a = 0; a<1000 ; a++) {
		ellipse(20*a, y+150, 5, 5);
		}
	}	else if(season < 12 && season >= 9) {
			fill ('red');
			leaves();
		} else if (season < 6 && season >= 3 ) {
		 fill ('#fae');
		 leaves();
		 springSound.play();
	 } else if ( season < 8 && season >= 6  ) {
		 fill ('rgb(0,255,0)');
		 leaves();
		 summerSound.play();
		}
		y=second() * 10;
}

function leaves() {
	image(img, 0, 0);
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
	ellipse(500, 400, 60, 60);
	ellipse(500, 350, 60, 60);
  ellipse(550, 250, 60, 60);
	ellipse(550, 300, 60, 60);
	ellipse(550, 350, 60, 60);
	ellipse(550, 400, 60, 60);
	ellipse(550, 200, 60, 60);
	ellipse(550, 150, 60, 60);
	ellipse(550, 100, 60, 60);
	ellipse(525, 200, 60, 60);
	ellipse(525, 250, 60, 60);
	ellipse(525, 150, 60, 60);
	ellipse(600, 100, 60, 60);
	ellipse(600, 150, 60, 60);
	ellipse(600, 200, 60, 60);
	ellipse(600, 250, 60, 60);
	ellipse(600, 300, 60, 60);
	ellipse(600, 350, 60, 60);
	ellipse(600, 400, 60, 60);
  ellipse(650, 400, 60, 60);
	ellipse(700, 400, 60, 60);
	ellipse(700, 350, 60, 60);
	ellipse(720, 300, 60, 60);
	ellipse(760, 250, 60, 60);
	ellipse(760, 270, 60, 60);
	ellipse(700, 300, 60, 60);
	ellipse(700, 250, 60, 60);
	ellipse(700, 200, 60, 60);
		ellipse(650, 350, 60, 60);
		ellipse(650, 300, 60, 60);
		ellipse(650, 250, 60, 60);
		ellipse(650, 200, 60, 60);
		ellipse(650, 150, 60, 60);
		ellipse(650, 150, 60, 60);
		ellipse(450, 100, 60, 60);
		ellipse(450, 150, 60, 60);
		ellipse(450, 200, 60, 60);
		ellipse(450, 250, 60, 60);
		ellipse(450, 300, 60, 60);
		ellipse(450, 350, 60, 60);
		ellipse(450, 400, 60, 60);
		ellipse(450, 435, 60, 60);
		ellipse(400, 100, 60, 60);
		ellipse(400, 150, 60, 60);
		ellipse(400, 200, 60, 60);
		ellipse(400, 250, 60, 60);
		ellipse(400, 300, 60, 60);
		ellipse(400, 350, 60, 60);
		ellipse(400, 400, 60, 60);
		ellipse(400, 435, 60, 60);
		ellipse(350, 100, 60, 60);
		ellipse(350, 150, 60, 60);
		ellipse(350, 200, 60, 60);
		ellipse(350, 250, 60, 60);
		ellipse(350, 300, 60, 60);
		ellipse(350, 350, 60, 60);
		ellipse(350, 400, 60, 60);
		ellipse(350, 435, 60, 60);
		ellipse(300, 100, 60, 60);
		ellipse(300, 150, 60, 60);
		ellipse(300, 200, 60, 60);
		ellipse(300, 250, 60, 60);
		ellipse(300, 300, 60, 60);
		ellipse(300, 350, 60, 60);
		ellipse(300, 400, 60, 60);
		ellipse(300, 435, 60, 60);
		ellipse(300, 450, 60, 60);
		ellipse(250, 150, 60, 60);
		ellipse(250, 200, 60, 60);
		ellipse(250, 250, 60, 60);
		ellipse(250, 300, 60, 60);
		ellipse(250, 350, 60, 60);
		ellipse(250, 400, 60, 60);
		ellipse(250, 435, 60, 60);
		ellipse(200, 200, 60, 60);
		ellipse(200, 250, 60, 60);
		ellipse(200, 300, 60, 60);
		ellipse(200, 350, 60, 60);
		ellipse(200, 400, 60, 60);
		ellipse(150, 435, 60, 60);
		ellipse(150, 300, 60, 60);
		ellipse(150, 350, 60, 60);
		ellipse(150, 400, 60, 60);
		ellipse(150, 435, 60, 60);
		ellipse(150, 450, 60, 60);
		ellipse(200, 450, 60, 60);
		ellipse(250, 460, 60, 60);
		ellipse(350, 460, 60, 60);
		ellipse(250, 475, 60, 60);
		ellipse(740, 350, 60, 60);
		ellipse(775, 320, 60, 60);
}
