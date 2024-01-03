const calculateBonus = require("./calcBonus");

test("bonus should be equal 50", () => {
  expect(calculateBonus(38, 36)).toBe(50);
});

test("bonus should be equal sum", () => {
  expect(calculateBonus(12, 13)).toBe(25);
});
