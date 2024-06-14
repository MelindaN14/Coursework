const request = require("supertest");
const app = require("../app"); // replace this with the path to your file

describe("API Endpoints", () => {
  it("Should get all students", async () => {
    const res = await request(app).get("/students");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});


