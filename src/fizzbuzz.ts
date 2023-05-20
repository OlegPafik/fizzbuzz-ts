export const fizzBuzz = (input: number) => {
  const isFizz = input % 3 === 0
  if (isFizz && input % 5 === 0) {
    return "FizzBuzz";
  }
  if (isFizz) {
    return "Fizz";
  }
  if (input % 5 === 0) {
    return "Buzz";
  }
  return input.toString();
};
