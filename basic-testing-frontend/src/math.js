export function add(numbers) {
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
