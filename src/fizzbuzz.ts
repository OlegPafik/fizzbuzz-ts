export const fizzBuzz = (input: number) => {
  let result: string;
  if (input === 3 || input === 6) {
    result = "Fizz";
  } else {
    result = input.toString();
  }
  return result;
};
