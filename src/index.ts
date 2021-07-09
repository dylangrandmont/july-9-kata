export class Cell {
    alive: boolean;
    neighbors: number;

    constructor(alive: boolean, neighbors: number) {
        this.alive = alive
        this.neighbors = neighbors
    }

    step() {
        if (this.neighbors < 2) {
            this.alive = false
        }
        if (this.neighbors === 3) {
            this.alive = true
        }
        if (this.neighbors > 3) {
            this.alive = false
        }
    }
}

export class CellGrid {
    grid: boolean[][];

    constructor(grid: boolean[][]) {
        this.grid = grid;
    }
}
//Grid:
// which cell on which position
// takes grid, steps through

//make simple board, populate, make expected state of board