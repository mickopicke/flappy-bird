var bird;
var pipes = [];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  resetSketch();
}

function draw() {

    frameRate(60);
    background(255);

    if (frameCount % 75 == 0) {
        pipes.push(new Pipe());
    }

    for (var pipe of pipes) {
        pipe.show();
        pipe.update();

          if (bird.touches(pipe) || bird.y >= height) {
              resetSketch();
              console.log("GAME OVER");
        }

    }
      bird.show();
      bird.update();
}


function keyPressed() {
    if (key == ' ') {
        bird.fly();
    }
}

function resetSketch() {
  pipes = [];
  bird = new Bird();
}
