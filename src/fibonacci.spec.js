import { fibs, fibsRec } from "./fibonacci.js";

describe.skip("test fibonacci loop code", () => {
  test("fibonacci returning [0] for n = 0", () => {
    expect(fibs(0)).toEqual([0]);
  });
  test("fibonacci returning [0, 1] for 1", () => {
    expect(fibs(1)).toEqual([0, 1]);
  });
  test("fibonacci returning array for 8", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe("test fibonacci recursive code", () => {
  test("fibonacci returning [0] for n = 0", () => {
    expect(fibsRec(0)).toEqual([0]);
  });
  test("fibonacci returning [0, 1] for 1", () => {
    expect(fibsRec(1)).toEqual([0, 1]);
  });
  test("fibonacci returning array for 8", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
