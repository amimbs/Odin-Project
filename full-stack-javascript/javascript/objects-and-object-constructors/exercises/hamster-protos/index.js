class Hamster {
  stomach = [];

  eat(food) {
    this.stomach = [food];
  }
};

const speedy = new Hamster();
const lazy = new Hamster();

speedy.eat("apple");
console.log(speedy.stomach);

console.log(lazy.stomach);
