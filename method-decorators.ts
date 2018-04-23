@detailedLog('billing')
class AccountsPayable {
  constructor() {}

  @admin // will run before the method call below
  deleteAccount() {
    console.log('Deleting account...');
  }
}

function detailedLog(dashboard : string) {
  if (dashboard == 'billing') {
    console.log('Working in the billing department');
    return function (target : Object) {};
  } else {
    return function (target : Object) {};
  }
}

// method decorators require a target, propterty key, and descriptor
function admin(target : Object, propertyKey : string, descriptor : TypedPropertyDescriptor<any>) : any {
  console.log('Doing admin check');
  return descriptor;
}

var post = new AccountsPayable;
post.deleteAccount();

// Doing admin check
// Working in the billing department
// Deleting account...
