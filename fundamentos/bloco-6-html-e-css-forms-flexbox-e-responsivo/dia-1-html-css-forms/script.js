function verifyDate (event) {
  event.preventDefault();
  let input = document.getElementById('start-date');
  const regexDay = /^(0[1-9]|[1-2]\d|[3][0-1])\//
  const regexMonth = /\/(0[1-9]|1[0-2])\//
  const regexYear = /\/(19[2-9]\d|20[0-1]\d|202[0-1])$/
  if (!regexDay.test(input.value)) {
    alert('Seu dia deve ser maior que 0 e menor que 31!')
  }
  if (!regexMonth.test(input.value)) {
    alert('Seu mês deve ser maior que 0 e menor que 12!')
  } 
  if (!regexYear.test(input.value)) {
    alert('Seu ano não pode ser negativo!')
  }
};
let button = document.querySelector('#send-button')
button.addEventListener('click',verifyDate) 






 
  










