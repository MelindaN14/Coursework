// Import the necessary libraries
const request = require("supertest");

// Mock the Prisma client
// Mocking the Prisma client
jest.mock("@prisma/client", () => {
  // Create a mock object for the Prisma client
  const mockPrisma = {
    student: {
      // Mock the 'create' method of the 'student' model
      create: jest.fn((data) => 
        // Return a resolved promise with the provided data (simulating successful creation)
        Promise.resolve(data)
      ),
      // Mock the 'findUnique' method of the 'student' model
      findUnique: jest.fn((query) => {
        // Check if the query is for a student with ID 2
        if (query.where.id === 2) {
          // Return a resolved promise with the mock student data
          return Promise.resolve({
            id: 2,
            name: "John Doe",
            courseId: 1,
            courseName: "Computer Science",
            cohort: "2021",
          });
        }
        // If the ID is not 2, return a resolved promise with null (simulating no student found)
        return Promise.resolve(null);
      }),
    },
  };
  // Return a mock PrismaClient constructor that returns the mockPrisma object
  return {
    PrismaClient: jest.fn(() => mockPrisma),
  };
});


// Import your app
const myApp = require("../server");

describe("POST /students", () => {
  it("should create a new student and return it", async () => {
    const newStudent = {
      name: "John Doe",
      courseId: 1,
      courseName: "Computer Science",
      cohort: "2022",
    };

    const response = await request(myApp).post("/students").send(newStudent);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      data: {
        name: newStudent.name,
        courseId: newStudent.courseId,
        courseName: newStudent.courseName,
        cohort: newStudent.cohort,
      },
    });
    expect(response.body).not.toBeNull();
  });

  it("retrieves a student by its ID", async () => {
    // Define the ID of the student to be retrieved
    const id = 2;

    // Make a GET request to the /students/:id endpoint of our app
    const response = await request(myApp).get(`/students/${id}`);

    // Expect the response status code to be 200 (OK)
    expect(response.statusCode).toEqual(200);
    // Expect the 'id' property of the response body to be the ID of the student
    expect(response.body.id).toBe(id);
    // Expect the 'name' property of the response body to be 'John Doe'
    expect(response.body.name).toBe("John Doe");
    // Expect the 'courseId' property of the response body to be 1
    expect(response.body.courseId).toBe(1);
    // Expect the 'courseName' property of the response body to be 'Computer Science'
    expect(response.body.courseName).toBe("Computer Science");
    // Expect the 'cohort' property of the response body to be '2021'
    expect(response.body.cohort).toBe("2021");
  });
});
