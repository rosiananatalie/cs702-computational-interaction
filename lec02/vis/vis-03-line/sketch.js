function getRandomInt(min, max) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const x = [0, 50, 100, 150, 200, 250, 300];
const y = x.map(x => getRandomInt(10, 200));

const canvasWidth = 400;
const canvasHeight = 300;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noLoop();
}

function draw() {
  strokeWeight(1);

  for (let i = 1; i < x.length; i++) {
    const x1 = x[i-1];
    const x2 = x[i];
    const y1 = y[i-1];
    const y2 = y[i];

    // https://p5js.org/reference/#/p5/line
    line(x1, y1, x2, y2);
  }

  x.forEach(x => {
    // https://p5js.org/reference/#/p5/textSize
    textSize(8);
    text(x, x + 2, canvasHeight - 30);
  })
}