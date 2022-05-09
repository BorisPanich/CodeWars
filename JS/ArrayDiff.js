function arrayDiff(a,b){
   let John = [];

  if (a.length === 0) {
    return [];
  }
  for (i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      John.push(a[i]);
    }
  }

  for (i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      John.push(b[i]);
    }
  }
  return John
}