import { vi } from "vitest";

const fs = {
  writeFile: vi.fn(
    (storage, data) =>
      new Promise((resolve, reject) => {
        resolve();
      })
  ),
};

export default fs;
