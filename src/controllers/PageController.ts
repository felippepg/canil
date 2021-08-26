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
        const list = Pet.findByType('dog')

        return response.render('pages/index', {
            menu: createMenuObject('dog'),
            banner: {
                title: 'Todos os cachorros',
                background: 'banner_dog.jpg',
                content: 'Cachorros para adoção'
            },
            list
        })
    }

    cats(request: Request, response: Response) {
        const list = Pet.findByType('cat')

        return response.render('pages/index', {
            menu: createMenuObject('dog'),
            banner: {
                title: 'Todos os gatos',
                background: 'banner_cat.jpg',
                content: 'Gatos para adoção'
            },
            list
        })
    }

    fish(request: Request, response: Response) {
        const list = Pet.findByType('fish')

        return response.render('pages/index', {
            menu: createMenuObject('fish'),
            banner: {
                title: 'Todos os peixes',
                background: 'banner_fish.jpg',
                content: 'Peixes para adoção'
            },
            list
        })
    }
}

export default new PageController