// Functions that are ran when the interpreter reaches that line of code

var names : string[] = ['Ryan', 'David', "John"];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})(); // (); calls the function immediately, no need to call it separately

console.log(counter);