//    1. Сделать собственные примеры методов применяемых для массивов.

//join
var userArray = [1,2,3];
console.log("строка из значений массива userArray" + userArray.join(" - "));

//concat
var userArray1 = [1,2,3];
var userArray2 = ["a","b","c"];
console.log("склеенные значения из userArray1 и userArray2 - " + userArray1.concat(userArray2));

//reverse
var userArray = [1,2,3];
console.log("перевернутый userArray - " + userArray.reverse());

//slice
var userArray = [1,2,3];
console.log("извлеченный элемент userArray - " + userArray.slice(0,1));

//splice
var userArray = [1,2,3];
console.log("значения удаленные из userArray: " + userArray.splice(1, 2, 4, 5));
console.log("userArray с добавленными значениями: " + userArray);

//sort
var userArray = [1, 2, 3, 10, 25, 38];
console.log("восходящая сортировка - " + userArray.sort(function(a, b){return a-b}));
console.log("нисходящая сортировка - " + userArray.sort(function(a, b){return b-a}));

//push
var userArray = [1,2,3];
for (i=4;i<7;i++){
userArray.push(i);
}
console.log("значения добавленны в конец userArray - " + userArray);

//unshift
var userArray = [1,2,3];
for (i=4;i<7;i++){
userArray.unshift(i);
}
console.log("значения добавленны в начало userArray - " + userArray);

//pop
var userArray = [1,2,3,4,5,6];
for (i=0;i<3;i++){
userArray.pop();
}
console.log("значения удалены с конца userArray - " + userArray);

//shift
var userArray = [1,2,3,4,5,6];
for (i=0;i<3;i++){
userArray.shift();
}
console.log("значения удалены с начала userArray - " + userArray);

//fill
var userArray = Array(3);
console.log("userArray заполненный значением - " + userArray.fill(1));

//    2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
	
var userArrayLength = +prompt("input array length");
var userIndex = +prompt("input index");
var userValue = +prompt("input value");
var userArray = Array(userArrayLength).fill("placeholder");
userArray[userIndex+1] = userValue;
console.log(userArray);

//    3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3.

var userArrayLength = +prompt("input array length");
var userArray = Array(userArrayLength);
for (i=0;i<userArrayLength;i++){
if (i%2 === 0){userArray[i] = [i, "even", "even"]}
else {userArray[i] = [i, "odd", "odd"]}
console.log(userArray[i]);
}

// 4. Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, во втором - количество игроков в команде / объем двигателя / количество жителей в городе. Объединить данные из двух массивов и вывести их в одну строку. 

//решение с помощью строки:
var citiesArray = ["Paris", "London", "Berlin", "Rome", "Madrid"];
var populationArray = [2500000, 9000000, 3600000, 3000000, 3200000];
var resultString = "";
for (i=0;i<citiesArray.length;i++){
resultString = resultString + (citiesArray[i] + " = " + populationArray [i] + "; ");
}
console.log(resultString);

//решение с помощью дополнительного массива и строки:
var citiesArray = ["Paris", "London", "Berlin", "Rome", "Madrid"];
var populationArray = [2500000, 9000000, 3600000, 3000000, 3200000];
var resultArray = [];
var resultString = "";
for (i=0;i<citiesArray.length;i++){
resultArray.push(citiesArray[i] + " = " + populationArray [i]);
}
resultString = resultArray.join("; ");
console.log(resultString);