// COLOQUE SEU CÓDIGO AQUI
let novaTag = document.createElement("h1");
let textoDaTag = document.createTextNode("Exercício 5.2 - JavaScript DOM");
novaTag.appendChild(textoDaTag);

let tagPai = document.getElementsByTagName("body");
tagPai.insertBefore(novaTag, tagPai.childNodes[0]);