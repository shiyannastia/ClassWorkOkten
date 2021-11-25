// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNum = (n1, n2, n3) => {
    if (n1 < n2 && n1 < n3) {
        console.log(n1);
    } else if (n2 < n3 && n2 < n1) {
        console.log(n2);
    } else {
        console.log(n3);
    }
};
minNum(2, 3, 4);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNum = (n1, n2, n3) => {
    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    } else if (n2 > n3 && n2 > n1) {
        console.log(n2);
    } else {
        console.log(n3);
    }
};
maxNum(2, 3, 4);

// - створити функцію яка повертає найбільше число з масиву
let array = [22, 4, 24, 10, 23, 9, 12, 2];

let maxArr = arr => {
    let max = arr[0];
    for (const element of arr) {
        if (element > max) {
            max = element;
        }
    }
    return max;
};
console.log(maxArr(array));

// - створити функцію яка повертає найменьше число з масиву
let minArr = arr => {
    let min = arr[0];
    for (const element of arr) {
        if (element < min) {
            min = element;
        }
    }
    return min;
};
console.log(minArr(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArr = arr =>{
    let sum = 0;
    for (const element of arr) {
        sum = element + sum;
    }
    return sum;
};
console.log(sumArr(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let averageArr = arr => {
    let sum = 0;
    for (const element of arr) {
        sum = element + sum;
    }
    return sum / arr.length;
};
console.log(averageArr(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let allArr = (...argument) => {
    let max = argument[0];
    let min = argument[0];
    for (const element of argument) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log(max);
    return min;
}
console.log(allArr(2, 5, 6, 67, 54, 3));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomArr = length => {
    let array = [];
    for (let i = 0; i < length; ++i) {
        array[i] = Math.floor(Math.random() * 100);
        // console.log(array[i]);
    }
    return array;
}
console.log(randomArr(4));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let newRandomArr = (length, limit) => {
    let array = [];
    for (let i = 0; i < length; ++i) {
        array[i] = Math.floor(Math.random() * limit);
        console.log(array[i]);
    }
    return array;
}
console.log(newRandomArr(4, 30));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let backArr = arr => {
    let newArr = [];
    for (let i = arr.length - 1, bi = 0; i >= 0; --i, ++bi) {
        newArr[bi] = arr[i];
    }
    console.log(arr)
    return newArr;
}
console.log(backArr([1, 2, 3]))