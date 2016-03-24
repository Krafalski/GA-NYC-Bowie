Gladiator Arena

Your job will be to develop a gladiator arena.

  ### Gladiator Spec

  * A gladiator has a name
  * A gladiator has a weapon

  ### Arena Spec

  * An arena has a name
  * The arena name should be capitalized
  * An arena can have gladiators
  * You can add a gladiator to the arena
  * The arena should never have more than 2 gladiators in it at a time
  * If there are two gladiators in the arena, you can call a fight method that will kill one of the gladiators and remove them from the arena.
    * Winning conditions:
    * Trident beats Spear
    * Spear beats Club
    * Club beats Trident
    * If the two gladiators have the same weapon, they both die.
      ... hastag rock paper scissors?? wat wat.

  ### Bonus

  * Add a method to remove gladiators from the arena by name

  * Update your winning conditions so that if the gladiator named "Maximus" is in the fight, he should always win.

  * Add a method to check to see if the crowd is entertained (.entertained?). The crowd is only entertained if Maximus is in the arena.

  * When a fight is over, before the gladiator is killed and removed, the gladiator can be remove or spared based on the selection of a thumbs up or thumbs down

### double bonus!
write units tests using rspec

### Resources

Use the rspec [matchers doc](http://rspec.info)
