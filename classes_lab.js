console.log(' ');
console.log('Question 1');
console.log('A)');
console.log(' ');

//a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

class Person {
  constructor(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  }

  fullName() {
    console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
  }

}

let user1 = new Person('Luffy', 'Monkey', 'D');
let user2 = new Person('Boa', 'Hancock', 'Empress');

console.log(user1.firstName);

console.log(' ');
console.log('B)');
console.log(' ');

//b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

user1.fullName();
user2.fullName();

console.log(' ');
console.log('Question 2');
console.log('A)');
console.log(' ');

//a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  isGood(num) {
    if (num >= 7) {
      return true;
    } else {
      return false;
    }
  }
}

let book1 = new Book('Run the Jewels', 'Killer Mike', '10');
let book2 = new Book('Green Bags & Spam', 'Life', '10');

console.log(' ');
console.log('B)');
console.log(' ');

//b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

console.log(book1.isGood(book1.rating));

console.log(' ');
console.log('Question 3');
console.log('A)');
console.log('B)');
console.log(' ');


//a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

class Dog {
  constructor(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }

  playFetch() {
    this.mood = 'Playful';
    this.hungry = true;
    console.log('Ruff');
  }

  feed(hungerCheck) {
    if (hungerCheck) {
      this.hungry = false;
      console.log('Woof!');
    } else {
      console.log(`${this.name} doesnt look hungry.`);
    }
  }

  toString(name, breed, mood, hungry) {
    return `${this.name} is a ${this.breed}. He is ${this.mood} and his hunger is ${this.hungry}.`;
  }

}

let doggie1 = new Dog('Blue', 'Cartoon', 'Happy', false);

//b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

console.log(doggie1.mood, doggie1.hungry);
doggie1.playFetch();
console.log(doggie1.mood, doggie1.hungry);

console.log(' ');
console.log('C)');
console.log(' ');

//c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

doggie1.feed(doggie1.hungry);

console.log(' ');
console.log('D)');
console.log(' ');

//d. Add a method called `toString` that returns a description of the dog:

console.log(doggie1.toString(this.name, doggie1.breed, doggie1.mood, doggie1.hungry));


console.log(' ');
console.log('Question 4');
console.log('A)');
console.log('B');
console.log(' ');

//a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.

let freezingPoint = {
  celsius: 0,
  fahrenheit: 0,
  kelvin: 0,
}

//b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

class Celsius {
  constructor() {
    this.celsius = 0;
  }

  getFahrenheitTemp() {
    console.log((1.8 * this.celsius) + 32);
  }

  getKelvinTemp() {
    console.log(this.celsius + 273);
  }

  isBelowFreezing (check) {
    if (check < this.celsius) {
      return true;
    } else {
      return false;
    }
  }

}

let outsideTempt = new Celsius(10.0);
console.log(outsideTempt.celsius); //returns 10.0
outsideTempt.getKelvinTemp(); //returns 283.0
outsideTempt.getFahrenheitTemp(); //returns 50.0

console.log(' ');
console.log('C)');
console.log(' ');

//c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

console.log(outsideTempt.isBelowFreezing(-10));

console.log(' ');
console.log('Question 5');
console.log('A)');
console.log(' ');

//a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

class Movie {
  constructor (name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }

  blurb() {
    return `${this.name} was created in ${this.year}. It's a ${this.genre} starring ${this.cast}. Its about ${this.description}.`;
  }

}

let movie1 = new Movie('Swell', '1995', 'Horror', 'Goobie Henswell', 'a giant blob monster that takes over downtown');

console.log(movie1.name);

console.log(' ');
console.log('B');
console.log(' ');

//b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.

console.log(movie1.blurb());

console.log(' ');
console.log('Question 6');
console.log(' ');

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    let newVector = new Vector(this.x + vector.x, this.y + vector.y);
    return newVector;
  }

  minus(vector) {
    let newVector = new Vector(this.x - vector.x, this.y - vector.y);
    return newVector;
  }

  getLength() {
    return (this.x ** 2 + this.y ** 2) ** 0.5;
  }
}

var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3);
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}

console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5

console.log(' ');
console.log('Question 7');
console.log('A)');
console.log(' ');

//a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`

class Vehicle {
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }

  makeSound() {
    console.log('WHHOOSSSH');
  }
}

class Car extends Vehicle{
  constructor(make, model, color, name) {
    super(color, name)
    this.make = make;
    this.model = model;
  }

  static numberOfWheels() {
    return `My car has ${4} wheels.`;
  }
}

let myCar = new Car('Hyundai', 'Sonata');

console.log(myCar);

//b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`

console.log(' ');
console.log('B)');
console.log(' ');

//
//I had to take Question 8 Vehicle and put it here for extends to work. It has to come before its children classes.
//
class Bike extends Vehicle{
  constructor(color, name, gears, hasBell) {
    super(color, name);
    this.gears = gears;
    this.hasBell = hasBell;
  }

  static numberOfWheels () {
    return `My bike has ${2} wheels.`;
  }

}

let myBike = new Bike(3, true);

console.log(myBike);

console.log(' ');
console.log('C)');
console.log(' ');

//c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?

console.log(Car.numberOfWheels(myCar));
console.log(Bike.numberOfWheels(myBike));
console.log('Its important to have static methods so we can make similar methods unqiue to each class that we want.');

console.log(' ');
console.log('Question 8');
console.log('A)');
console.log('B)');
console.log(' ');

console.log('Vehicle class was placed above its children classes because the children cant extends the parent unless the parent comes first');

//b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.

console.log(' ');
console.log('C)');
console.log('D)');
console.log(' ');

//c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"

let superBike = new Bike('Green', 'Bikey McBikeface', 3, true);
let superCar = new Car('red', 'Carry McCarface', 5, false);

console.log(superBike);
console.log(superCar);
