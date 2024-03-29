const itemsEl = [...document.querySelectorAll(".item")];
console.log(`Number of categories: ${itemsEl.length}`);

const overkill = (elements) => {
  elements.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
  });
};

overkill(itemsEl);
