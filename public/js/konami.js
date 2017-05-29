const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {
  var page = document.body
  page.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++
      console.log(index)
      if (index === code.length) {
        alert("You got the code!")
        index = 0
      }
    } else {
      index = 0
      console.log(index)
    }
  })
}

init()
