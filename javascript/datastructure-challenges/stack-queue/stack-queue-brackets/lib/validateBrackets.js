/* eslint-disable eqeqeq */
'use strict';
const Stack = require('./Stack');

function validateBrackets(expr) {
  let newStack = new Stack;
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];
    if (x == '(' || x == '[' || x == '{') {
      newStack.push(x);
      continue;
    }
    if (newStack.isEmpty())
      return false;
    let check;
    switch (x) {
    case ')':
      check = newStack.pop();
      if (check == '{' || check == '[')
        return false;
      break;
    case '}':
      check = newStack.pop();
      if (check == '(' || check == '[')
        return false;
      break;
    case ']':
      check = newStack.pop();
      if (check == '(' || check == '{')
        return false;
      break;
    }
  }
  return (newStack.isEmpty());
}



module.exports = validateBrackets;
