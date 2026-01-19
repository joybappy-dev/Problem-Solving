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
    if (vowels.includes(i)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};

// (problem-3)

// (problem-4) find largest number in array
const findLargestNumber = (arrayOfNumber) => {
  let largest = 0;
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

// (problem-7) capitalize first letter of each word
const capitalizeFirstLetter = (yourString) => {
  const words = yourString.split(" ");
  let newSentence = "";
  for (const word of words) {
    const firstLetter = word[0].toUpperCase();
    const capitalizedWord = firstLetter + word.slice(1);
    newSentence = newSentence + " " + capitalizedWord;
  }
  return newSentence;
};

