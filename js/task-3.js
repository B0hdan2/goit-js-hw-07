const listeningForInput = document.querySelector("#name-input");
const titleWithGreetings = document.querySelector("#name-output");

const looksAtTheText = (event) => {
  const inputValue = event.target.value.trim();
  console.log(inputValue);

  if (inputValue !== "") {
    return (titleWithGreetings.textContent = inputValue);
  } else {
    return (titleWithGreetings.textContent = "Anonymous");
  }

};


listeningForInput.addEventListener("input", looksAtTheText);
