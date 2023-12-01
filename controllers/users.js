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
    
    if(rol != 'DEVELOPER'){
        abilities = [];
    }


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
        msg: "Usuario creado correctamente",
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"No se pudo crear el usuario correctamente",
        obj:ex
    }));



}

function list(req,res,next){
    User.find().then(obj => res.status(200).json({
        message:"Lista de Usuarios",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo obtener la lista de usuarios",
        obj:ex
    }))
}

function index(req,res,next){
    const id = req.params.id;

    User.findOne({"_id":id}).then(obj => res.status(200).json({
        message:`Usuario con el id :${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se pudo obtener el usuario con id : ${id}`,
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
        message:`Usuario eliminado correctamente, contaba con el id: ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se pudo eliminar el usuario con el id: ${id}`,
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