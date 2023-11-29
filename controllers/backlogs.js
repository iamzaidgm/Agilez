const express = require('express');
const Backlog = require('../models/backlog');


function create(req,res,next){
    let userStories = req.body.userStories;
    let reviews = req.body.reviews;

    let obju = req.body.userStories ? req.body.userStories:[];
    obju = obju == ""? obju : JSON.parse(obju);

    let objr = req.body.reviews? req.body.reviews: [];
    objr = objr == ""? objr : JSON.parse(objr);

    let backlog = new Backlog({
        userStories:obju.userStories,
        reviews:objr.reviews
    }).save().then(obj => res.status(200).json({
            message:`Backlog creada correctamente, con el id ${obj._id}`,
            obj:obj
        })).catch(ex => res.status(500).json({
            message:`No se pudo crear el backlog`,
            obj:ex
        }));
}

function list(req,res,next){
    Backlog.find().then(obj => res.status(200).json({
        message:"Lista de backlogs",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo obtener la lista de backlogs",
        obj:ex
    }))
}

function index(req,res,next){
    const id = req.params.id;

    Backlog.findOne({"_id":id}).then(obj => res.status(200).json({
        message:`Backlog con id :  ${obj._id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se pudo obtener el backlog con id : ${obj._id}`,
        obj:ex
    }));
}

function replace(req,res,next){
    const id = req.params.id;
    let obju = req.body.userStories ? req.body.userStories:"";
    let objr = req.body.reviews ? req.body.reviews:"";

    const parametrosobju = obju == ""? []:JSON.parse(req.body.userStories);
    const parametrosobjr = objr ==""? []: JSON.parse(req.body.reviews);

    let backlog = new Object({
        _userStories:parametrosobju.userStories,
        _reviews:parametrosobjr.reviews
    });

    Backlog.findOneAndUpdate({"_id":id},backlog,{new:true})
    .then(obj => res.status(200).json({
        message:`Backlog reemplazado correctamente, con el id: ${obj._id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se pudo remplazar el backlog con el id : ${obj._id}`,
        obj:ex
    }));

}
function update(req,res,next){
    const id = req.params.id;
    let obju = req.body.obju ? req.body.obju:"";
    let objr = req.body.objr ? req.body.objr:"";

    const parametrosobju = obju == JSON.parse(req.body.obju);
    const parametrosobjr = objr ==JSON.parse(req.body.obr);

    const updatedFields = {};

    if(parametrosobju.userStories){
        updatedFields._userStories = parametrosobju.updatedFields;
    }

    if(parametrosobjr.userStories){
        updatedFields._userStories =parametrosobjr.updatedFields;
    }

    if(parametrosobjr.reviews){
        updatedFields._reviews =parametrosobjr.updatedFields;
    }


    Backlog.findOneAndUpdate({ "_id": id }, updatedFields, { new: true })
    .then(obj => res.status(200).json({
        message: `Backlog actualizado correctamente con id : ${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        message: `No se pudo actualizar el backlog con id : ${id}`,
        obj: ex
    }));

    



}

function destroy(req,res,next){
    res.send('Backlogs destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};