const articles = [
  {
    id: "a1",
    title: "First Article",
    content: "Some content here",
  },
];

articles.title = "update";
articles["id"] = "ns2";
articles["job"] = "Software";

// console.log(articles);

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(
  (accumulator, currentValue) => (accumulator += currentValue),
  0
);

// console.log(sum); // Output: 10

const items = [
  {
    name: "Apple",
    category: "Fruit",
  },
  {
    name: "Onion",
    category: "Vegetable",
  },
  {
    name: "Orange",
    category: "Fruit",
  },
  {
    name: "Lettuce",
    category: "Vegetable",
  },
  {
    name: "Mango",
    category: "Fruit",
  },
  {
    name: "Concumber",
    category: "Vegetable",
  },
  {
    name: "Milo",
    category: "Beverage",
  },
  {
    name: "Bread",
    category: "Beverage",
  },
  {
    name: "Soft Drink",
    category: "Beverage",
  },
];


const reduceGroupedItem = items.reduce((acc, item) => {
  const category = item.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item.name);
  return acc;
}, {});




const loopGroupedItem = (objItems) => {
  let myObject = {};
  for (let i = 0; i < objItems.length; i++) {
    const category = objItems[i].category;
    if (!(category in myObject)) {
      myObject[category] = [];
    }
    myObject[category].push(objItems[i].name);
  }
  return myObject;
};

const splitGroup = (obj) => {
  let myArray = [];
  for (key in obj) {
    let value = obj[key];
    let myObject = {
      category: key,
      item: value,
    };
    myArray.push(myObject);
  }
  return myArray;
};

// const result = loopGroupedItem(items);
const data = splitGroup(reduceGroupedItem);
console.log(data);
// i have some confusion, since the initial value is an empty object {}, meaning acc={}, how come we are initializing an empty object into an empty array when we did this acc[category]=[]
