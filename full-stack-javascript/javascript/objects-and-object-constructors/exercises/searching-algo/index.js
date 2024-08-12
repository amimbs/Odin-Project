let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);

console.log(`Number of Pens: ${pockets.pen}`)

console.time("pockets.glasses");
let glassesFromPockets = pockets.glasses;
console.timeEnd("pockets.glasses");

console.time("head.glasses");
let glassesFromHead = head.glasses;
console.timeEnd("head.glasses");

