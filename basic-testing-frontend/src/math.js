export function add(numbers) {
  if (!numbers) {
    throw new Error("Array of number not present!");
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
