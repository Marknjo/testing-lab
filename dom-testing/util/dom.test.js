import fs from "fs";
import path from "path";
import { it, describe } from "vitest";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);

describe("showError()", () => {
  it("first test", () => {
    showError("test");
  });
});
