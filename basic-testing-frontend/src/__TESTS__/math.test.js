import { it, expect } from "vitest";
import { add } from "../math";

it("should summarize all number values in an array", () => {
  /// Arrange
  const values = [1, 2];

  const sumValues = values.reduce((curr, next) => curr + next, 0);

  /// Act
  const result = add(values);

  /// Assert
  expect(result).toBe(sumValues);
});

it("should yield a NAN if one of the supplied values in not a number", () => {
  const values = [1, "number"];

  const result = add(values);

  expect(result).toBeNaN();
});

it("should return a correct sum if provided array of values can be cast to numbers", () => {
  /// Arrange
  const values = ["1", "2"];

  const sumValues = values.reduce((curr, next) => curr + +next, 0);

  /// Act
  const result = add(values);

  /// Assert
  expect(result).toBe(sumValues);
});
it.todo("should accept only array of number");
it.todo("should throw if supplied array is not array of numbers");
it.todo("should return a number");
