// function Person(name) {
//     this.name = name;
//   }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    ;
    Person.prototype.sayName = function () {
        return "Hello, I'm ".concat(this.name, "!");
    };
    ;
    return Person;
}());
;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, marker) {
        var _this = _super.call(this, name) || this;
        _this.marker = marker;
        return _this;
    }
    Player.prototype.getMarker = function () {
        return "My marker is '".concat(this.marker, "'");
    };
    return Player;
}(Person));
var player1 = new Player('Steve', 'X');
var player2 = new Player('David', 'O');
console.log(player1.sayName());
console.log(player2.sayName());
console.log(player1.getMarker());
console.log(player2.getMarker());
// class Player {
//   name: string;
//   marker: string;
//   constructor(name: string, marker: string) {
//     this.name = name;
//     this.marker = marker;
//   };
//   getMarker(): string {
//     return `My marker is '${this.marker}'`;
//   };
// };
// Object.getPrototypeOf(Player.prototype);
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// Object.getPrototypeOf(Player.prototype);
// const player1 = new Player('Steve', 'X');
// const player2 =  new Player('David', 'O');
// player1.sayName();
