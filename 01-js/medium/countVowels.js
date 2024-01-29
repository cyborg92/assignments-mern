/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    if(str.length===0) return 0;
    let vowelMap={
      'a':true,
      'e':true,
      'i':true,
      'o':true,
      'u':true,
    };
    let vowelCount=0;
    for (let i=0;i<str.length;i++){
      let tempChar=str[i].toLowerCase();
      if(tempChar in vowelMap){
        vowelCount++;
      }
    }
    return vowelCount;
}

module.exports = countVowels;