"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createMenuObject_1 = require("../helpers/createMenuObject");
const Pet_1 = __importDefault(require("../models/Pet"));
class PageController {
    index(request, response) {
        const list = Pet_1.default.findAll();
        return response.render('pages/index', {
            menu: createMenuObject_1.createMenuObject('all'),
            banner: {
                title: 'Todos os animais',
                background: 'allanimals.jpg',
                content: 'Animais disponíveis para adoção'
            },
            list
        });
    }
    dogs(request, response) {
        const list = Pet_1.default.findByType('dog');
        return response.render('pages/index', {
            menu: createMenuObject_1.createMenuObject('dog'),
            banner: {
                title: 'Todos os cachorros',
                background: 'banner_dog.jpg',
                content: 'Cachorros para adoção'
            },
            list
        });
    }
    cats(request, response) {
        const list = Pet_1.default.findByType('cat');
        return response.render('pages/index', {
            menu: createMenuObject_1.createMenuObject('dog'),
            banner: {
                title: 'Todos os gatos',
                background: 'banner_cat.jpg',
                content: 'Gatos para adoção'
            },
            list
        });
    }
    fish(request, response) {
        const list = Pet_1.default.findByType('fish');
        return response.render('pages/index', {
            menu: createMenuObject_1.createMenuObject('fish'),
            banner: {
                title: 'Todos os peixes',
                background: 'banner_fish.jpg',
                content: 'Peixes para adoção'
            },
            list
        });
    }
}
exports.default = new PageController;
