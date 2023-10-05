let addTransactionVendor = document.getElementById('addTransactionVendor')
let addTransactionPrice = document.getElementById('addTransactionPrice')
let addTransactionDate = document.getElementById('addTransactionDate')
let addTransactionLeftAmount = document.getElementById('addTransactionLeftAmount')
let addTransaction = document.getElementById('addTransaction')

function clearData() {
    localStorage.clear();
}

function openNewTransaction(){
    document.getElementById('addTransaction').style.display = "grid"  ;
};
function closeNewTransaction() {
    document.getElementById('addTransaction').style.display = "none"  ;
};

//create user account 
let userData = {
    "name": "Tornike",
    "lastname": "Nozadze",
    "totalLeft": 0,
};

function storeTransactionData(){
    let userInput = {
        "id": localStorage.length + 1,
        "amount" : addTransactionPrice.value,
        "vendor": addTransactionVendor.value,
        "date": addTransactionDate.value,
    }
   localStorage.setItem(localStorage.length + 1, JSON.stringify(userInput))
}

Object.keys(localStorage).forEach(key => {
    // if key is anything else but ID don't use it
    if (key != "user") {
        let getTransactionVendor = JSON.parse(localStorage.getItem(key)).vendor;
        let getTransactionPrice = JSON.parse(localStorage.getItem(key)).amount;
        let getTransactionDate = JSON.parse(localStorage.getItem(key)).date;
    
        var transactionItems = document.getElementById('transactionItems');
        var transactionItem = document.createElement("li")
        var transactionItemType = document.createElement('p')
        var transactionItemAmount = document.createElement('h3')

        transactionItem.setAttribute("id", key)
        transactionItem.setAttribute("onclick", `reply_click(${transactionItem.id})`)
    
        transactionItemType.textContent = getTransactionVendor;
        transactionItemAmount.textContent = getTransactionPrice+" Gel";
        
        transactionItem.appendChild(transactionItemType)
        transactionItem.appendChild(transactionItemAmount)
        transactionItems.appendChild(transactionItem)

        userData.totalLeft = Math.floor(userData.totalLeft) + Math.floor(getTransactionPrice)
    }

  });

function reply_click(clicked_id){
    transactionAmount = JSON.parse(localStorage.getItem(clicked_id)).amount;
    transactionVendor = JSON.parse(localStorage.getItem(clicked_id)).vendor
    transactiondate = JSON.parse(localStorage.getItem(clicked_id)).date
    transactionid = JSON.parse(localStorage.getItem(clicked_id)).id;

    document.getElementById(clicked_id).style.display = "grid"

    let transactionView = document.getElementById('transactionView')
    let transactionHeaderContainer = document.createElement("div")
    let transactionID = document.createElement('h3')
    // let transaction
    transactionID.textContent = transactionAmount;
      
      

      transactionView.style.display = "grid"

};

// 
let totalLeft = document.getElementById('totalLeft');
totalLeft.innerHTML = userData.totalLeft;
