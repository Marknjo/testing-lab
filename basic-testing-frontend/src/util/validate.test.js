import { it, expect, describe } from "vitest";
import { validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty() function", () => {
  it("should throw if supplied string is empty", () => {
    const input1 = "";
    const input2 = undefined;

    const returnFn1 = () => validateStringNotEmpty(input1);
    const returnFn2 = () => validateStringNotEmpty(input2);

    expect(returnFn1).toThrowError(/must not be empty/);
    expect(returnFn2).toThrowError(/must not be empty/);
  });

  it.todo("should be successful if string length is greater than 1", () => {});

  it.todo("should throw if supplied value is not a string", () => {});

  it.todo("should be successful if supplied value is a string", () => {});
});

describe.todo("validateNumber() function", () => {
  it.todo("should throw if supplied value is not a number", () => {});
  it.todo("should be successful if supplied value is a number", () => {});
});
