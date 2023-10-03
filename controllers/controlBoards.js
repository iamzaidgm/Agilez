const express = require('express');


function create(req,res,next){
    res.send('Control Boards create');
}

function list(req,res,next){
    res.send('Control Boards list');
}

function index(req,res,next){
    res.send('Control Boards index');
}

function replace(req,res,next){
    res.send('Control Boards replace');
}
function update(req,res,next){
    res.send('Control Boards update');
}

function destroy(req,res,next){
    res.send('Control Boards destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};