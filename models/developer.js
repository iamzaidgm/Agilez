const mongoose = require('mongoose');

const skillLevelEnum = ['JUNIOR','SENIOR','MASTER'];


const schema = mongoose.Schema({
    _skills:[{
        name:String,
        description:String,
        skillLevel:{
            type:String,
            enum:skillLevelEnum
        }

    }]
    //preguntar lo de la herencia con respecto a rol 
    
});



class Developer{
    constructor(name){
        this._skills = skills;
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
