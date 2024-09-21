document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = getInputFieldValueById("add-money-input");
    const addMoneyPin = getInputFieldValueById("add-money-pin");
    // console.log(addMoneyInput, addMoneyPin);

    //Wrong way to verify.Don't try it at your serious website
    if (addMoneyPin === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = addMoneyInput + balance;
      document.getElementById("account-balance").innerText = newBalance;

      document.getElementById("add-money-input").value = "";
      document.getElementById("add-money-pin").value = "";
    } else {
      alert("Failed to add money");
    }
  });
