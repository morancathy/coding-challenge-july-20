// Verbal Questions
// 1) The difference between a parameter and an argument: A parameter is the variable a function accepts (listed inside the
// function definition), an argument is the variable that is passed into the function when the function is called.

 // 2)  The difference b/w return and console.log: A function returns a value with the 'return' statement. It gets returned to the
 // exact location the function was called.  A console.log is any data that is wrapped in () after the console.log statement that
 // will print to your computer console. The console.log is used during development as a 'checking' measure. The return is actual
 // data that will be used in your code.
//##########################################################################
console.log(`Palindrome Check`)
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
let strToCheck = "Cathy";
let strToCheck2 = "TacoCat";

console.log(`${strToCheck} is a palindrome: ${checkPalindrome(strToCheck)}.`);
console.log(`${strToCheck2} is a palindrome: ${checkPalindrome(strToCheck2)}.`);

//##########################################################################
console.log(`\nSum of An Array`)
// Sum Array
const sumArray = (array) => {
  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum;
};
let myArray = [1, 2, 3, 4, 5, 6];
let myArray2 = [6, 2, 1];

console.log(`The sum of the array [${myArray}] equals ${sumArray(myArray)}.`);
console.log(`The sum of the array [${myArray2}] equals ${sumArray(myArray2)}.`);

//##########################################################################
console.log(`\nPrime Number Check`)
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
let number1 = 97;
console.log(`${number} is a prime number: ${checkPrime(number)}.`)
console.log(`${number1} is a prime number: ${checkPrime(number1)}.`)

// Step Two
const printPrimes = (num) => {
  console.log(`\nList of primes from 0 - ${num}:`)

  for(let i = 0; i < num + 1; i ++){
    if(checkPrime(i) === true){
      console.log(i)
    }
  }
};

printPrimes(97);

//##########################################################################
console.log(`\nRock, Paper, Scissors Game`)
// Rock Paper Scissors
//function randomly selects player's move
const randomMove = () => {
  let move = ['rock', 'paper', 'scissors'];
  return `${move[Math.floor(Math.random() * move.length)]}`;
};

// function plays one round of game, determining winner
const rockPaperScissors = (move1, move2) => {

  let userMove = randomMove();
  let computerMove = randomMove();

  if(userMove === computerMove) {
    return (`User choose: ${userMove}.\nComputer choose: ${computerMove}.\nIt's a tie!`)
  } else if(userMove === `rock` && computerMove === `paper`) {
    return (`User choose: ${userMove}.\nComputer choose: ${computerMove}.\nComputer Wins!`)
  } else if(userMove === `rock` && computerMove === `scissors`) {
    return (`User choose: ${userMove}.\nComputer choose: ${computerMove}.\nUser Wins!`)
  } else if(userMove === `paper` && computerMove === `scissors`) {
    return (`User choose: ${userMove}.\nComputer choose: ${computerMove}.\nComputer Wins!`)
  } else if(userMove === `paper` && computerMove === `rock`) {
    return (`User choose: ${userMove}.\nComputer choose: ${computerMove}.\nUser Wins!`)
  } else if(userMove === `scissors` && computerMove === `rock`) {
    return (`User choose: ${userMove}.\nComputer choose: ${computerMove}.\nComputer Wins!`)
  } else if(userMove === `scissors` && computerMove === `paper`) {
    return (`User choose: ${userMove}.\nComputer choose: ${computerMove}.\nUser Wins!`)
  } else {
    return ('Error')
  }
}
console.log(rockPaperScissors())
//##########################################################################
