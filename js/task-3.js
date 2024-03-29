const listeningForInput = document.querySelector("#name-input");
listeningForInput.style.marginBottom = '16px';
listeningForInput.style.borderRadius = '4px';
listeningForInput.style.border= '1px solid #808080';
listeningForInput.style.width = '360px';
listeningForInput.style.color = '#2e2f42';
listeningForInput.style.placeholderColor = '#2e2f42';


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
