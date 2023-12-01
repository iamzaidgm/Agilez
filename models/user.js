const mongoose = require('mongoose');

const socialMediaEnum = ['FACEBOOK','GOOGLE'];
const rolEnum = ['SCRUM_MASTER','PRODUCT_OWNER','DEVELOPER'];

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
    _socialMedia:{
        type:String,
        enum:socialMediaEnum
    },
    _socialMediaKey:  String,
    _rol:{
        type:String,
        enum:rolEnum
    },
    _abilities:[{
        type:mongoose.Schema.ObjectId,
        ref:'Skill'
    }],
    _email:String, 
    _password:String,
    _salt:String
});


class User{
    constructor(name,lastName,CURP,RFC,birthday,address,socialMedia,socialMediaKey,rol,abilities,email,password,salt){
        this._name = name,
        this._lastName = lastName,
        this._CURP = CURP,
        this._RFC = RFC,
        this._birthday = birthday,
        this._address = address,
        this.socialMedia = socialMedia,
        this._socialMediaKey = socialMediaKey,
        this._rol = rol,
        this._abilities = abilities,
        this._email = email,
        this._password = password, 
        this._salt = salt
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

    get socialMedia(){
        return this._socialMedia;
    }

    set socialMedia(v){
        this._socialMedia = v;
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


    get abilities(){
        return this._abilities;
    }

    set abilities(v){
        this._abilities = v;
    }

    get email(){
        return this._email;
    }

    set email(v){
        this._email = v;
    }

    get password(){
        return this._password;
    }

    set password(v){
        this._password = v;
    }

    get salt(){
        return this._salt;
    }

    set salt(v){
        this._salt = v;
    }


}


schema.loadClass(User);
module.exports = mongoose.model('User',schema);
