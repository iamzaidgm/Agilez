const mongoose = require('mongoose');



const schema = mongoose.Schema({
    _name:String,
    _skills:[{
        type:mongoose.Schema.ObjectId,
        ref:'Skill'
    }]
    
});



class Developer{
    constructor(name,skills){
        this._name = name;
        this._skills = skills;
    }

    get name(){
        return this._name;
    }

    set name(v){
        this._skills = v;
    }

    get skills(){
        return this._skills;
    }

    set skills(v){
        this._skills = v;
    }
}


schema.loadClass(Developer);
module.exports = mongoose.model('Developer',schema);
