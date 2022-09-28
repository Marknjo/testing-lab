import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it.todo("should convert a number to a string", () => {
  const num = "1";

  const result = transformToNumber(num);

  expect(result).toBe("number");
});

it.todo("should throw if a argument value is not a number of a string");
it.todo("should throw if an empty argument is provided");
it.todo("should ignore more than one argument");
