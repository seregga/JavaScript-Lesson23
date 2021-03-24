
const weight = prompt('Введите вес в кг:');
const height = prompt('Введите рост в см:');
const result = (weight / ((height / 100) ** 2));

if (result <= 16) {
   alert('Выраженный дефицит');
}
if (result >= 16 && result <= 18.5) {
   alert('Недостаточная (дефицит) масса тела');
}
if (result >= 18.5 && result <= 25) {
   alert('Норма');
}
if (result >= 25 && result <= 30) {
   alert('Избыточная масса тела (предожирение)');
}
if (result >= 30 && result <= 35) {
   alert('Ожирение');
}
if (result >= 35 && result <= 40) {
   alert('Ожирение резкое');
}
if (result >= 40) {
   alert('Очень резкое ожирение');

}

// alert(weight / height * height);

// let str1 = 'Привет'; // string
// let str2 = '10'; // string
// let str3 = '10gdfgfdgdfgdf'; // string
// let num1 = 10; // number
// let num2 = 3; // number
// let num3 = -10; // number
// let bool = true; // boolean

// let result = str1;
// alert(result)


// let result = str1 + ', мир'; // пробел после запятой учитывается


// let result = num1 + str2; // при сложении строки и числа получится строка  1010


// let result = num1 - str2; // при вычитании умножении и делении,строки и числа, получится число в данном случае 0


// let result = num1 + +str2; // добавив "+" мы из строки делаем число в итоге получим 20


// let result = num1 + parseInt(str3); // добавив "parseInt" мы из строки делаем число (обрезая все лишнее кроме числа 10 в переменной str3. если перед 10 поставить любую букву о получится Nan )в данном случае 20 


// num1 = num1 + 1 или num1++ // увеличивает число на 1.  


// num1 = num1 - 1 или num1-- // уменьшает число на 1. 

// let result = num1 + num2++; // в итоге получим 13 а num2 в следующей строке(result = num2) будет равно 4


// let result = num1 + ++num2; // в итоге получим 14


// let temp = num1 + num2;
// num2++;
// num2 = num1 + num2;
// let result = num2; // в результате 14


// let temp = num1 + num2++;
// num2 = temp + num1;
// num2 = num1 + num2;
// let result = num2; // в результате 33


// let temp = num1 + num2++;
// num2 = temp + num2;
// num2 = num1 + num2;
// let result = num2; // в результате 27


// num2 = num2 + num1 или num2 += num1; // в результате 13 (сокращенная запись, с другими знаками аналогично)


// let result = num1 ** num2; //d итоге получим 1000 (10 в 3й степени)


// let result = num1 % num2; // в итоге получим 1  остаток от деления 


// let result = num1 + ++num2;
// num2 = num2 + result;
// result = num2 + str2; // в итоге получим 1810 (строка)


// let result = num1 + ++num2;
// num2 = num2 + result;
// result = num2 - str2; // в итоге получим 8 


// {
//    const constantVariable = 10; // константа (не переназначить)
//    let simpleVariable = 10;
//    var oldSimpleVariable = 10; // legacy (устарела, не использовать)
//    globalVariable = 10; //глобальная переьенная видна за пределами блока кода 
// }
// let result = globalVariable;
// alert(typeof (result), result);


// 'use strict'; // покажет глобальную переменную как ошибку (надо использовать в начале кода что бы избежать глоб. переменных) 
// let variable = 15;
// variabl = 20; // хотели переназначить для variable значение с 15 на 20, но из-за опечатки (забыли "е" в конце) variabl становится глобальной переменной (что приведет к серьезным ошибкам в коде)
// let result = variable;
// alert(typeof (result), result);



// let variable = 10;
// const variable2 = 15;
// variable = 20;
// variable2 = 25; // константу нельзя переназначить (получим ошибку)
// let result = variable;
// alert(typeof (result), result);


// let one = +'10'; // добавив + мы преобразовали строку в число, но если добавить буквы к 10 ('10ghjhg') то получим в консоли number Nan
// let two = parseInt('12'); // добавив parseInt мы тоже преобразовали строку в число но если добавить буквы к 12 ('12hgjhg') то ничего не изменится  получим в консоли number 12
// let three = Number('15'); // добавив Number мы снова преобразовали строку в число но если добавить буквы к 15 ('15ghjhg') то получим в консоли number Nan
// let str1 = 20 + ''; // добавив +'' мы преобразовали число в строку 
// let str2 = two.toString(); // добавив .toString мы преобразовали число в строку 
// let str3 = String(17); // добавив String мы записали строку 
// let result = str3;
// alert(typeof (result), result);

// // Значения равные false
// let result = false; //false
// result = null; //false
// result = undefined; //false
// result = 0; //false
// result = ''; //false
// result = NaN; //false
// result = isNaN(result); //true потому, что в предидущей строке NaN
// alert(!!result); // с помощью !! проверяем на true и false


// const trueVar = true;
// const falseVar = false;
// const logic = trueVar;
// if (trueVar) { //если if true то в консоли будет правда если лож то ничего
//    alert('Правда');
// }


