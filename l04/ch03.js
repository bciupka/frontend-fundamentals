const expression1 = 100 % 50;
console.log(expression1)
const expression2 = 100 / 50;
console.log(expression2)
const expression3 = expression1 < expression2;
console.log(expression3)
const expression4 = expression3 && 300 + 5 === 305;
console.log(expression4)
const expression5 = !expression4;
console.log(expression5)

const expressionCombined = !((100 % 50 < 100 / 50) && 300 + 5 === 305);
console.log(expressionCombined);
