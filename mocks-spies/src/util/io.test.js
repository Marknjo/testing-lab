import { it, expect, vi, afterAll, afterEach } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("path", () => {
  return {
    default: {
      join(...args) {
        return args[args.length - 1];
      },
    },
  };
});
vi.mock("fs");

vi.mock("fs");

afterAll(() => {
  vi.resetAllMocks();
});

it("should execute the write method", () => {
  const testData = "test";
  const testFilename = "test.txt";

  //const resultsFn = writeData(testData, testFilename);
  writeData(testData, testFilename);

  //expect(resultsFn).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

it("should return a promise that resolves to no value", () => {
  const testData = "test";
  const testFilename = "test.txt";

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
