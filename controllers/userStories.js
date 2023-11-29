const express = require('express');
const UserStory = require('../models/userStory');


function create(req,res,next){
    res.send('Users Stories create');
}

function list(req,res,next){
    res.send('Users Stories list');
}

function index(req,res,next){
    res.send('Users Stories index');
}

function replace(req,res,next){
    res.send('Users Stories replace');
}
function update(req,res,next){
    res.send('Users Stories update');
}

function destroy(req,res,next){
    res.send('Users Stories destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};