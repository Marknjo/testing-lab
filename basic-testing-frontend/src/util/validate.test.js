import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty() function", () => {
  it("should throw if supplied string is empty", () => {
    const input1 = "";

    const returnFn1 = () => validateStringNotEmpty(input1);

    expect(returnFn1).toThrowError(/must not be empty/);
  });

  it("should throw if supplied value is not a string", () => {
    const input1 = 1;
    const input2 = [];
    const input3 = undefined;

    const returnFn1 = () => validateStringNotEmpty(input1);
    const returnFn2 = () => validateStringNotEmpty(input2);
    const returnFn3 = () => validateStringNotEmpty(input3);

    expect(returnFn1).toThrowError(/input type/);
    expect(returnFn2).toThrowError(/input type/);
    expect(returnFn3).toThrowError(/input type/);
  });

  it("should not throw if string length is greater than 1", () => {
    const input = "test";

    const returnFn = () => validateStringNotEmpty(input);

    expect(returnFn).not.toThrow();
  });
});

describe("validateNumber() function", () => {
  it("should throw if supplied value is not a number", () => {
    const input1 = "abc";
    const input2 = [];
    const input3 = undefined;

    const returnFn1 = () => validateNumber(input1);
    const returnFn2 = () => validateNumber(input2);
    const returnFn3 = () => validateNumber(input3);

    expect(returnFn1).toThrowError(/Invalid number/);
    expect(returnFn2).toThrowError(/Invalid number/);
    expect(returnFn3).toThrowError(/Invalid number/);
  });

  it("should not throw if supplied value is a number", () => {
    const input = 1;

    const returnFn = () => validateNumber(input);

    expect(returnFn).not.toThrow();
  });
});
