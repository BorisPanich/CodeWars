function noSpace(x){
  var unSpaced = ""
  for(var i= 0; i< x.length; i++){
    if(x[i] !== " "){
      unSpaced += x[i];
    }
  }
  return unSpaced;
}



function noSpace(x){
  return x.replace(/\s/g, '');
}


const noSpace=x=>x.split(" ").join("");


function noSpace(x){
   return x.replace(/ /g,'')
}


function noSpace(x){
 let arr =  x.split(' ');
 return arr.reduce((a,b)=>a+b);
}


