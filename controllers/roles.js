const express = require('express');


function create(req,res,next){
    res.send('Roles create');
}

function list(req,res,next){
    res.send('Roles list');
}

function index(req,res,next){
    res.send('Roles index');
}

function replace(req,res,next){
    res.send('Roles replace');
}
function update(req,res,next){
    res.send('Roles update');
}

function destroy(req,res,next){
    res.send('Roles destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};