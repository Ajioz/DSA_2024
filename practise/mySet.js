// function mySet() {
//     let collection = [];

//     // This method will check for the presence of an element and return true or false
//     this.has = function (element) {
//         return (collection.indexOf(element) !== -1 )
//     }

//     // This method will return all the values in the set
//     this.values = function () {
//         return collection
//     }

//     // This method will add an element to the set
//     this.add = function (element) {
//         if (!this.has(element)) {
//             collection.push(element);
//             return true;
//         }
//         return false;
//     }

//     // This method will remove an element from a set
//     this.remove = function (element) {
//         if (this.has(element)) {
//             index = collection.indexof(element);
//             collection.splice(index, 1);
//             return true
//         }
//         return false
//     }
// }

// class MySet {
//   constructor() {
//     this.collection = [];
//   }

//   has(element) {
//     return this.collection.indexOf(element) !== -1;
//   }

//   values() {
//     return this.collection;
//   }

//   add(element) {
//     if (!this.has(element)) {
//       this.collection.push(element);
//       return true;
//     }
//     return false;
//   }

//   remove(element) {
//     if (this.has(element)) {
//       const index = this.collection.indexOf(element);
//       this.collection.splice(index, 1);
//       return true;
//     }
//     return false;
//   }
// }

class MySet {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
    }
    
    remove(element) {
        if (this.has(element)) {
            const elementIndex = this.collection.indexOf(element);
            return this.collection.splice(elementIndex, 1)
        }
    }
}
