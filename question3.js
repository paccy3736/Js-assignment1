let dailyTransactions = [1042, 8922, 3301, 5510, 7719, 9920];

let fraudID = 5510;

let exists = dailyTransactions.includes(fraudID);

console.log("Fraud Found:", exists);

if (exists) 
    {
    let index = dailyTransactions.indexOf(fraudID);
    console.log("Fraud Index:", index);
     }

 let lastThree = dailyTransactions.slice(-3);
console.log("Last 3 Transactions:", lastThree);

let fraudIndex = dailyTransactions.indexOf(fraudID);

if (fraudIndex !== -1)  
    {
    dailyTransactions.splice(fraudIndex, 1);
    console.log("Fraud removed");
    }

dailyTransactions.forEach(function(transaction) {
console.log("Transaction " + transaction + " cleared.");

});