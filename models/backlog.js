const mongoose = require('mongoose');

const typeEnum = ['PRODUCT_BACKLOG','RELEASE_BACKLOG','SPRINT_BACKLOG'];

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
    }],
    _type:{
        type:String,
        enum:typeEnum
    }
});


class Backlog{
    constructor(userStories,reviews,type){
        this._userStories = userStories;
        this._reviews = reviews;
        this.type = type;
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

    get type(){
        return this._type;
    }

    set type(v){
        this._type = v;
    }
}


schema.loadClass(Backlog);
module.exports = mongoose.model('Backlog',schema);

