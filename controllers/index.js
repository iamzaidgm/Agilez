var express = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');

function login(req,res,next){
    res.send("LOGIN");
}


module.exports = {login}