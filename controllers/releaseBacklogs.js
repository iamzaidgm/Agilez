const express = require('express');


function create(req,res,next){
    res.send('Release Backlogs create');
}

function list(req,res,next){
    res.send('Release Backlogs list');
}

function index(req,res,next){
    res.send('Release Backlogs index');
}

function replace(req,res,next){
    res.send('Release Backlogs replace');
}
function update(req,res,next){
    res.send('Release Backlogs update');
}

function destroy(req,res,next){
    res.send('Release Backlogs destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};