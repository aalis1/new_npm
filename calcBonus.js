const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; //программа видит значание а и в, получает сумму
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; //программа посчитала бонуc
  return bonus;
};

module.exports = calculateBonus;

console.log(calculateBonus(-570, -838));
