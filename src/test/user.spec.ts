import { app } from "../app";
import request from "supertest";

describe("Users", () => {
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/api/v1/users").send({
      name: "John Doe",
      email: "jhondoe@email.com",
      password: "123456",
    });
    expect(response.status).toBe(201);
  });
});
