import { it, describe, vi, expect } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string");
    }

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

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  it("should convert data to JSON object(string)", async () => {
    const testData = { key: "test" };

    let errorMessage;

    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }

    expect(errorMessage).not.toBe("Not a string");
  });

  it("should throw HttpError when response ok is false", () => {
    testFetch.mockImplementationOnce((url, data) => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          },
        });
      });
    });

    const testData = { key: "test" };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
