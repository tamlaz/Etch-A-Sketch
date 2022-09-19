let cols;
let rows;
let value;
let gridCell;

let output = document.querySelector('#slidervalue');

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
        container.addEventListener('click', e => {
            gridItem.addEventListener('mouseover', e => {
                gridItem.style.backgroundColor = "black";
            });
        });
    });
}

makeGrid(16, 16);
container.addEventListener('click', e => {
    draw();
});

function redrawGrid () {
    let slider = document.querySelector('#myRange');
    let grid = parseInt(slider.value);
    output.textContent =`${slider.value} x ${slider.value}`;
    deleteGrid();
    makeGrid(grid, grid);
}

let slider = document.querySelector('#myRange').addEventListener('input', e => {
    redrawGrid();
    draw();
});

const resizeGrid = document.querySelector('#resetgrid');
resizeGrid.addEventListener('click', e => {
    redrawGrid();
    draw();
});

function eraseGrid() {
    let gridItems = document.querySelectorAll('.gridcell')
    gridItems.forEach( gridItem => {
        container.addEventListener('mouseover', e => {
            gridItem.addEventListener('mouseover', e => {
                gridItem.style.backgroundColor = "white";
            });
        });
    });
}

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', e => {
    eraseGrid();
});



function randomColor () {
    
    let gridItems = document.querySelectorAll('.gridcell')
    gridItems.forEach( gridItem => {
        let x = Math.floor(Math.random() * 255);
        let y = Math.floor(Math.random() * 255);
        let z = Math.floor(Math.random() * 255);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        container.addEventListener('click', e => {
            gridItem.addEventListener('mouseover', e => {
                gridItem.style.backgroundColor = bgColor;
            });
        });
    });
}

const rgbGrid = document.querySelector('.rainbow');
rgbGrid.addEventListener('click', e => {
    randomColor();
});
