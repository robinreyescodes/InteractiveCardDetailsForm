const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const cvcInput = document.querySelector("#cvc");
const cardUser = document.querySelector("#card-user");
const cardNumber = document.querySelector("#card-number");
const cardExpiration = document.querySelector("#card-expiration");
const cardCvc = document.querySelector("#card-back-number");

nameInput.addEventListener("keyup", (e) => {
  cardUser.textContent = nameInput.value;
});

numberInput.addEventListener("keyup", (e) => {
  cardNumber.textContent = numberInput.value;
});

cvcInput.addEventListener("keyup", (e) => {
  cardCvc.textContent = cvcInput.value;
});
