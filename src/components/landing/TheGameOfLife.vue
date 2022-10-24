<script setup>
    import { onMounted } from 'vue';
    import P5 from 'p5';

    let grid;
    let resolution = 25;
    var cols = Math.floor(window.innerWidth / resolution);
    var rows = Math.ceil(window.innerHeight / resolution);
    let startGame = false;
    let madnessMode = true;
    let colors = ['#BF616A', '#81A2C1', "#EBCB8A", "#B48EAD"]
    let matrixHistory = [];

    let areSame = (A, B) => {
       let i, j;
        for (i = 0; i < cols; i++)
            for (j = 0; j < rows; j++)
                if (A[i][j] != B[i][j])
                    return 0;
        return 1;
    }

    let checkIfDeadend = () => {
        let deadEnd = false;

        matrixHistory.forEach(matrix => {
            if(areSame(grid, matrix)){
                deadEnd = true;
            }
        });

        return deadEnd
    }


    let make2DArray = (cols, rows) => {
        let array = new Array(cols)

        for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
        }

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                array[i][j] = 0;
            }
        }

        return array
    }

   let generateRandomGrid = (grid) => {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = Math.random(2) < 0.5 ? 0 : 1;
            }
        }

        return grid
    }


   let drawGrid = (grid, p5) => {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let x = i * resolution;
                let y = j * resolution;
                
                if(grid[i][j] === 1)
                {
                    let color = madnessMode ? colors[p5.floor(p5.random(4))] : '#81A2C1';
                    p5.fill(color);
                }else{
                    p5.fill('#2E3440')
                }

                p5.noStroke();

                p5.rect(x, y, resolution - 1, resolution - 1);
            }
        }
    }


    let computeNextGeneration = (grid, next) => {
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


    let countNeighbours = (grid, x, y) => {
        let sum = 0;

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let col = (x + i + cols) % cols;
                let row = (y + j + rows) % rows;

                sum += grid[col][row]
            }
        }

        sum -= grid[x][y]

        return sum
    }

    let step = (p5) => {
        drawGrid(grid, p5)

        matrixHistory.unshift()
        matrixHistory.push(grid)

        let next = make2DArray(cols, rows)
        next = computeNextGeneration(grid, next)
        grid = next
    }


    let toggle = () => {
        startGame = !startGame;
    }

    onMounted(() => {
        grid = make2DArray(cols, rows)
        grid = generateRandomGrid(grid)
        startGame = true;
        matrixHistory.push(grid)
        matrixHistory.push(grid)

        document.addEventListener('stopGameOfLife', () => startGame = false)

        const script = (p5) =>{
            p5.setup = _ => {
                let canvas = p5.createCanvas(window.innerWidth-15, window.innerHeight);
                canvas.parent('game')
            }
            p5.draw = _ => {

                if(!startGame)
                {
                    return;
                }

                p5.frameRate(24);
                p5.smooth();
                p5.background("#2E3440")
                
                step(p5)

                if(checkIfDeadend())
                {
                    grid = generateRandomGrid(grid)
                }
            }
        }


        new P5(script)
    })

    defineExpose({
        toggle
    })
</script>


<template>
  <div class="bg-black w-full h-full opacity-80 absolute top-0 left-0" />
  <div
    id="game"
    class="-z-20 w-full h-full"
  />
</template>