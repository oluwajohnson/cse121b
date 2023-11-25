/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile ={
    name:'Ogunleye Johnson'
}
const profilePicture='/W02-task/images/pic.png'

 const favouriteFoods=[
    'Pounded Yam',
    'Beans',
    'Rice',
    'Yam',
    'Fried Rice',

]
 const hobbies=[
     'Coding',
    'Movies',
    'Cartoon',
    'Reading',
    'Songs',

]

let placesLived=[]

/* Populate Profile Object with placesLive objects */

   placesLived.push(
        {
            place: 'Abuja, Nigeria',
            length: '2 year'
        },
        
        {
            place: 'Lagos, Nigeria',
            length: '3 year'
        },

    );

console.log('myProfile',myProfile)
/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent=myProfile.name
/* Photo with attributes */
const imageElement= document.querySelector("#photo")
imageElement.setAttribute('src',profilePicture)
imageElement.setAttribute('alt',`Profile image of ${myProfile.name}` )
imageElement.setAttribute('placeholder','myProfileImage')

/* Favorite Foods List*/

favouriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });


/* Places Lived DataList */
placesLived.forEach(places => {
    console.log('places',places)
    let li = document.createElement('li');
    
    li.textContent = `${places.place}\n${places.length}`;
    
    document.querySelector('#places-lived').appendChild(li);
   
  });
