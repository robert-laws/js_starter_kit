var items = [2, 4, 8, 16, 36, 64, 81]

function Queue(array, check) {
  var q = array
  var val = ''
  var res = ''

  while(val != null) {
    val = q.shift()
    if(val == check) {
      res = "match on " + check
    }
  }
  return res
}

var r = Queue(items, 64)

r