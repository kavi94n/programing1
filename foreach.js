arr = ['deepa','suresh','naveen']

arr.forEach(val=> console.log(val)
  
);


arr = ['kavi','raj','janu']
arr.forEach(print)

function print(val){
  console.log(val.toUpperCase())
}



arr.forEach((val,index,arr)=>{
  arr[index] = val.toUpperCase()
})
console.log(arr)