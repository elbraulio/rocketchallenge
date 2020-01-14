const supertest = require("supertest");
const app = require("../app/index").default;

let id;
describe('Post Movie', () => {
    it('should create a new Movie', async () => {
        const res = await supertest(app)
            .post('/movies')
            .send({
                name: "test1",
                createdAt: new Date(),
            });
        expect(res.status).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        id = res.body._id;
    })
});

describe('Get Movie', () => {
    it('should get a Movie', async () => {
        const res = await supertest(app)
            .get('/movies');
        expect(res.status).toEqual(200);
        expect(res.body[0]).toHaveProperty('_id');
    })
});

describe('Delete Movie', () => {
    it('should delete a Movie', async () => {
        const res = await supertest(app)
            .delete('/movies/' + id);
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
    })
});
