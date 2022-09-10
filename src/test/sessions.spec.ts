import { app } from "../app";
import request from "supertest";
import * as auth from "../config/auth";

describe("Sessions", () => {
  it("Should be able to authenticate", async () => {
    const response = await request(app)
      .post("/api/v1/sessions")
      .send({
        email: "jhondoe@email.com",
        password: "123456",
      })
      .set({
        Authorization: `Bearer ${auth.default.jwt.secret}`,
      });
    expect(response.status).toBe(201);
  });
});
