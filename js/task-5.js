const body = document.querySelector("body");
const text = document.querySelector(".color");
const button = document.querySelector("button");
button.style.marginTop = '16px'
const div = document.querySelector("div");
div.style.cssText = `
display: flex;
flex-direction: column;
align-items: center;
`;

const clickColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
};
button.addEventListener("click", clickColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
