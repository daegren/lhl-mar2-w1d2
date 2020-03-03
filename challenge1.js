// console.log("argv", process.argv);

const args = process.argv.slice(2);

// console.log("args", args);

// Whole numbers % 1 will always be 0
const isWholeNumber = function(number) {
  return number % 1 === 0;
};

const sum = function(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    const item = args[i];
    const number = parseFloat(item, 10);

    if (isWholeNumber(number)) {
      total += number;
    }
  }

  return total;
};

console.log("Total:", sum(args));
