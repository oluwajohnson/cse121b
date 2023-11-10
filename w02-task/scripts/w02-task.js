/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName='Ogunleye Johnson'
const currentYear=new Date().getFullYear()
const profilePicture='images/pic.png'


/* Step 3 - Element Variables */

const nameElement= document.getElementById("name")
const foodElement= document.getElementById("food")
const yearElement= document.querySelector('#year')
const imageElement= document.getElementById("image")



/* Step 4 - Adding Content */


nameElement.innerHTML=`<strong>${fullName}</strong>`

imageElement.setAttribute('src',profilePicture)
imageElement.setAttribute('alt',`Profile image of ${fullName}` )
imageElement.setAttribute('placeholder','myProfileImage')



/* Step 5 - Array */

const favourite_food=[]
const my_food='Rice, beans & Plantain'
favourite_food.push(my_food)

foodElement.innerHTML +=`<br>${favourite_food}`




