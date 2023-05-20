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
});

describe("Fizz number", () => {
  it("3 is Fizz", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
  it("6 is Fizz", () => {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });
});
