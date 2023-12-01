const express = require('express');
const Skill = require('../models/skill');


function create(req,res,next){
    const name = req.body.name;
    const skillLevel = req.body.skillLevel;


    let skill = new Skill({
        _name:name,
        _skillLevel:skillLevel
    });

    skill.save().then(obj => res.status(200).json({
        message:"Habilidad creada correctamente",
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"No se pudo crear la habilidad",
        obj:ex
    }));
}

function list(req,res,next){
    Skill.find().then(obj => res.status(200).json({
        message:"Lista de Habilidades",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo obtener la lista de Habilidades",
        obj:ex
    }))
}

function index(req,res,next){
    const id = req.params.id;

    Skill.findOne({"_id":id}).then(obj => res.status(200).json({
        message:`Habilidad con id :${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se pudo obtener la habilidad con id : ${id}`,
        obj:ex
    }));
}

function replace(req,res,next){
    res.send('Skills replace');
}
function update(req,res,next){
    res.send('Skills update');
}

function destroy(req,res,next){
    const id = req.params.id;
    Skill.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        message:`Habilidad eliminada correctamente, contaba con el id: ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se puedo eliminar la habilidad con el id: ${id}`,
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