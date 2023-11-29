const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name:String
});

class SocialMedia{
    constructor(name){
        this._name = name
    }

    get name(){
        return this._name;
    }

    set name(v){
        this._name = v
    }
}


schema.loadClass(SocialMedia);
module.exports = mongoose.model('SocialMedia',schema);

