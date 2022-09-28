import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it.todo("should convert a number to a string", () => {
  const num = "1";

  const result = transformToNumber(num);

  expect(result).toBe("number");
});

it("should throw if a argument value is not a number or type string number", () => {
  const num = [];
  const num2 = "";
  const num3 = undefined;

  const resultFn = () => transformToNumber(num);
  const resultFn2 = () => transformToNumber(num2);
  const resultFn3 = () => transformToNumber(num3);

  expect(resultFn).toThrowError("Invalid argument");
  expect(resultFn2).toThrowError("Invalid argument");
  expect(resultFn3).toThrowError("Invalid argument");
});

it.todo("should throw if an empty argument is provided");
it.todo("should ignore more than one argument");
