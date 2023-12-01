const express = require('express');
const User = require('../models/user');
const Skill = require('../models/skill');
const mongoose = require('mongoose');


async function create(req,res,next){

    let name = req.body.name;
    let lastName = req.body.lastName;
    let CURP = req.body.CURP;
    let RFC = req.body.RFC;
    const birthday = req.body.birthday;
    let address = new Object();
    address.street = req.body.street;
    address.number = req.body.number;
    address.zip = req.body.zip;
    address.city = req.body.city;
    address.state = req.body.state;
    address.country = req.body.country;
    let socialMedia = req.body.socialMedia;
    let socialMediaKey = req.body.socialMediaKey;
    let rol = req.body.rol;
    const abilitiesIds = req.body.abilitiesIds;

    let abilities = await Skill.find({ "_id": { $in: abilitiesIds } });
    

    let user = new User({
        name:name,
        lastName:lastName,
        CURP:CURP,
        RFC:RFC,
        birthday:birthday,
        address:address,
        socialMedia:socialMedia,
        socialMediaKey:socialMediaKey,
        rol:rol,
        abilities:abilities
    });


    user.save().then(obj => res.status(200).json({
        msg: res.__('users.create.ok'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('users.create.wrong'),
        obj:ex
    }));



}

function list(req,res,next){
    User.find().then(obj => res.status(200).json({
        message:res.__('users.list.ok'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message: res.__('users.list.wrong'),
        obj:ex
    }))
}

function index(req,res,next){
    const id = req.params.id;

    User.findOne({"_id":id}).then(obj => res.status(200).json({
        message:res.__('users.index.ok')+`${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('users.index.wrong')+`${id}`,
        obj:ex
    }));
}

function replace(req,res,next){
    res.send('Users replace');
}
function update(req,res,next){
    res.send('Users update');
}

function destroy(req,res,next){
    const id = req.params.id;
    User.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        message:res.__('users.destroy.ok')+`${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('users.destroy.wrong')+`${id}`+`${id}`,
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