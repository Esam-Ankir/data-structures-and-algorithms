# Fibonacci

## Domain
Problem Domain
Generate the nth Fibonacci number, 2 different ways and choose the best way to solve regarding of  bigO.(2 base cases f(0)=0 and f(1)=1 and each fib of a number is sum of the two previous fibonaccis.
Input: an integer(n)
Output: fibonacci of that number(f(n))


## Whiteboard Process
![Whiteboard Image](./Fibonacci.PNG)


## Approach
Algorithm
* Creat a function called fib that takes a number called n as an argument.
* Declare a new variables one a with initial value of 0 for the base case of 0,
and another one called b with initial value of 1 for the 2nd base case of 1.
* Declare a new variables named sum with initial value of n input for covering base cases and returning same number for 0 and 1.
* Loop untill the counter reaches the same number n input, using (i) counter.
* give sum the summation of a and b.
* let the new value of a equals the old value of b and the new value of b the old value of sum
* return sum.


## JavaScript Code

```js
JavaScript code
//Fibonacci using for loop:
const fib = n =>{
  let a=0;
  let b=1;
  let sum=n;
  for(let i=2; i<=n; i++){
    sum=a+b;
    a=b;
    b=sum;
  };
  return sum;
};
console.log(fib(45));

//Fibonacci using recursion:
function fib2(n){
  if (n===0||n===1)return n;
  else return fib2(n-1)+fib2(n-2)
}
console.log(fib2(5));

```

## Big O

using recursion O(2^n)

using for loop: O(n)

space for both: O(1)

beter to use for loop not recursion








