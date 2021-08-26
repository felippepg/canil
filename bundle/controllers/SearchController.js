"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createMenuObject_1 = require("../helpers/createMenuObject");
const Pet_1 = __importDefault(require("../models/Pet"));
class SearchController {
    search(request, response) {
        const query = request.query.q;
        const list = Pet_1.default.findByName(query);
        if (!query) {
            response.redirect('/');
            return;
        }
        return response.render('pages/index', {
            menu: createMenuObject_1.createMenuObject(''),
            list,
        });
    }
}
exports.default = new SearchController;
