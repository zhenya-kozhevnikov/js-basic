//    1. По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
//    Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2.

var x1 = prompt("укажите положение первой точки по оси x");
var y1 = prompt("укажите положение первой точки по оси y");
var x2 = prompt("укажите положение второй точки по оси x");
var y2 = prompt("укажите положение второй точки по оси y");

var k = (y1 - y2) / (x1 - x2);
console.log("k = " + k);

var b = y2 - k*x2;
console.log("b = " + b);

console.log("Уравнение прямой: y = " +k +"*x + " +b);
    
//    2. Обменять значения двух переменных, используя третью (буферную) переменную.

var a = 1;
var b = 2;
var buffer;

console.log("до обмена:");
console.log("a = " + a);
console.log("b = " + b);

buffer = b;
b = a;
a = buffer;

console.log("после обмена:");
console.log("a = " + a);
console.log("b = " + b);
    
//    3. Объявите две переменные: admin и name. Запишите в name строку "Василий". Замените значение из name в admin. Выведите admin.

var admin;
var name = "Василий";
admin = name;
console.log("admin - " + admin);
    
//    4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран.

var name;
var surname;
var age;

var name = prompt("Введите свое имя");
var surname = prompt("Введите свою фамилию");
var age = prompt("Введите свой возраст");
    
alert("Данные текущего пользователя: имя - " + name + ", фамилия - " + surname + ", возраст - " + age);
    
//    5. Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом: "Ваш возраст ...(введеное пользователем число) лет?". Далее в зависимости от выбора пользователя выводится модальное окно с информацией true или false.

var age = prompt("Введите свой возраст");
var confirmation = confirm("Ваш возраст - " + age + " лет?");
alert(confirmation);