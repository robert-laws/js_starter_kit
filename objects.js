var Objects = {
  meals: {
    breakfast: 'eggs',
    lunch: 'sandwich'
  },
  playlist: {
    Nirvana: 'Lithium'
  },
  recipes: {
    stew: 'rice'
  },
  getMeal: function(food) {
    return `I'm eating ${food} for breakfast`;
  },
  updatePlaylist: function(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle;
    return playlist;
  },
  removeFromPlaylist: function(playlist, artistName) {
    delete playlist[artistName];
    return playlist;
  },
  updateObjectWithKeyAndValue(object, key, value) {
    var obj = {};
    obj[key] = value;
    var newObj = Object.assign(obj, object);
    return newObj;
  },
  destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
  },
  deleteFromObjectByKey(object, key) {
    var newObj = Object.assign({}, object);
    delete newObj[key];
    return newObj;
  },
  destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key];
    return object;
  }
}

module.exports = Objects;
