function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector("body"),
  spanEl: document.querySelector(".color"),
  btnEl: document.querySelector(".change-color"),
};

refs.btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  let randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = `${randomColor}`;
  refs.spanEl.textContent = randomColor;
}


