export class Cell {
    alive: boolean;
    neighbours: number;

    constructor(alive: boolean) {
        this.alive = alive
        this.neighbours = 0
    }

    step() {
        if (this.neighbours === 0) {
            this.alive = false
        }
    }
}