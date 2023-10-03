const express = require('express');


function create(req,res,next){
    res.send('Developers create');
}

function list(req,res,next){
    res.send('Developers list');
}

function index(req,res,next){
    res.send('Developers index');
}

function replace(req,res,next){
    res.send('Developers replace');
}
function update(req,res,next){
    res.send('Developers update');
}

function destroy(req,res,next){
    res.send('Developers destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};