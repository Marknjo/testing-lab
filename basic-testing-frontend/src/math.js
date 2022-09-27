export function add(numbers) {
  if (!numbers) {
    throw new Error("Array of number not present!");
  }

  if (arguments.length > 1) {
    throw new Error(
      "Too many arguments provided! Expects an array of numbers."
    );
  }

  if (!Array.isArray(numbers)) {
    throw new Error("Expects array of numbers");
  }

  let sum = 0;

  for (const number of numbers) {
    if (isNaN(number)) {
      return NaN;
    }
    sum += Number(number);
  }
  return sum;
}
