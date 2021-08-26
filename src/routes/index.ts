import { Router } from "express";
import PageController from "../controllers/PageController";
import SearchController from "../controllers/SearchController";
const route = Router()

route.get('/', PageController.index)
route.get('/dogs', PageController.dogs)
route.get('/cats', PageController.cats)
route.get('/fishes', PageController.fish)

route.get('/search', SearchController.search)

export default route