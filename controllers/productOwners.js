const express = require('express');


function create(req,res,next){
    res.send('Product Owners  create');
}

function list(req,res,next){
    res.send('Product Owners  list');
}

function index(req,res,next){
    res.send('Product Owners  index');
}

function replace(req,res,next){
    res.send('Product Owners  replace');
}
function update(req,res,next){
    res.send('Product Owners  update');
}

function destroy(req,res,next){
    res.send('Product Owners  destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};