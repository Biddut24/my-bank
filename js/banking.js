document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const inputField = document.getElementById("deposit-input");
    const inputText = inputField.value;
    const inputAmount = parseInt(inputText)

    if(inputField.value == ''){
       return alert("Deposit Please")
    }
    if(inputAmount < 1){
       return alert("Minemim 1$")
    }
    // console.log();
    

  
    const depositTotalElement = document.getElementById('deposit-total'); 
const previousDeposit = parseInt(depositTotalElement.innerText); 
const newDeposit = inputAmount + previousDeposit;

depositTotalElement.innerText = newDeposit;

// balance update

 const balanceField = document.getElementById('balance-input');
 const balanceText = balanceField.innerText;
 const previousBalance = parseInt (balanceText);

  const newBalance = previousBalance + inputAmount
  balanceField.innerText = newBalance
 


// clear
inputField.value = ''
     


  });
