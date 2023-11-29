const mongoose = require('mongoose');


const schema = mongoose.Schema({
    _name: String,
    _lastName: String,
    _CURP: String,
    _RFC: String,
    _birthday: Date,
    _address: {
        street: String,
        number: String,
        zip: String,
        city: String,
        state: String,
        country: String
    },
    _socialMediaOptions:[{
        type: mongoose.Schema.ObjectId,
        ref:'SocialMedia'
    }],
    _socialMediaKey:  String,
    _rol:mongoose.Schema.Types.ObjectId
});


class User{
    constructor(name,lastName,CURP,RFC,birthday,address,SocialMediaOptions,socialMediaKey,rol){
        this._name = name,
        this._lastName = lastName,
        this._CURP = CURP,
        this._RFC = RFC,
        this._birthday = birthday,
        this._address = address,
        this.SocialMediaOptions = SocialMediaOptions,
        this._socialMediaKey = socialMediaKey,
        this._rol = rol
    }


    get name() {
        return this._name;}
    set name(v) {
        this._name = v;
    }


    get lastName() {
        return this._lastName;
    }
    set lastName(v) {
        this._lastName = v;
    }


    get CURP() {
        return this._CURP;
    }
    set CURP(v) {
        this._CURP = v;
    }

    get RFC() {
        return this._RFC;
    }

    set RFC(v) {
        this._RFC = v;
    }

    get birthday() {
        return this._birthday;
    }

    set birthday(v) {
        this._birthday = v;
    }

    get address() {
        return this._address;
    }

    set address(v) {
        this._address = v;
    }

    get socialMediaOptions(){
        return this._socialMediaOptions;
    }

    set socialMediaOptions(v){
        this._socialMediaOptions = v;
    }


    get socialMediaKey() {
        return this._socialMediaKey;
    }

    set socialMediaKey(v) {
        this._socialMediaKey = v;
    }

    get rol() {
        return this._rol;
    }

    set rol(v) {
        this._rol = v;
    }



}


schema.loadClass(User);
module.exports = mongoose.model('User',schema);
