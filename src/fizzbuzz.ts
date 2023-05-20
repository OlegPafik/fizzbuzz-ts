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

  if (have3(input) && have5(input)) {
    return "FizzBuzz";
  }
  if (isFizzBuzzFromDivision) {
    return "FizzBuzz";
  }
  if (isFizzFromDivision && have5(input)) { // Better naming isDivisibleBy3
    return "FizzBuzz";
  }
  if (isBuzzFromDivision && have3(input)) { // Better naming isDivisibleBy5
    return "FizzBuzz";
  }
  if (isFizzFromDivision) { // Better naming isDivisibleBy3
    return "Fizz";
  }
  if (isBuzzFromDivision) { // Better naming isDivisibleBy5
    return "Buzz";
  }
  if (have3(input)) {
    return "Fizz";
  }
  if (have5(input)) {
    return "Buzz";
  }
  return input.toString();
};

const printResult = () => {
  for (let numberToTransform = 1; numberToTransform <= 100; numberToTransform++) {
    console.log(fizzBuzz(numberToTransform))
  }
}

printResult()