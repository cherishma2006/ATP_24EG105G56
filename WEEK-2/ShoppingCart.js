// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// TestData: 

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//filter
let r1=cart.filter((item)=>{
    if(item.inStock){
        return item
    }
});
console.log(r1)
//map
let r2=cart.map(item=>{
    return{name:item.name,totalprice:(item.price*item.quantity)}
})
console.log(r2)
//reduce
//3. Use reduce() to calculate grand total cart value
const grandTotal = cart.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);
console.log("Grand Total:", grandTotal);

//4. Use find() to get details of "Mouse"
const mouseDetails = cart.find(item => item.name = "Mouse");
console.log("Mouse Details:", mouseDetails);

 //5. Use findIndex() to find the position of "Keyboard"
 const keyboardIndex = cart.findIndex(item => item.name = "Keyboard");
console.log("Keyboard Index:", keyboardIndex);