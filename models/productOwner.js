const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name:String
    //preguntar lo de la herencia con respecto a rol 
});


class ProductOwner{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(v){
        this._name = v;
    }
}


schema.loadClass(ProductOwner);
module.exports = mongoose.model('ProductOwner',schema);
