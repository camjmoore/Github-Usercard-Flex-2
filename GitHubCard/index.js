/* Step 1: using axios, send a GET request to the following URL 
(replacing the palceholder with your Github name):
https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
github info! You will need to understand the structure of this 
data in order to use it to build your component function 

Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
follow this link in your browser https://api.github.com/users/<Your github name>/followers 
, manually find some other users' github handles, or use the list found 
at the bottom of the page. Get at least 5 different Github usernames and add them as
Individual strings to the friendsArray below.

Using that array, iterate over it, requesting data for each user, creating a new card for each
user, and adding that card to the DOM.
*/


const cardHTML = document.querySelector('.cards')

function userHandler(dataObj){
  
  const create = element => document.createElement(element)
  
  let divCard = create('div')
  
  let cardImg = create('img')
  let cardInfo = create('div')
  
  let bioName = create('h3')
  let userName = create('p')
  let location = create('p')
  let profile = create('p')
  
  let address = create('a')
  
  let followers = create('p')
  let following = create('p')
  let bioInfo = create('p')
  
  divCard.appendChild(cardImg)
  divCard.appendChild(cardInfo)
  cardInfo.appendChild(bioName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(address)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bioInfo)
  
  divCard.classList.add('card')
  cardInfo.classList.add('card-info')
  bioName.classList.add('name')
  userName.classList.add('username')
  
  profile.textContent = 'Profile:'
  address.textContent = `address to users github page: ${dataObj.html_url}`
  address.setAttribute('href', dataObj.html_url)
  
  cardImg.src = dataObj.avatar_url
  bioName.textContent = dataObj.name
  userName.textContent = dataObj.login
  location.textContent = `Location: ${dataObj.location}`
  followers.textContent = `Followers: ${dataObj.followers}`
  following.textContent = `Following: ${dataObj.following}`
  bioInfo.textContent = `Bio: ${dataObj.bio}`
  
  return divCard
}

axios.get("https://api.github.com/users/occludedarp/followers")
  .then( response => {
    const loginsArr = response.data
    loginsArr.forEach( follower => {
      axios.get(`https://api.github.com/users/${follower.login}`)
        .then( response2 => {
          const userData = response2.data
          cardHTML.appendChild(userHandler(userData))
        })
    })
  })


// const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
  
// followersArray.forEach( follower => {  
// axios.get(`https://api.github.com/users/${follower}`)
// .then(response => {
//   const user = response.data
//   cardHTML.appendChild(userHandler(user))
// })
// })


      
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
