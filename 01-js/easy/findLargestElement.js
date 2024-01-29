/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length===0) return undefined;
    if(numbers.length===1) return numbers[0];
    let biggestElem=numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>biggestElem){
            biggestElem=numbers[i];
        }
    }
    return biggestElem;
}

module.exports = findLargestElement;