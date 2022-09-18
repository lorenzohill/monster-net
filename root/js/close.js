let closebutton = document.querySelector('.closebutton')

var popup = 1
var timesClosed = 0
let words = document.createElement("h1")

if (closebutton) {
  closebutton.addEventListener('click', function(){close()})
}


function close() {
  let window = document.querySelector(".popup")
  window.classList.add("hide")
  popup = null
  timesClosed++
  if (timesClosed == 4) {
    words.innerHTML = "STOP CLOSING ME!!!"
    document.body.appendChild(words)
  }
  if (timesClosed == 7) {
    words.innerHTML = "THATS IT! DO IT AGAIN, I DARE YOU!"
    document.body.appendChild(words)
  }

  if (timesClosed == 8) {
    document.body.textContent = ""
    secret()
  }


  setTimeout(open, 10000)
}

function open() {
  popup = 1
  let window = document.querySelector(".popup")
  play()
  window.classList.remove("hide")

}

function secret() {
  let secret1 = document.createElement("h1")
  document.body.classList.add("red")
  secret1.innerHTML = "Look what you have done."
  document.body.appendChild(secret1)
  let secret2 = document.createElement("h1") 
  secret2.innerHTML = "You have destroyed the website."
  document.body.appendChild(secret2)

  let secret3 = document.createElement("h1") 
  secret3.innerHTML = "Now all the data is gone again."
  document.body.appendChild(secret3)
  setTimeout(jk,3000)
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function jk() {
  let jk = document.createElement("h1")
  jk.innerHTML = "JK."
  document.body.appendChild(jk)
  play()
  setTimeout(reload, 2000)
}

function reload() {
  location.reload()
}

function play() {
  var audio = new Audio('you got mail - Sound Effect [HD].mp3');
  audio.volume = 0.1;
  audio.play();
}
