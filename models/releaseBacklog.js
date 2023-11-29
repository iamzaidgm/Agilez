const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _reviews:[{
        userStoryId:{
            type:mongoose.Schema.ObjectId,
            ref:'UserStory'
        },
        comment:String
    }]

});



class ReleaseBacklog{
    constructor(reviews){
        this._reviews = reviews
    }

    get reviews(){
        return this._reviews;
    }

    set reviews(v){
        this._reviews = v;
    }
}


schema.loadClass(ReleaseBacklog);
module.exports = mongoose.model('ReleaseBacklog',schema);
