import { Router } from "express";
import { createUser, deleteUserById, findAll, findUserById, updateUserById } from "../controllers/user.controller.js";

const routerUser = Router();

routerUser.get('/', findAll);

routerUser.get('/:id', findUserById);

routerUser.post('/', createUser);

routerUser.put('/', updateUserById);

routerUser.delete('/:id', deleteUserById);

export {
    routerUser
}