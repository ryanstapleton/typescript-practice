// Decorators processed AT RUNTIME not at instantiation
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.someFunction = function () { };
    __decorate([
        processOne() // decorator call
        ,
        processTwo(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "someFunction", null);
    return Post;
}());
// decorator function - rules: return a function with a target, a property key, and a descriptor
function processOne() {
    console.log("processOne has run");
    return function (target, propertyKey, descriptor) {
        console.log('processOne has been called');
    };
}
function processTwo() {
    console.log("processTwo has run");
    return function (target, propertyKey, descriptor) {
        console.log('processTwo has been called');
    };
}
// ORDER: Decorators are not called sequentially
// processOne has run
// processTwo has run
// processTwo has been called
// processOne has been called
//# sourceMappingURL=decorators-introduction.js.map