import { app } from "../app";
import request from "supertest";
import * as auth from "../config/auth";

describe("Profile", () => {
  it("Should be able to show the profile", async () => {
    const response = await request(app)
      .get("/api/v1/profile")
      .expect(
        request(app)
          .get("/api/v1/profile")
          .set({
            Authorization: `Bearer ${auth.default.jwt.secret}`,
          })
      );
    expect(response.status).toBe(200);
  });
});
