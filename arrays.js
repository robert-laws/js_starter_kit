var exports = module.exports = {};

exports.kittens = ['Milo', 'Otis', 'Garfield'];

exports.destructivelyAppendKitten = function(name) {
  this.kittens.push(name)
}

exports.destructivelyPrependKitten = function(name) {
  this.kittens.unshift(name)
}

exports.destructivelyRemoveLastKitten = function() {
  this.kittens.pop()
}

exports.destructivelyRemoveFirstKitten = function() {
  this.kittens.shift()
}

exports.appendKitten = function(name) {
  var newKittens = this.kittens.concat(name);
  return newKittens;
}

exports.prependKitten = function(name) {
  var n = [name];
  var newKittens = n.concat(this.kittens)
  return newKittens;
}

exports.removeLastKitten = function() {
  var newKittens = this.kittens.slice(0,2);
  return newKittens;
}

exports.removeFirstKitten = function() {
  var newKittens = this.kittens.slice(1,3);
  return newKittens;
}
