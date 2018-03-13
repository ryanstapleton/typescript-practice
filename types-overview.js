// Boolean
var paidAccount = true;
// Number
var age = 33;
var taxRate = 7.5;
// String
var fullName = "Ryan Stapleton";
// Array
var ages = [33, 24, 84];
// Tuple
var player;
player = [3, 'Corerra', .333, 33];
// Enum
var Stage;
(function (Stage) {
    Stage[Stage["Approved"] = 0] = "Approved";
    Stage[Stage["Pending"] = 1] = "Pending";
    Stage[Stage["Rejected"] = 2] = "Rejected";
})(Stage || (Stage = {}));
;
var job = Stage.Pending;
// Any
var apiData = [123, 'Ryan', true];
// Void
function printOut(msg) {
    console.log(msg);
    alert(msg);
}
