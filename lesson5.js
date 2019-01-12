    /*1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий,
       в каком квадранте в декартовой системе координат находится данная точка.
       Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant. */
	   
		var point = {
			x: 0,
			y: 0,                                  
			getQuadrant: function(){
				if (this.x === 0 || this.y === 0){
					alert("точка с такими координатами лежит на одной из осей или на нуле, рассчет квадранта невозможен");
				}
				else {
					var quadrantNumber;
					if(this.x < 0){
						if (this.y > 0){
							quadrantNumber = "II";
						}
						else {
							quadrantNumber = "III";
						}
					}
					else {
						if (this.y > 0){
							quadrantNumber = "I";
						}
						else {
							quadrantNumber = "IV";
						}
					}
					alert("x = " + this.x + " ,y = " + this.y + ", указанная точка находится в " + quadrantNumber + " квадранте");
				}
			}
		};
		
		point.x=1;
		point.y=1;
		point.getQuadrant();

    
    /*2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
       Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
       В зависимости от принятого знака операции, вызвать соответствующий метод.*/

		var calculator = {
			operand1: 0,
			operand2: 0,
			arSign: "+",
			addOperands: function(){			
				alert(this.operand1 + " + " + this.operand2 + " = " + (this.operand1 + this.operand2));
			},
			subtractOperands: function(){
				alert(this.operand1 + " - " + this.operand2 + " = " + (this.operand1 - this.operand2));
			},
			multiplyOperands: function(){
				alert(this.operand1 + " * " + this.operand2 + " = " + (this.operand1 * this.operand2));
			},
			divideOperands: function(){
				alert(this.operand1 + " / " + this.operand2 + " = " + (this.operand1 / this.operand2));
			}
		};
		
		function getOperand1(){
		calculator.operand1 = +prompt("укажите первый операнд","1");
			if (isNaN(calculator.operand1) || !isFinite(calculator.operand1) || calculator.operand1 == ""){
				alert("указанное значение " + calculator.operand1 + " невалидно");
				getOperand1();
			}
			else {
				return calculator.operand1;
			}
		}

		function getOperand2(){
		calculator.operand2 = +prompt("укажите второй операнд","2");
			if (isNaN(calculator.operand2) || !isFinite(calculator.operand2) || calculator.operand2 == ""){
				alert("указанное значение " + calculator.operand2 + " невалидно");
				getOperand2();
			}
			else {
				return calculator.operand2;
			}
		}

		function getSign(){
			calculator.arSign = prompt("укажите знак арифметической операции","+");
				if (calculator.arSign!=="+" && calculator.arSign!=="-" && calculator.arSign!=="*" && calculator.arSign!=="/"){
					alert("указанное значение " + calculator.arSign + " невалидно");
					getSign();
				}
				else {
					return calculator.arSign;
				}
		}

		function doCalculation(){
			switch(calculator.arSign){
				case "+":
					calculator.addOperands();
					break;
				case "-":
					calculator.subtractOperands();
					break;
				case "*":
					calculator.multiplyOperands();
					break;
				case "/":
					calculator.divideOperands();
					break;
			}
		}
		
		function launch (){
			getOperand1();
			getOperand2();
			getSign();
			doCalculation();
		}
		
		launch();

    /*3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
       содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
       Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.*/
	   
		var employeeList = new Array(2);
		
		function fillEmployeeList(){
			for (i=0;i<employeeList.length;i++){
			employeeList[i] = {
				name:"",
				sName:"",
				age:"",
				occupation:"",
					show: function(){
						return (this.name + " " + this.sName + " " + this.age + " " + this.occupation);
					}
				};
			employeeList[i].name = prompt("укажите имя", "John");
			employeeList[i].sName = prompt("укажите фамилию", "Doe");
			employeeList[i].age = prompt("укажите возраст", "40");
			employeeList[i].occupation = prompt("укажите должность", "manager");
			employeeList[i].show();
			}
		}
		
		function displayEmployeeList(){
			employeeList.forEach(function(employeeEntry) {
			console.log(employeeEntry.show());
			});
		}

		fillEmployeeList();
		displayEmployeeList();
    
    /*4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
       будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
       Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
           • "director" — 3000;
           • "manager" — 1500;
           • "programmer" — 2000;
           • для остальных значений — 1000.
       После выполнения функции — вывести информацию о сотрудниках.*/
	   
	function addSalary(entry){
		switch(entry.occupation){
				case "director": {
					entry.salary = 3000;
					entry.show = function(){return (this.name + " " + this.sName + " " + this.age + " " + this.occupation + " " + this.salary);}
					break;
				}
				case "manager": {
					entry.salary = 1500;
					entry.show = function(){return (this.name + " " + this.sName + " " + this.age + " " + this.occupation + " " + this.salary);}
					break;
				}
				case "programmer": {
					entry.salary = 2000;
					entry.show = function(){return (this.name + " " + this.sName + " " + this.age + " " + this.occupation + " " + this.salary);}
					break;
				}
				default: {
					entry.salary = 1000;
					entry.show = function(){return (this.name + " " + this.sName + " " + this.age + " " + this.occupation + " " + this.salary);}
					break;
				}
		}	
	}
	
	function updateWithSalary(arr){
			for(j=0;j<arr.length;j++){
				addSalary(arr[j]);
			}
		displayEmployeeList();
		}
	   
	// и в конце кода, где вызываются все функции, необходимо добавить запуск этой тоже:
	updateWithSalary(employeeList);
           
		   
		   
    /*5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
       Параметр для сортировки принимается от пользователя.
       После выполнения функции — вывести информацию о сотрудниках.*/
	   
function getSortCriteria(){
	var sortCriteria = prompt("по какому параметру сортировать?", "имя");
	switch (sortCriteria){
		case "имя":
			return "name";
			break;
		case "фамилия":
			return "sName";
			break;
		case "возраст":
			return "age";
			break;
		case "должность":
			return "occupation";
			break;
		case "зарплата":
			return "salary";
			break;
	}
}

function sortAlgorithm(a,b) {
    if ( a[getSortCriteria()] < b[getSortCriteria()] ) return -1;
    if ( a[getSortCriteria()] > b[getSortCriteria()] ) return 1;
    return 0;
} 

function updateWithSorting(sortedArr){
	for (i=0;i<sortedArr.length;i++){
		console.log(sortedArr[i].show());
	}
}

// и в конце кода, где вызываются все функции, необходимо добавить запуск этих тоже:

getSortCriteria();
updateWithSorting(employeeList.sort(sortAlgorithm));
	   
	