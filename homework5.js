// Таблицу с id="age-table".
let table = document.getElementById('age-table');
console.log(table);

// Все элементы label внутри этой таблицы (их три).
table.getElementsByTagName('label');

// Первый td в этой таблице (со словом «Age»).
table.getElementsByTagName('td')[0];

// Форму form с именем name="search".
let form = document.getElementsByName('search')[0];
console.log(table);

// Первый input в этой форме.
console.log(form.getElementsByTagName('input')[0]);

// Последний input в этой форме.
let inputs = form.querySelectorAll('input');
console.log(inputs[inputs.length-1]);