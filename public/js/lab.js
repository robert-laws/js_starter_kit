// lab practice

function getFirstSelector(selector) {
  var match = document.querySelector(selector)
  return match
}

function nestedTarget() {
  var res = document.querySelector('#nested .target')
  return res
}

function increaseRankBy(n) {
  var ranked = document.querySelectorAll('.ranked-list li')
  for(var i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
}

function deepestChild() {
  var gNode = document.querySelector('div#grand-node')
  var divs = gNode.querySelectorAll('div')
  var res = ''
  for(var i = 0; i < divs.length; i++) {
    if(divs[i].querySelector('div') == null) {
      res = divs[i]
    }
  }
  return res
}

// console.log(getFirstSelector('div'))
// console.log(getFirstSelector('.ranked-list'))

// increaseRankBy(3)

console.log(deepestChild())

alert(document.querySelector('#grand-node div div div div'))