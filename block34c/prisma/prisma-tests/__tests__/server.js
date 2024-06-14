// Import the supertest module for HTTP assertions
const request = require('supertest');
// Import the server application
const app = require('../server');

// Start of the test suite for the POST /students endpoint
describe('POST /students', () => {
    // Test case: It should create a new student
    it('creates a new student', async () => {
        // Make a POST request to the /students endpoint of our app
        const response = await request(app)
        .post('/students')
        .send({
            name: 'John Doe', // The name of the student to be created
            courseId: 1, // The ID of the course the student is enrolled in
            courseName: 'Computer Science', // The name of the course the student is enrolled in
            cohort: '2021', // The cohort year of the student
        });

        // Expect the response status code to be 201 (Created)
        expect(response.statusCode).toEqual(201);
        // Expect the response body to have an 'id' property (the ID of the newly created student)
        expect(response.body).toHaveProperty('id');
        // Expect the 'name' property of the response body to be 'John Doe'
        expect(response.body.name).toBe('John Doe');
        // Expect the 'courseId' property of the response body to be 1
        expect(response.body.courseId).toBe(1);
        // Expect the 'courseName' property of the response body to be 'Computer Science'
        expect(response.body.courseName).toBe('Computer Science');
        // Expect the 'cohort' property of the response body to be '2021'
        expect(response.body.cohort).toBe('2021');
    });
});

// Start of the test suite for the GET /students/:id endpoint
describe('GET /students/:id', () => {
    // Test case: It should retrieve a student by its ID
    it('retrieves a student by its ID', async () => {
        // Define the ID of the student to be retrieved
        const id = 2;

        // Make a GET request to the /students/:id endpoint of our app
        const response = await request(app).get(`/students/${id}`);

        // Expect the response status code to be 200 (OK)
        expect(response.statusCode).toEqual(200);
        // Expect the 'id' property of the response body to be the ID of the student
        expect(response.body.id).toBe(id);
        // Expect the 'name' property of the response body to be 'John Doe'
        expect(response.body.name).toBe('alex');
        // Expect the 'courseId' property of the response body to be 1
        expect(response.body.courseId).toBe(3);
        // Expect the 'courseName' property of the response body to be 'Computer Science'
        expect(response.body.courseName).toBe('Computer Science');
        // Expect the 'cohort' property of the response body to be '2021'
        expect(response.body.cohort).toBe('2021');
    });
});
