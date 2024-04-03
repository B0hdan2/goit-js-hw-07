const listeningForInput = document.querySelector("#name-input");
listeningForInput.style.cssText = `
margin-bottom: 16px;
border-radius: 4px;
color: #2e2f4;
`;

const titleWithGreetings = document.querySelector("#name-output");

const looksAtTheText = (event) => {
  const inputValue = event.target.value.trim();

  titleWithGreetings.textContent = inputValue || "Anonymous";
};
listeningForInput.addEventListener("input", looksAtTheText);
