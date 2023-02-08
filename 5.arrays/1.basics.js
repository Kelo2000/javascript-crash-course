// generate an array from a string
let fruits = "avocado,tomato,banana".split(",") // returns ['avocado, 'tomato', 'banana']

console.log(`Do you love ${fruits[1]}?`) // expected output "Do you love tomato?"


// generate an array from a string
let fruit = "avocado tomato banana".split(" ") // returns ['avocado, 'tomato', 'banana']

console.log(`Do you love ${fruit[0]}?`) // expected output "Do you love tomato?"
