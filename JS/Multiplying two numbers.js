
const multiply = (a, b) => a * b;


function multiply(a, b){
  if(typeof a == 'number' && typeof b == 'number')
    return a * b;  
}


const multiply = (...numbers) => numbers.reduce((acc, curr) => acc * curr);



const multiply = Math.imul