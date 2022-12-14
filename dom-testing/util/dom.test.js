import fs from "fs";
import path from "path";
import { it, describe, vi, expect, beforeEach } from "vitest";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

vi.stubGlobal("document", document);

describe("showError()", () => {
  it("should add an error paragraph to the id='errors' element", () => {
    const errMsg = "test";

    showError(errMsg);

    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it("should not contain an error paragraph before error occurs", () => {
    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).toBeNull();
  });

  it("should add an error text message to the ui", () => {
    const errMsg = "test";

    showError(errMsg);

    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph.innerText).toBe(errMsg);
  });
});
