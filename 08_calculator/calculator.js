const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(num, pwr) {
	let num_arr = Array(pwr).fill(num);
  return num_arr.reduce((acc, curr) => acc * curr, 1); 
};

const factorial = function(num) {
  let arr = [];
	for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, curr) => acc * curr, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
