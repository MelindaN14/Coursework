const request = require("supertest");
const app = require("../server"); // import the app

jest.mock("../handlers/studentHandler");

//Integration test. It creates a new student in the database
describe("POST /students", () => {
  it("creates a new student", async () => {
    const response = await request(app).post("/students").send({
      name: "John Doe",
      courseId: 1,
      courseName: "Computer Science",
      cohort: "2022",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("John Doe");
    expect(response.body.courseId).toBe(1);
    expect(response.body.courseName).toBe("Computer Science");
    expect(response.body.cohort).toBe("2022");
  });
});
