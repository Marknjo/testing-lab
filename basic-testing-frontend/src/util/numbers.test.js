import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it.todo("should convert a number to a string", () => {
  const num = "1";

  const result = transformToNumber(num);

  expect(result).toBe("number");
});

it("should throw if a argument value is not a number or type string number", () => {
  const num = {};

  const resultFn = () => transformToNumber(num);

  expect(resultFn).toThrowError("Invalid argument");
});

it("should throw if an empty argument is provided", () => {
  const num1 = "";
  const num2 = undefined;

  const resultFn1 = () => transformToNumber(num1);
  const resultFn2 = () => transformToNumber(num2);

  expect(resultFn1).toThrowError(/Empty input provided/);
  expect(resultFn2).toThrowError(/Empty input provided/);
});

it("should ignore more than one arguments, use only first", () => {
  const num1 = "1";
  const num2 = "2";

  const result = transformToNumber(num1, num2);

  expect(result).toBe(+num1);
});
