const app = require('../app');
const supertest = require('supertest');
const utils = require('./utils/testUtils');

describe("User Stories controller test",()=>{
    beforeEach(async ()=>{
            
    });
    afterEach(async ()=>{
        await utils.deleteUserStories();
    });
    describe("User Stories create method test",()=>{
        
        it("Should return a 200 status if the object passed has all the valids fields",async ()=>{
            const data = {
                name:"Historia de prueba",
                //narrative
                role:"usuario",
                functionality:"funcion",
                benefits:"beneficios",
                priority:3,
                size:5,
                //acceptanceCriteria
                context:"no hay",
                events:"si",
                results:"ajá"
            }
            const res = await supertest(app).post('/userStories').send(data);
            //console.log(res);
            expect(res.status).toBe(200);
        });

        it("Should return a 500 status if either priority or size isn´t numeric",async ()=>{
            const data = {
                name:"Historia de prueba",
                //narrative
                role:"usuario",
                functionality:"funcion",
                benefits:"beneficios",
                priority:"no númerico",
                size:5,
                //acceptanceCriteria
                context:"no hay",
                events:"si",
                results:"ajá"
            }
            const res = await supertest(app).post('/userStories').send(data);
            //console.log(res);
            expect(res.status).toBe(500);
        });
    });

    describe("User Stories list",()=>{
        it("Should return a 200 status if the route exist",async()=>{

            const response = await supertest(app).get('/userStories');
            expect(response.status).toBe(200);
        });
    });

    describe("User Stories index",()=>{
        it("Should return a 200 status if the user story exists in the database",async()=>{
            const id = await utils.createUserStory();
            const response = await supertest(app).get(`/userStories/${id}`);

            expect(response.status).toBe(200);
        });

        it("Should return a 500 status if the user story doesn't exists in the database",async()=>{
            const id = 'abcde12345'
            const response = await supertest(app).get(`/userStories/${id}`);

            expect(response.status).toBe(500);
        });
    });

    describe("User stories update, replace",()=>{
        it("should return a 200 status if update was succesfull",async()=>{
            const id = await utils.createUserStory();

            const response = await supertest(app).patch(`/userStories/${id}`).send({objt:"{}"});


            expect(response.status).toBe(200);
        });

        it("should return a 500 status if update object doesn´t exist",async()=>{
            const id = "abcde12345";

            const response = await supertest(app).patch(`/userStories/${id}`).send({objt:"{}"});


            expect(response.status).toBe(500);
        });

        it("should return a 200 status if replace was succesfull",async()=>{
            const id = await utils.createUserStory();
            const response = await supertest(app).put(`/userStories/${id}`).send({objt:"{}"});
            expect(response.status).toBe(200);
        });

        it("should return a 200 status if update was succesfull",async()=>{
            const id = "abcde12345";
            const response = await supertest(app).patch(`/userStories/${id}`).send({objt:"{}"});
            expect(response.status).toBe(500);
        });
    });
    
    describe("User stories destroy",()=>{
        it("should return a 200 status if delete was succesfull",async()=>{
            const id = await utils.createUserStory();
            const response = await supertest(app).delete(`/userStories/${id}`);
            expect(response.status).toBe(200);
        });
        it("should return a 500 status if delete object doesn't exist.",async()=>{
            const id = "21345678"
            const response = await supertest(app).patch(`/userStories/${id}`).send({objt:"{}"});
            expect(response.status).toBe(500);
        });
    })
});