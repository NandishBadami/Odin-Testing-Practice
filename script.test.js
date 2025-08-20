import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./script";

test('capitalize', () => {
    expect(capitalize("hello")).toMatch("Hello");
    expect(capitalize("")).toMatch("");
});

test('reverseString', () => {
    expect(reverseString("hello")).toMatch("olleh");
})

test("Calculator", () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.substract(1,2)).toBe(-1);
    expect(calculator.divide(1,2)).toBe(0.5);
    expect(calculator.multiply(1,2)).toBe(2);
});

test("caesarCipher", () => {
    expect(caesarCipher('Z', 1)).toBe("A");
    expect(caesarCipher('xyz', 3)).toBe("abc");
    expect(caesarCipher('HeLLo', 3)).toBe("KhOOr");
    expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});