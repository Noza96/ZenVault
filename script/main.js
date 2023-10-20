let addTransactionVendor = document.getElementById('addTransactionVendorInput')
let addTransactionPrice = document.getElementById('addTransactionPrice')
let addTransactionType = document.getElementById('addTransactionType')
let addTransactionDate = document.getElementById('addTransactionDate')

let addTransactionLeftAmount = document.getElementById('addTransactionLeftAmount')
let addTransaction = document.getElementById('addTransaction')



function transactionCloseFunc(){
    let transactionWrapper = document.querySelector('.transactionWrapper');
    transactionWrapper.style.display = "none"
    transactionWrapper.innerHTML = ''; // Content is cleared
}

function clearData() {
    localStorage.clear();
}

function openNewTransaction(){
    document.getElementById('addTransaction').style.display = "block"  ;
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
        "amount": addTransactionPrice.value,
        "vendor": addTransactionVendor.value,
        "date": addTransactionDate.value,
        'type': addTransactionType.value,
        'currency': addTransactionCurrency.value,
    }
   localStorage.setItem(localStorage.length + 1, JSON.stringify(userInput))
   console.log("it works");
}





function determineType(type, price, arg){
    if(type == arg){
        return `${price}`
    }else{return `${-price}`}
}


Object.keys(localStorage).forEach(key => {
    // if key is anything else but ID don't use it
    if (key != "user") {
        let getTransactionVendor = JSON.parse(localStorage.getItem(key)).vendor;
        let getTransactionPrice = JSON.parse(localStorage.getItem(key)).amount;
        let getTransactionDate = JSON.parse(localStorage.getItem(key)).date;
        let addTransactionType = JSON.parse(localStorage.getItem(key)).type;
        let addTransactionCurrency = JSON.parse(localStorage.getItem(key)).currency;
        
        var transactionItems = document.getElementById('transactionItems');
        var transactionItem = document.createElement("li")
        var transactionItemType = document.createElement('p')
        var transactionItemAmount = document.createElement('h3')

        transactionItem.setAttribute("id", key)
        transactionItem.setAttribute("onclick", `reply_click(${transactionItem.id})`)

        transactionItemType.textContent = getTransactionVendor;
        transactionItemAmount.textContent = `${determineType(addTransactionType, getTransactionPrice, "შემოსავალი")}  ${addTransactionCurrency}`
        
        transactionItem.appendChild(transactionItemType)
        transactionItem.appendChild(transactionItemAmount)
        transactionItems.appendChild(transactionItem)

        userData.totalLeft = Math.floor(userData.totalLeft) + Math.floor(getTransactionPrice)
    }
  });


//open transaction details on click
function reply_click(clicked_id){
    transactionAmount = JSON.parse(localStorage.getItem(clicked_id)).amount;
    transactionVendor = JSON.parse(localStorage.getItem(clicked_id)).vendor
    transactionDate = JSON.parse(localStorage.getItem(clicked_id)).date
    transactionid = JSON.parse(localStorage.getItem(clicked_id)).id;
    transactionType = JSON.parse(localStorage.getItem(clicked_id)).type;
    transactionCurrency = JSON.parse(localStorage.getItem(clicked_id)).currency;
 // itemAmount.textContent = 

    // console.log(clicked_id);
    document.getElementById(clicked_id).style.display = "grid"
    let transactionWrapper = document.querySelector('.transactionWrapper')
    let transactionItemID = document.querySelector('.transactionItemID')

    let itemType = document.querySelector('.itemType')
    let itemAmount = document.querySelector('.itemAmount')
    let itemDesc = document.querySelector('.itemDesc')
    
    
    transactionItemID.textContent = `Transaction #${transactionid}`
    itemType.textContent = transactionType
    itemAmount.textContent = `${determineType(transactionType, transactionAmount, "შემოსავალი")} ${transactionCurrency}`
    itemDesc.textContent =  `${transactionType} / თანხა ${transactionCurrency} ${transactionAmount} / ${transactionDate}`

    transactionWrapper.style.display = "grid"

};

// 
let totalLeft = document.getElementById('totalLeft');
totalLeft.innerHTML = userData.totalLeft;



