// Define a function named test_prime that checks whether a given number n is a prime number
function test_prime(n) {
    let isPrime;
    // Check if the number is equal to 1, which is not a prime number
    if (n === 1) {
      isPrime= false;
    }
    // Check if the number is equal to 2, which is a prime number
    else if (n === 2) {
      isPrime=true
      
    } else {
      for (let x = 2; x <n; x++) {
        // If n is divisible by x without a remainder, it is not a prime number
        if (n % x === 0) {
          isPrime=false;
          break;
        }
      }
      return isPrime;  
    }
  };
const answer = test_prime(100);
console.log(answer)
