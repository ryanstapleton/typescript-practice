// Class decorators must be called right above the class it's associated with
// They can bring shared class behavior at runtime without using inheritance

@detailedLog('billing')
class AccountsPayable {
  constructor() {}
}

@detailedLog('warehouse')
class ProductsManager {
  constructor() {}
}


function detailedLog(dashboard : string) {
  if (dashboard == 'billing') {
    console.log('Working in the billing department');
    return function (target : Object) {};
  } else {
    return function (target : Object) {};
  }
}

var post = new AccountsPayable;
var pm = new ProductsManager;