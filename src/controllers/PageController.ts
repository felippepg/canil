import { Request, Response } from 'express';

class PageController {
    index(request: Request, response: Response) {
        return response.send('Controller principal chamado')
    }
}

export default new PageController