function range (start, stop, step){
  var some_array = [];
  if (start === null || stop === null || step === null || start > stop || step < 0) {
  return some_array;

  } else {
    let counter = start;
    while (counter <= stop) {
      some_array.push(counter);
      counter += step;
      }
    }
return some_array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));