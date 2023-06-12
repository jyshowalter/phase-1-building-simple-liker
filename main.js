// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
const likeButton = document.querySelector("li.like")
const heart = document.querySelectorAll(".like-glyph")

likeButton.addEventListener ("click", like)

function like(event) {
  let like = event.target;
  mimicServerCall()
  .then(() =>  {
    if (like.textContent === EMPTY_HEART) {
      like.className = "activated-heart";
      like.innerHTML = FULL_HEART;
    }
    else {
      like.className = "";
      like.innerHTML = EMPTY_HEART;
    }
  })
  .catch(() => {
    modal.className = "";
    setTimeout(() => (modal.className = "hidden"), 3000);
    like.innerHTML = EMPTY_HEART;
  })
}
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
