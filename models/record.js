const mongoose = require('mongoose');

const statusEnum = ['OPEN','CLOSE','PAUSE'];

const schema = mongoose.Schema({
    _projectName: String,
    _requestDate: Date,
    _startDate: Date,
    _description: String,
    _scrumMaster:{
        type: mongoose.Schema.ObjectId,
        ref:'User'
    },
    _productOwner:{
        type: mongoose.Schema.ObjectId,
        ref:'User'
    },
    _developmentTeam:[{
        type: mongoose.Schema.ObjectId,
        ref:'User'
    }
    ],
    _controlBoard: [{
        type: mongoose.Schema.ObjectId,
        ref:'Backlogs'
    }], 
    _status:{
        type:String,
        enum:statusEnum
    },
    _points: Number,
    _endDate: Date
});



class Record{
    constructor(projectName,requestDate,startDate,description,scrumMaster,productOwner,developmentTeam,controlBoard,status,points,endDate){
        this._projectName = projectName,
        this._requestDate = requestDate,
        this._startDate = startDate,
        this._description = description,
        this._scrumMaster = scrumMaster,
        this._productOwner = productOwner,
        this.developmentTeam = developmentTeam,
        this._controlBoard = controlBoard,
        this._status = status,
        this._points = points,
        this._endDate = endDate
    }



    get projectName(){return this._projectName;}
    set projectName(v){this._projectName = v;}


    get requestDate(){return this._requestDate;}
    set requestDate(v){this._requestDate = v;}

    get startDate(){return this._startDate;}
    set startDate(v){this._startDate = v;}


    get description(){return this._description;}
    set description(v){this._description = v;}

    get scrumMaster(){return this._scrumMaster;}
    set scrumMaster(v){this._scrumMaster = v;}


    get productOwner(){return this._productOwner;}
    set productOwner(v){this._productOwner = v;}


    get developmentTeam(){return this._developmentTeam;}
    set developmentTeam(v){this._developmentTeam = v;}

    get controlBoard(){return this._controlBoard;}
    set controlBoard(v){this._controlBoard = v;}

    get status(){return this._status;}
    set status(v){this._status = v;}


    get points(){return this._points;}
    set points(v){this._points = v;}

    get endDate(){return this._endDate;}
    set endDate(v){this._endDate = v;}

}

schema.loadClass(Record);

module.exports = mongoose.model('Record',schema);


