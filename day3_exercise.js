//Question 1: Checking tonnage if it meet the minimum requirement.
let procurementTonnage = 1000;
const minTonnage = 1000;

let meetRequirement = procurementTonnage >= minTonnage
console.log(meetRequirement)

//Question 2: Checking strictness
let costStr = '5000';
let costNum = 5000;
//using loose comparison that check only value
let resultOfVariable = costStr == costNum
console.log(resultOfVariable);
//Using strict that check the value and the data type
let result = costStr === costNum;
console.log(result);

//Question 3: validation of && logic
let dealerName = "Kulong"
let costUgx = 10000;

const isValid = dealerName.length >=2 && costUgx >=10000;
console.log(isValid)

//Question 4: Date manipulation

const saleDate = new Date();

const day = saleDate.getDate();
const month = saleDate.getMonth() + 1;
const year = saleDate.getFullYear();

// Construct the final string
const timestamp = `Sale on: ${day}/${month}/${year}`;

console.log(timestamp); 