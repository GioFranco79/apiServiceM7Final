import { request, response } from "express";
import { User } from "../models/user.model.js";
import { Bootcamp } from "../models/bootcamp.model.js";
import { UserBootcamp } from "../models/userBootcamp.model.js";

const findAll = async (req = request, res = response) => {
    try {
        const arregloUser = await User.findAll({ include: { all: true, nested: true }});        
        res.status(200).json(arregloUser);
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            pmessage: 'Error en el servidor, findAll User'
        });
    }
}

const findUserById = async (req = request, res = response) => {
    try {
        let id = req.params.id;
        id = parseInt(id);
        if (isNaN(id)) {
            res.status(400).json({
                pmessage: 'Error en el cliente, findById user, id no válido'
            });
        } else {
            const user = await User.findByPk(id);
            res.status(200).json(user);
        }
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            pmessage: 'Error en el servidor, findById user'
        });
    }
}

const createUser = async (req = request, res = response) => {
    try {
        const user = req.body;
        console.log(user);
        const userInsertado = await User.create(user);
        res.status(200).json(userInsertado);        
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            pmessage: 'Error en el servidor, create user'
        });
    }
}

const updateUserById = async (req = request, res = response) => {
    const now = new Date();
    try {
        const { id, firstName, lastName, email} = req.body;
        const user = await User.findByPk(id);
        if (user) {
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.updatedAt = now;
            const userUpdated = await user.save();
            res.json(userUpdated);
        } else {
            res.status(400).json({
                pmessage: 'Error en el cliente, save user, no existe este user',
                user: req.body
            });
        }
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            pmessageo: 'Error en el servidor, update user'
        });
    }
}

const deleteUserById = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            res.json(`El user con id: ${id}, fue eliminado con éxito`);
        } else {
            res.json(`El user con id: ${id}, no existe`);
        }
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            pmessage: 'Error en el servidor, deleteById user'
        });
    }
}

export {
    findAll,
    findUserById,
    createUser,
    updateUserById,
    deleteUserById
}