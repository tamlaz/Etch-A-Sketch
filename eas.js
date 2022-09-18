let cols;
let rows;
let value;

let output = document.querySelector('#slidervalue');

let slider = document.querySelector('#myRange').oninput = function() {
    value = (this.value - this.min)/(this.max - this.min) * 64;
    output.textContent =`${this.value} x ${this.value}`;
    cols = this.value;
    console.log(cols);
    rows = this.value;
    console.log(rows);
    makeGrid(rows, cols);
    
}

const container = document.querySelector('#container');
const makeGrid = (cols, rows) => {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-cell"
    }
}


