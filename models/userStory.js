const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _narrative: {
        name: String,
        role: String,
        functionality: String,
        benefits : String,
        priority: Number,
        size: Number

    },
    _acceptanceCriteria:{
        name: String,
        context: String,
        events:[String],
        results:[String]
    }
});


class UserStory{

    constructor(narrative,acceptanceCriteria){
        this._narrative = narrative;
        this._acceptanceCriteria.acceptanceCriteria;

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