import pkg from "@prisma/client";
import supertest from "supertest";
import app from "../src/app.js";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

/*
beforeAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
});
*/

describe('get hello test', () => {

    it('should return status 200', async () => {
        const response = await supertest(app).get('/hello').send();
        expect(response.status).toEqual(200);
    });
});

afterAll(async () => await prisma.$disconnect());