//console.log ("js linked!")
var enemies = [
    {name: 'Voltorb', img: 'images/voltorb.png', health: 100},
    {name: 'Charizard', img: 'images/charizard.png', health: 200},
    {name: 'Gyarados', img: 'images/gyarados.png', health: 125},
    {name: 'Mew', img: 'images/mew.png', health: 75},
    {name: 'Geodude', img: 'images/geodude.png', health: 90},
    {name: 'Snorlax', img: 'images/snorlax.png', health: 110},
    {name: 'Kabutops', img: 'images/kabutops.png', health: 95},
    {name: 'Eevee', img: 'images/eevee.png', health: 60},
    {name: 'Beedrill', img: 'images/beedrill.png', health: 70},
    {name: 'Magikarp', img: 'images/magikarp.gif', health: 40},
    {name: 'Gastly', img: 'images/gastly.png', health: 50}
];

var pickachu = {name: 'Pikachu', img: 'images/pikachu.png',
                health: 100};


function Pokemon(name, img, health) {
  this.name = name;
  this.img = img;
  this.health = health;
}

  var game = {
    enemyHealth : 0 ,
    pickachuHealth : 0 ,
    winner: 'nobody',
    //currentEnemy: '',//object or string??;

    startGame : function(enemies){
      this.enemies=[];
      this.enemies=enemies;
      var chooseRandomEnemy= Math.floor(Math.random() * (this.enemies.length));
      var randomEnemy= enemies[chooseRandomEnemy];
      //console.log(randomEnemy.name);
      //need to pick an enemy from array
      //need to then put that info into the next line
      this.currentEnemy= new Pokemon(randomEnemy.name,randomEnemy.img, randomEnemy.health);
      //this.currentEnemy.
      this.pickachu =new Pokemon(pickachu.name,pickachu.img,pickachu.health);
      //console.log(this.pickachu);
      game.enemyHealth =randomEnemy.health;
      //console.log(game.enemyHealth);
      game.pickachuHealth=pickachu.health;
      //console.log(game.pickachuHealth);

      game.playGame();
    },

      attack : function (){
      var attackLuck = Math.random();
      var damage =0;
      //console.log(attackLuck)
      if (attackLuck<.9){
        //ATTACK! ATTACK! ATTACK!
        //damage between 5-30
        damage = Math.floor((Math.random()*25)+5);
        //console.log(damage)
        return damage;
      } else {
        //attack failed
        damage=0;
        console.log ('failed attack ' + damage)
        return damage}
      },

        heal : function (){
        healSelf=0;
        healSelf = Math.floor((Math.random()*25)+25);
        return healSelf;
      },

      gameOver:  function (){
        //return true if game is over
        //return false if game is still in play
        if (game.enemyHealth <0 ||game.pickachuHealth<0)
          return true;
        else {return false;}
      },

      playGame: function () {
        //check if game is over
        var move;
        var pickachuDamage=0;
        var enemyDamage=0;
        //calls game state here
        var gameState = game.gameOver();
        if (!gameState){
        console.log(gameState);
        console.log(game.enemyHealth + " enemy health");
        console.log(game.pickachuHealth + " pickachu health")

        //need to get input before continuing
        var pickachoice =prompt("pickachu-what do you want to do?")

        //pickachu move (attack or heal)
        //right now try just attack
        if (pickachoice ==='heal'){
          var addHitpoints = game.heal();
          console.log(addHitpoints + " hitpoints added");
          game.pickachuHealth = game.pickachuHealth + addHitpoints;
        }
        else {
            //return value and then manipulate enemy health
         pickachuDamage= game.attack()
         console.log(pickachuDamage + " pickachu damage")
         game.enemyHealth = game.enemyHealth -   pickachuDamage;
         console.log(game.enemyHealth + " updated enemy health")

        }

        //check if enemy KO-->gameState
        gameState = game.gameOver();
        if (!gameState){
        console.log(gameState);
        console.log(game.enemyHealth + " enemy health");
        console.log(game.pickachuHealth + " pickachu health")
        enemyDamage= game.attack()
         console.log(pickachuDamage + " pickachu damage")
         game.pickachuHealth = game.pickachuHealth -   enemyDamage
         console.log(game.pickachuHealth + " updated pickachu health");
        //pickachu move (attack or heal)
        //right now try just attack
        //enemy move (attack only)
        //check if pickachu KO-->gameState
        //if neither enemy is KO call playGame
        //be wary of the infinite loop :-(




        game.playGame();
        }
        //if game is not over
        //play each player
        //player goes on a click
        //opponent goes right after and resets for player to make a click
        //until game is over
      }
      if(gameState){
      if (game.pickachuHealth<0){
          winner = game.currentEnemy.name;
          console.log(winner + " is the winner!")
      }
      else {
          winner= game.pickachu.name;
          console.log(winner + " is the winner!");
      }
      //console.log("I can get to here")

      }
}

  }

//starts the game
game.startGame(enemies)


//}

// $(function(){
//
// })();
