/* JS3 builds on the previous challenges and adds the use of Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

import { join } from "path";
import { number } from "yargs";

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
 * A function that creates a a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */

export const createRecipeString = (ingredientsArr) => {
  const recipe = ingredientsArr.join("+");

  return recipe;
};

/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Tony","Dave"]
 */

export const getFirstAndLastItems = (itemsArr) => {
  const arrayLength = itemsArr.length;
  const firstAndLastItems = [itemsArr[0], itemsArr[arrayLength - 1]];

  return firstAndLastItems;
};

/**
 * A function that takes an array of scores and totals the scores by looping through the array.
 *
 * @param {number[]} scoreArr [1,2,3]
 * @return {number} 6
 */

export const totalScores = (scoreArr) => {
  let totalScore = 0;

  scoreArr.forEach((element) => {
    totalScore = totalScore + element
  });

  return totalScore;
};

/**
 * Intermediate Challenges
 */

/**
 * A function that takes an number and returns the total of the range of numbers between 0 and the given number.
 * e.g. 10 => 0+1+2+3+4+5+6+7+8+9+10 = 55.
 *
 * @param {number} rangeMax 10
 * @return {number} 55
 */

export const totalRange = (rangeMax) => {
  let total = 0;
  
  for (let index = 0; index <= rangeMax; index++) {
    total = total + index;
  };
  return total;
};

/**
 * A function that takes an array and returns a NEW ARRAY where the last item has been moved to the front of the array and removed from the back.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Dave","Tony","John"]
 */

export const moveFirstAndLastItems = (itemsArr) => {
  const arrayLength = itemsArr.length;
  const lastItem = itemsArr[arrayLength - 1];
  let newArray = [lastItem];

  itemsArr.forEach((element, index) => {
    if(index < arrayLength - 1) {
      newArray.push(element);
    }
  });
  return newArray;
};

/**
 * Read this article on how to clone an array.
 * https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
 *
 * From here on you should not be mutating the input array. Clone it first and then mutate / manipulate.
 */

/**
 * A function that takes an array of numbers and returns a NEW ARRAY with only the odd numbers from the given array. It should not mutate the input array.
 *
 * @param {number[]} numberArr [1,1,8,1,1,8]
 * @return {number[]} [1,1,1,1]
 */

export const removeEvenNumbers = (numberArr) => {
  const cloneNumberArr = [];

  numberArr.forEach((element) => {
    if(element % 2 != 0) {
      cloneNumberArr.push(element);
    }
  })
  return cloneNumberArr;
};

/**
 * Advanced Challenges
 */

/**
 * A function that takes an array of numbers. It returns the average from the given array.
 * The result should rounded up to the nearest decimal place.
 *
 * @param {number[]} numberArr [1,2,3]
 * @return {number} 2
 */

export const generateAverage = (numberArr) => {
  const cloneNumberArr = [...numberArr];
  const initialValue = 0;
  if (numberArr.length == 0) {
    return 0;
  }
  const arrayTotal = cloneNumberArr.reduce(
    (previousValue, currentVale) => previousValue + currentVale,
    initialValue
  );

  const arrayAverage = Math.round(arrayTotal / numberArr.length);

  return arrayAverage;
};

/**
 * A function that uses a loop to reverse the order of an Array. It should return a NEW ARRAY and not Mutate the orginal array.
 *
 * @param {number[]} toReverseArr [1,2,3]
 * @return {number} [3,2,1]
 */

export const reverseOrder = (toReverseArr) => {
  const reversedArray = [];

  for (let index = toReverseArr.length; index > 0; index--) {
    reversedArray.push(toReverseArr[index - 1]);    
  }

  return reversedArray;
};

/**
 * Expert Challenges
 */

/**
 * Given two arrays, The first being an array of players and the second being there corresponding score. Loop through them and generate a new array matching the format below.
 *
 * ["P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE"]
 *
 * P:INDEX will start from 1. e.g P:1 not P:0
 *
 * If the inputs are not the same size or empty return "invalid inputs"
 *
 * @param {string[]} playersArr ["Tony","John","Dave"]
 * @param {number[]} scoresArr [45,55,66]
 * @return {string[]} ["P:1 Tony scored 45","P:2 John scored 55","P:3 Dave scored 66"]
 */

export const generateHighscores = (playersArr, scoresArr) => {
  if (playersArr.length != scoresArr.length || !playersArr.length) {
    return "invalid inputs";
  }

  const highScoreArray = []

  for (let index = 0; index < playersArr.length; index++) {
    const element = `P:${index + 1} ${playersArr[index]} scored ${scoresArr[index]}`;
    highScoreArray.push(element);    
  }

  return highScoreArray;
};

/**
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
 * and joined together as ert + nye + cpd
 *
 * @param {string} toEncrypt "encrypted"
 * @return {string} "ertnyecpd"
 */

// export const encryptString = (toEncrypt) => {
//   return;
// };


export const encryptString = (toEncrypt) => {
  if (toEncrypt.length <= 3) {
    const unEncrypted = [...toEncrypt]
    return unEncrypted.join('');
  }

  const toEncryptArr = [...toEncrypt];
  
  const list1 = [];
  const list2 = [];
  const list3 = [];

  for (let index = 0; index < toEncryptArr.length; index += 3) {
    list1.push(toEncryptArr[index]);
    list2.push(toEncryptArr[index + 1]);
    list3.push(toEncryptArr[index + 2]);    
  }

  const encryptedString = list1.concat(list2, list3);

  return encryptedString.join('');
};
