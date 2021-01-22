/* JS4 builds on the previous challenges and adds the use of Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that takes an array of Booleans and then removes the false values from the given array.
 * It should create a new array only consiting of the true values.
 *
 * @param {boolean[]} - booleanArr - [true, true, false, false, true]
 * @return {boolean[]} - [true, true, true]
 */

export const removeFalseValues = (booleanArr) => {
  const trueValues = booleanArr.filter((boolean) => boolean);
  return trueValues;
};

/**
 * A function that takes an array of numbers that are between 0 - 1.
 * The function needs to create a new array with the numbers converted into a percentage
 *
 * @param {number[]} - numbers - [1, .5, .7, .25]
 * @return {string[]} ["100%", "50%", "70%", "25%"]
 */

export const createPercentageList = (numbers) => {
  const percentageList = numbers.map((number) => `${number * 100}%`);
  return percentageList;
};

/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} - possessions -["shoes", "jacket", "belt"]
 * @param {string} - name - "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */

export const createListOfPoessessions = (possessions, name) => {
  const poessesionList = possessions.map((possession) => name + " " + possession);
  return poessesionList;
};

/**
 * Intemediate Challenges
 */

/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} - numberString - "1+2+3+4+5"
 * @return {number[]} - [1, 2, 3, 4, 5]
 */

export const convertStringToNumbersArray = (numberString) => {
  const numberArray = numberString.split("+").map((number) => Number(number));
  return numberArray;
};

/**
 * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
 * Every number in the string will need to checked.
 *
 * @param {string} - numberString - "1+2+3+4+5"
 * @return {string[]} - ['odd', 'odd', 'even', 'odd']
 */

export const createOddEvenArray = (numberString) => {
  const numberArray = convertStringToNumbersArray(numberString);
  const oddEvenArray = numberArray.map((number) => (number % 2 === 0 ? "even" : "odd"));
  return oddEvenArray;
};

/**
 * A function that takes an array of book titles and a search term.
 * The function needs fo remove any book titles that do not include the search term.
 *
 * @param {string[], string} - books, searchTerm
 * @param {}
 * const bookTitles = ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story"];
 * @return {array} e.g. (bookTitles, "Google") => ["The Google story"]
 */

export const filterBooksBySearch = (books, searchTerm) => {
  const searchResult = books.filter((book) => book.includes(searchTerm));
  return searchResult;
};

/**
 * Advanced Challenges
 */

/**
 *
 * A function that takes a list, cleans each item and joins them with a +.
 * When it "cleans" it remove's whitespace and makes sure the string is lowercase.
 *
 * This function is failing the test's can you figure out why?
 * The bug is within the function, the test's are fine.
 * Can you get it to pass the tests?
 *
 * @param {string[]} - books, searchTerm
 * @return {string} e.g. (["  dIsco", " ShOes "]) => disco+shoes
 */

export const formatStringArray = (stringArr) => {
  const cleanedArr = stringArr.forEach((string) => {
    const cleanStr = string.trim().toLowerCase();
    return cleanStr;
  });

  const formattedString = cleanedArr.join("+");

  return formattedString;
};

/**
 *
 * A function that takes a string, cleans it and formats it based on a condition.
 *
 * It will need to remove anything that is NOT a letter from the string.
 * If the index of the letter is even the letter needs to be Uppercase.
 * If the index of the letter is odd the letter needs to be Lowercase.
 *
 * @param {string} - books, searchTerm
 * @return {string[]} e.g. (" 22 $$He LL--O!%^& ") => [ 'H', 'e', 'L', 'l', 'O' ]
 */

export const formatString = (string) => {
  const cleanStr = string.replace(/[^\w]|[\s0-9]/gi, "");
  const formatString = cleanStr
    .split("")
    .map((letter, index) => (index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()));
  return formatString;
};

/**
 * Expert Challenge
 */

/**
 *
 * A function that takes a string and creates a simple encrypted message.
 *
 * The string will be broken into 3 lists.
 * The first three letters will go into their own list.
 * The next three letters will follow this pattern.
 * Joining the first three letters in each of their list.
 * The rest of the letter's will follow this pattern.
 * Each list will be joined together and returned as an encrypted message.
 *
 * The word "encrypted" would be broken into:
 *
 * e r t
 * n y e
 * c p d
 *
 * and joined together as ertnyecpd
 *
 *
 * @param {string} - books, searchTerm
 * @return {string} e.g. ("encrypted") => "ertnyecpd"
 */

export const encryptString = (string) => {
  const encrypted = [[], [], []];
  let arrayIndex = 0;
  string.split("").forEach((el) => {
    encrypted[arrayIndex].push(el);
    arrayIndex++;
    arrayIndex > 2 ? (arrayIndex = 0) : null;
  });
  return encrypted.flat().join("");
};
