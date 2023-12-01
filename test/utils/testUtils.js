const config = require('config');
const mongoose = require('mongoose');
const UserStory = require('../../models/userStory');


async function connectDB (){
    const url = config.get('dbChain');
    await mongoose.connect(url);   
    //db = mongoose.connection;
}

async function disconnectDB(){
   // await db.disconnect();
};

async function createUserStory(){
    let narrative = new Object();
    narrative.role = "usuario";
    narrative.functionality = "funcionalidad";
    narrative.benefits = "para";
    narrative.priority = 3;
    narrative.size = 5;

    let acceptanceCriteria = new Object();
    acceptanceCriteria.context = "Contexto";
    acceptanceCriteria.events = "Eventos";
    acceptanceCriteria.results = "Resultados";

    let userStory = await new UserStory({
        name:"Historia generada por utils",
        narrative:narrative,
        acceptanceCriteria:acceptanceCriteria
    }).save();

    return userStory.id;

}

async function deleteUserStories(){
    await UserStory.deleteMany({});
}

module.exports = {connectDB,disconnectDB,createUserStory, deleteUserStories}