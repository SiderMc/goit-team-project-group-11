let inputs = document.querySelectorAll('.form-input');
let button = document.getElementById('submit-btn');

button.disabled = true;

inputs.forEach(input => {
  input.addEventListener('input', stateHandle);
});

function stateHandle() {
  const isAnyInputEmpty = Array.from(inputs).some(input => input.value === '');
  button.disabled = isAnyInputEmpty;
}
