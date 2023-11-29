const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _userStories:[{
        type: mongoose.Schema.ObjectId,
        ref:'UserStory'
    }
    ]
});


class Backlog{
    constructor(userStories){
        this._userStories = userStories
    }

    get userStories(){
        return this._userStories;
    }

    set userStories(v){
        this._userStories = v;
    }
}


schema.loadClass(Backlog);
module.exports = mongoose.model('Backlog',schema);

