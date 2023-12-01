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
        message:res.__('skills.create.ok'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('skills.create.wrong'),
        obj:ex
    }));
}

function list(req,res,next){
    Skill.find().then(obj => res.status(200).json({
        message:res.__('skills.list.ok'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('skills.list.wrong'),
        obj:ex
    }))
}

function index(req,res,next){
    const id = req.params.id;

    Skill.findOne({"_id":id}).then(obj => res.status(200).json({
        message:res.__('skills.index.ok'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('skills.index.wrong'),
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
        message: res.__('skills.destroy.ok')+`${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message: res.__('skills.destroy.wrong')+ `${id}`,
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