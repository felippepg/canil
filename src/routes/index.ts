import { Router } from "express";
import PageController from "../controllers/PageController";
const route = Router()

route.get('/', PageController.index)
route.get('/dogs', PageController.dogs)

export default route