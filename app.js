const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function btnClick() {
  const username = loginInput.value;
}

loginButton.addEventListener("click", btnClick);
