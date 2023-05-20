import { fizzBuzz } from "../src/fizzbuzz";

describe("Non special numbers", () => {
  it("1 is 1", () => {
    expect(fizzBuzz(1)).toEqual("1");
  });

  it("2 is 2", () => {
    expect(fizzBuzz(2)).toEqual("2");
  });
});
