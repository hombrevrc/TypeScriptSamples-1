"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator = /** @class */ (function () {
    function Decorator() {
    }
    Decorator.prototype.Apply = function (title, body) {
        title.innerHTML = "Welcome to Multiple Files Sample";
        body.innerHTML = "This sample demostrates how multiple typescript files work together to make up an application";
    };
    return Decorator;
}());
exports.Decorator = Decorator;
//# sourceMappingURL=decorator.js.map