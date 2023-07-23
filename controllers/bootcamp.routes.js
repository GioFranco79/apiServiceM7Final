import { Router } from "express";
import { createBootcamp, addUser, findAll, findById } from "../controllers/bootcamp.controller.js";

const routerBootcamp = Router();

routerBootcamp.get('/', findAll);

routerBootcamp.get('/:id', findById);

routerBootcamp.post('/', createBootcamp);

routerBootcamp.post('/adduser/', addUser);

export {
    routerBootcamp
}