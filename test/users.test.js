const app = require('../app');
const supertest = require('supertest');
const utils = require('./utils/testUtils');

describe("User Stories controller test",()=>{
    beforeEach(async ()=>{
            
    });
    afterEach(async ()=>{
        //await utils.deleteUserStories();
    });
    describe("Users create method test",()=>{

        it("Should return a 200 status if the object passed has all the valids fields",async ()=>{
            const data = {
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

            }

            const res = await supertest(app).post('/users').send(data);
            console.log(res);
            expect(res.status).toBe(200);
        });

        it("Should return a 500 status if birthday is not valid",async ()=>{
            const data = {
                name:"Anahí",
                lastName:"Peinado",
                CURP:"PEVA020426MCHNLNA8",
                RFC:"PEVA0204269P7",
                birthday:"26/26/2002",
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

            }
            const res = await supertest(app).post('/users').send(data);
            //console.log(res);
            expect(res.status).toBe(500);
        });
    });

    describe("Users list",()=>{
        it("Should return a 200 status if the route exist",async()=>{

            const response = await supertest(app).get('/users');
            expect(response.status).toBe(200);
        });
    });

    describe("Users index",()=>{
        it("Should return a 200 status if the user exists in the database",async()=>{
            const id = await utils.createUser();
            const response = await supertest(app).get(`/users/${id}`);

            expect(response.status).toBe(200);
        });

        it("Should return a 500 status if the user doesn't exists in the database",async()=>{
            const id = 'abcde12345'
            const response = await supertest(app).get(`/users/${id}`);

            expect(response.status).toBe(500);
        });
    });
    
    describe("User destroy",()=>{
        it("should return a 200 status if delete was succesfull",async()=>{
            const id = await utils.createUser();
            const response = await supertest(app).delete(`/users/${id}`);
            expect(response.status).toBe(200);
        });
        it("should return a 500 status if delete object doesn't exist.",async()=>{
            const id = "21345678"
            const response = await supertest(app).delete(`/users/${id}`);
            expect(response.status).toBe(500);
        });
    })
});