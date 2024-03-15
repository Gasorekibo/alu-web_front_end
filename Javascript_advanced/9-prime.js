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
  const startTime = performance.now();
  
  let count = 0;
  for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
          count++;
      }
  }
  
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  
  console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
  
  return count;
}

countPrimeNumbers(2,100);
