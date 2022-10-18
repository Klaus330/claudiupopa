
let grid;
let resolution = 10;
var cols = Math.floor(window.innerWidth / resolution);
var rows = Math.ceil(window.innerHeight / resolution);
let startGame = false;

function make2DArray(cols, rows)
{
    let array = new Array(cols)

    for (let i = 0; i < array.length; i++) {
       array[i] = new Array(rows);
    }

    return array
}


function generateRandomGrid()
{
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}


function drawGrid(grid)
{
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            
            if(grid[i][j] === 1)
            {
                fill(145, 207, 225);
            }else{
                fill(46, 52, 64)
            }

            noStroke();

            rect(x, y, resolution, resolution);
        }
    }
}

function setup()
{
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('game-of-life')
}

function computeNextGeneration(grid, next)
{
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let neighbours = countNeighbours(grid, i, j)
            let state = grid[i][j];
            
            if(state === 0 && neighbours === 3)
            {
                next[i][j] = 1;
            }else if(state === 1 && (neighbours < 2 || neighbours > 3))
            {
                next[i][j] = 0;
            }else{
                next[i][j] = state;
            }
        }
    }

    return next
}

function countNeighbours(grid, x, y)
{
    let sum = 0;

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
             col = (x + i + cols) % cols;
             row = (y + j + rows) % rows;

            sum += grid[col][row]
        }
    }

    sum -= grid[x][y]

    return sum
}

function draw()
{
    if(!startGame)
    {
        return;
    }

    frameRate(24);
    smooth();
    background(46, 52, 64)
    drawGrid(grid)

    let next = make2DArray(cols, rows)
    next = computeNextGeneration(grid, next)
    grid = next
}

document.addEventListener('startgameoflife', () => { 
    document.getElementById('overlay').classList.remove('hidden')
    grid = make2DArray(cols, rows)
    generateRandomGrid()

    startGame = true;
})

document.addEventListener('stopgameoflife', () => { 
    document.getElementById('overlay').classList.add('hidden')
    startGame = false;
    background(46, 52, 64)
})

document.addEventListener('wheel', (e) => {

    if(!startGame || (resolution <= 8 && Math.sign(e.deltaY) > 0))
    {
        return;
    }
    
    console.log(resolution)
    console.log(Math.sign(e.deltaY));

    resolution = resolution - Math.sign(e.deltaY);
    
    cols = Math.floor(window.innerWidth / resolution);
    rows = Math.ceil(window.innerHeight / resolution);

    grid = make2DArray(cols, rows)
    generateRandomGrid()
})