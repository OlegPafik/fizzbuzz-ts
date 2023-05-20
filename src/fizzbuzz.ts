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
