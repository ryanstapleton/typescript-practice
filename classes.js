var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', "Moutain View", 'Utah');
var yahooInvoice = new Invoice('Yahoo', "SF", 'California');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
