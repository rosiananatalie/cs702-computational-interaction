// sketch.js
let reports = {
       "data":[
          {
             "report":"Report 1",
             "author":"Alice",
             "data":[
                {
                   "design":"A",
                   "purchase":2,
                   "trial":40
                },
                {
                   "design":"B",
                   "purchase":4,
                   "trial":50
                }
             ]
          },
          {
             "report":"Report 2",
             "author":"Bob",
             "data":[
                {
                   "design":"A",
                   "purchase":64,
                   "trial":1280
                },
                {
                   "design":"B",
                   "purchase":128,
                   "trial":1600
                }
             ]
          }
       ]
    };

const canvasWidth = 400;
const canvasHeight = 300;

const groupHeight = 100;
const barWidth = 30;

function preload () {
  // Instead of reading the local `reports` array,
  // https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON#preload
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noLoop()
}

function draw() {
  const dataset = reports.data;
  dataset.forEach((report, reportIdx) => {
      const author = report.author;
      const data = report.data;

      const groupY = reportIdx * groupHeight + 10;

      text(author, 100, groupY + 10);

      data.forEach((d, dataIdx) => {
        console.log(d, dataIdx);

        const dataY = groupY + dataIdx * (barWidth + 5)
        rect(150, dataY, d.purchase, barWidth); // https://p5js.org/reference/#/p5/rect
        text(d.design, 130, dataY + barWidth / 2); // https://p5js.org/reference/#/p5/text
      });
    });
}