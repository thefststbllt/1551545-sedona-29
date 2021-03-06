const link = document.querySelector(".button-search");
const popup = document.querySelector(".pop-up");
const form = document.querySelector("form");
const date = document.querySelector(".date");
const amount = document.querySelector(".amount");
let storage1 = document.querySelector("date");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке поиска гостиницы");
  popup.classList.toggle("modal-show");
  popup.classList.toggle("modal");
  if (storage1) {
    date.value = storage1;
  }
});

form.addEventListener("submit", function (evt) {
  if (!date.value || !amount.value) {
    evt.preventDefault();
    console.log("Отправляем форму");
  } else {
    localStorage.setItem("date", date.value);
    localStorage.setItem("amount", amount.value);
  }
});

window.addEventListener("keydown", function(evt){
  if (evt.code===27 || evt.code==="Escape") {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
