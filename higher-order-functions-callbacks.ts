var dbQuery = function() : void {
  setTimeout(() => {
    console.log('Query results');
  }, 3000);
}

// Higher order function - takes a function as a paramter
function loadPage(q : () => void) {
  console.log('Header');
  q();
  console.log('Sidebar');
  console.log('Footer');
}

// Callback
loadPage(dbQuery);