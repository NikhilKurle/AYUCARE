```javascript
function remainingElement(N, A) {
  while (N > 1) {
    A.sort((a, b) => b - a);
    if (A[0] === A[1]) {
      N--;
      A.shift();
    } else {
      N -= 2;
      A.unshift(Math.abs(A[0] - A[1]));
    }
  }
  return A[0];
}

// INPUT [uncomment & modify if required]
var N = +readline();
var A = readline().split(' ').map(Number);

// OUTPUT [uncomment & modify if required]
console.log(remainingElement(N, A));
```