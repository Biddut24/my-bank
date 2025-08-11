document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const inputField = document.getElementById("deposit-input");
    const inputText = inputField.value;
    const inputAmount = parseInt(inputText);


    if (isNaN(inputAmount) || inputAmount < 1) {
      return alert("Minmim 1$");
    }


    const depositTotalElement = document.getElementById("deposit-total");
    const previousDeposit = parseInt(depositTotalElement.innerText);
    const newDeposit = inputAmount + previousDeposit;

    depositTotalElement.innerText = newDeposit;

    // balance update

    const balanceField = document.getElementById("balance-input");
    const balanceText = balanceField.innerText;
    const previousBalance = parseInt(balanceText);

    const newBalance = previousBalance + inputAmount;
    balanceField.innerText = newBalance;

    // clear
    inputField.value = "";
  });




//   withdraw

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const inputField = document.getElementById("withdraw-input");
    const inputText = inputField.value;
    const inputAmount = parseInt(inputText);

    if (isNaN(inputAmount) || inputAmount < 1) {
      return alert("Minmim 1$");
    }

    // Withdraw total update
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdraw = parseInt(withdrawTotalElement.innerText) || 0;
    const newWithdraw = inputAmount + previousWithdraw;
    withdrawTotalElement.innerText = newWithdraw;

    // Balance update
    const balanceField = document.getElementById("balance-input");
    const previousBalance = parseInt(balanceField.innerText)  || 0;

    if (inputAmount > previousBalance) {
      return alert("Not enough balance!");
    }

    const newBalance = previousBalance - inputAmount;
    balanceField.innerText = newBalance;

    // Clear input
    inputField.value = "";
  });