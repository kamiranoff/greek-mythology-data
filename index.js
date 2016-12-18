var all = require('./data/greeks.json');
var demigods = require('./data/demigods.json');
var generalDeities = require('./data/general-deities.json');
var giants = require('./data/giants.json');
var gods = require('./data/gods.json');
var kings = require('./data/kings.json');
var primordialDeities = require('./data/general-deities.json');
var seaDeities = require('./data/sea-deities.json');
var titans = require('./data/titans.json');

function Greeks(collection) {
  this.collection = collection;
}

Greeks.prototype.sortByName = function() {
  var compare = function(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  };

  return this.collection.sort(compare);
};

module.exports = {
  Greeks,
  all,
  demigods,
  generalDeities,
  giants,
  gods,
  kings,
  primordialDeities,
  seaDeities,
  titans
};
