// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
//   };
  
//   function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//   }
  
//   Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`);
//   };
  
//   Object.getPrototypeOf(Player.prototype); // returns Object.prototype
  
//   // Now make `Player` objects inherit from `Person`
//   Object.setPrototypeOf(Player.prototype, Person.prototype);
//   Object.getPrototypeOf(Player.prototype); // returns Person.prototype
  
//   const player1 = new Player('steve', 'X');
//   const player2 = new Player('also steve', 'O');
  
//   player1.sayName(); // Hello, I'm steve!
//   player2.sayName(); // Hello, I'm also steve!
  
//   player1.getMarker(); // My marker is 'X'
//   player2.getMarker(); // My marker is 'O'
  

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayName(): string {
    return `Hello, I'm ${this.name}!`;
  }
}

class Player extends Person {
    marker: string;

    constructor(name: string, marker: string) {
      super(name);
      this.marker = marker;
    }
  
    getMarker(): string {
      return `My marker is '${this.marker}'`;
    }
}

const player1 =  new Player('Steve', 'X');
const player2 = new Player('David', 'O');

console.log(player1.sayName());
console.log(player2.sayName());


console.log(player1.getMarker());
console.log(player2.getMarker());

