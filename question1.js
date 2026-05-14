let balance = 1000;
let transactionHistory = [];

function atmTransaction(transactionType, amount = 0) {

    
    if (transactionType === "Deposit") {

        if (amount > 0) {

            balance += amount;

            transactionHistory.push("Deposit: $" + amount);

            console.log("Deposit successful");

        } else {

            console.log("Invalid deposit amount");

        }

    }

  
    else if (transactionType === "Withdrawal") {

        if (amount > 0 && amount <= balance) {

            balance -= amount;

            transactionHistory.push("Withdrawal: $" + amount);

            console.log("Withdrawal successful");

        } else {

            console.log("Invalid withdrawal amount");

        }

    }

    
    else if (transactionType === "Undo") {

        let lastTransaction = transactionHistory.pop();

        if (lastTransaction) {

            
            if (lastTransaction.includes("Deposit")) {

                let value = Number(lastTransaction.split("$")[1]);

                balance -= value;

            }

            
            else if (lastTransaction.includes("Withdrawal")) {

                let value = Number(lastTransaction.split("$")[1]);

                balance += value;

            }

            console.log("Undo successful: " + lastTransaction);

        } else {

            console.log("No transactions to undo");

        }

    }

    
    else if (transactionType === "Fee") {

        balance -= 10;

        transactionHistory.unshift("Maintenance Fee: $10");

        console.log("Maintenance fee applied");

    }

    
    else if (transactionType === "OldestRecord") {

        let removed = transactionHistory.shift();

        console.log("Oldest record removed: " + removed);

    }

    
    console.log("Balance: $" + balance);

    console.log("History: ", transactionHistory);

}
atmTransaction("Deposit", 500);

atmTransaction("Withdrawal", 200);

atmTransaction("Undo");

atmTransaction("Fee");

atmTransaction("OldestRecord");