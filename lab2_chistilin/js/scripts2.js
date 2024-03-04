function each(array, func) {
    for (let i = 0; i < array.length; i++) {
      array[i] = func(array[i]);
    }
    return array;
  }
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = each(numbers, function(num) {
    return num * 2;
  });
  
  console.log(doubledNumbers); // Виведе: [2, 4, 6, 8, 10]
  