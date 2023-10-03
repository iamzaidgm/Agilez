const express = require('express');


function create(req,res,next){
    res.send('Scrum Masters create');
}

function list(req,res,next){
    res.send('Scrum Masters list');
}

function index(req,res,next){
    res.send('Scrum Masters index');
}

function replace(req,res,next){
    res.send('Scrum Masters replace');
}
function update(req,res,next){
    res.send('Scrum Masters update');
}

function destroy(req,res,next){
    res.send('Scrum Masters destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};