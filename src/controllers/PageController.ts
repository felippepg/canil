import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';

class PageController {
    index(request: Request, response: Response) {
        return response.render('pages/index', {
            menu: createMenuObject('all'),
            banner: {
                title: 'Todos os bicho',
                background: 'allanimals.jpg',
                content: 'bicho pra adotar'
            }
        })
    }

    dogs(request: Request, response: Response) {
        return response.render('pages/index', {
            menu: createMenuObject('dog'),
            banner: {
                title: 'Todos os cachorros',
                background: 'banner_dog.jpg',
                content: 'Cachorros para adoção'
            }
        })
    }
}

export default new PageController