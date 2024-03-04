// Згенеровування масиву із 16 чисел
let array = [];
for (let i = 0; i < 16; i++) {
    array.push(Math.floor(Math.random() * 100)); // Генеруємо випадкові числа від 0 до 99
}

// Виведемо згенерований масив
console.log("Початковий масив:", array);

// Виберемо елементи з парними індексами
let evenPositions = [];
for (let i = 0; i < array.length; i += 2) {
    evenPositions.push(array[i]);
}

// Відсортуємо елементи у порядку спадання
evenPositions.sort(function(a, b) {
    return b - a;
});

// Виведемо відсортовані елементи
console.log("Елементи у парних позиціях, відсортовані у порядку спадання:", evenPositions);
