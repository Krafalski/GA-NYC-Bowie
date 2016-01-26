var rls = require('readline-sync');

var feeling = rls.question("How are you feeling today? ");

if (feeling === 'happy') {
  console.log("my wrok here is done!");
} else {
  console.log("go have a cupcake!")
}
