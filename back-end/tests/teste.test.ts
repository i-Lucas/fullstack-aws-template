import supertest from "supertest";
import app from "../src/app.js";
import prisma from "../src/config/db.js";

beforeAll(async () => {
    // await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
});

describe('testando o teste', () => {

    it('signup valid -> status 200', async () => {
        const response = await supertest(app).get('/hello')
        expect(response.status).toEqual(200);
    });
});

afterAll(async () => await prisma.$disconnect());