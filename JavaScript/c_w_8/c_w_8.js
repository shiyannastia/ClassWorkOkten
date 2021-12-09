// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById('main_header').classList.add('javaScript');
// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
for (const ulElement of ul) {
    ulElement.style.width = '400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
console.log(listElement2);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let liColor = document.getElementsByTagName('li');
for (const liColorElement of liColor) {
    liColorElement.style.backgroundColor = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');
for (const aElement of a) {
    aElement.classList.toggle('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const aElement of a) {
    if (aElement.innerText === 'link3') {
        aElement.style.fontSize = '40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aElement of a) {
    let newClass = aElement.innerText
    aElement.classList.add(`element_${newClass}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subheader = document.getElementsByClassName('sub-header');
// for (const subheaderElement of subheader) {
//     subheaderElement.style.backgroundColor = prompt('Введіть колір фону: ');
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (const subheaderElement of subheader) {
//     if (subheaderElement.innerText === 'content 2 segment') {
//         subheaderElement.style.color = prompt('Введіть колір тексту')
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1 = document.getElementsByClassName('content_1');
// for (const content1Element of content1) {
//     content1Element.textContent = prompt('Введіть текст: ')
// }
// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let tex2 = document.getElementsByClassName('text2');
for (const tex2Element of tex2) {
    tex2Element.textContent = 'sep-2021';
}
