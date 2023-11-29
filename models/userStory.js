const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name:String,
    _narrative: {
        role: String,
        functionality: String,
        benefits : String,
        priority: Number,
        size: Number

    },
    _acceptanceCriteria:{
        context: String,
        events:[String],
        results:[String]
    }
});


class UserStory{

    constructor(name,narrative,acceptanceCriteria){
        this._name = name;
        this._narrative = narrative;
        this._acceptanceCriteria = acceptanceCriteria;

    }

    get name(){
        return this._name;
    }

    set name(v){
        this._name = v;
    }



    get narrative(){
        return this._narrative;
    }

    set narrative(v){
        this._narrative = v;
    }

    get acceptanceCriteria(){
        return this._acceptanceCriteria;
    }

    set acceptanceCriteria(v){
        this._acceptanceCriteria = v;
    }

}


schema.loadClass(UserStory);
module.exports = mongoose.model('UserStory',schema);