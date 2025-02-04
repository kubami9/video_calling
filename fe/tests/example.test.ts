import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd"

const sum = (a: number, b: number): number => a + b;

// Deno's simple syntax
Deno.test("sum adds values together", () => {
    const a = 5, b = 10;
    const c = a+b;
    const result = sum(a, b);
    expect(result).toBe(c);
})

// Deno's Jest like syntax
describe("sum function:", () => {
    it("adds two numbers correctly", () => {
        const result = sum(5, 10);
        expect(result).toBe(15);
    })

    it("handles negative numbers", () => {
        const result = sum(-2, -3);
        expect(result).toBe(-5);
    })
})