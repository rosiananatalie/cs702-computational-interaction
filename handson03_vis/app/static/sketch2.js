// sketch2.js


// dat.GUI code: https://github.com/dataarts/dat.gui
var obj = {
        message: 'Hello world',
        // displayOutline: false,
        //
        // maxSize: 6.0,
        // speed: 5,
        //
        // height: 10,
        // noiseStrength: 10.2,
        // growthSpeed: 0.2,
        //
        // type: 'three',
        //
        // explode: function () {
        //   alert('Bang!');
        // },

        attr0: 10,
        attr1: 20,
        attr2: 30,
        attr3: 50,

        color0: "#ffae23", // CSS string
        color1: [ 0, 128, 255 ], // RGB array
        color2: [ 0, 128, 255, 120 ], // RGB with alpha
        color3: "#000000"
    };

var gui = new dat.gui.GUI();

gui.remember(obj);

    // gui.add(obj, 'message');
    // gui.add(obj, 'displayOutline');
    // gui.add(obj, 'explode');
    //
function updateParagraph (newText) {
    const p = document.getElementById('paragraph-1');
    p.innerText = newText
}

function updateHeight (val) {
    const elements = document.getElementsByClassName('paragraph-class')

    for(let elem of elements) {
        elem.style.fontSize = val + "px";
    }
}

function updateColor (val) {
    const elements = document.getElementsByClassName('paragraph-class')

    for(let elem of elements) {
        console.log(elem);
        console.log(val);
        elem.style.color = val;
    }
}


gui.add(obj, 'attr0').min(0).max(100).step(1);
gui.add(obj, 'attr1').min(0).max(100).step(1);
gui.add(obj, 'attr2').min(0).max(100).step(1);
gui.add(obj, 'attr3').min(0).max(100).step(1).onChange(updateHeight);
gui.add(obj, 'message').onChange(updateParagraph).listen();


gui.addColor(obj, 'color0');
gui.addColor(obj, 'color1');
gui.addColor(obj, 'color2');
gui.addColor(obj, 'color3').onChange(updateColor);


// p5.js code
function setup() {
    const canvasWidth = 400;
    const canvasHeight = 300;

    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-container');

}

function draw() {
    clear();
    stroke(0);
    fill(obj.color0);
    circle(50, 200, obj.attr0);

    fill(obj.color1);
    circle(150, 200, obj.attr1);

    fill(obj.color2)
    circle(250, 200, obj.attr2);
}