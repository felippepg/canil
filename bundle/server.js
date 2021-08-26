"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const server = express_1.default();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//configurando template engine
server.set('view engine', 'mustache');
server.set('views', path_1.default.resolve(__dirname, 'views'));
server.engine('mustache', mustache_express_1.default());
//habilitando arquivos estáticos 
server.use(express_1.default.static(path_1.default.resolve(__dirname, '../', 'public')));
//rotas
server.use(index_1.default);
server.use((request, response) => {
    response.render('pages/404');
});
server.listen(3000);
