"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../helpers/data"));
class Pet {
    findAll() {
        return data_1.default;
    }
    findByType(type) {
        return data_1.default.filter(item => item.type === type);
    }
    findByName(name) {
        //indexOf recebe como parametro a String que eu gostaria de buscar
        return data_1.default.filter(item => item.name.toLowerCase()
            .indexOf(name.toLowerCase()) > -1);
    }
}
exports.default = new Pet;
