import { render, screen } from "@testing-library/react";
import { add, multiply, removeDuplicates } from "./Codewars";

describe("add", function () {
  it("should return the sum", () => {
    expect(add(1, -1)).toBe(0);
    expect(add(1, 0)).toBe(1);
    expect(add(1, 1)).toBe(2);
  });
});

describe("multiply", function () {
  it("should return the product", () => {
    expect(add(1, -1)).toBe(-1);
    expect(add(1, 0)).toBe(1);
    expect(add(1, 1)).toBe(2);
  });
});
