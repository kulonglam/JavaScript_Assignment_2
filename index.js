//String concatenation using + operator
 let dealerName = "Peter"
 let dealerLocation = "Arua"
 let dealerProduct = "Maiz Grain"

 let dealerInformation = "Name: " + dealerName + " " + "Location: " + dealerLocation +" " + "Product: " + dealerProduct;
console.log(dealerInformation);


//String concatenation using backstick 
let information = `Name: ${dealerName} Location: ${dealerLocation} Product: ${dealerProduct}`
console.log(information);

//Type Checking and Conversion
let num = 42;
let str = "123";
let bool = true;
let undefine;
let nul = null;

console.log(typeof num);       
console.log(typeof str);       
console.log(typeof bool);               
console.log(typeof undefine);   
console.log(typeof nul);  

// String to Number
let strToNum = Number(str); 
console.log(`"${str}" as number:`, strToNum, "| type:", typeof strToNum);

// Number to String
let numToStr = String(num); 
console.log(`${num} as string:`, numToStr, "| type:", typeof numToStr);

// Boolean Conversion
console.log("Boolean(1):", Boolean(1));      
console.log("Boolean(0):", Boolean(0));      
console.log("Boolean('hello'):", Boolean("hello")); 
console.log("Boolean(''):", Boolean(""));    

//Apply multiple string methods to manipulate and analyze string
let word = "hello kulong! "
console.log(word.toUpperCase());
 
let product = "GRAIN MAIZE";
console.log(product.toLowerCase()); 

let input = "   beans   ";
console.log(input.trim());  

let mixedCategories = "beans|maize|cow peas";
console.log(mixedCategories.split("|"));         


let code = "KGL-BEANS";
console.log(code.replace("-", ":"));   

