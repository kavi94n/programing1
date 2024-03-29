/*
let item = {
  name : 'phone',
  price:25000,
  quantity:1,
  categories:['electronics','phones'],
  dimensions:  {
    length:7,
    breadth:3.5,
    height:5
  }
}
console.log(item)

console.log(item.price)
item.price = 3000
console.log(item.price)

item.returnable = true
console.log(item)

console.log(item['price'])
item['returnable'] = false
console.log(item)

*/

let item = {
  name : 'phone',
  price:25000,
  quantity:1,
  buy : function(){
    console.log('item added to cart')
  },
  addToLisst(){
    console.log('item added to list')
  }

}
item.buy()
console.log(item);

