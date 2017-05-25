var Loops = {
  count: 10,
  items: ['hat', 'cap', 'bat', 'pen', 'cue'],
  musicians: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
  instruments: ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"],
  johnLennonFactsArr: ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"],
  forLoop: function(array) {
    var res = ''
    for(var i = 0; i < array.length; i++) {
      res += array[i] + '\n'
    }
    return res
  },
  whileLoop: function() {
    var res = ''
    while(this.count > 0) {
      res += this.count + '\n'
      this.count--
    }
    return res
  },
  doWhileLoop: function(array) {
    var len = array.length
    var i = 0
    var res = ''
    do {
      res += array[i] + '...\n'
      i++
    } while(i < len)
    return res
  },
  theBeatlesPlay: function(musicians, instruments) {
    var plays = []
    for(var i = 0; i < musicians.length; i++) {
      plays.push(musicians[i] + " plays " + instruments[i])
    }
    return plays
  },
  johnLennonFacts: function(array) {
    var facts = []
    var count = 0
    while(count < array.length) {
      facts.push(array[count] + "!!!")
      count++
    }
    return facts
  },
  iLoveTheBeatles: function(number) {
    var arr = []
    var count = 0
    do {
      arr.push('I Love the Beatles!')
      count++
    } while(count < number)
    return arr
  },
  
}

module.exports = Loops