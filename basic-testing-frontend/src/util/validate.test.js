import { it, expect, describe } from "vitest";
import { validateStringNotEmpty } from "./validation";

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

describe.todo("validateNumber() function", () => {
  it.todo("should throw if supplied value is not a number", () => {});
  it.todo("should be successful if supplied value is a number", () => {});
});
