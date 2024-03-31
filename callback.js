/*
function greetConsole(name){
  console.log('hello',name)
}

function greetHeading(name){
  const heading = document.querySelector(hi)
  heading.innerHTML = 'hello' +  name
}

function greet(callback){
  console.log(callback)
  callback('ram')
}


greet(greetConsole)

greet(name => {
  const heading = document.querySelector('hi')
  heading.innerHTML = 'hello' + name
})
*/
arr = ['kavi','raj','janu']

arr.forEach(print)

function print (val){
  console.log(val)
}


arr.forEach((val,index,arr) => {
  arr[index] = val.toUpperCase()
})
console.log(arr)


