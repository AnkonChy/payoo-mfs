document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutInput = getInputFieldValueById("cashout-input");
    const cashOutPin = getInputFieldValueById("cashout-pin");

    if (cashOutPin === 1234) {
      const balance = getTextFieldValueById("account-balance");
      console.log(balance);
      const newBalance = balance - cashOutInput;
      console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cash out");
    }
  });
