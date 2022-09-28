export function transformToNumber(input) {
  if (input === "" || input === undefined) {
    throw new Error("Empty input provided: Function requires an argument");
  }
  /// Convert numbers
  let value = typeof input === "number" ? `${input}` : input;

  /// Accepts only string numbers
  if (typeof value !== "string" || isNaN(value)) {
    throw new Error("Invalid argument");
  }

  return +value;
}
