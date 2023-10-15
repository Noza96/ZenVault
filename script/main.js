let addTransactionVendor = document.getElementById('addTransactionVendor')
let addTransactionPrice = document.getElementById('addTransactionPrice')
let addTransactionType = document.getElementById('addTransactionType')
let addTransactionDate = document.getElementById('addTransactionDate')

let addTransactionLeftAmount = document.getElementById('addTransactionLeftAmount')
let addTransaction = document.getElementById('addTransaction')



function transactionCloseFunc(){
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
        transactionItemAmount.textContent = getTransactionPrice +" " + addTransactionCurrency;
        
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
    transactiondate = JSON.parse(localStorage.getItem(clicked_id)).date
    transactionid = JSON.parse(localStorage.getItem(clicked_id)).id;
    transactionType = JSON.parse(localStorage.getItem(clicked_id)).type;
    transactionCurrency = JSON.parse(localStorage.getItem(clicked_id)).currency;

    // console.log(clicked_id);
    document.getElementById(clicked_id).style.display = "grid"

    //create transaction content
    let transactionWrapper = document.getElementById('transactionWrapper')

    let transactionArticle = document.createElement('article')
    // create Header
    let transactionHeader = document.createElement('div')
    let transactionHeaderID = document.createElement('h3')
    transactionHeaderID.textContent = "Transaction #" + clicked_id;

    let transactionClose = document.createElement('button')
    transactionClose.textContent = "X"
    transactionClose.setAttribute("id", 'transactionClose')
    transactionClose.setAttribute("onclick", 'transactionCloseFunc()')

    transactionHeader.appendChild(transactionHeaderID)
    transactionHeader.appendChild(transactionClose)
    transactionArticle.appendChild(transactionHeader)
    transactionWrapper.appendChild(transactionArticle)

    // Create Body
    let transactionBody = document.createElement('div')
    let transactionBodyUl = document.createElement('ul')

    // transaction type label
    let transactionTypeLabel = document.createElement('label');
    transactionTypeLabel.setAttribute("for", `transactionType`)
    transactionTypeLabel.setAttribute("class", `transactionTypeLabel`)
    transactionTypeLabel.textContent = transactionType;

    // Date 
    let transactionDate = document.createElement('li')
    transactionDate.setAttribute('id', 'transactionType');
    transactionDate.setAttribute('class', 'transactionTypeLabel');
    transactionDate.textContent = transactiondate 
    
    // Amount
    let transactionAmountLabel = document.createElement('li')
    transactionAmountLabel.setAttribute('class', ' amount')
    transactionAmountLabel.textContent = `${transactionAmount} ${transactionCurrency} `
    // Info
    let transactionInfo = document.createElement('li')
    transactionInfo.setAttribute('class', 'transactionInfo')
        //label
    let transactionInfoLabel = document.createElement('label')
    transactionInfoLabel.setAttribute('class', 'transactionDescLabel')
    transactionInfoLabel.setAttribute('for', 'transactionDesc')
    transactionInfoLabel.textContent = 'აღწერა'
    let transactionDesc = document.createElement('p')
    transactionDesc.setAttribute('id', 'transactionDesc')
    transactionDesc.textContent = `${transactionType} / თანხა ${transactionCurrency} ${transactionAmount} / ${transactiondate}`
    transactionInfo.appendChild(transactionInfoLabel)
    transactionInfo.appendChild(transactionDesc)

    // Amount
    let transactionInfoAmount = document.createElement('li')
    transactionInfoAmount.setAttribute('class', 'transactionInfo')
        //label
    let transactionInfoAmountLabel = document.createElement('label')
    transactionInfoAmountLabel.setAttribute('class', 'transactionAmountLabel transactionInfo')
    transactionInfoAmountLabel.setAttribute('for', 'transactionAmount')
    transactionInfoAmountLabel.textContent = 'თანხა'

    let transactionInfoAmountText = document.createElement('p')
    transactionInfoAmountText.setAttribute('id', 'transactionAmount')
    // transactionInfoAmountText.textContent = transactionAmount + " " + transactionCurrency
    transactionInfoAmountText.textContent = `${transactionAmount}  ${transactionCurrency}`

    transactionInfoAmount.appendChild(transactionInfoAmountLabel)
    transactionInfoAmount.appendChild(transactionInfoAmountText)

    //append to UL
    transactionBodyUl.appendChild(transactionTypeLabel)
    transactionBodyUl.appendChild(transactionDate)
    transactionBodyUl.appendChild(transactionAmountLabel)
    transactionBodyUl.appendChild(transactionInfo)
    transactionBodyUl.appendChild(transactionInfoAmount)
    

    transactionBody.appendChild(transactionBodyUl)
    transactionArticle.appendChild(transactionBody)
    transactionWrapper.appendChild(transactionArticle)

    transactionWrapper.style.display = "grid"

};

// 
let totalLeft = document.getElementById('totalLeft');
totalLeft.innerHTML = userData.totalLeft;



