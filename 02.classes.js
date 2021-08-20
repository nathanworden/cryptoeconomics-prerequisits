// Initializing a consturctor function
// function Hero(name, level) {
//   this.name = name
//   this.level = level
// }

// Initializing a class definition
class Hero {
  constructor(name, level) {
    this.name = name
    this.level = level
  }

  // Adding a method to the constuctor
  greet() {
    return `${this.name} says hello.`
  }
}

const hero1 = new Hero('Varg', 1)