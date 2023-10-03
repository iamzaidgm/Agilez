const express = require('express');


function create(req,res,next){
    res.send('Backlogs create');
}

function list(req,res,next){
    res.send('Backlogs list');
}

function index(req,res,next){
    res.send('Backlogs index');
}

function replace(req,res,next){
    res.send('Backlogs replace');
}
function update(req,res,next){
    res.send('Backlogs update');
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