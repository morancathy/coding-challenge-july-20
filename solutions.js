// Verbal Questions
// 1) The difference between a parameter and an argument: A parameter is the variable a function accepts (listed inside the
// function definition), an argument is the variable that is passed into the function when the function is called.

 // 2)  The difference b/w return and console.log: A function returns a value with the 'return' statement. It gets returned to the
 // exact location the function was called.  A console.log is any data that is wrapped in () after the console.log statement that
 // will print to your computer console. The console.log is used during development as a 'checking' measure. The return is actual
 // data that will be used in your code.

 // Palindrome
 const checkPalindrome = (param) => {
   const str = param.toLowerCase();

   for(let i = 0; i < str.length; i++) {
     if (str[i] !== str[(str.length-1)-i]) {
        return false;
     } else {
       return true;
     }
   }
 };

console.log(checkPalindrome("Cathy"));
console.log(checkPalindrome("TacoCat"));


// Sum Array
const sumArray = (array) => {
  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum;
};
let myArray = [1, 2, 3, 4, 5, 6];
console.log(`The sum of the array [${myArray}] equals ${sumArray(myArray)}.`);


// Prime Numbers
// Step One
const checkPrime = (num) => {
  let squareRoot = (Math.sqrt(num));

  if (num <= 1) {
    return false
  } else if (num === 2) {
    return true
  };

  if( num < 10) {
    for (let i = 2; i < num; i++){
     if (num % i === 0) {
        return false
      }
    }
    return true
  } else if (num >= 10) {
      for(let i = 2; i <= squareRoot; i++) {
        if(num % i === 0){
          return false
        }
      }
      return true
  }
};

let number = 25;
console.log(`${number} is a prime number: ${checkPrime(number)}.`)

// Step Two
const printPrimes = (num) => {
  console.log(`List of primes from 0 - ${num}:`)
  for(let i = 0; i < num + 1; i ++){
    if(checkPrime(i) === true){
      console.log(i)
    }
  }
};

printPrimes(97);
