// console.log("argv", process.argv);

const args = process.argv.slice(2);

// console.log("args", args);

const sum = function(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    const item = args[i];
    const number = parseInt(item, 10);
    total += number;
  }

  return total;
};

console.log("Total:", sum(args));
