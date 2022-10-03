import path from "path";
// import { promises as fs } from "fs";
import fs from "fs/promises";

export default function writeData(data, filename) {
  const storagePath = path.join(process.cwd(), "data", filename);

  return fs.writeFile(storagePath, data);
}
