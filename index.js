/*
Задача 1
Вы должны реализовать функцию, которая возвращает разницу между наибольшим
и наименьшим значением в списке , полученном в качестве аргумента функции.
Массив, который получает функция в качестве аргумента, может содержать
положительные и отрицательные числа. Если массив пуст или имеет одно 
значение, верните ноль. Изначально, массив будет подан в неотсортированном виде.
*/

function difference(array) {
    array.sort((a, b) => a - b);
    return array.length > 1 ? array[array.length - 1] - array[0] : 0;
}


console.log("Task 1 --> " + difference([1, 3, 2, 4, 6, 33, 5, 3, -2, -55, 3, -1]) + "\n\n");


/*
Задачка 2
Напишите функцию, которая принимает в себя строку и число.
 Верните, в виде массива, только те слова,
длинна которых превышает число.
*/
function checkLineLong(lines, long) {
    return lines.filter(str => str.length > long);
}

console.log("Task 2 --> " + checkLineLong(["Рыба", "карась", "игра", "началась"], 5) + "\n\n");

/*
Задача 3
В нашем неотсортированном массиве, 
где находятся числа от 0 до 9, потерялась одна цифра. 
Мы не знаем какая и нам нужно её найти
*/
function findNum(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length + 1; i++)
        if (arr[i] != i)
            return i;
}

console.log("Task 3 --> " + findNum([9, 2, 4, 5, 3, 0, 8, 6, 1]) + "\n\n");

/*
Напишите функцию, которая возвращает true, если первый 
переданный аргумент (строка) заканчивается вторым аргументом (также строкой).
*/
function strstr(strf, strs) {
    return strf.endsWith(strs);
}

console.log("Task 4 --> " + "(mozilla, moz) " + strstr("mozilla", "moz") + "\t\t(mozilla, illa) " + strstr("mozilla", "illa") + "\n\n");

/*
Задача 5
Напишите функцию, который получает массив целых чисел и возвращает 
массив средних значений каждого целого числа и его последователя, если он есть.
*/
function averages(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++)
        if (i === 0) continue;
        else
            result[i - 1] = (arr[i - 1] + arr[i]) / 2;

    return result;
}

console.log("Task 5 --> " + averages([1, 3, 5, 1, -10]) + "\n\n");


/*
Задача 6
Напишите функцию, которая принимает в себя любое неотрицательное число,
 а возвращает максимальн возможное значение из цифр этого числа.
*/
function getMaxValue(num) {
    if (num < 0)
        return null;
    return Number(String(num).split('').sort((a, b) => b - a).join(''));
}
console.log("Task 6 --> 42145 -> " + getMaxValue(42145) + "\n\n");

/*
Создайте функцию, которая принимает строку имени и проверяет,
насколько хорошо данное имя. Предварительно загруженный словарь
 оценок алфавита доступен на вкладке «Код». Сложите буквы своего
  имени, чтобы получить общий балл.
 */
const scores = {
    "A": 100,
    "B": 14,
    "C": 9,
    "D": 28,
    "E": 145,
    "F": 12,
    "G": 3,
    "H": 10,
    "I": 200,
    "J": 100,
    "K": 114,
    "L": 100,
    "M": 25,
    "N": 450,
    "O": 80,
    "P": 2,
    "Q": 12,
    "R": 400,
    "S": 113,
    "T": 405,
    "U": 11,
    "V": 10,
    "W": 10,
    "X": 3,
    "Y": 210,
    "Z": 23
}

function nameScore(name) {
    let total = 0;
    name.split('').forEach(element => {
        total += scores[element];
    });
    return total <= 60 ? "NOT TOO GOOD" : 61 <= total && total <= 300 ? "PRETTY GOOD" :
        301 <= total && total <= 599 ? "VERY GOOD" : "THE BEST";
}

console.log("Task 7 --> ANDREI-> " + nameScore("ANDREY") + "\n\n");

/*
8
Создайте функцию, которая принимает строку и возвращает 
количество (количество) гласных, содержащихся в ней.
*/
function countVowels(str) {
    return str.toLowerCase().match(/[aeiou]/gi).length;
}

console.log("Task 8 --> Celebration -> " + countVowels("Celebration") + "\n\n");

/*
9
Создайте функцию, которая удалит буквы «a», «b» и «c» из данной строки и вернет измененную версию.
 Если данная строка не содержит «a», «b» или «c», вернуть null.
*/
function removeABC(str) {
    let ss = str.replace(/[bacABC]/g, '');
    if (ss === str)
        return null;

    return ss;
}

console.log("Task 9 --> This might be a bit hard -> " + removeABC("This might be a bit hard") + "\n\n");

/*
10
Напишите функцию JavaScript для поиска уникальных элементов из двух массивов.
*/

function Difference(arr1, arr2) {
    return arr1.concat(arr2.filter(x => !arr1.includes(x))).sort((a, b) => a - b);
}

console.log("Task 10 --> [1, 2, 3], [100, 2, 1, 10] -> " + Difference([1, 2, 3], [100, 2, 1, 10]) + "\n\n");

/*
11
Напишите функцию, чтобы получить копию объекта, где ключи стали значениями, а значения - ключами.
*/


let a = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
};

function swap(obj) {
    return Object.entries(obj).reduce((acc, [value, key]) => {
        acc[key] = value;
        return acc;
    }, {})
}
console.log("Task 11 --> ");
console.log(a);
console.log(" to ")
console.log(swap(a));

/*
Задача 12
Ивана Иванова обокрали. Но его вещи были застрахованы на определенную сумму.
 Учитывая украденные вещи и ограничение страховки, верните разницу между 
 общей стоимостью этих вещей и пределом политики
*/
function calculateDifference(obj, insurance) {
    let sum;
    if (Object.keys(obj.length !== 0)) {
        sum = Object.entries(obj).reduce((sum, [key, value]) => sum += value, 0);
        if (sum > insurance)
            return sum - insurance;
    }

    return null;
}

console.log("Task 12 --> { skate: 200, painting: 200, shoes: 1 }, 400 -> " + calculateDifference({
    skate: 200,
    painting: 200,
    shoes: 1
}, 400) + "\n\n");

/*
13
Создайте функцию вращения влево и вправо, которая возвращает все вращения строки влево и вправо.
*/
function rightRotations(str) {
    let result = [str];
    for (let i = 1; i < result[0].length; i++) {
        result[i] = result[i - 1];
        result[i] = (result[i][result[i].length - 1] + result[i]).slice(0, str.length);
    }

    return result;
}

function leftRotations(str) {
    let result = [str];
    for (let i = 1; i < result[0].length; i++) {
        result[i] = result[i - 1];
        result[i] = (result[i] + result[i][0]).slice(1);
    }
    return result;
}

console.log("Task 13 left --> abc -> " + leftRotations('abc') + "\n\n");
console.log("Task 13 right --> abc -> " + rightRotations('abc') + "\n\n");

/*
Задача 14
Напишите функцию, которая принимает три измерения кирпича:
 высоту (a), ширину (b) и глубину (c) и возвращает истину,
  если этот кирпич может поместиться в отверстие с шириной
   (w) и высотой (h).
*/

function doesBrickFit(a, b, c, w, h) {
    let brick = [a, b, c];

    let matchWidth = brick.filter((b) => b <= Math.min(w, h))[0];
    let matchWidthIndex = brick.indexOf(matchWidth);

    if (matchWidthIndex === -1) return false;

    brick.splice(matchWidthIndex, 1);
    let matchHeight = brick.filter((b) => b <= Math.max(w, h))[0];

    return matchHeight !== undefined;
}

console.log("Task 14  --> 1, 2, 1, 1, 1 -> " + doesBrickFit(1, 2, 1, 1, 1) + "\n\n");
console.log("Task 14  --> 1, 2, 2, 1, 1 -> " + doesBrickFit(1, 2, 2, 1, 1) + "\n\n");