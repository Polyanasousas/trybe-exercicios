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