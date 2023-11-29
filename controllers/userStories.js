const express = require('express');
const UserStory = require('../models/userStory');


function create(req,res,next){

    let name = req.body.name;

    let narrative = new Object();
    narrative.role = req.body.role;
    narrative.functionality = req.body.functionality;
    narrative.benefits = req.body.benefits;
    narrative.priority = req.body.priority;
    narrative.size = req.body.size;


    let acceptanceCriteria = new Object();
    acceptanceCriteria.context = req.body.context;
    acceptanceCriteria.events = req.body.events;
    acceptanceCriteria.results = req.body.results;

    let userStory = new UserStory({
        name:name,
        narrative:narrative,
        acceptanceCriteria:acceptanceCriteria
    });

    userStory.save().then(obj => res.status(200).json({
        message:"Historia de usuario creada correctamente",
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"No se pudo crear la historia de usuario",
        obj:ex
    }));


}

function list(req,res,next){
    UserStory.find().then(objs => res.status(200).json({
        message: "Lista de historias de usuario",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "No se pudo encontrar la lista de historias de usuario ",
        obj:ex
    }));

}

function index(req,res,next){
    const id = req.params.id;
    UserStory.findOne({"_id":id}).then(obj => res.status(200).json({
        message:`Usuario con id : ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se pudo consultar el usuario con id : ${id}`,
        obj:ex
    }));
}

function replace(req,res,next){
    const id = req.params.id;
    let objt = req.body.objt ? req.body.objt:"";
    const parametros = JSON.parse(objt);
    let userStory = new Object({
        _name:parametros.name,
        _narrative:parametros.narrative,
        _acceptanceCriteria: parametros.acceptanceCriteria
    });

    UserStory.findOneAndUpdate({"_id":id},userStory,{new:true})
        .then(obj => res.status(200).json({
            message:`Historia de usuario reemplazada correctamente, con el id: ${id}`,
            obj:obj
        })).catch(ex => res.status(500).json({
            message:`No se pudo reemplazar la historia de usuario con el id: ${id}`,
            obj:ex
        }));
}
function update(req,res,next){
    const id = req.params.id;
    const objt = req.body.objt ? req.body.objt : "";
    const parametros = JSON.parse(objt);

    const updatedFields = {};

    if (parametros.name) {
        updatedFields._name = parametros.name;
    }

    if (parametros.narrative) {
        updatedFields._narrative = parametros.narrative;
    }

    if (parametros.acceptanceCriteria) {
        updatedFields._acceptanceCriteria = parametros.acceptanceCriteria;
    }

    UserStory.findOneAndUpdate({ "_id": id }, updatedFields, { new: true })
        .then(obj => res.status(200).json({
            message: `Historia de usuario actualizada correctamente, con el id: ${id}`,
            obj: obj
        })).catch(ex => res.status(500).json({
            message: `No se pudo actualizar la historia de usuario con el id: ${id}`,
            obj: ex
        }));
}

function destroy(req,res,next){
    const id = req.params.id;
    UserStory.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        message:`Historia de Usuario eliminada correctamente, contaba con el id: ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se puedo eliminar la historia de usuario con el id: ${id}`,
        obj:ex
    }));
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};