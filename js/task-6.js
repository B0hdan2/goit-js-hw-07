function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
buttonCreate.style.paddingRight = "31.5px";
buttonCreate.style.paddingLeft = "31.5px";
buttonCreate.style.marginRight = "16px";

const buttonDestroy = document.querySelector("button[data-destroy]");

const input = document.querySelector('input[type="number"]');
input.style.width = "150px";
input.style.borderRadius = "8px";
input.style.marginRight = "16px";

const divBoxes = document.querySelector("#boxes");
// divBoxes.style.cssText = `
// padding: 32px;
// border-radius: 8px;`;

const renderDiv = (event) => {
  const value = parseInt(input.value);

  if (value >= parseInt(input.min) && value <= parseInt(input.max)) {
    divBoxes.insertAdjacentHTML("beforeend", `<div></div>`);
  } else {
    console.log("no");
  }
};

buttonCreate.addEventListener("click", renderDiv);
