function Tamagochi() {
  var that = this;
  this.hungry = false;
  this.sick = false;
  this.age = 0;

  this.feed = function() {
    console.log(this.hungry ? "Yummy" : "Nope!");
    this.hungry = !this.hungry;
  };

  this.sleep = function() {
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzz");
  };

  this.medicate = function() {
    if (this.sick) {
      this.sick = false;
      console.log("I feel much better");
    } else {
      this.sick = true;
      console.log("Pleeeeese help!");
    }
  };

    this.increaseAge = function() {
      this.age++;
      console.log("Happy birthday to me! I am" + this.age + "years old!");
    }
  };
};

var dog = new Tamagochi();
var cat = new Tamagochi();

dog.bark = function() {
  console.log("ruff ruff");
}

function Zoo() {
  this.animals = [];

  this.createTamagochi = function() {
    var myTamagochi = new Tamagochi();
    this.animals.push(myTamagochi);
  }

  this.feed = function() {
    for (var i = 0; i < this.animals.length; i++) {
      this.animals[i].feed();
    }
  }
}

var zoo = new Zoo();
zoo.animals // []
zoo.createTamagochi() // undefined
zoo.animals // [tamagochi object]
zoo.feed()
