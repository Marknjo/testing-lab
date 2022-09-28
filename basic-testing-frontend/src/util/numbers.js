export function transformToNumber(input) {
  /// Convert numbers
  let value = typeof input === "number" ? `${input}` : input;

  console.log({ value });

  /// Accepts only string numbers
  if (
    value === undefined ||
    value === "" ||
    typeof value !== "string" ||
    isNaN(value)
  ) {
    throw new Error("Invalid argument");
  }

  return +value;
}
