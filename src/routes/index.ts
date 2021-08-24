import { Router } from "express";
import PageController
    from "../controllers/PageController";
const route = Router()

route.get('/', PageController.index)

export default route