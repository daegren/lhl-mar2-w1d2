
const repeatValue = function(value, number) {
  let result = "";

  for (let i = 0; i < number; i++) {
    result += value.toString();
  }

  return result;
};

const repeatNumbers = function(data) {
  // Put your solution here
  let result = "";
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const valueToRepeat = element[0];
    const numberOfTimes = element[1];
  
    result += repeatValue(valueToRepeat, numberOfTimes);
    if (i !== data.length - 1) {
      result += ", ";
    }
  }

  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
