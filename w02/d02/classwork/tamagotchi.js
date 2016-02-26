//Tamagochi

function Tamagotchi () {
this.hungry = false;
this.sick = false;
this.age = 0;
this.feed = function (){
  if (this.hungry){
    console.log("That was yummy!");
    this.hungry = false;
  } else {
    console.log("No thanks, I'm full.");
    this.hungry = true; }
  };
    this.sleep = function (){
  console.log("zzzzzzz")};
    this.medicate = function (){
      if(this.sick){
        console.log("I feel much better!");
        this.sick = false;
      }else{
        console.log("No thanks, I feel fine.");
        this.sick= true;
        }
      };
      this.increaseAge = function(){
        this.age = this.age+1;
        console.log("Happy birthday to me! I am " +
          this.age +
          " years old!");
      };
}

//ternery function
//console.log(this.hungry ? "Yummy": "Nope");
//this.hungry=!this.hungry;

var dog = new Tamagotchi;
dog.bark = function (){console.log("ruff ruff")}
dog.goOutside = function(){console.log("I own that tree now!")}

var cat = new Tamagotchi;
cat.meow = function () {console.log("Meow!")};
cat.useLitterBox =function(){console.log ("Burried treasure!")}


var fish = new Tamagotchi;
fish.swim = function () {console.log("Just keep swimming...")}





//peter's review
// var dog ={};
//dog.sick=false;
//dog.age=0

//the above is what the constructor does by using new and this


function Zoo() {
  this.animals =[];
}

this.createTamagotch = function (){
  var myTamagochi = new Tamagochi();
  this.animals.push(myTamagochi);
}

this.feed = function (){
  for (var i=0; i<this.animals.length; i++){
    this.aniamls[i].feed();
  }
}

var zoo = new Zoo();
zoo.aniamls//creates() empty array
zoo.createTamagotchi//undfined
zoo.animals //[tamagochi object]


