const form = document.querySelector("form");
const inputs = document.querySelectorAll('.form__label input');
const lastInput = inputs[inputs.length - 1];
lastInput.style.marginBottom = "16px";

const validationСheck = (event) => {
  event.preventDefault();
  const password = event.target.elements.password.value;
  const email = event.target.elements.email.value;
  let user = {};
  if (password === "" || email === "") {
    return alert("All form fields must be filled in");
  } else {
    user = {
      password,
      email,
    };
  }
  console.log(user);
  form.reset();
};

form.addEventListener("submit", validationСheck);
