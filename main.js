"use strict";

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Neave, York",
  "Gavin, Moyer",
  "Raheem, Clarke",
  "Olivier, Chan",
  "Jamal, Schwartz",
  "Aston, Butler",
  "Elif, Bradley",
  "Tiago, Henderson",
  "Kimberly, Rodgers",
  "Zuzanna, Armstrong",
  "Rehan, Flores",
  "Jack, Long",
  "Noor, Burton",
  "Bessie, Middleton",
  "Milton, Lyons",
  "Aminah, Juarez",
  "Lucinda, Fleming",
  "Saskia, Miller",
  "Gene, Poole",
  "Harrison, Cain",
  "Ana, Bridges",
  "Frederic, Cotton",
  "Tasneem, Lawrence",
  "Salman, Ortega",
  "Iris, King",
  "Aishah, Mckee",
  "Faris, Valentine",
  "Connor, Kelley",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteenthCent = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600 // returns a boolean
);

console.table(fifteenthCent);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birth date, oldest to youngest
const orderedAge = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(orderedAge);

// Array.prototype.reduce()
// 4. How many years did all the inventors live

const totalYears = inventors.reduce((total, investor) => {
  return total + (investor.passed - investor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived.
const fromOldest = inventors.sort((a, b) => {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;

  return lastInventor > nextInventor ? -1 : 1;
});
console.table(fromOldest);

// 6. Sort the people alphabetically by last name
const byLastName = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(byLastName);

// 8. Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const instances = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(instances);
