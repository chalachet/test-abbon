const math = require('./math');

//1
describe('test 1.1 reverseInteger function', () => {
  test('123 => 321', () => {
    expect(math.reverseInteger(123)).toBe(321);
  });

  test('-321 => -123', () => {
    expect(math.reverseInteger(-321)).toBe(-123);
  });

  test('120 => 21', () => {
    expect(math.reverseInteger(120)).toBe(21);
  });
});

describe('test 1.2 reverseString function', () => {
  test(`'123' => '321'`, () => {
    expect(math.reverseString('123')).toBe('321');
  });

  test(`'-321' => '-123'`, () => {
    expect(math.reverseString('-321')).toBe('-123');
  });

  test(`'120' => '210'`, () => {
    expect(math.reverseString('120')).toBe('210');
  });
});

//2
describe('test 2 fibonacciArray function', () => {
  test('15 => [1, 1, 2, 3, 5, 8, 13]', () => {
    expect(math.fibonacciArray(15)).toStrictEqual([1, 1, 2, 3, 5, 8, 13]);
  });
});

//3
describe('test 3 findPrimeNumbers function', () => {
  test('3 => [2, 3, 5]', () => {
    expect(math.findPrimeNumbers(3)).toStrictEqual([2, 3, 5]);
  });

  test('6 => [2, 3, 5, 7, 11, 13]', () => {
    expect(math.findPrimeNumbers(6)).toStrictEqual([2, 3, 5, 7, 11, 13]);
  });
});

//4
describe('test 4 mergeSortAndDistinct function', () => {
  test('array1 = [1, 2, 4] array2 = [1, 3, 4] => [1, 2, 3, 4]', () => {
    expect(math.mergeSortAndDistinct([1, 2, 4], [1, 3, 4])).toStrictEqual([
      1, 2, 3, 4,
    ]);
  });

  test('array1 = [2, 2, 4] array2 = [2, 3, 6] => [2, 3, 4, 6]', () => {
    expect(math.mergeSortAndDistinct([2, 2, 4], [2, 3, 6])).toStrictEqual([
      2, 3, 4, 6,
    ]);
  });

  test('array1 = [1, 3, 5, 7, 9] array2 = [6, 11] => [1, 3, 5, 6, 7, 9, 11]', () => {
    expect(math.mergeSortAndDistinct([1, 3, 5, 7, 9], [6, 11])).toStrictEqual([
      1, 3, 5, 6, 7, 9, 11,
    ]);
  });
});

//5
describe('test 5 countDuplicateChars function', () => {
  test(`'abcde' => 0`, () => {
    expect(math.countDuplicateChars('abcde')).toBe(0);
  });

  test(`'aabbcde' => 2`, () => {
    expect(math.countDuplicateChars('aabbcde')).toBe(2);
  });

  test(`'aabBcde' => 2`, () => {
    expect(math.countDuplicateChars('aabBcde')).toBe(2);
  });

  test(`'indivisibility' => 1`, () => {
    expect(math.countDuplicateChars('indivisibility')).toBe(1);
  });

  test(`'Indivisibilities' => 2`, () => {
    expect(math.countDuplicateChars('Indivisibilities')).toBe(2);
  });

  test(`'aA11' => 2`, () => {
    expect(math.countDuplicateChars('aA11')).toBe(2);
  });

  test(`'ABBA' => 2`, () => {
    expect(math.countDuplicateChars('ABBA')).toBe(2);
  });
});

//6
describe('test 6 intToRoman function', () => {
  test(`3 => 'III'`, () => {
    expect(math.intToRoman(3)).toBe('III');
  });

  test(`58 => 'LVIII'`, () => {
    expect(math.intToRoman(58)).toBe('LVIII');
  });

  test(`1994 => 'MCMXCIV'`, () => {
    expect(math.intToRoman(1994)).toBe('MCMXCIV');
  });
});

//7
describe('test 7 isValidBracket function', () => {
  test(`'(){}[]' => true`, () => {
    expect(math.isValidBracket('(){}[]')).toBe(true);
  });

  test(`'([{}])' => true`, () => {
    expect(math.isValidBracket('([{}])')).toBe(true);
  });
  test(`'(}' => false`, () => {
    expect(math.isValidBracket('(}')).toBe(false);
  });
  test(`'[(])' => false`, () => {
    expect(math.isValidBracket('[(])')).toBe(false);
  });
  test(`'[({})](]' => false`, () => {
    expect(math.isValidBracket('[({})](]')).toBe(false);
  });
  test(`'}{()[]}' => false`, () => {
    expect(math.isValidBracket('}{()[]}')).toBe(false);
  });
});
