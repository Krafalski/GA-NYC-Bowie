//check that this is linked to html page
console.log ("hello there");
var testAstring = "bleep bloop blop bop";

//2. on prompt loanbot shows purse in a string:
//"LoanBot has " + purse + " dollars"

//loanbot lends money by responding to keywords and amount of money
//string - loan bobby 50 dollars
//store in an object:
//create a constructor named something like Loans below....
//function Loans () {
//  this.loanamount=0;
//}


//********DONE*********
//prompt to conversation window store the input and do stuff with it
//add event listener to prompt ID input
document.getElementById('prompt').addEventListener('keydown',function(event){
//declare a variable to store the prompt
  var input = document.getElementById('prompt');
  //this is waiting for the enter key to be pressed
  if (event.keyCode ===13){
  //when enter is pressed, create a new li tag/thing
    var myList = document.createElement('li');
  //adding the text from input inside the li
    myList.innerHTML = input.value;
//create new variable and store it with the ID of log
    var log = document.getElementById('log');
//allows us to append the stuff above to the ul that is in the
//conversation window
    log.appendChild(myList);
//send to a function that does stuff and sends back loanbot's response
    //processsInput(input);
    console.log(input.value + " went to processsing");
    //makes magic happen in the browser
   loanBot.loanBotChat(loanBot.botDecision(loanBot.botArray(input.value)));

  //resets input variable to an empty string to clear the input field
    var input = document.getElementById('prompt').value ='';
  }
});

// loanBot object
 var loanBot ={
   purse:10000,
   array:[],
   loanTally:[],
   interestRate:15,

   purseyPurse: function() {
     var whatevs = "Loanbot has " + loanBot.purse + " dollars. ";
     return whatevs;
   },
   loan: function (){
     var whatevs;
     var nameTheLoan =loanBot.array[1]
     nameTheLoan = new BotLoan(loanBot.array[1],loanBot.array[2]);
     loanBot.purse = loanBot.purse - parseInt(loanBot.array[2]);
     console.log (nameTheLoan);
     loanBot.loanTally.push(nameTheLoan) ;
     whatevs = "I just loaned " + loanBot.array[1]+ " " +loanBot.array[2] + " dollars."
     return whatevs;
   },
   ledger: function (){
     var whatevs;
     // make a string of debts
      var debts = "";
      for (var i=0; i< loanBot.loanTally.length; i++ ){
        //need to insert a line break at end of each iteration of the string
        debts += "" + loanBot.loanTally[i].name + " owes you " + loanBot.loanTally[i].amountOwed + " dollars. ";
      }
      whatevs=debts;
     return whatevs;
   },

   interest: function(){

     ///the interest numbers are OUT OF HAND! FIX THE MATH
     var whatevs = "Done! Type ledger for updated amounts";
     var plusInterest;

     var multiplyThis=parseInt(loanBot.interestRate);
     var multiplyThis2=0.01;
     plusInterest = multiplyThis*multiplyThis2+addThis;
     //multiply the debt of each loan by interest rate.
     for (var i=0; i<loanBot.loanTally.length; i++){
        var addThis= parseInt(loanBot.loanTally[i].amountOwed);
        plusInterest = multiplyThis*multiplyThis2+addThis;
      // plusInterest = parseInt(loanBot.loanTally[i].amountOwed)  *(loanBot.interestRate/100)+loanBot.loanTally[i].amountOwed ;
      // loanBot.loanTally[i].amountOwed=parseInt(loanBot.loanTally[i].amountOwed)+parseInt(plusInterest);
      console.log (plusInterest);
       //add this amount to the amount owed
       //create a new string
     }
     return whatevs;
   },
   setInterest: function (){
     var whatevs;
     var keepItForNow = loanBot.interestRate;
     loanBot.interestRate = parseInt(loanBot.array[4]);
     whatevs = "Loanbot adjusts interest rate from " + keepItForNow + "% to "
     + loanBot.interestRate + "%";
     return whatevs;
   },
   collectMoney: function (){
     var whatevs = "I regret to inform you I am not yet capable of performing this function";
     //for loop
     for (var i=0; i<loanBot.loanTally.length; i++)
     console.log(loanBot.loanTally[i] +loanBot.array[4]);
//.name not being reconized...???
     //if (loanBot.loanTally[i].name ==loanBot.array[4]){
       console.log("Arg! Please just work...");
    // }
     //if name match
     //update amount owe
     //put money back in purse
     //else no match message no one by that name owes you money!
     //would be cool to remove the object from the array if the amount owed is zero...
     //make string
     return whatevs;
   },

   botArray: function (stringToArray){
     loanBot.array = stringToArray.split (' ');
     //this is the array to pass into other functions
   },

   botDecision: function (processArray){
     //would be better done as a switch statement, but ran out of time
     if (loanBot.array[0] === 'purse'){
       return loanBot.purseyPurse (loanBot.purse);
     }
     else if (loanBot.array[0] === 'loan'){
       return loanBot.loan (loanBot.array);
     }
     else if (loanBot.array[0] === 'ledger'){
       return loanBot.ledger (loanBot.array);
     }
     else if (loanBot.array[0]=== 'set'){
       return loanBot.setInterest (loanBot.array);
     }
     else if (loanBot.array[1]=== 'interest'){
       return loanBot.interest(loanBot.array);
     }

     else if (loanBot.array[0]==='collect'){
       return loanBot.collectMoney(loanBot.array);
     }
     else {
       var wrong = "bleep bloop blop...does not compute!";
       return wrong}
   },
     //convert bot 'output' into a string
    botTellMeInEnglish: function() {
      var grabInput = getInput();
      var inputToArray = grabInput.split(' ');
      loanBotChat(inputToArray);
    },

    loanBotChat: function (someStringFromAnotherFunction){
       {
        //loanBotsays - this better go to the convo window!
        console.log("yo I made it in to the function loanBotChat and I brought " + someStringFromAnotherFunction + " with me!");
        //create li
        var botLi = document.createElement('li');
        //add the text from outside of the function
        botLi.innerHTML = someStringFromAnotherFunction;
        // create a new variable to store the id of log
        var log = document.getElementById('log');
        //append it!
        log.appendChild(botLi)
    }
}
}


//loan (create new object via constructor using name as name of new object)
//also int that add the loan amount

function BotLoan (name,amountOwed){
  this.name = name;
  this.amountOwed = amountOwed;
}
