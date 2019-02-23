


const inputs = document.querySelectorAll('.inputs-div input');

function changeValue(){
  const newValue = this.value
  const suffix = this.dataset.suffix || '';
  document.documentElement.style.setProperty(`--${this.name}`, newValue + suffix)
}



inputs.forEach(input => input.addEventListener('change', changeValue));
inputs.forEach(input => input.addEventListener('mousemove', changeValue));
