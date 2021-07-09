import { expect } from "chai";
import { Cell } from '../src'

describe("single cell", () => {
  it("live cell with no neighbors dies", () => {
    const cell = new Cell(true, 0);
    cell.step();

    expect(cell.alive).is.false;
  });

  it("live cell with two neighbors lives", () => {
    const cell = new Cell(true, 2);
    cell.step();

    expect(cell.alive).is.true;

  });

  describe("dead cells", () => {
    it("with 3 live neighbors becomes alive", () => {
      const cell = new Cell(false, 3);
      cell.step();

      expect(cell.alive).is.true;
    })
  });
});
