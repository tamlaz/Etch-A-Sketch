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

const colorPicker = document.querySelector('.color-picker');
colorPicker.addEventListener('input', e => {
    draw();
})

function draw () {
    let gridItems = document.querySelectorAll('.gridcell')
    gridItems.forEach( gridItem => {
        container.addEventListener('click', e => {
            gridItem.addEventListener('mouseover', e => {
                gridItem.style.backgroundColor = colorPicker.value;
            });
        });
    });
}

makeGrid(16, 16);
// container.addEventListener('click', e => {
//     draw();
// });

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
        container.addEventListener('click', e => {
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
        let bgColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.addEventListener('click', e => {
            gridItem.addEventListener('mouseover', e => {
                gridItem.style.background = bgColor;
            });
        });
    });
}

const rainbowGrid = document.querySelector('.rainbow');
rainbowGrid.addEventListener('click', e => {
    randomColor();
});

function shadingGrid() {
    let gridItems = document.querySelectorAll('.gridcell')
    gridItems.forEach( gridItem => {
        container.addEventListener('click', e => {
            gridItem.addEventListener('mouseover', e => {
                const currentOpacity = Number(gridItem.style.opacity);
                    gridItem.style.opacity = Number(currentOpacity) - 0.1;
            });
        });
    });
}

const gridShader = document.querySelector('.shader');
gridShader.addEventListener('click', e => {
    shadingGrid();
});