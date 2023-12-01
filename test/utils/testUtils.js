const config = require('config');
const mongoose = require('mongoose');
const UserStory = require('../../models/userStory');
const User = require('../../models/user');


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

async function createUser(){
    let user = await new User({
        name:"Anahí",
        lastName:"Peinado",
        CURP:"PEVA020426MCHNLNA8",
        RFC:"PEVA0204269P7",
        birthday:"04/26/2002",
        socialMedia:"FACEBOOK",
        socialMediaKey:"sadsadfsdv",
        rol:"SCRUM_MASTER",
        street:"Calle del rayo",
        number:4504,
        zip:31300,
        city:"Parral",
        state:"CUU",
        country:"mx",
        abilitiesIds:"6569678741896dc5d04f5a03"

    }).save();

    return user.id
}

async function deleteUsers(){
    await User.deleteMany({});
}

module.exports = {connectDB,disconnectDB,createUserStory, deleteUserStories,createUser}