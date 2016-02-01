// Whenever the user types in the prompt field and presses the return/enter key, append a <li> with the value of the text value of the prompt to the ul#log, and then reset the value of the prompt. LoanBot's response should be appended as <li> tags beneath the prompt in the ul#log. Create each <li> with three possible classes:
//
// prompt: command from the prompt
// .emote: Indicates a LoanBot action
// loanBot: For LoanBot's replies
//
// (Hint: You will be using an event listener to capture the keystrokes)
//



//capture user input in the #prompt command line using capture keystrokes

//Listen for user to press enter key

//create li and insert the text into the li

//append li to ul with id of #log


console.log('Loaded');
window.onload = function() {
  ////////////////
  console.log('Hello');
  var promptBar = document.getElementById('prompt');
  var logWindow = document.getElementById('log');
  console.log(promptBar);


// var prompt = promptBar.addEventListener('keydown', function(textInput){
//   console.log(textInput);
// });


  var listItem;

  promptBar.addEventListener('keydown', function(event) {
    listItem = document.createElement('li');
    // listItem.innerText = chatLog;
    //  log.appendChild(listItem);
     if (event.keyIdentifier === 'Enter') {

       console.log(promptBar.value);

       var enterText = function() {
         var listItem = document.createElement('li');
         listItem.innerText= promptBar.value;
         logWindow.appendChild(listItem); }

         enterText();
     };
      console.log(event);


  })



}
