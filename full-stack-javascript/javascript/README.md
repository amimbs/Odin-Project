# Table of Contents
1. [Objects and Object Constructors](#objects-and-Object-constructors)
    - [Object Literals](#object-literals)
    - [Object Constructor](#object-constructor)


<hr/><hr/>

## Objects and Object Constructors

### Object Literals

Definition:

    An object literal is a simple and concise way to create objects using a comma-separated list of key-value pairs wrapped in curly braces {}.

```js
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

```

### Object Constructor

Definition:

    An object constructor is a special function that allows you to create and initialize objects with a shared structure and behavior.
    It is typically defined using a function that capitalizes its name to denote that it is a constructor.

Syntax:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('Hello, ' + this.name);
  };
}

const john = new Person('John', 30);
const jane = new Person('Jane', 25);
```

- Useful when you have a specific type of object that you need to duplicate. An object constructor is a fucntion like:
```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
```

- which you use by calling the function with the keyword `new`

```js
const player = new Player('steve', 'X');
console.log(player.name); // 'steve'
```

- And just like w/ objects created using the Object Literal Method, you can add funcitons to the object

- Just like with objects created using the Object Literal method, you can add functions to the object:

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
```



<hr/>