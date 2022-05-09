const refs = {
  inputEl: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(input) {

  refs.nameOutput.textContent = input.currentTarget.value;
  if (input.currentTarget.value === "") {
    refs.nameEl.textContent = "Anonymous";
  }
}
