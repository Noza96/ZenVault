var transactionItems = document.getElementById('transactionItems');
var transactionItem = document.createElement("li")
var transactionItemType = document.createElement('p')
var transactionItemAmount = document.createElement('h3')
var db = require('../index')

transactionItemType.textContent = "Transaction";
transactionItemAmount.textContent = "50 Gel";

transactionItem.appendChild(transactionItemType)
transactionItem.appendChild(transactionItemAmount)
transactionItems.appendChild(transactionItem)

