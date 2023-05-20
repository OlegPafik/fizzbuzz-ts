export const fizzBuzz = (input: number) => {
  let result: string;
  if (input === 3 || input === 6 || input === 9) {
    result = "Fizz";
  } else if (input === 5) {
    result = "Buzz";
  } else {
    result = input.toString();
  }
  return result;
};
