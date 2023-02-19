import { render, screen } from "@testing-library/react";
import { add, multiply } from "./Codewars";

describe("add", function () {
  test("should return the sum", () => {
    expect(add(1, -1)).toBe(0);
    expect(add(1, 0)).toBe(1);
    expect(add(1, 1)).toBe(2);
  });
});

describe("multiply", function () {
  test("should return the product", () => {
    expect(multiply(1, -1)).toBe(-1);
    expect(multiply(1, 0)).toBe(0);
    expect(multiply(1, 2)).toBe(2);
  });
});
