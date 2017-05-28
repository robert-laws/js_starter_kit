// console.log('hello app!')
// console.log(window.innerWidth)
// console.log(document.URL)

const person = {
  name: "Bob Cobb",
  occupation: {
    title: "Head of Operations",
    yearsHeld: 4
  },
  pets: [{
    kind: "dog",
    name: "Spot"
  }, {
    kind: "cat",
    name: "Felix"
  }]
}

document.body.style.background = "#1AA3DA"
document.body.style.color = "#FFFFFF"

var robot = document.getElementById("robot")
robot.style.padding = "0 20px"
robot.style.width = "150px"

var width = window.innerWidth
var height = window.innerHeight

var app = document.getElementById("app")

app.innerHTML = "<hr>"
app.innerHTML += "height: " + height + " | width: " + width

var p = document.createElement("p")
p.setAttribute("class", "bigText")
p.innerHTML = person.occupation.yearsHeld
p.innerHTML += "<br>"
p.innerHTML += person.pets[1].name
p.innerHTML += "<hr>"
app.appendChild(p)

const collections = [1, [3, 4, [6, 9, [2, 18, [5]]]]]


function find(array, criteriaFn) {
  let current = array
  let next = []
  while(current) {
    if(criteriaFn(current)) {
      return current
    }
    if(Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

//var val = find(collections, n => n > 13)


const main = document.getElementsByTagName('main')[0]
const div = main.children[1]
const para = div.getElementsByTagName('p')[0]

para.textContent = "...Stuff!"