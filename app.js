var arrays = require('./arrays.js');
var objects = require('./objects.js');

// arrays.destructivelyAppendKitten('Felix');

// console.log(arrays.kittens);

// arrays.destructivelyPrependKitten('Sammy');

// console.log(arrays.kittens);

// console.log(objects.meals.lunch);
// console.log(objects.getMeal(objects.meals.breakfast));

// console.log(objects.playlist.Nirvana);
// console.log(objects.updatePlaylist(objects.playlist, 'Pearl Jam', 'Black'));
// console.log(objects.playlist);
// console.log(objects.removeFromPlaylist(objects.playlist, 'Nirvana'));
// console.log(objects.playlist);

console.log(objects.updateObjectWithKeyAndValue(objects.recipes, 'bagel', 'flour'));
console.log(objects.recipes);

console.log(objects.destructivelyUpdateObjectWithKeyAndValue(objects.recipes, 'pizza', 'cheese'));
console.log(objects.recipes);

console.log(objects.deleteFromObjectByKey(objects.recipes, 'stew'));
console.log(objects.recipes);

console.log(objects.destructivelyDeleteFromObjectByKey(objects.recipes, 'pizza'));
console.log(objects.recipes);

var items = { 1: 'hat' }
console.log(items)

var stuff = [10, 30, 50];
console.log(stuff.length);
stuff.length = 1;
console.log(stuff.length);
console.log(stuff);

const letters = ["alpha", "gamma", "delta"];
letters.splice(1, 0, 'beta');
console.log(letters);