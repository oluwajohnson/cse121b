/* LESSON 3 - Programming Tasks */
function add(number1, number2){
    return number1 + number2
}
function substract(number1, number2){
    return number1 - number2
}
function divide(number1, number2){
    return number1 / number2
}
function product(number1, number2){
    return number1 * number2
}
/* FUNCTIONS */
/* Function Definition - Add Numbers */

function addNumbers(){
    let  addNumber1 = Number(document.querySelector('#add1').value)
    let  addNumber2 = Number(document.querySelector('#add2').value)
  return  document.querySelector('#sum').value=add(addNumber1,addNumber2)
}
document.querySelector('#addNumbers').addEventListener('click',addNumbers)

/* Function Expression - Subtract Numbers */
function substractNumbers(){
    let  substractNumber1 = Number(document.querySelector('#subtract1').value)
    let  substractNumber2 = Number(document.querySelector('#subtract2').value)
  return  document.querySelector('#difference').value=substract(substractNumber1,substractNumber2)
}
document.querySelector('#subtractNumbers').addEventListener('click',substractNumbers)

/* Arrow Function - Multiply Numbers */
const multiplyNumbers=()=>{
    let   factor1 = Number(document.querySelector('#factor1').value)
    let   factor2 = Number(document.querySelector('#factor2').value)
  return  document.querySelector('#product').value=product( factor1, factor2)
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers)


/* Open Function Use - Divide Numbers */
const divideNumbers=()=>{
    let   dividend = Number(document.querySelector('#dividend').value)
    let   divisor = Number(document.querySelector('#divisor').value)
  return  document.querySelector('#quotient').value=divide( dividend, divisor)
}
document.querySelector('#divideNumbers').addEventListener('click',divideNumbers)

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let number=[1,2,3,4,5,6,7,8,9,10,11,12,13]
document.getElementById('array').innerHTML=number
/* Output Odds Only Array */
document.getElementById('odds').innerHTML=number.filter(num=>num % 2===1)

/* Output Evens Only Array */
document.getElementById('evens').innerHTML=number.filter(num=>num % 2===0)
/* Output Sum of Org. Array */
let sum=0
number.forEach(num=>{sum+=num})
document.getElementById('sumOfArray').innerHTML=sum
/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML=number.filter(num=>num * 2)
/* Output Sum of Multiplied by 2 Array */
let aarraySum=0
number.forEach(num=>{aarraySum+=num})
document.getElementById('sumOfMultiplied').innerHTML=aarraySum * 2
