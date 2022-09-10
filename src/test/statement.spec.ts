import { app } from "../app";
import request from "supertest";
import * as auth from "../config/auth";

describe("Balance", () => {
  it("Should be able to show the balance", async () => {
    const response = await request(app)
      .get("/api/v1/statements/balance")
      .expect(
        request(app)
          .get("/api/v1/statements/balance")
          .set({
            Authorization: `Bearer ${auth.default.jwt.secret}`,
          })
      );
    expect(response.status).toBe(200);
  });
});

describe("Deposits", () => {
  it("Should be able to make a deposit", async () => {
    const response = await request(app)
      .post("/api/v1/statements/deposit")
      .send({
        amount: 100,
        description: "deposit",
      })
      .set({
        Authorization: `Bearer ${auth.default.jwt.secret}`,
      });
    expect(response.status).toBe(201);
  });
});


describe("Withdraws", () => {
  it("Should be able to make a withdraw", async () => {
    const response = await request(app)
      .post("/api/v1/statements/withdraw")
      .send({
        amount: 100,
        description: "withdraw",
      })
      .set({
        Authorization: `Bearer ${auth.default.jwt.secret}`,
      });
    expect(response.status).toBe(201);
  });
});

describe("Statement by id", () => {
  it("Should be able to show the statement by id", async () => {
    const statementId = "1";
    const response = await request(app)
      .get(`/api/v1/statements/${statementId}`)
      .expect(
        request(app)
          .get(`/api/v1/statements/${statementId}`)
          .set({
            Authorization: `Bearer ${auth.default.jwt.secret}`,
          })
      );
    expect(response.status).toBe(200);
  });
})
