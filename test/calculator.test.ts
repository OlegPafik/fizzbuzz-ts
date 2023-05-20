import { add } from "../src/calculator";

describe("Método add", () => {
    describe("String vacío", () => {
        it("Si recibe string vacío devuelve 0", () => {
        expect(add("")).toEqual(0);
        })
    })
    describe("Un número", () => {
        it("Si recibe string con un número devuelve el número", () => {
        expect(add("1")).toEqual(1);
        })
    })
})