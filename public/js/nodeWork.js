var element = document.createElement('h1')

element.innerHTML = "node creation"
element.style.color = "#FF0000"
element.style.textAlign = "center"

var appDiv = document.getElementById("app")

appDiv.appendChild(element)

var ul = document.createElement('ul')

for (let i = 0; i < 15; i++) {
  let li = document.createElement('li')
  var val = (i + 1) * (i + 1)
  li.innerHTML = (val).toString() + ' '
  for (let i = 0; i < val; i++) {
    li.innerHTML += '.'
  }
  ul.appendChild(li)
}

ul.style.textAlign = "left"

// ul.removeChild(ul.querySelector('li:nth-child(1)'))
// appDiv.remove()

appDiv.appendChild(ul)


function callFriend(name, sayGreeting) {
  return sayGreeting(name)
}

function salutation(n) {
  return `Hello, ${n}`
}

function greeting(n) {
  return `Greetings, ${n}`
}

var res = callFriend("bob", salutation)
var res2 = callFriend("hal", greeting)

// alert(res)
// alert(res2)


const title = document.getElementById("title")

title.addEventListener('click', function(event) {
  alert("This is the title")
  alert(event.which)
})

const divs = document.querySelectorAll('main div')

function bubble(e) {
  e.stopPropagation()
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' caputred')
}

for(let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}