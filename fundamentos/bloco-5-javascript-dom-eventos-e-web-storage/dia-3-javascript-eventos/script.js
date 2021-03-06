function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // exercicio 1
  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const MonthDaysList = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const MonthDays = dezDaysList[i];
        const MonthDayListItem = document.createElement('li');
        MonthDayListItem.innerHTML = MonthDays;
    
        MonthDaysList.appendChild(MonthDayListItem);
      };  
  }
  createDaysOfTheMonth();

  function createClassForList () {
    let tags = document.querySelectorAll("#days li");
  
    for (let i = 0; i < tags.length; i += 1) {
        tags[i].classList.add("day");
    }
  }
  createClassForList();

  function createClassForFridays() {
    let listItem = document.querySelectorAll(".day");
    
      listItem[5].classList.add("friday")
      listItem[12].classList.add("friday")
      listItem[19].classList.add("friday")
      listItem[26].classList.add("friday")  
  }
  createClassForFridays();

  function createClassHoliday() {
    let listItem = document.querySelectorAll(".day");

      listItem[32].classList.add("holiday")
      listItem[25].classList.add("holiday")
      listItem[26].classList.add("holiday")
  }
  createClassHoliday();

  //exercicio 2
  function createTagButton(string) {
    let botao = document.createElement("button");
    botao.id = "btn-holiday"; 
    botao.innerText = string;

    let tagPai = document.querySelector(".buttons-container");
    tagPai.appendChild(botao);
  }
  createTagButton("Feriados");

  //exercicio 3 
  function clickForButton() {
    let botao = document.querySelector("#btn-holiday");
    let feriados = document.querySelectorAll(".holiday");

    
  }
  clickForButton(); 
  
  botao.addEventListener("click", clickForButton());

  //3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});