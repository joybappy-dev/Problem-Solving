// (problem-1) reverse a string
const reverseMe = (string) => {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
};

// (problem-2) count vowels in a string
const countVowels = (string) => {
  const vowels = "aeiou";
  let vowelsCount = 0;
  for (let i of string) {
    if (vowels.includes(i.toLowerCase())) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};

// (problem-3) if a string is a palindrome
const checkPalindrome = (yourString) => {
  const characters = yourString.split("");
  const reversedString = characters.reverse().join("");
  let ifPalindrome = false;
  if (reversedString === yourString) {
    ifPalindrome = true;
  }
  return ifPalindrome;
};

// (problem-4) find largest number in array
const findLargestNumber = (arrayOfNumber) => {
  let largest = arrayOfNumber[0];
  for (let i of arrayOfNumber) {
    if (i > largest) {
      largest = i;
    }
  }
  return largest;
};

// (problem-5) remove duplicates from array
const removeDuplicate = (yourArray) => {
  const uniqueArray = [];
  for (let number of yourArray) {
    if (!uniqueArray.includes(number)) {
      uniqueArray.push(number);
    }
  }
  return uniqueArray;
};

// (problem-6) sum of all numbers of an array
const sumOfArray = (yourArray) => {
  let sum = 0;
  for (let number of yourArray) {
    sum += number;
  }
  return sum;
};

// (problem-7) find even numbers in an array
const findEvenNumbers = (yourArray) => {
  const evenNumbers = [];
  for (let number of yourArray) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
};

// (problem-8) capitalize first letter of each word
const capitalizeFirstLetter = (yourString) => {
  const words = yourString.split(" ");
  let newSentence = "";
  for (const word of words) {
    const firstLetter = word[0].toUpperCase();
    const capitalizedWord = firstLetter + word.slice(1);
    newSentence = newSentence + " " + capitalizedWord;
  }
  return newSentence.trim();
};

// (problem-9) find factorial of a number
const findFactorial = (number) => {
  let factorial = 1;
  if (number < 0) {
    return "factorial is not possible with negative number";
  }
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};

// (problem-10) print numbers from 1 to 20 print ping pong for 3 and 5
const pingPongNumbers = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Ping Pong");
      continue;
    } else if (i % 3 === 0) {
      console.log("Ping");
      continue;
    } else if (i % 5 === 0) {
      console.log("Pong");
      continue;
    }
    console.log(i);
  }
};
// pingPongNumbers();
