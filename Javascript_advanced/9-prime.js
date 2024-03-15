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
  console.log(`count ${count}`);
}

const startTime = performance.now();
countPrimeNumbers(2, 20);
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(
  `Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`
);
