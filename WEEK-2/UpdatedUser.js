/*ASSIGNMENT 5: 
Bank Transaction Analyzer
You are building a bank statement summary.*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

    //1. filter() all credit transactions
    const credit=transactions.filter((transactions)=>transactions.type==="credit")
    console.log(credit)

    //2. map() to extract only transaction amounts
    const transactionAmounts = transactions.map(
  transaction => transaction.amount
);
console.log( transactionAmounts);

    //3. reduce() to calculate final account balance
    const finalBalance = transactions.reduce((balance, transaction) => {
  return transaction.type === "credit"
    ? balance + transaction.amount
    : balance - transaction.amount;
}, 0);
console.log( finalBalance);

    //4. find() the first debit transaction
    const debit=transactions.find((transactions)=>transactions.type==="debit")
    console.log(debit)

   // 5. findIndex() of transaction with amount 10000
   const amount10000=transactions.findIndex((transaction)=>transaction.amount===10000)
   console.log(amount10000)

//---------------------------------------------------------------------------
