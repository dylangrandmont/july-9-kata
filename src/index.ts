export class Cell {
    alive: boolean;
    neighbors: number;

    constructor(alive: boolean, neighbors: number) {
        this.alive = alive
        this.neighbors = neighbors
    }

    step() {
        if (this.neighbors === 0) {
            this.alive = false
        }
        if (this.neighbors === 3) {
            this.alive = true
        }
    }
}