const request = require('supertest');
const app = require('./server'); // Import your Express app 

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(404);
    });
});

describe('Test user CRUD operations', () => {
    let userId;

    test('It should create a new user', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Test User',
                email: 'testuser@gmail.com',
                password: 'testpassword'
            });
        expect(response.statusCode).toBe(200);
        userId = response.body._id; // Save the user ID for later tests
    });

    test('It should retrieve all users', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
    });

    test('It should retrieve a specific user', async () => {
        const response = await request(app).get(`/users/${userId}`);
        expect(response.statusCode).toBe(200);
    });

    test('It should update a specific user', async () => {
        const response = await request(app)
            .patch(`/users/${userId}`)
            .send({
                name: 'Updated Test User'
            });
        expect(response.statusCode).toBe(200);
    });

    test('It should delete a specific user', async () => {
        const response = await request(app).delete(`/users/${userId}`);
        expect(response.statusCode).toBe(200);
    });
});