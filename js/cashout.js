document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutInput = getInputFieldValueById("cashout-input");
    const cashOutPin = getInputFieldValueById("cashout-pin");

    if (cashOutPin === 1234) {
      const balance = getTextFieldValueById("account-balance");

      if (cashOutInput > balance) {
        alert("You do not have enough money to cashout");
        return;
      }
      console.log(balance);
      const newBalance = balance - cashOutInput;
      console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;

      //add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-orange-500");
      div.innerHTML = `
      <h5 class="text-2xl font-bold text-center">Cash Out</h5>
      <p>${cashOutInput} withdraw. New Balance ${newBalance}</p>
      `;

      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Failed to cash out");
    }
  });
