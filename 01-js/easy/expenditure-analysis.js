/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length===0) return [];
  let transactionsFinalArr=[];
  let categoryCheckObj={};
  for(let i=0;i<transactions.length;i++){
    let transactionCategory=transactions[i]?.category;
    let transactionPrice=transactions[i]?.price;
    if(!categoryCheckObj[transactionCategory]){
      categoryCheckObj[transactionCategory]={
        category:transactionCategory,
        totalSpent:0
      }
    }
    categoryCheckObj[transactionCategory].totalSpent+=parseInt(transactionPrice);
  }
  Object.values(categoryCheckObj).forEach(item=>{
    transactionsFinalArr.push(item);
  })
  return transactionsFinalArr;
}

module.exports = calculateTotalSpentByCategory;
