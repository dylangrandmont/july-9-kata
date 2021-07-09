import { expect } from "chai";
import { Cell } from '../src'

describe("single cell", () => {
  it("live cell with no neighbors dies", () => {
    const cell = new Cell(true, 0);
    cell.step();

    expect(cell.alive).is.false;
  });

  it("live cell with one neighbor dies", () => {
    const cell = new Cell(true, 1);
    cell.step();

    expect(cell.alive).is.false;
  })

  it("live cell with two neighbors lives", () => {
    const cell = new Cell(true, 2);
    cell.step();

    expect(cell.alive).is.true;
  });

  it("live cell with 3 neighbors lives", () => {
    const cell = new Cell(true, 3);
    cell.step();

    expect(cell.alive).is.true;
  });

  [4,5,6,7,8].forEach(neighbors => {
    it(`live cell with ${neighbors} live neighbors dies`, () => {
    const cell = new Cell(true, neighbors)
    cell.step()
    expect(cell.alive).is.false
    })
  })

  describe("dead cells", () => {
    [0,1,2,4,5,6,7,8].forEach(neighbors => {
      it(`with ${neighbors} neighbors stay dead`, () => {
        const cell = new Cell(false, 3);
        cell.step();
  
        expect(cell.alive).is.true;
      })
    })

    it("with 3 live neighbors becomes alive", () => {
      const cell = new Cell(false, 3);
      cell.step();

      expect(cell.alive).is.true;
    })
  });
});


