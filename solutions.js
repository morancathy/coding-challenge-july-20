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

console.log("Sum of Array is: ", sumArray([1, 2, 3, 4, 5, 6]));
