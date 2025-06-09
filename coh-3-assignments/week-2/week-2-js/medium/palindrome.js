/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //let's filter the str
  let filterStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(filterStr);
  //check if it palidrome or not  
  left = 0
  right = filterStr.length -1
  while (left<right) {
    if (filterStr[left] !== filterStr[right]) {
      return false      
    }
    left++
    right--
  }
  return true;
}

module.exports = isPalindrome;
