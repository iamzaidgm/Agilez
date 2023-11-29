const mongoose = require('mongoose');

const skillLevelEnum = ['JUNIOR','SENIOR','MASTER'];

const schema = mongoose.Schema({
    _name:String,
    _skillLevel:{
        type:String,
        enum:skillLevelEnum
    }
    
});



class Skill{
    constructor(name,skillLevel){
        this._name = name;
        this._skillLevel = skillLevel;
    }

    get name(){
        return this._name;
    }

    set name(v){
        this._skills = v;
    }

    get skillLevel(){
        return this._skillLevel;
    }

    set skillLevel(v){
        this._skillLevel = v;
    }
}


schema.loadClass(Skill);
module.exports = mongoose.model('Skill',schema);
