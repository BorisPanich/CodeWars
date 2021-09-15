var summation = function (num) {
   return (num) ? num + summation(num - 1) : num;
}


var summation = function (num) {
  var sum = 0;
  for (var i=0; i<=num; i++) {
    sum += i;
    }
  return sum;
}