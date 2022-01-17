// sketch.js

const reports = [
  {
    "report": "Report 1",
    "author": "Alice",
    "data": [
        {"design": "A", "purchase": 2, "trial": 40},
        {"design": "B", "purchase": 4, "trial": 50},
    ]
  },
  {
    "report": "Report 2",
    "author": "Bob",
    "data": [
        {"design": "A", "purchase": 64, "trial": 1280},
        {"design": "B", "purchase": 128, "trial": 1600},
    ]
  },
]

const canvasWidth = 400;
const canvasHeight = 300;

const leftMargin = 50;
const bottomMargin = 50

const groupHeight = 100;
const barWidth = 30;

function mouseOver(mx, my, rx, ry, rw, rh) {
  if (
    (mx > rx) &&
    (mx < rx + rw) &&
    (my > ry) &&
    (my < ry + rh)
  ) {
    return true
  } else {
    return false;
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  reports.forEach((report, reportIdx) => {
    const author = report.author;
    const data = report.data;

    const groupY = reportIdx * groupHeight + 10;

    text(author, 100, groupY + groupHeight / 2 - 15);

    data.forEach((d, dataIdx) => {
      const dataX = 150;
      const dataY = groupY + dataIdx * (barWidth + 5)

      // https://p5js.org/learn/interactivity.html
      if (mouseOver(mouseX, mouseY, dataX, dataY, d.purchase, barWidth)) {
        fill(255);
      } else {
        fill(0);
      }

      rect(dataX, dataY, d.purchase, barWidth);

      fill(0);
      text(d.design, 130, dataY + barWidth / 2);
    });

  });
}