import { expect } from "chai";

describe("single cell", () => {
  it("live cell with no neighbors dies", () => {
    const cell = new Cell(true);
    cell.step();

    expect(cell.alive).is.false;
  });
});
