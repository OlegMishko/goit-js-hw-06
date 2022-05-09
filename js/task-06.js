const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', changeBorderColor)

function changeBorderColor(event) {
    const inputDataset = event.currentTarget.dataset.length;
    const inputLength = String(event.currentTarget.value.length);

    if (inputDataset === inputLength) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
}
// 