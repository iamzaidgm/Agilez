const express = require('express');

function create(req,res,next){
    res.send('socialMedia create');
}

function list(req,res,next){
    res.send('socialMedia list');
}

function replace(req,res,next){
    res.send('socialMedia replace');
}


function update(req,res,next){
    res.send('socialMedia update');
}

function destroy(req,res,next){
    res.send('socialMedia destroy');
}

function index(req,res,next){
    res.send('socialMedia index');
}







module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};
