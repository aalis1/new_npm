const calculateBonus = require("./calcBonus");

test("bonus should be equal 50", () => {
  expect(calculateBonus(18, 32)).toBe(50);
});

test("bonus should be equal sum", () => {
  expect(calculateBonus(12, 13)).toBe(25);
});

test("bonus should be equal sum values 0", () => {
  expect(calculateBonus(0, 0)).toBe(0);
});

test("bonus should be equal sum negative values", () => {
  expect(calculateBonus(-102, -103)).toBe(-205);
});

test("bonus should be equal 50, big vulues", () => {
  expect(calculateBonus(424595982, 52950676713)).toBe(50);
});

test("test on null values", () => {
  expect(calculateBonus(null, null)).toBe(0);
});

test("test on text values", () => {
  expect(calculateBonus(text, text)).not.toBe("number");
});
