import { it, expect } from "vitest";

import writeData from "./io";

it("should execute the write method", () => {
  const testData = "test";
  const testFilename = "test.txt";

  const resultsFn = writeData(testData, testFilename);

  expect(resultsFn).resolves.toBeUndefined();
});
