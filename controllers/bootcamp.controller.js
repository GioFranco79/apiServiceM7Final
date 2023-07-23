import { request, response } from "express";
import { Bootcamp } from "../models/bootcamp.model.js";
import { UserBootcamp } from "../models/userBootcamp.model.js";

const findAll = async (req = request, res = response) => {
    try {
        const arregloBootcamp = await Bootcamp.findAll();
        res.status(200).json(arregloBootcamp);
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            pmessage: 'Error en el servidor, findAll Bootcamp'
        });
    }
}

const findById = async (req = request, res = response) => {
    try {
        let id = req.params.id;
        id = parseInt(id);
        if (isNaN(id)) {
            res.status(400).json({
                pmessage: 'Error en el cliente, findById bootcamp, id no válido'
            });
        } else {
            const bootcamp = await Bootcamp.findByPk(id);
            res.status(200).json(bootcamp);
        }
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            pmessage: 'Error en el servidor, findById bootcamp'
        });
    }
}

const createBootcamp = async (req = request, res = response) => {
    try {
        const bootcamp = req.body;
        const bootcampInsertado = await Bootcamp.create(bootcamp);
        res.status(200).json(bootcampInsertado);    
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            pmessage: 'Error en el servidor, create bootcamp'
        });
    }
}

const addUser = async (req = request, res = response) => {
    try {
        const adduser = req.body;
        const adduserInsert = await UserBootcamp.create(adduser);
        res.status(200).json(adduserInsert);         
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            pmessage: 'Error en el servidor, addUser falló,'
        });
    }
}

export {
    findAll,
    findById,
    createBootcamp,
    addUser
}