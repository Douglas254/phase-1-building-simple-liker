// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const glyph = document.querySelector(".like-glyph");
glyph.addEventListener("click", handleClickHeart);

// dissapear when page first loads
modal.className = "hidden";

function handleClickHeart(e) {
  const actualHeart = e.target;
  console.log(actualHeart);
  mimicServerCall("nu")
    .then(() => {
      if (actualHeart.innerText === EMPTY_HEART) {
        actualHeart.innerText = FULL_HEART;
        actualHeart.className = "acivated-heart";
      } else {
        actualHeart.innerText = EMPTY_HEART;
        actualHeart.className = "";
      }
    })
    .catch((error) => {
      const modal = document.querySelector("#modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() => (modal.className = "hidden"), 3000);
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
