// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18], i;
// 1. перебрати його циклом while
i = 0;
while (i < array.length) {
    // document.write(array[i] + '  ');
    i++
}
// 2. перебрати його циклом for
for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < array.length) {
    if (i % 2 === 1) {
        // document.write(array[i] + '  ');
    }
    i++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let n = 0; n < array.length; n++) {
    if (n % 2 === 1) {
        // console.log(array[n]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < array.length) {
    if (i % 2 === 0) {
        // document.write(array[i] + '  ');
    }
    i++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let g = 0; g < array.length; g++) {
    if (g % 2 === 0) {
        // console.log(array[g]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let p = 0; p < array.length; p++) {
    if (array[p] % 3 === 0) {
        array[p] = 'okten';
        // console.log(array[p]);
    }
}
// 8. вивести масив в зворотньому порядку.
let arrayBack = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arrayBack.length - 1; i >= 0; i--) {
    console.log(arrayBack[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
i = arrayBack.length - 1;
while (i >= 0) {
    document.write(arrayBack[i] + '  ');
    i--
}
//////////
for (let i = arrayBack.length - 1; i >= 0; i--) {
    console.log(arrayBack[i]);
}
//////////
i = arrayBack.length - 1;
while (i >= 0) {
    if (i % 2 === 1) {
        document.write(arrayBack[i] + '  ');
    }
    i--
}
////////////
for (let n = arrayBack.length - 1; n >= 0; n--) {
    if (n % 2 === 1) {
        console.log(arrayBack[n]);
    }
}
////////////
i = arrayBack.length - 1;
while (i >= 0) {
    if (i % 2 === 0) {
        document.write(arrayBack[i] + '  ');
    }
    i--
}
////////////
for (let n = arrayBack.length - 1; n >= 0; n--) {
    if (n % 2 === 0) {
        console.log(arrayBack[n]);
    }
}
///////////
for (let p = arrayBack.length - 1; p >= 0; p--) {
    if (arrayBack[p] % 3 === 0) {
        arrayBack[p] = 'okten';
        console.log(array[p]);
    }
}