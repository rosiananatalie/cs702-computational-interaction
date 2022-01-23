function main () {
    const slidersH1R = document.getElementsByClassName("slider h1-r");
    Array.from(slidersH1R).forEach(slider => {
        slider.addEventListener('change', onH1RChange);
    });

    const slidersH1SIZE = document.getElementsByClassName("slider h1-size");
    Array.from(slidersH1SIZE).forEach(slider => {
        slider.addEventListener('change', onH1SizeChange)
    })
}

const properties = {
    H1R_MIN: 0,
    H1R_MAX: 100,
    H1SIZE_MIN: 12,
    H1SIZE_MAX: 32
}

function onH1RChange () {
    const newValue = this.value;
    if (this.id === 'h1-r-min') {
        properties.H1R_MIN = newValue <= properties.H1R_MAX ? newValue : properties.H1R_MAX;
        this.value = properties.H1R_MIN;
    } else {
        properties.H1R_MAX = newValue >= properties.H1R_MIN ? newValue : properties.H1R_MIN;
        this.value = properties.H1R_MAX;
    }
    submitH1Form();
}

function onH1SizeChange () {
    const newValue = this.value;
    if (this.id === 'h1-size-min') {
        properties.H1SIZE_MIN = newValue <= properties.H1SIZE_MAX ? newValue : properties.H1SIZE_MAX;
        this.value = properties.H1SIZE_MIN;
    } else {
        properties.H1SIZE_MAX = newValue >= properties.H1SIZE_MIN ? newValue : properties.H1SIZE_MIN;
        this.value = properties.H1SIZE_MAX;
    }
    submitH1Form();
}

function renderSolutions (solutions) {
    const containerElements = document.getElementById('solutions');
    containerElements.innerHTML = '';

    solutions.forEach(sol => {
        const red = parseInt((sol['h1-r'] / 100) * 255, 10)
        const color = "rgb(" + red +", 17, 83)";
        const fontSize = sol['h1-size'] + 'px';
        containerElements.innerHTML += '<h1 style="color:' + color + '; font-size:' + fontSize + ';">H1 Color:' + color + ', Size:' + fontSize + '</h1>';
    })
}

function submitH1Form () {
    // https://stackoverflow.com/a/26501400/684592
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    const form = document.querySelector('form');
    const data = new FormData(form);
    const json = {
        'h1-r-min': parseInt(data.get('h1-r-min'), 10),
        'h1-r-max': parseInt(data.get('h1-r-max'), 10),
        'h1-size-min': parseInt(data.get('h1-size-min'), 10),
        'h1-size-max': parseInt(data.get('h1-size-max'), 10)
    }

    console.log(json);

    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/cp/api', true);
    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function(e) { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const data = JSON.parse(this.response);
            renderSolutions(data['solutions'])
        }
    }
    xhr.send(JSON.stringify(json));
}
