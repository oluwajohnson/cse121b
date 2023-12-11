/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")
const templeList=[]

/* async displayTemples Function */


const displayTemples = (temples) => {
    console.log(temples)
    temples.forEach(item => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = item.templeName;
        
        let img = document.createElement('img');
        img.setAttribute('src',item.imageUrl)
        img.setAttribute('alt',item.location)
        img.setAttribute('placeholder','myProfileImage')

        document.querySelector('#temples').appendChild(article);
        article.appendChild(h3)
        article.appendChild(img)
        templesElement.appendChild(article)
      });
 
}


/* async getTemples Function using fetch()*/


const getTemples = async () => {
    
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
      const   thetempleList = await response.json();

      templeList.push(thetempleList)
         
        displayTemples(thetempleList);
      }

}










getTemples();

