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
        message:res.__('userStories.create.ok'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('userStories.create.wrong'),
        obj:ex
    }));


}

function list(req,res,next){
    UserStory.find().then(objs => res.status(200).json({
        message: res.__('userStories.list.ok'),
        obj:objs
    })).catch(ex => res.status(500).json({
        message: res.__('userStories.list.wrong'),
        obj:ex
    }));

}

function index(req,res,next){
    const id = req.params.id;
    UserStory.findOne({"_id":id}).then(obj => res.status(200).json({
        message:res.__('userStories.index.ok') + `${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('userStories.index.wrong') + `${id}`,
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
            message:res.__('userStories.replace.ok')+`${id}`,
            obj:obj
        })).catch(ex => res.status(500).json({
            message:res.__('userStories.replace.wrong')+`${id}`,
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
            message: res.__('userStories.update.ok')+`${id}`,
            obj: obj
        })).catch(ex => res.status(500).json({
            message: res.__('userStories.update.wrong')+`${id}`,
            obj: ex
        }));
}

function destroy(req,res,next){
    const id = req.params.id;
    UserStory.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        message:res.__('userStories.destroy.ok')+`${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('userStories.destroy.wrong')+`${id}`,
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