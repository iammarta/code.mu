Дана строка '12345'. Найдите сумму цифр этой строки.

let str = '12345';
let arr = str.split('');
let sum = 0;

for (let i = 0; i<arr.length; i++){
sum += +arr[i];
}

console.log(sum);
---------------------------------------------------------------
Дано число 12345. Найдите сумму цифр этого числа.

let num = 12345;
let arr = (''+num).split('');
let sum = 0;

for (let i = 0; i<arr.length; i++){
sum += +arr[i];
}
---------------------------------------------------------------
Дано число 12345. Найдите произведение цифр этого числа.

let num = 12345;
let arr = (''+num).split('');
let mul = 1;
for (let i = 0; i<arr.length; i++){
mul *= +arr[i];
}

console.log(mul);
---------------------------------------------------------------
Дано число 12345. Переставьте цифры этого числа в обратном порядке.

let num = 12345;
let arr = (''+num).split('').reverse().join('');
console.log(arr);
---------------------------------------------------------------
Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.

let arr = ['a', 'b', 'c'];
for(let i=0; i<arr.length; i++){
console.log(arr[i]);
}
---------------------------------------------------------------
Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.

let arr = ['a', 'b', 'c', 'd'];
let str = arr.join('+');
console.log(str);
---------------------------------------------------------------
Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.

let arr = [1,2,3];
let sum = 0;
for (let i=0;i<arr.length; i++){
sum += arr[i];
}
console.log(sum);
---------------------------------------------------------------
Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.

let obj = {'1a':1, '2b':2,'c-c':3 };
let sum = 0;
for(let key in obj){
sum +=obj[key];
}
console.log(sum);
---------------------------------------------------------------
Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.

let obj = {key1: 1, key2: 2, key3: 3};
let sum = 0;
for (let key in obj){
sum += obj[key];
}
console.log(sum);
---------------------------------------------------------------
let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
К каким элементам этого объекта допустимо обращение через свойство, а к каким - нет?

console.log(obj['1a'],obj.b2, obj['eee-'], obj.d4);
---------------------------------------------------------------
Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.

let obj = {name:'Marta', surname:'Kozak', patronymic: 'Sergiivna'};

for(let key in obj){
console.log(obj[key]+ ' ');
}
---------------------------------------------------------------
Создайте объект date (дата) с ключами year (год), month (месяц) и day (день) и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате 'год-месяц-день'.

let date = {year:2010, month: 'January', day: 'Monday'};
for (let key in date){
console.log(date[key]+ '-');
}
---------------------------------------------------------------
В переменной arr содержится некоторый массив с числами.

Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.

let arr = [1,2,3];
if(arr.length==3){
let sum = 0;
for(let i =0; i<arr.length; i ++){
sum+=arr[i];
}
alert(sum); 
}else{
alert('No');
}
---------------------------------------------------------------
Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

let num = 32;
let check = ''+num;
if(check[check.length-1] == 0){
console.log('yes');
}
else{
console.log('no');
}
---------------------------------------------------------------
Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.

let num = 10;
let check = ''+num;
if(check[check.length-1] ==0 || check[check.length-1] == 2 || check[check.length-1] == 4 || check[check.length-1] == 6 || check[check.length-1] ==8){
alert('Число парне');
}else{
alert('Число непарне');
}
---------------------------------------------------------------
Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком.

Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.

let num = 20;
if (num % 2 == 0){
alert('Число парне');
}else{
alert('Число непарне');
}
---------------------------------------------------------------
Дано число. Проверьте, что оно делится на 3.

let num = 9;
if(num % 3 == 0){
alert('yes');
}else{
alert('no');
}
---------------------------------------------------------------
Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = 'abcde';
if(str[0] == 'a'){
alert('yes');
}
else{
alert('no');
}
---------------------------------------------------------------
Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

