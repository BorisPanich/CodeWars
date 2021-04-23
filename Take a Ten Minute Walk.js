function isValidWalk(walk) {
  if(walk.length === 10){
    var x = y = 0;
    walk.forEach(function(val){
      switch(val){
        case 'n':
          y++;
          break;
        case 's':
          y--;
          break;
        case 'w':
          x--;
          break;
        case 'e':
          x++;
          break;          
      }
    });
    return ( x === 0 && y === 0);
  } else {
    return false;
  }
}



function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}



function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}