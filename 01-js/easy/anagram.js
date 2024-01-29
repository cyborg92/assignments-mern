/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const lookUpObj = {};
  for (let i = 0; i < str1.length; i++) {
    let tempChar=str1[i].toLowerCase();
    lookUpObj[tempChar]?lookUpObj[tempChar]+=1:lookUpObj[tempChar]=1;
  }
  console.log(lookUpObj);
  for(let k=0;k<str2.length;k++){
    let checkChar=str2[k].toLowerCase();
    if(!lookUpObj[checkChar]){
      return false;
    }else{
      lookUpObj[checkChar]-=1;
    }
  }
  return true;
}

module.exports = isAnagram;
