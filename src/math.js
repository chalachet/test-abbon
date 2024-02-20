//1.1
function reverseInteger(num) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  let reversed = 0;

  while (num !== 0) {
    let digit = num % 10;
    num = Math.trunc(num / 10);

    // Check for overflow/underflow
    if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && digit > 7)) {
      return 0;
    }
    if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && digit < -8)) {
      return 0;
    }

    reversed = reversed * 10 + digit;
  }

  return reversed;
}

//1.2
function reverseString(input) {
  if (!input) {
    return input;
  }

  const isNegative = input[0] === '-';
  const str = isNegative ? input.slice(1) : input;

  const reversedStr = str
    .split('')
    .reverse()
    .join('')
    .replace(/^0+(?=[1-9])/, '');

  return (isNegative ? '-' : '') + reversedStr.padEnd(str.length, '0');
}

//2
function fibonacciArray(n) {
  const fibArray = [];

  let a = 1;
  let b = 1;

  while (a <= n) {
    fibArray.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }

  return fibArray;
}

//3
function findPrimeNumbers(n) {
  const primes = [];

  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  let currentNumber = 2;
  while (primes.length < n) {
    if (isPrime(currentNumber)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }

  return primes;
}

//4
function mergeSortAndDistinct(array1, array2) {
  const mergedArray = [...new Set([...array1, ...array2])].sort(
    (a, b) => a - b
  );
  return mergedArray;
}

//5
function countDuplicateChars(str) {
  const charCount = {};

  for (let char of str) {
    if (/^[a-zA-Z0-9]$/.test(char)) {
      let lowerChar = char.toLowerCase();
      charCount[lowerChar] = (charCount[lowerChar] || 0) + 1;
    }
  }

  const duplicateCount = Object.values(charCount).filter(
    (count) => count > 1
  ).length;

  return duplicateCount;
}

//6
function intToRoman(num) {
  const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  const values = Object.keys(romanNumerals)
    .map(Number)
    .sort((a, b) => b - a);
  let result = '';

  for (let value of values) {
    while (num >= value) {
      result += romanNumerals[value];
      num -= value;
    }
  }

  return result;
}

//7
function isValidBracket(s) {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let char of s) {
    if (char in brackets) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = {
  reverseInteger,
  reverseString,
  fibonacciArray,
  findPrimeNumbers,
  mergeSortAndDistinct,
  countDuplicateChars,
  intToRoman,
  isValidBracket,
};
