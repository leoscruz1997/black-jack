const input = document.querySelector(".login__input");
const submitBtn = document.querySelector(".login__submit");
const form = document.querySelector(".login");

input.oninput = ({ target }) => {
  console.log(target.value);

  if (target.value.length > 2) return submitBtn.removeAttribute("disabled");
  submitBtn.setAttribute("disabled", "");
};

form.onsubmit = (ev) => {
  ev.preventDefault();

  localStorage.setItem("name", input.value);
  location = "../game.html";
};
