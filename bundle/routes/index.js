"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PageController_1 = __importDefault(require("../controllers/PageController"));
const SearchController_1 = __importDefault(require("../controllers/SearchController"));
const route = express_1.Router();
route.get('/', PageController_1.default.index);
route.get('/dogs', PageController_1.default.dogs);
route.get('/cats', PageController_1.default.cats);
route.get('/fishes', PageController_1.default.fish);
route.get('/search', SearchController_1.default.search);
exports.default = route;
