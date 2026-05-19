//write a function that recieves any number of arguments and return their sum

const findSum = (...numbers) => {
  return numbers.reduce((sum, el) => sum + el, 0)
}

let result = findSum(10, 20, 30)
console.log(result)