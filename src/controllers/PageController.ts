import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import Pet from '../models/Pet';
class PageController {
    index(request: Request, response: Response) {
        const list = Pet.findAll()
        return response.render('pages/index', {
            menu: createMenuObject('all'),
            banner: {
                title: 'Todos os animais',
                background: 'allanimals.jpg',
                content: 'Animais disponíveis para adoção'
            },
            list
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