// Loop Fibonacci Sequence //

function Loop(n) {
    let fS = [0, 1]; 
    for (let i = 2; i < n; i++) { 
      let nextNumber = fS[i - 1] + fS[i - 2]; 
      fS.push(nextNumber); 
    }
    return fS; 
  }
  console.log(Loop(12)); // The first 12  numbers //


// Recursion Fibonacci Sequence //
function Recursive(n) {
    if (n === 0) return 0; 
    if (n === 1) return 1; 
    return Recursive(n - 1) + Recursive(n - 2);
  }
  console.log(Recursive(11)); // 11th number //

  // n is the number of inputs//

