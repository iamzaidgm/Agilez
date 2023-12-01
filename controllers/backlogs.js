const express = require('express');
const Backlog = require('../models/backlog');


function create(req,res,next){
    let userStories = req.body.userStories;
    let reviews = req.body.reviews;
    let type = req.body.type;

    let obju = req.body.userStories ? req.body.userStories:[];
    obju = obju == ""? obju : JSON.parse(obju);

    let objt = req.body.type? req.body.type: 'PRODUCT_BACKLOG';
    objt = objt == ""? objt : JSON.parse(objt);

    let objr = req.body.reviews? req.body.reviews: [];
    objr = objr == ""? objr : JSON.parse(objr);

    if(objt.type != 'RELEASE_BACKLOG'){
        objr.reviews = [];
    }

    let backlog = new Backlog({
        userStories:obju.userStories,
        reviews:objr.reviews,
        type:objt.type
    }).save().then(obj => res.status(200).json({
            message:res.__('backlogs.create.ok'),
            obj:obj
        })).catch(ex => res.status(500).json({
            message:res.__('backlogs.create.wrong'),
            obj:ex
        }));
}

function list(req,res,next){
    Backlog.find().then(obj => res.status(200).json({
        message:res.__('backlogs.list.ok'),
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('backlogs.list.wrong'),
        obj:ex
    }))
}

function index(req,res,next){
    const id = req.params.id;

    Backlog.findOne({"_id":id}).then(obj => res.status(200).json({
        message:res.__('backlogs.index.ok')+`${obj._id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('backlogs.index.wrong')+`${obj._id}`,
        obj:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let obju = req.body.userStories ? req.body.userStories:"";
    let objr = req.body.reviews ? req.body.reviews:"";
    let objt = req.body.type ? req.body.type:"";
    
    const parametrosobju = obju == ""? []:JSON.parse(req.body.userStories);
    const parametrosobjt = objt ==""? null: JSON.parse(req.body.type);


    if(parametrosobjt == null){
        res.status(403).json({
            message: "El tipo de backlog no puede ser vacio",
            obj: "",
          });
    }

    let parametrosobjr = objr ==""? []: JSON.parse(req.body.reviews);
    console.log(parametrosobjr);
    
    if(parametrosobjt.type != 'RELEASE_BACKLOG'){
        parametrosobjr.reviews = [];
    }


    let backlog = new Object({
    _userStories:parametrosobju.userStories,
    _reviews:parametrosobjr.reviews,
    _type:parametrosobjt.type
    });
    
    Backlog.findOneAndReplace({"_id":id},backlog,{new:true})
    .then(obj => res.status(200).json({
    message: res.__('backlogs.replace.ok')+ `${obj._id}`,
    obj:obj
    })).catch(ex => res.status(500).json({
    message:res.__('backlogs.replace.wrong')+`${id}`,
    obj:ex
    }));
}




function update(req, res, next) {
    const id = req.params.id;
    let obju = req.body.userStories ? req.body.userStories:"";
    let objr = req.body.reviews ? req.body.reviews:"";
    let objt = req.body.type ? req.body.type:"";
    let obj ={}
    
    const parametrosobju = obju == ""? []:JSON.parse(req.body.userStories);

    if(parametrosobju.userStories != []){
        obj._userStories = parametrosobju.userStories 
        
    }

    const parametrosobjr = objr ==""? []: JSON.parse(req.body.reviews);

    if(parametrosobjr.reviews != []){
        obj._reviews = parametrosobjr.reviews
        
    }

    const parametrosobjt = objt ==""? null: JSON.parse(req.body.type);

    if(parametrosobjt.type != null){
        obj._type = parametrosobjt.type
        
    }
    
    if(parametrosobjt.type != 'RELEASE_BACKLOG'){
        obj._reviews = [];
    }

    
    let backlog = new Object(obj);
    
    Backlog.findOneAndUpdate({"_id":id},backlog,{new:true})
    .then(obj => res.status(200).json({
    message:res.__('backlogs.update.ok')+`${obj._id}`,
    obj:obj
    })).catch(ex => res.status(500).json({
    message: res.__('backlogs.update.wrong')+ `${obj._id}`,
    obj:ex
    }));
}




function destroy(req,res,next){
    const id = req.params.id;
    Backlog.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        message: res.__('backlogs.destroy.ok')+ `${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('backlogs.destroy.wrong')+`${id}`,
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