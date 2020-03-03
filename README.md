# The Dev Workflow

## Challenges

### Challenge #1

> Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.

```
$ node challenge1.js 1 2 3 4 5
15
```

- [x] How to read command line arguments?
  - `process.argv`
  - `process.argv.slice(2)` - removes the first two elements from the args
- How to sum a list of numbers?
  - Loop through it
    - `forEach`, `for .. in`, `for(initializer;condition;incrementor)`
  - Convert each value to a number
  - add it to our total counter
- How to check if a number is a whole number?
- Negative numbers should be supported

### Challenge #2

> [Kata 6: Repeating Numbers](https://web.compass.lighthouselabs.ca/activities/642)
