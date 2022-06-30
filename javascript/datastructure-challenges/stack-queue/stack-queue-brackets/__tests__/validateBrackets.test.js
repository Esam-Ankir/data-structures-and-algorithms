/* eslint-disable quotes */

'use strict';
const validateBrackets = require('../lib/validateBrackets');

describe('Linked List Test', () => {

  test('Test1:Can return true if one bracket pair match', () => {
    expect(validateBrackets("{}")).toBe(true);
  });
  test('Test2:Can return true if more than one bracket pair match', () => {
    expect(validateBrackets("{}(){}")).toBe(true);
  });
  test('Test3:Can return true if more than one bracket pair match Regardless any other inputs in one bracket', () => {
    expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
  });
  test('Test4:Can return true if more than one bracket pair match with brackets inside each other', () => {
    expect(validateBrackets("(){}[[]]")).toBe(true);
  });
  test('Test5:Can return true if more than one bracket pair match Regardless any other inputs in more than one bracket', () => {
    expect(validateBrackets("{}{Code}[Fellows](())")).toBe(true);
  });
  test('Test6:Can return false if one bracket pair doesnt match', () => {
    expect(validateBrackets("[({}]")).toBe(false);
  });
  test('Test7:Can return false if more than one bracket pair doesnt match', () => {
    expect(validateBrackets("(](")).toBe(false);
  });
  test('Test8:Can return false if there is single bracket separates bracket pair', () => {
    expect(validateBrackets("{(})")).toBe(false);
  });
  test('Test9:Can return false if there is an error unmatched opening { remaining', () => {
    expect(validateBrackets("{")).toBe(false);
  });
  test('Test10:Can return false if there is an error closing ) arrived without corresponding opening', () => {
    expect(validateBrackets(")")).toBe(false);
  });
  test('Test11:Can return false if there is an error closing }. Doesn’t match opening (', () => {
    expect(validateBrackets("[}")).toBe(false);
  });


});
