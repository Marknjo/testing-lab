export function validateStringNotEmpty(value) {
  if (value === undefined || typeof value !== "string") {
    throw new Error("Invalid input type: Expects a string");
  }

  if (value?.trim().length === 0) {
    throw new Error("Invalid input - must not be empty.");
  }
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error("Invalid number input.");
  }
}
