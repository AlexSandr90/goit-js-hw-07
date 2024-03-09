const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const getInputValue = event => {
  const trimmedValue = event.target.value.trim();

  trimmedValue.length > 0
    ? (nameOutput.innerText = trimmedValue)
    : (nameOutput.innerText = 'Anonymous');
};

nameInput.addEventListener('input', getInputValue);
