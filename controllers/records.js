const express = require('express');

function create(req,res,next){
    res.send('record create');
}

function list(req,res,next){
    res.send('record list');
}

function replace(req,res,next){
    res.send('record replace');
}


function update(req,res,next){
    res.send('record update');
}

function destroy(req,res,next){
    res.send('record destroy');
}

function index(req,res,next){
    res.send('record index');
}




module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};
