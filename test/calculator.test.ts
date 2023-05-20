import { add } from "../src/calculator";

describe("Método add", () => {
  describe("String vacío", () => {
    it("Si recibe string vacío devuelve 0", () => {
      expect(add("")).toEqual(0);
    });
  });

  describe("Un número", () => {
    it("Si recibe string con un número de una cifra devuelve el número", () => {
      expect(add("1")).toEqual(1);
    });
    it("Si recibe string con un número de varias cifras devuelve el número", () => {
      expect(add("9999")).toEqual(9999);
    });
  });

  describe("Dos números", () => {
    it("Si recibe string con 1 y 2 los suma", () => {
      expect(add("1,2")).toEqual(3);
    });
    it("Si recibe string con 1 y 3 los suma", () => {
      expect(add("1,3")).toEqual(4);
    });
    it("Si recibe string 100 y 42 los suma", () => {
      expect(add("100,42")).toEqual(142);
    });
  });

  describe("Tres números", () => {
    it("Si recibe string con 1, 2 y 3, los suma", () => {
      expect(add("1,2,3")).toEqual(6);
    });
  });
});
