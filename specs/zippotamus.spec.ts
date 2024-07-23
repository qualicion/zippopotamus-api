import controller from "../controller/zippotamus.controller";

describe("Zippotamus API", () => {
  it("GET address", async () => {
    const response = await controller.getAddress("/us/90210");
    expect(response.status).toEqual(200);
  });

  it("should check country and postal code", async () => {
    const response = await controller.getAddress("/us/90210");
    expect(response.body.country).toEqual("United States");
    expect(response.body["post code"]).toEqual("90210");
  });

  it("should return 404 with an invalid endpoint", async () => {
    const response = await controller.getAddress("/u");
    expect(response.status).toEqual(404);
  });

  it("should check country and postal code", async () => {
    const response = await controller.getAddress("/us/90210");
    expect(response.headers["content-type"]).toContain("/json");
  });
});
