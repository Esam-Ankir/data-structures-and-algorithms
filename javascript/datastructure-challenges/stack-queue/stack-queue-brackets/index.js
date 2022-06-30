const validateBrackets = require('./lib/validateBrackets');

// const newStack = new Stack();

console.log('====================================');
console.log(validateBrackets("{}"));//TRUE
console.log('====================================');
console.log(validateBrackets("{}(){}"));//TRUE
console.log('====================================');
console.log(validateBrackets("()[[Extra Characters]]"));//TRUE
console.log('====================================');
console.log(validateBrackets("(){}[[]]"));//TRUE
console.log('====================================');
console.log(validateBrackets("{}{Code}[Fellows](())"));//TRUE
console.log('====================================');
console.log(validateBrackets("[({}]"));//FALSE
console.log('====================================');
console.log(validateBrackets("(]("));//FALSE
console.log('====================================');
console.log(validateBrackets("{(})"));//FALSE
console.log('====================================');
console.log(validateBrackets("{"));//FALSE //FALSE	error unmatched opening { remaining.
console.log('====================================');
console.log(validateBrackets(")"));//FALSE //FALSE	error closing ) arrived without corresponding opening.
console.log('====================================');
console.log(validateBrackets("[}"));//FALSE //FALSE error closing }. Doesn’t match opening (.
console.log('====================================');
