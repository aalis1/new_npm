const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; //программа видит значание а и в, получает сумму
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; //программа посчитала бонуc
  return bonus;
};

console.log(calculateBonus(12, 13));
console.log(calculateBonus(38, 36));
module.exports = calculateBonus;
