const express = require('express');
const User = require('../models/user');


function create(req,res,next){

    let name = req.body.name;
    let lastName = req.body.lastName;
    let CURP = req.body.CURP;
    let RFC = req.body.RFC;
    let birthday = req.body.birthday;
    let address = new Object();
    address.street = req.body.street;
    address.number = req.body.number;
    address.zip = req.body.zip;
    address.city = req.body.city;
    address.state = req.body.state;
    address.country = req.body.country;
    let socialMediaKey = req.body.socialMediaKey;
    


}

function list(req,res,next){
    res.send('Users list');
}

function index(req,res,next){
    res.send('Users index');
}

function replace(req,res,next){
    res.send('Users replace');
}
function update(req,res,next){
    res.send('Users update');
}

function destroy(req,res,next){
    res.send('Users destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};