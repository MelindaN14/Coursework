const request = require("supertest");
const app = require("../app"); // replace this with the path to your file

describe("API Endpoints", () => {
  it("Should login a user", async () => {
    const res = await request(app).post("/login").send({
      username: "testuser",
      password: "testpassword",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
