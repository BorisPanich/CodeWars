var maxSequence = function(arr){
  var positive_index = []
 
  arr.filter(function positive_check(element, index){
    if(element>0){
      positive_index.push(index);
    }
  })
  
  if (positive_index.length == 0) return 0;
  
  var sum = Array(positive_index.length).fill(null).map(() => Array(positive_index.length));
  var max = Number.MIN_SAFE_INTEGER;

  for(var i=0; i<positive_index.length; i++){
    sum[i][i] = arr[positive_index[i]];
    if(max < sum[i][i]){
        max = sum[i][i];
    }
    if(i+1<positive_index.length){
      sum[i][i+1] = arr.slice(positive_index[i], positive_index[i+1]+1).reduce((a,b)=>a+b);
      if(max < sum[i][i+1]){
        max = sum[i][i+1];
      }
    }
  }
  
  for(var i=0; i< positive_index.length; i++){
    for(var j=i+2; j< positive_index.length; j++){
      sum[i][j] = sum[i][j-1] + sum[j-1][j] - arr[positive_index[j-1]];
      if(max < sum[i][j]){
        max = sum[i][j];
      }
    }
  }
  return max;
}