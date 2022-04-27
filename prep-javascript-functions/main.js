// function addTwoNumbers(x, y) {
//   return x + y;
// }

// var sum = addTwoNumbers(4, 4);
// console.log('sum', sum);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var conversion = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', conversion);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var person = getGreeting('Tom');
console.log('getGreeting exercise:', person);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var mathProblem = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise:', mathProblem);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var entireName = getFullName('John', 'Smith');
console.log('getFullName exercise:', entireName);

function cube(number) {
  // return Math.pow(number, 3);
  return number * number * number;
}

var cubedNumber = cube(5);
console.log('cube exercise:', cubedNumber);
