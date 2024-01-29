/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length===0) return true;
  if(str.length===1) return true;
  let changedStr=str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let i=0;let j=changedStr.length-1;
  while(i<j){
    if(changedStr[i].toLowerCase()!==changedStr[j].toLowerCase()){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
