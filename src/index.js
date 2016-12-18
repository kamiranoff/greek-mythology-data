import allCollection from './../data/greeks.json';
import demigodsCollection from './../data/demigods.json';
import generalDeitiesCollection from './../data/general-deities.json';
import giantsCollection from './../data/giants.json';
import godsCollection from './../data/gods.json';
import kingsCollection from './../data/kings.json';
import nymphsCollection from './../data/nymphs.json';
import primordialDeitiesCollection from './../data/general-deities.json';
import seaDeitiesCollection from './../data/sea-deities.json';
import titansCollection from './../data/titans.json';

class GreekMyth {

  constructor(collection) {
    this.collection = collection
  }

  dynamicSort(property) {
    var sortOrder = 1;
    return (a,b) => {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  sortBy(key) {
    return this.collection.concat().sort(this.dynamicSort(key));
  }

  get list() {
    return this.collection;
  }
}

export {
  allCollection,
  demigodsCollection,
  generalDeitiesCollection,
  giantsCollection,
  godsCollection,
  kingsCollection,
  nymphsCollection,
  primordialDeitiesCollection,
  seaDeitiesCollection,
  titansCollection,
};

export default GreekMyth;