console.log("main.js linked");

// put in a function?

var h1 = document.querySelector('h1');
//h1.innerHTML = ...
//h1.innerText = ...
h1.textContent = "Inhabitants of Los Angeles (1984)"
//now that this was typed in the console, it was saved and when
//h1 is enterd it spits out the value of it which is:
//<h1>Inhabitants of Los Angeles</h1>

//now, append the text in h1 to say (' (1984) ')
var cop = document.querySelectorAll(".cop")

//changes the ones with the class cop to blue in the list based on the selector above
for (i =0; i<cop.length; i++){
  cop[i].style.color= "lightskyblue";
}

var terminator = document.createElement('div');
terminator.setAttribute('class','terminator');
//parentNode.appendChild(myNode);
var la = document.getElementById("los-angeles")
// or
var la = document.querySelector('#los-angeles');
la.appendChild(terminator)
//added an image of Arnold S. -how what? it looks like magic 
