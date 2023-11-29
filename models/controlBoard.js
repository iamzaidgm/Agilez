const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _productBacklog: {
        type: mongoose.Schema.ObjectId,
        ref:'Backlog'
    },
    _releaseBacklog: {
        type: mongoose.Schema.ObjectId,
        ref:'Backlog'

    },
    _sprintBacklog:{
        type: mongoose.Schema.ObjectId,
        ref:'Backlog'
    }
});



class ControlBoard{
    constructor(productBacklog,releaseBacklog,sprintBacklog){
        this._productBacklog = productBacklog,
        this._releaseBacklog = releaseBacklog,
        this._sprintBacklog = sprintBacklog
    }

    get productBacklog(){
        return this._productBacklog;
    }

    set productBacklog(v){
        this._productBacklog = v;
    }



    get releaseBacklog(){
        return this._releaseBacklog;
    }

    set releaseBacklog(v){
        this._releaseBacklog = v;
    }



    get sprintBacklog(){
        return this._sprintBacklog;
    }

    set sprintBacklog(v){
        this._sprintBacklog = v;
    }


    
}

schema.loadClass(ControlBoard);
module.exports = mongoose.model('ControlBoard',schema);