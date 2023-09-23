const sum = require("../src/index.js");

describe("sum function", () => {
    test("should 5 + 5 = 10", () => {
        expect(sum(5, 5)).toBe(10);
    });
});