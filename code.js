// 485 1
// function setText(selector, text) {  
//     let elem = document.querySelector(selector);  
//     elem.textContent = text;  
// }  
// setText('#elem1', 'text1');  
// setText('.class1', 'text2');

// 485 2
// function setAttr(selector, attributeName, attributeValue) {  
//     let elem = document.querySelector(selector);  
//     elem.setAttribute(attributeName, attributeValue);  
// }   
// setAttr('#elem1', 'class', 'newClass');  
// setAttr('.class1', 'id', 'newId');  

// 486 1
// function setText(selector, text) { 
//     let elems = document.querySelectorAll(selector); 
//     for (let elem of elems) { 
//      elem.textContent = text; 
//     } 
// } 
// setText('.elem', 'text');
// function appendText(selector, text) {
//     let elems = document.querySelectorAll(selector);
//     for (let elem of elems) {
//       elem.textContent += text;
//     }
// }
  
// 487 1
// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(paragraph => {
//   paragraph.textContent += '!';
// });

// 488
// function appendText(selector, text) {
//     let elems = document.querySelectorAll(selector);
//     elems.forEach((elem, index) => {
//       elem.textContent = ${index + 1}. ${elem.textContent};
//     });
// }
// appendText('p', ''); 

// 489 1
// function appendText(elem, text) {
//     elem.textContent += text;
// }
// let elem1 = document.getElementById('elem1');
// appendText(elem1, ' добавленный текст'); 

// 489 2
// let paragraphs = document.getElementsByTagName('p');
// paragraphs.forEach(paragraph => {
//     paragraph.textContent += '!';
// });

// 489 3
// function setValue(input, text) {
//     input.value = text;
//   }
// let input = document.getElementById('myInput');
// setValue(input, 'hello, world!'); 

// 490 1
// function appendText(elements, text) {
//     elements.forEach(element => {
//       element.textContent += text;
//     });
// }
// const elements = document.querySelectorAll('.my-elements');
// appendText(elements, 'текст');
  
// 490 2
// function appendElem(ulElement, text) {
//     const li = document.createElement('li');
//     li.textContent = text;
//     ulElement.appendChild(li);
// }
// const ul = document.getElementById('my-list');
// appendElem(ul, 'Новый элемент');

// 490 3
// const ul = document.getElementById('my-list');
// const arr = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
// arr.forEach(item => {
//   appendElem(ul, item);
// });

// 491
// function createTable(rows, cols, parent) { 
//     let table = document.createElement('table'); 
//     for (let i = 0; i < rows; i++) {
//       let row = table.insertRow();
//       for (let j = 0; j < cols; j++) {
//         let cell = row.insertCell();
//         cell.textContent = Row ${i + 1}, Cell ${j + 1};
//       }
//     }
//     parent.appendChild(table); 
// }

// 492 1
// function createTable(rows, cols) { 
//     let table = document.createElement('table'); 
//     for (let i = 0; i < rows; i++) {
//       let row = table.insertRow();
//       for (let j = 0; j < cols; j++) {
//         let cell = row.insertCell();
//         cell.textContent = Row ${i + 1}, Cell ${j + 1};
//       }
//     }
//     return table; 
//   }
//   let div = document.querySelector('#elem'); 
//   let table = createTable(3, 4); 
//   table.style.color = 'red'; 
//   div.appendChild(table);

// 492 2
// function createTable() {
//     var table = document.createElement('table');
//     table.style.color = 'red';
//     var tbody = document.createElement('tbody');
//     for (var i = 1; i <= 3; i++) {
//       var row = document.createElement('tr');
//       for (var j = 1; j <= 4; j++) {
//         var cell = document.createElement('td');
//         cell.textContent = 'Row ' + i + ', Cell ' + j;
//         row.appendChild(cell);
//       }
//       tbody.appendChild(row);
//     }
//     table.appendChild(tbody);
//     return table;
// }
//   var newTable = createTable();
//   var elem = document.getElementById('elem');
//   elem.appendChild(newTable);

// 493
// let div = document.querySelector('#elem');
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);
// div.appendChild(table);
// function createTableByArr(arr) {
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     for (var i = 0; i < arr.length; i++) {
//       var row = document.createElement('tr');
//       for (var j = 0; j < arr[i].length; j++) {
//         var cell = document.createElement('td');
//         cell.textContent = arr[i][j];
//         row.appendChild(cell);
//       }
//       tbody.appendChild(row);
//     }
//     table.appendChild(tbody);
//     return table;
//   }
//   let div = document.querySelector('#elem');
//   let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//   let table = createTableByArr(arr);
//   div.appendChild(table);

// 497
// function calculateSum() {
//     let num1 = +document.getElementById('num1').value;
//     let num2 = +document.getElementById('num2').value;
//     let num3 = +document.getElementById('num3').value;
//     let sum = num1 + num2 + num3;
//     console.log('The sum is: ' + sum);
// }
//   document.getElementById('calculate').addEventListener('click', calculateSum);
  
// 501
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
	
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
// })();
// let str1 = 'переменная модуля';
// function func1() {
//   alert('функция модуля');
// }
// function func2() {
//   alert('функция модуля');
// }
// export { str1, func1, func2 };

// 502 
// let str1 = 'переменная модуля';
// function func1() {
//   alert('функция модуля');
// }
// function func2() {
//   alert('функция модуля');
// }
// export { str1, func1, func2 };

// import { str1, func1, func2 } from './module.js';
// console.log(str1);
// func1();
// func2();

// 503 1
// function avg1(arr) { 
//     return sum(arr, 1) / arr.length; 
// } 
//    function avg2(arr) { 
//     return sum(arr, 2) / arr.length; 
// } 
//    function avg3(arr) { 
//     return sum(arr, 3) / arr.length; 
// }
//    export { avg1, avg2, avg3 };
//    import { avg1, avg2, avg3 } from './module.js';
//    console.log(avg1([1, 2, 3])); 
//    console.log(avg2([1, 2, 3])); 
//    console.log(avg3([1, 2, 3])); 
//    function sum(arr, pow) {
//     let res = 0;
//     for (let elem of arr) {
//      res += elem ** pow;
//     }
//     return res;
// }
   
