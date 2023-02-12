const controller = require("../controller/EmployeeController");
const supertest = require('supertest');
const { request } = require("../app");
const app = require('../app');

describe("employee", () =>{
    describe("get employee", () =>{
        describe('get employee does not exist', () =>{
            test("should return a 404", async () =>{
                const response = await supertest(app).get('/api/employee');
                expect(response.statusCode).toBe(404)
            })
        })

        describe('get employee does exist', () =>{
            test("should return a 200", async () =>{
                const response = await supertest(app).get('/api/employee');
                expect(response.statusCode).toBe(200)
            })
        })

        describe('get employee by id does not exist', () =>{
            test("should return a 404 or failed", async () =>{
                let empId = '63e2568067f0614afd88b0b'; // this is wrong emmployee id and this test should be fail
                const response = await supertest(app).get(`/api/employee/${empId}`);
                expect(response._body._id).toEqual('63e2568067f0614afd88b0b4')
            })
        })

        describe('get employee by id , data does exist', () =>{
            test("should return a 200", async () =>{
                let empId = '63e2568067f0614afd88b0b4'; // This is correct empployee id and this test should be pass
                const response = await supertest(app).get(`/api/employee/${empId}`);
                expect(response._body._id).toEqual('63e2568067f0614afd88b0b4')
            })
        })
    })
})