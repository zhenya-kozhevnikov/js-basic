// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var firstInput = +prompt("Введите первое число");
var secondInput = +prompt("Введите второе число");
var thirdInput = +prompt("Введите третье число");
var medianValue;

if (firstInput === secondInput || firstInput === thirdInput || secondInput === thirdInput) {
	alert("Ошибка!");
}
else {
	medianValue = (firstInput + secondInput + thirdInput) / 3;
	document.write ("Среднее арифметическое из набора чисел " + firstInput + ", " + secondInput + ", " + thirdInput + " равно " + medianValue);
}

// 2. Построить прямоугольный треугольник состоящий из символа "*".

//решение с помощью одного цикла:
var star = "";
for (i=0;i<5;i++){
star += "*";
console.log(star);
}

//решение с помощью цикла с вложенным вторым циклом:
var star = "";
for (i=0;i<5;i++){
for (j=0;j<1;j++){
star += "*";}
console.log(star);
}

// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var firstInput = +prompt("Введите первое число");
var secondInput = +prompt("Введите второе число");
var thirdInput = +prompt("Введите третье число");
var maxValue;
if (firstInput > secondInput) {
	if (thirdInput > firstInput) {
	maxValue = thirdInput;
	}
	else {maxValue = firstInput;}
	}
else {
if (thirdInput > secondInput) {
	maxValue = thirdInput;
	}
	else {maxValue = secondInput;}
}
document.write("Наибольшее число из набора чисел " + firstInput + ", " + secondInput + ", " + thirdInput + " - это " + maxValue);

// 4. Дано два числа A и B где (A<B). 
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");
var sum = 0;

if (a > b) {
alert("Ошибка. Число должно B быть больше числа A");
}
else {
for (j=a;j<b;j++){
	if (j>a && j<b) {
	sum = sum + j;
	}
}
console.log("Сумма чисел в промежутке от " + a + " до " + b + " равна " + sum);
for (i=a;i<b;i++){
	if (i%2 !== 0 && i > a ){
	console.log(i+ " - нечетное число в промежутке от " + a + " до " + b);
	}
}
}