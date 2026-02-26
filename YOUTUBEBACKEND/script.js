var arr=[1,2,3,4];

arr.forEach(function(val){
  console.log(val+" hello")
})

let ans = arr.map(function(val){
  return val+12;
})
console.log(ans) 

 let newarr=arr.filter(function(val){
  if(val>2){
    return true
  }
})
console.log(newarr)

let F=arr.find(function(val){
   if(val==2){
    return true;
   }else{return false}
})
console.log(F)


//OBJECTS

let obj={
  name:"Sarthak",
  age:21
}
