## Tamagotchi

<img src="http://upload.wikimedia.org/wikipedia/commons/f/f2/Tamagotchi_0124_ubt.jpeg" width=50% >

For those who don't remember (or choose to forget), Tamagotchis were "digital pets" that you could carry around with you and feed them, clean up after them, pet them, and try to keep them happy.

Make a ```Tamagotchi``` constructor. Give it the following properties:
1. a hungry property (initially false)
2. a sick property (initially false)
3. an age of 0

and give it the following methods:

1. ```feed()``` - if hungry is true, print "That was yummy!" and set hungry to false.  If hungry is false, print "No thanks, I'm full." and set hungry to true.
2. ```sleep()``` - prints out "zzzzzzz" (use as many z's as you want)
3. ```medicate()``` - if sick is true, print "I feel much better!" and set sick to false.  If sick is false, print "No thanks, I feel fine." and set sick to true.
4. ```increaseAge()``` - increase the age by one and print "Happy Birthday to me! I am " + age + " years old!"

Now make a variable named dog that is set to a new Tamagotchi.

Add the following methods to it:
1. ```bark()``` - prints out "ruff ruff"
2. ```goOutside()``` - prints out "I own that tree now!"

Make a variable named cat that is set to a new Tamagotchi.  Add the following methods to it:
1. ```meow()``` - prints out "Meow!"
2. ```useLitterBox()``` - "Burried treasure!"

Make a variable named fish that is set to a new Tamagotchi.  Add the following method to it:
1. ```swim()``` - prints out "Just keep swimming..."

Try the following:
1. Feed the dog twice.
2. Increase the dog's age twice.
3. Make the dog bark
4. Make the dog go outside.
5. Make the cat meow.
6. Make the cat sleep.
7. Make the cat use the litter box.
8. Give the fish medicine twice.
9. Make the fish swim.

## Tamagochi 2.0
Use your new found power as programmers to create a zoo of Tamagochis.

Make a ```Zoo``` constructor. Give each instance of zoo the following properties
1. ```animals``` which is initially an empty array.
2. ```numberOfResidents``` which is initially 0.

give it the following methods:
1. ```createTamagochi()``` creates a new Tamagochi and adds it to the array animals
2. ```addTamagochi(tamagochi)``` add tamagochi to the array animals
3. ```feed()``` feed all the animals
4. ```sleep()``` sleep all the animals
5. ```medicate()``` medicate all the animals
6. ```increaseAge()``` increase the age of all animals

Try the following:
1. Add 3 new Tamagochis to the zoo.
2. Feed all of them
3. Increase their age by 3 years.
4. Add the dog, the cat and the fish to the zoo.
5. Can you make the fish swim, the dog bark and the cat meow without referencing the original variables.

Bonus:
How would you implement the ability for Tamagochi's to breed with each other and create new ones, so that we can have a sustainable zoo.
