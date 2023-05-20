export const add = (numbers: string) => {
  if (numbers === "") {
    return 0;
  }
  if (numbers.includes(",")) {
    const individualNumbersStr: string[] = numbers.split(",");
    const individualNumbers = individualNumbersStr.map((numberStr) =>
      parseInt(numberStr)
    );
    return individualNumbers[0] + individualNumbers[1];
  }
  return parseInt(numbers);
};
