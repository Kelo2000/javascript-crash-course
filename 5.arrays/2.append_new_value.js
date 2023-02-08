// generate an array from a string
let fruits = "avocado,tomato,banana".split(",") // returns ['avocado, 'tomato', 'banana']

fruits[3]="onions"
fruits[4]="orange"
// add an element to an array
fruits.push("pepper") // fruits now has ['avocado, 'tomato', 'banana', 'pepper']

console.log(`Do you love ${fruits[5]}?`) // expected output "Do you love pepper?"
