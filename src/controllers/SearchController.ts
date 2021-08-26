import { Request, Response } from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import Pet from '../models/Pet';

class SearchController {
    search(request: Request, response: Response) {
        const query: string = request.query.q as string;
        const list = Pet.findByName(query)

        if (!query) {
            response.redirect('/')
            return
        }

        return response.render('pages/index', {
            menu: createMenuObject(''),
            list,
        })
    }
}

export default new SearchController