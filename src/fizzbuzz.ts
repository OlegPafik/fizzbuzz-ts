export const fizzBuzz = (input: number) => {
  const isFizz = input % 3 === 0
  const isBuzz = input % 5 === 0
  const isFizzBuzzFromDivision = input % 15 === 0

  if (isFizzBuzzFromDivision) {
    return "FizzBuzz";
  }
  if (isFizz) {
    return "Fizz";
  }
  if (isBuzz) {
    return "Buzz";
  }
  return input.toString();
};
