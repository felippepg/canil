import express from 'express';
import mustacheExpress from 'mustache-express';
import path from 'path';
import route from './routes/index';
const server = express();

//configurando template engine
server.set('view engine', 'mustache');
server.set('views', path.resolve(__dirname, 'views'));
server.engine('mustache', mustacheExpress());

//habilitando arquivos estáticos 
server.use(express.static(path.resolve(__dirname, '../', 'public')));

//rotas
server.use(route)

server.listen(3000)