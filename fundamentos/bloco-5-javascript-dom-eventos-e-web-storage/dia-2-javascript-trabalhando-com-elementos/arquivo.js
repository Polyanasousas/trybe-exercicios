// COLOQUE SEU CÓDIGO AQUI
//exercicio 1
document.querySelector("h1").classList.add("title");

//exercicio 2
function classeParaTagh3 (tagName) {
  let tags = document.querySelectorAll(tagName);

  for (let i = 0; i < tags.length; i += 1) {
      tags[i].classList.add("description");
  }
}
classeParaTagh3("h3");

//exercicio 3 
let tagSection1 = document.querySelector(".left-content");
tagSection1.remove();

//exercicio 4 
let tagSection2 = document.querySelector(".right-content");
tagSection2.style.marginRight = "auto";

//exercicio 5 
let tagSection0 = document.querySelector(".center-content");
tagSection0.style.backgroundColor = "green";

//exercicio 6
let listaItem9 = document.querySelectorAll(".right-content ul li")[8];
listaItem9.remove();

let listaItem10 = document.querySelectorAll(".right-content ul li")[8];
listaItem10.remove();





