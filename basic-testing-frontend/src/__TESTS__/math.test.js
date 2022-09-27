import { it, expect } from "vitest";
import { add } from "../math";

it("should summarize all number values in an array", () => {
  const result = add([1, 2, 3]);

  expect(result).toBe(6);
});

it.todo("should throw an error if supplied values is not an array");
it.todo("should accept only array of number");
it.todo("should throw if supplied array is not array of numbers");
it.todo("should return a number");
