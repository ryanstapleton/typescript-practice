// Functions that are ran when the interpreter reaches that line of code
var names = ['Ryan', 'David', "John"];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})(); // (); calls the function immediately, no need to call it separately
console.log(counter);
