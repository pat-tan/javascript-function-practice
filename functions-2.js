/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
  // ADD YOUR CODE HERE
  if(num1 > num2){
    // console.log(num1);
    return num1;
  }
  else{
    // console.log(num2);
    return num2;
  }
};

// maxOfTwoNumbers(-5,-5)

  /*
  2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (num1, num2, num3) => {
    // ADD YOUR CODE HERE
    if(num1 > num2 && num1 > num3){
      // console.log(num1)
      return num1;
    }
    else if(num2 > num1 && num2 > num3){
      // console.log(num2)
      return num2;
    }
    else if(num3 > num1 && num3 > num2){
      // console.log(num3)
      return num3;
    }
  };

//   maxOfThree(1,3,1)

 /*
  3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  isCharacterAVowel = (char1) => {
    // ADD YOUR CODE HERE
    if(char1==='a' || char1==='e' || char1==='i' || char1==='o' || char1==='u'){
      // console.log(true)
      return true;
    }
    else{
      // console.log(false)
      return false;
    }
  };
//   isCharacterAVowel('u')
 
  /*
  4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
  */
  
  sumArray = (arr) => {
    // ADD YOUR CODE HERE
    let sum=0;
    for (let i=0;i<arr.length;i++){
      sum=sum+arr[i];
    }
    // console.log(sum);
    return sum;
  };
// sumArray([-5,2,3,4])

  multiplyArray = (arr) => {
    let prod=1;
    for( let i=0; i<arr.length; i++){
      prod=prod*arr[i];
    }
    // console.log(prod);
    return prod;
  };
// multiplyArray([5,2,3,4])

  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  function arguLength (...theArgs){
    // console.log(arguments.length)
    return arguments.length;
  }

//   arguLength('a','b','c','d')
 
  /*
  6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  
  reverseString = (str) => {
    // ADD YOUR CODE HERE
    let rev='';
    for(let i=str.length-1;i>=0;i--){
      rev+=(str[i]);
    }
    // console.log(rev);
    return rev;
  };
  // reverseString("jag testars")

    /*
  7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
  */
  findLongestWord = (strArr) => {
    // ADD YOUR CODE HERE
    let longest = 0;
    for(let i=0;i<strArr.length;i++){
      if(longest < strArr[i].length){
        longest = strArr[i].length;
      }
    }
    // console.log(longest);
    return longest;
  };

  // findLongestWord([ 'outrageous','cannon', 'ball', 'boing', 'splash', 'wowzers'])

    /*
  8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (strArr, i) => {
    // ADD YOUR CODE HERE
    let longArr = [];
    let len;
    for(let num=0;num<strArr.length;num++){
      if(strArr[num].length > i){
        longArr.push(strArr[num]);
      }
    }
    // console.log(longArr);
    return longArr;
  };

  // filterLongWords([ 'outrageous','cannon', 'ball', 'boing', 'splash', 'woweee'], 5)

//  ================= Bonus =======================

//   Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().

String.prototype.reverseString = function (str) {
  let rev='';
  for(let i=str.length-1;i>=0;i--){
    rev+=(str[i]);
  }
  // console.log(rev);
  return rev;
}

// let testString="breakfast";
// console.log(testString.reverseString(testString))

// =====================BONUS 2==================

//   Write a function that takes a string as argument and returns an object where:

//       the keys are the characters that occur in the string
//       the values are the number of occurrences for each letter, regardless of the case

// For example, calling the function with the string "Per Scholas" will return:
// {
//   a: 1,
//   c: 1,
//   e: 1,
//   h: 1,
//   l: 1,
//   o: 1,
//   p: 1,
//   r: 1,
//   s: 2,
// }
  function objMap (str2) {
    //remove spaces
    // console.log(str2);
    let str=str2;
    str=str.replace(/\s+/g, '');
    //convert string into array, use sort method to sort alphabetical, convert back to string
    str.split('').sort().join('');
    // console.log(str);
    const strMap = new Map();
    for(let i=0;i<str.length;i++){
      if(strMap.has(str[i])==false){
        strMap.set(str[i], 1)
        // console.log(str[i], strMap.get(str[i]))
      }
      else{
        strMap.set(str[i], strMap.get(str[i])++)
      }
    }
    return strMap;
  }

  const obj1 = new objMap('Per Scholas');
  for(const[key,value] of Object.entries(obj1)) {
    console.log(key, value)
  }