function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// дістаю посилання на buttonCreate
const buttonCreate = document.querySelector("button[data-create]");
buttonCreate.style.paddingRight = "31.5px";
buttonCreate.style.paddingLeft = "31.5px";
buttonCreate.style.marginRight = "16px";

// дістаю посилання на buttonDestroy
const buttonDestroy = document.querySelector("button[data-destroy]");

// дістаю посилання на input
const input = document.querySelector('input[type="number"]');
input.style.width = "150px";
input.style.borderRadius = "8px";
input.style.marginRight = "16px";

// дістаю посилання на divBoxes
const divBoxes = document.querySelector("#boxes");

// створення div
const renderDiv = (event) => {
  // дістаю значення input
  const value = parseInt(input.value);

  if (value >= parseInt(input.min) && value <= parseInt(input.max)) {
    // видаляю старі div
    divBoxes.innerHTML = "";

    // додаю стилі для divBoxes
    divBoxes.style.cssText = `
    padding: 32px;
    border-radius: 8px;
  `;

    // створюю div
    let width = 30;
    let height = 30;

    const createBoxes = (amount) => {
      for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
        divBoxes.appendChild(box);

        width += 10;
        height += 10;
      }
    };
    // викликаю функцію та передаю аргументом значення input
    createBoxes(value);
  }

  // видаляю значення input
  input.value = "";
};

// видаляю все що знаходиться в divBoxes
const destroyBoxes = (event) => {
  divBoxes.innerHTML = "";
  divBoxes.style.cssText = `
  padding: 0;
  border-radius: 0;
  `;
};

buttonCreate.addEventListener("click", renderDiv);
buttonDestroy.addEventListener("click", destroyBoxes);
