export const have5 = (input: number): boolean => {
  const text: string = input.toString()
  if (text.indexOf("5") === -1) {
    return false
  }
  return true
}

export const have3 = (input: number): boolean => {
  const text: string = input.toString()
  if (text.indexOf("3") === -1) {
    return false
  }
  return true
}

export const fizzBuzz = (input: number) => {
  const isFizzFromDivision = input % 3 === 0
  const isBuzzFromDivision = input % 5 === 0
  const isFizzBuzzFromDivision = input % 15 === 0

  if (isFizzBuzzFromDivision) {
    return "FizzBuzz";
  }
  if (isFizzFromDivision) {
    return "Fizz";
  }
  if (isBuzzFromDivision) {
    return "Buzz";
  }
  if (have3(input)) {
    return "Fizz";
  }
  return input.toString();
};
