// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//  Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.

array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

sum = 0;
ammount = 0;

for (i = 0; i < array.length; i++) {
    sum += array[i];

    if (array[i] > 0) ammount++;
}

console.log(`Сумa елементів масиву ${sum}.
Кількість позитивних елементів ${ammount}.`);

minimumElement = array[0];
indexOfMinElement = 0;

for (i = 1; i < array.length; i++) {
    if (minimumElement > array[i]) {
        minimumElement = array[i];
        indexOfMinElement = array.indexOf(minimumElement);
    }
}

console.log(`Мінімальний елемент масиву:${minimumElement}.
Його порядковий номер:${indexOfMinElement}.`);

maximumElement = array[0];
indexOfMinElement = 0;

for (i = 1; i < array.length; i++) {
    if (maximumElement < array[i]) {
        maximumElement = array[i];
        indexOfMinElement = array.indexOf(maximumElement);
    }
}

console.log(`Максимальний елемент масиву:${maximumElement}.
Його порядковий номер:${indexOfMinElement}.`);

ammountOfNegativeElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] < 0) ammountOfNegativeElements++;
}

console.log(`Кількість негативних елементів ${ammountOfNegativeElements}.`);

ammountOfOddPositiveElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        ammountOfOddPositiveElements++;
    }
}

console.log(`Кількість непарних позитивних елементів ${ammountOfOddPositiveElements}.`);

ammountOfEvenPositiveElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        ammountOfEvenPositiveElements++;
    }
}

console.log(`Кількість парних позитивних елементів ${ammountOfEvenPositiveElements}.`);

sumOfEvenPositiveElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        sumOfEvenPositiveElements += array[i];
    }
}

console.log(`Сума парних позитивних елементів ${sumOfEvenPositiveElements}.`);

sumOfOddPositiveElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        sumOfOddPositiveElements += array[i];
    }
}

console.log(`Сума непарних позитивних елементів ${sumOfOddPositiveElements}.`);

multipleOfPositiveElements = 1;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0){
        multipleOfPositiveElements *= array[i];
    }
}

console.log(`Добуток позитивних елементів ${multipleOfPositiveElements}.`);

maximumElement = array[0];

for (i = 1; i < array.length; i++) {
    if (maximumElement < array[i]) {
        maximumElement = array[i];
    }
}

console.log(`Найбільший серед елементів масиву: ${maximumElement}.`);

for (i = 0; i < array.length; i++) {
    if (maximumElement > array[i]) {
        delete array[i];
    }
}

console.log(array);