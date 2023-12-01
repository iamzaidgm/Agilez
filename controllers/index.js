var express = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const User = require('../models/user');

function login(req,res,next){
    res.send("LOGIN");
    let email = req.body.email;
    let password = req.body.password;
    const JwtKey = config.get("secret.key");
    User.findOne({_email:email}).then(user => {
        if(user){
            bcrypt.hash(password, user.salt, (error, hash) => {
                if(error){
                    res.status(403).json({
                        message:res.__('login.wrong'),
                        obj:error
                    });
                }
                if(hash === user.password){
                    res.status(200).json({
                        message:res.__('login.ok'),
                        obj:jwt.sign({data:user.data, exp:Math.floor(Date.now()/1000)+600},JwtKey)
                    });
                }
                else{
                    res.status(403).json({
                        message:res.__('login.wrong'),
                        obj:null
                    });
                }
                
            });
        }
        else{
            res.status(403).json({
                message:res.__('login.wrong'),
                obj:null
            });
        }
    }).cath(ex => res.status(403).json({
        message:res.__('login.wrong'),
        obj:ex
    }));
}

module.exports = {login}