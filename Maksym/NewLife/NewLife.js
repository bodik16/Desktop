//рядок пе міняємо на свій та звлишаємо попередню версію
const textElement = document.querySelector('p');
console.log(textElement);
const textp = textElement.innerHTML;
console.log(textp);
textElement.innerHTML = `<p><span class="blue">Було: </span>${textp}<br> Стало: ITіпочки<br><img src="smile.png" width= "70px" alt="Smile">`;
//створення нового елемента (div) 
const newElement = document.createElement('div');
console.log(newElement);
