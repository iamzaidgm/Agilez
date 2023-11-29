const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _userStories:[{
        type: mongoose.Schema.ObjectId,
        ref:'UserStory'
    }],
    _reviews:[{
        userStoryId:{
            type:mongoose.Schema.ObjectId,
            ref:'UserStory'
        },
        comment:String
    }]
});


class Backlog{
    constructor(userStories,reviews){
        this._userStories = userStories;
        this._reviews = reviews;
    }

    get userStories(){
        return this._userStories;
    }

    set userStories(v){
        this._userStories = v;
    }

    get reviews(){
        return this._reviews;
    }

    set reviews(v){
        this._reviews = v
    }
}


schema.loadClass(Backlog);
module.exports = mongoose.model('Backlog',schema);

