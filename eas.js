// let cols = 16;
// let rows = 16;

const container = document.querySelector('#container');
const makeGrid = (rows, cols) => {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-cell"
    }
}

makeGrid(64, 64);