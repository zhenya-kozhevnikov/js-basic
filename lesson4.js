/*    1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
       Функция должна расчитывать результат операции, исходя из переданного ей знака. 
       Функция должна проверять корректность введенных чисел и знака операции.
       Все аргументы для функции принять от пользователя.
*/

	function getOperand1(){
		var operand1 = +prompt("operand1");
			if (isNaN(operand1) || !isFinite(operand1) || operand1 == ""){
				alert("указанное значение " + operand1 + " невалидно");
				return false;
			}
			else {
				return operand1;
			}
	}
	
	function getOperand2(){
		var operand2 = +prompt("operand2");
			if (isNaN(operand2) || !isFinite(operand2) || operand2 == ""){
				alert("указанное значение " + operand2 + " невалидно");
				return false;
			}
			else {
				return operand2;
			}
	}
	
	function getSign(){
		var sign = prompt("sign");
			if (sign!=="+" && sign!=="-" && sign!=="*" && sign!=="/"){
				alert("указанное значение " + sign + " невалидно");
				return false;
			}
			else {
				return sign;
			}
	}

	function calculate(operand1, operand2, sign){
		if (operand1 === false || operand2 === false || sign === false){
			alert("введите валидные значения для операндов и/или знака операции");
		}
		else{
		var result;
			if (sign ==="+"){
				result = operand1 + operand2;
			}
			else if (sign ==="-"){
				result = operand1 - operand2;
			}
			else if (sign ==="*"){
				result = operand1 * operand2;
			}
			else if (sign ==="/"){
				result = operand1 / operand2;
			}
		alert(operand1 + sign + operand2 + " = " + result);
		}
	}
	

calculate(getOperand1(), getOperand2(), getSign());

//    2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
	
	// ECMAScript-1:
	var userBase = +prompt("укажите число возводимое в степень");
	var userExponent = +prompt("укажите степень в которую нужно возвести указанное число");
	function exponentiation(){
	alert("число " + userBase + " в степени " + userExponent + " равно " + Math.pow(userBase, userExponent));	
	}
	
	// ECMAScript-6:
	var userBase = +prompt("укажите число возводимое в степень");
	var userExponent = +prompt("укажите степень в которую нужно возвести указанное число");
	function exponentiation(){
	alert("число " + userBase + " в степени " + userExponent + " равно " + (userBase ** userExponent);
    }
	
/*     3.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
        "var computerChoice = Math.random();
        alert(computerChoice);".
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера. */


var gameItems = ["камень", "ножницы", "бумага"];
var gamePlayers = ["пользователь", "компьютер"];
var gameChoises = [];

	function setUserChoise(){
		var userChoise = +prompt("напишите свой выбор: [0] " + gameItems[0] + ", [1] " + gameItems[1] + " или [2] " + gameItems[2] + "?");
			if (userChoise !== 0 && userChoise !== 1 && userChoise !== 2){
				setUserChoise();
			}
			else {
				gameChoises.push(gameItems[userChoise]);
			}
	}

	function setCompChoise(){
		var compChoise = gameItems[Math.floor(Math.random() * gameItems.length)];
		gameChoises.push(compChoise);
		alert(gamePlayers[1] + " выбрал " + compChoise);
	}

	function checkWin (){
		if (gameChoises.includes(gameItems[0]) && gameChoises.includes(gameItems[1])){
			alert("ход игры: " + gamePlayers[0] + " выбрал " + gameChoises[0] + " " + gamePlayers[1] + " выбрал " + gameChoises[1] + ", побеждает " + gamePlayers[gameChoises.indexOf(gameItems[0])]);
		}
		else if (gameChoises.includes(gameItems[1]) && gameChoises.includes(gameItems[2])){
			alert("ход игры: " + gamePlayers[0] + " выбрал " + gameChoises[0] + " " + gamePlayers[1] + " выбрал " + gameChoises[1] + ", побеждает " + gamePlayers[gameChoises.indexOf(gameItems[1])]);
		}
		else if (gameChoises.includes(gameItems[0]) && gameChoises.includes(gameItems[2])){
			alert("ход игры: " + gamePlayers[0] + " выбрал " + gameChoises[0] + " " + gamePlayers[1] + " выбрал " + gameChoises[1] + ", побеждает " + gamePlayers[gameChoises.indexOf(gameItems[2])]);
		}
		else{
			alert("ничья");
		}

	}

	function launchGame(){
		setUserChoise();
		setCompChoise();
		checkWin();
	}

launchGame();

//    4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.

	var userInput =+prompt("укажите номер элемента (n) в последовательности Фибоначчи");

	function calculateFibonacci(n) {
		var a = 0;
		var b = 1;
		var c;
  
		for(i=3;i<=n;i++) {
			c = a + b;
			a = b;
			b = c;
		}
		alert("в последовательности Фибоначчи " + userInput +"-й элемент равняется " + b);
	}

	calculateFibonacci(userInput);