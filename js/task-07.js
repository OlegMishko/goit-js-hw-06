const ref = {
    inputEl: document.querySelector("#font-size-control"),
    textEl: document.querySelector("#text"),
};

ref.inputEl.addEventListener("input", onChangeInputValue);

function onChangeInputValue() {
    let data = document.querySelector("#font-size-control").value;
  ref.textEl.style.fontSize = `${data}px`;
}