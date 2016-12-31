import allCollection from './../data/all.json';
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
};

export default GreekMyth;
