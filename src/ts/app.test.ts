import { sum } from "./app";

describe("test function", () => {
  it("returns sum of a and b", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
