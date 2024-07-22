"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(id, name, sa) {
        this.id = id;
        this.name = name;
        this.salario = sa;
    }
    Pessoa.prototype.exibir = function () {
        console.log("Pessoa = " + this.id + " / " + this.name + " / " + this.salario);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
