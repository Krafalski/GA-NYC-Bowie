function Tamagochi() {
  this.hungry = false;
  this.sick = false;
  this.age = 0;

  this.feed = function() {

    // this.hungry ? console.log("Yummy!") : console.log("Nope!");
    console.log(this.hungry ? "Yummy" : "Nope!");
    this.hungry = !this.hungry;

  //   if (this.hungry) {
  //     this.hungry = false;
  //     console.log("Yummy!!!");
  //   } else {
  //     this.hungry = true;
  //     console.log("Nope!");
  //   }
  // };
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

var dog = new Tamagochi();

dog.bark = function() {
  console.log("ruff ruff");
}
