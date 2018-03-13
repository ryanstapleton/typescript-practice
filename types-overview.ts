// Boolean
let paidAccount : boolean = true;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Ryan Stapleton";

// Array
var ages : number[] = [33, 24, 84];

// Tuple
let player : [number, string, number, number];
player = [3, 'Corerra', .333, 33];

// Enum
enum Stage {Approved, Pending, Rejected};
let job : Stage = Stage.Pending;

// Any
var apiData : any[] = [123, 'Ryan', true];

// Void
function printOut(msg: string) : void {
  console.log(msg);
  alert(msg);
}