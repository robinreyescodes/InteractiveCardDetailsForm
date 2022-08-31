const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const cvcInput = document.querySelector("#cvc");
const cardUser = document.querySelector("#card-user");
const cardNumber = document.querySelector("#card-number");
const monthExpiration = document.querySelector("#month-span");
const yearExpiration = document.querySelector("#year-span");
const cardCvc = document.querySelector("#card-back-number");

nameInput.addEventListener("keyup", (e) => {
  cardUser.textContent = nameInput.value;
});

numberInput.addEventListener("keyup", (e) => {
  monthInput.value = "";
  cardNumber.textContent = numberInput.value;
});

monthInput.addEventListener("keyup", (e) => {
  monthExpiration.textContent = monthInput.value;
});
yearInput.addEventListener("keyup", (e) => {
  yearExpiration.textContent = yearInput.value;
});

cvcInput.addEventListener("keyup", (e) => {
  cardCvc.textContent = cvcInput.value;
});
