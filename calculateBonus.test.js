const calculateBonus = require("./calcBonus");

test("test on sum > 50", () => {
  expect(calculateBonus(38, 36)).toBe(50);
});

test("test on value = 0", () => {
  expect(calculateBonus(0, 0)).toBe(0);
});

test("test on sum < 50", () => {
  expect(calculateBonus(8, 6)).toBe(14);
});

test("test on sum = 50", () => {
  expect(calculateBonus(38, 12)).toBe(50);
});

test("test on value negative values", () => {
  expect(calculateBonus(-10, -45)).toBe(-55);
});

test("test on big number", () => {
  expect(calculateBonus(2438540000, 382340020)).toBe(50);
});

test("test on null", () => {
  expect(calculateBonus(null, null)).toBe(NaN);
});

test("test on text", () => {
  expect(calculateBonus("text", "text")).toBe("text is not a number");
});
