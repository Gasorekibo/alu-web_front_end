function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrimeNumbers(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
const startTime = performance.now();
setTimeout(() => {
  let functionCall = 1;
  while (functionCall <= 100) {
    countPrimeNumbers(2, 100);
    functionCall++;
  }
});
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(
  `Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`
);
