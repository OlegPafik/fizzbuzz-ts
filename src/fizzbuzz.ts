export const fizzBuzz = (input: number) => {
  let result: string;
  if (input % 3 === 0 && input % 5 === 0) {
    result = "FizzBuzz";
  } else if (input % 3 === 0) {
    result = "Fizz";
  } else if (input % 5 === 0) {
    result = "Buzz";
  } else {
    result = input.toString();
  }
  return result;
};
