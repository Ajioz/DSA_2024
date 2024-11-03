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
];

/*
const groupedItem = items.reduce((acc, item) => {
  const category = item.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item.name);
  return acc;
}, {});

console.log(groupedItem);


let myObject = {}; let myArray = [];
for (key in groupedItem) {
  let value = groupedItem[key];
  myObject.category = key;
  myObject.item = value;
  // myArray.push(myObject);
  console.log(myObject);
}
*/

const groupedItem = (objItems) => {
  let newCategery = [];  let myObject = {};
  for (let i = 0; i < objItems.length; i++) {
    const category = objItems[i].category;
    if (!(category in myObject)) {
      myObject[category] = [];
    }
    myObject[category].push(objItems[i].name);
    if (i === objItems.length - 1) {
      newCategery.push(myObject);
    }
  }
  return newCategery;
};

const result = groupedItem(items);
console.log(result);
// i have some confusion, since the initial value is an empty object {}, meaning acc={}, how come we are initializing an empty object into an empty array when we did this acc[category]=[]
