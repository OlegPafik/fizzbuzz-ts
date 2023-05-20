import { add } from "../src/calculator";

describe("Método add", () => {
    describe("String vacío", () => {
        it("Si recibe string vacío devuelve 0", () => {
        expect(add("")).toEqual(0);
        })
    })
})