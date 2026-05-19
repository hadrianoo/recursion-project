import { mergeSort } from "./merge-sort.js";

describe("test merge sort", () => {
  test("for []", () => {
    expect(mergeSort([])).toEqual([]);
  });
  test("for [73]", () => {
    expect(mergeSort([73])).toEqual([73]);
  });
  test("for [1, 2, 3, 4, 5]", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  test("for [3, 2, 1, 13, 8, 5, 0, 1]", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });
  test("for [105, 79, 100, 110]", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
