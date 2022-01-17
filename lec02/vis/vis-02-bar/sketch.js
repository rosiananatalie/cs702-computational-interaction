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

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noLoop(); // https://p5js.org/learn/program-flow.html
}

function draw() {
  reports.forEach((report, reportIdx) => {
    const author = report.author;
    const data = report.data;

    const groupY = reportIdx * groupHeight + 10;

    text(author, 100, groupY + groupHeight / 2 - 15);

    data.forEach((d, dataIdx) => {
      console.log(d, dataIdx);

      const dataY = groupY + dataIdx * (barWidth + 5)
      rect(150, dataY, d.purchase, barWidth); // https://p5js.org/reference/#/p5/rect
      text(d.design, 130, dataY + barWidth / 2); // https://p5js.org/reference/#/p5/text
    });

  });
}