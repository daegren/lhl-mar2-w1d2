
const repeatValue = function(value, number) {
  let result = "";

  for (let i = 0; i < number; i++) {
    result += value.toString();
  }

  return result;
};

const repeatNumbers = function(data) {
  // Put your solution here
  const firstElement = data[0];
  const valueToRepeat = firstElement[0];
  const numberOfTimes = firstElement[1];

  const result = repeatValue(valueToRepeat, numberOfTimes);

  return result;
};

console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
