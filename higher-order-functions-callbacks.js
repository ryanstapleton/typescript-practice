var dbQuery = function () {
    setTimeout(function () {
        console.log('Query results');
    }, 3000);
};
// Higher order function - takes a function as a paramter
function loadPage(q) {
    console.log('Header');
    q();
    console.log('Sidebar');
    console.log('Footer');
}
// Callback
loadPage(dbQuery);
