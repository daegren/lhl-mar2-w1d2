// console.log("argv", process.argv);

const args = process.argv.slice(2);

// console.log("args", args);

let total = 0;
for (let i = 0; i < args.length; i++) {
  const item = args[i];
  // console.log("Item", item, typeof item);
  const number = parseInt(item, 10);
  // console.log("number", number, typeof number);
  total += number;
}

console.log("Total:", total);
