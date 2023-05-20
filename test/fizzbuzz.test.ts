import { fizzBuzz } from "../src/fizzbuzz";

describe("Non special numbers", () => {
  it("1 is 1", () => {
    expect(fizzBuzz(1)).toEqual("1");
  });

  it("2 is 2", () => {
    expect(fizzBuzz(2)).toEqual("2");
  });

  it("4 is 4", () => {
    expect(fizzBuzz(4)).toEqual("4");
  });

  it("7 is 7", () => {
    expect(fizzBuzz(7)).toEqual("7");
  });

  it("8 is 8", () => {
    expect(fizzBuzz(8)).toEqual("8");
  });

  it("11 is 11", () => {
    expect(fizzBuzz(11)).toEqual("11");
  });

  it("13 is 13", () => {
    expect(fizzBuzz(13)).toEqual("13");
  });

  it("14 is 14", () => {
    expect(fizzBuzz(14)).toEqual("14");
  });

  it("16 is 16", () => {
    expect(fizzBuzz(16)).toEqual("16");
  });
});

describe("Fizz number", () => {
  it("3 is Fizz", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
  it("6 is Fizz", () => {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });
  it("9 is Fizz", () => {
    expect(fizzBuzz(9)).toEqual("Fizz");
  });
});

describe("Buzz number", () => {
  it("5 is Buzz", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });
});
