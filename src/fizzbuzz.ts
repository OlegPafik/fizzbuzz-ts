export const fizzBuzz = (input: number) => {
  let result: string;
  if (input === 3) {
    result = "Fizz";
  } else {
    result = input.toString();
  }
  return result;
};
