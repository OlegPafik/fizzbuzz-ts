function sumNumbers(numbers: number[]): number {
  let sum: number = 0;
  numbers.forEach((number) =>{
    sum = sum + number;
  })
  return sum;
}

export const add = (numbers: string) => {
  const isEmpty = numbers === ""
  const isOneNumber = !numbers.includes(",")
  const isManyNumbers = numbers.includes(",")


  if (isEmpty) {
    return 0;
  }
  if (isOneNumber) {
    return parseInt(numbers);
  }
  if (isManyNumbers) {
    const individualNumbersStr: string[] = numbers.split(",");
    const individualNumbers = individualNumbersStr.map((numberStr) => parseInt(numberStr));

    return sumNumbers(individualNumbers)
  }
  return "Error"
};