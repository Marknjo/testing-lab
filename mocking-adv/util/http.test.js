import { it, describe, vi, expect } from "vitest";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    resolve({
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    });
  });
});

vi.stubGlobal("fetch", testFetch);

describe("sendDataRequest()", () => {
  it("should return any available response data", () => {
    const testData = {
      key: "test",
    };

    expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });
});
