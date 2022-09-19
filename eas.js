let cols;
let rows;
let value;
let gridCell;

let output = document.querySelector('#slidervalue');

let slider = document.querySelector('#myRange').addEventListener('input', function() {
    output.textContent =`${this.value} x ${this.value}`;
    rows = parseInt(this.value);
    cols = parseInt(this.value);
    
});

const container = document.querySelector('#container');
function makeGrid (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'gridcell';
    }
}

function deleteGrid () {
    let cell = document.querySelectorAll('.gridcell');
    cell.forEach(cell => {
        container.removeChild(cell)
    });
}

function draw () {
    let gridItems = document.querySelectorAll('.gridcell')
    gridItems.forEach( gridItem => {
        gridItem.addEventListener('mouseover', e => {
            gridItem.style.backgroundColor = "black";
        });
    });
}

makeGrid(16, 16);
draw();

function redrawGrid () {
    let grid = parseInt(prompt('Set the gridsize: ', ''));
    deleteGrid();
    makeGrid(grid, grid);
}

const resizeGrid = document.querySelector('#resetgrid');
resizeGrid.addEventListener('click', e => {
    redrawGrid();
    draw();
});
