import request from "supertest";
import server from "../server";

describe("Places API", () => {
  it("should create a place", async () => {
    const response = await request(server).post("/places").send({
      name: "Test",
      slug: "test",
      city: "Sao Paulo",
      state: "SP",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("should edit a place", async () => {
    const createResponse = await request(server).post("/places").send({
      name: "Teste",
      slug: "teste",
      city: "Bauru",
      state: "SP",
    });

    const placeId = createResponse.body.id;

    const editResponse = await request(server)
      .put(`/places/${placeId}`)
      .send({
        name: "Updated Teste",
        slug: "updated-teste",
        city: "Bauru",
        state: "SP",
      })
      .set("Content-Type", "application/json");

    expect(editResponse.status).toBe(200);
    expect(editResponse.body).toHaveProperty("name", "Updated Teste");
  });

  it("should get a specific place", async () => {
    const createResponse = await request(server).post("/places").send({
      name: "Specific Place",
      slug: "specific-place",
      city: "Sao Paulo",
      state: "SP",
    });

    const placeId = createResponse.body.id;

    const getResponse = await request(server).get(`/places/${placeId}`);

    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toHaveProperty("name", "Specific Place");
  });
});
