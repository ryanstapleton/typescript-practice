// Decorators processed AT RUNTIME not at instantiation

class Post {
  @processOne() // decorator call
  @processTwo()
  someFunction() {}
}

// decorator function - rules: return a function with a target, a property key, and a descriptor
function processOne() {
  console.log("processOne has run");
  return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log('processOne has been called');
  }
}

function processTwo() {
  console.log("processTwo has run");
  return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log('processTwo has been called');
  }
}

// ORDER: Decorators are not called sequentially
// processOne has run
// processTwo has run
// processTwo has been called
// processOne has been called