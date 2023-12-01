const express = require('express');
const Backlog = require('../models/backlog');
const Record = require('../models/record');
const User = require('../models/user');


async function create(req,res,next){
    let projectName = req.body.projectName;
    const requestDate = req.body.requestDate;
    const startDate = req.body.startDate;
    let description = req.body.description;
    const scrumMaster = req.body.scrumMaster;
    const productOwner = req.body.productOwner;
    const developmentTeamIds = req.body.developmentTeamIds;
    const controlBoardIds = req.body.controlBoardIds;
    let status = req.body.status;
    const points = req.body.points;
    const endDate = req.body.endDate;

    let developmentTeam = await User.find({ "_id": { $in: developmentTeamIds } });
    let controlBoard = await Backlog.find({ "_id": { $in: controlBoardIds } });


    let record = new Record({
        projectName:projectName,
        requestDate:requestDate,
        startDate:startDate,
        description:description,
        scrumMaster:scrumMaster,
        productOwner:productOwner,
        developmentTeam:developmentTeam,
        controlBoard:controlBoard,
        status:status,
        points:points,
        endDate:endDate
    });

    record.save().then(obj => res.status(200).json({
        msg: "Registro creado correctamente",
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"No se pudo crear el registro correctamente",
        obj:ex
    }));



}

function list(req,res,next){
    Record.find().then(obj => res.status(200).json({
        message:"Lista de Proyectos",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo obtener la lista de proyectos",
        obj:ex
    }))
}

function index(req,res,next){
    const id = req.params.id;

    Record.findOne({"_id":id}).then(obj => res.status(200).json({
        message:`Proyecto con el id :${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se pudo obtener el proyecto con id : ${id}`,
        obj:ex
    }));
}

function replace(req,res,next){
    res.send('record replace');
}


function update(req,res,next){
    res.send('record update');
}

function destroy(req,res,next){
    const id = req.params.id;
    Record.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        message:`Proyecto eliminado correctamente, contaba con el id: ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se pudo eliminar el proyecto con el id: ${id}`,
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
