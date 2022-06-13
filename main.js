// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heartElements = document.querySelectorAll('.like-glyph')

//Your JavaScript code goes here!

heartElements.forEach(item => { item.addEventListener('click', e => {
  if (e.target.innerText === FULL_HEART){
    toggleHeart(e.target)
  } else {
    mimicServerCall('aRandamURL')
    .then(response => {
      toggleHeart(e.target)})
    .catch(error => {
      showError()})
  }})
})

// heartButton.forEach(item => {item.addEventListener('click', e => {
//   e.target(activateHeart)
// })})

function showError() {
  let element = document.getElementById('modal');
  element.className = ''
  setTimeout(() => element.className = 'hidden', 3000)
}

function toggleHeart(heartElement){
  if (heartElement.innerText !== FULL_HEART){
    heartElement.innerText = FULL_HEART
    heartElement.className = 'activated-heart'
  } else {
    heartElement.innerText = EMPTY_HEART
    heartElement.className = ''
  }
}
// const heartElements = documentQuerySelectorAll('heart-glyph')
// HeartElements.addEventListner('click', handleClick())


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
