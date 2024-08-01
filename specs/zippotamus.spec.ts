import controller from "../controller/zippotamus.controller";
import { getAddress } from "../utils/helper";
import config from "../config/config.baseurl";
import data from "../data/codes";

describe("Zippotamus API", () => {
  describe("Check status and structure", () => {
    let responses;

    beforeAll(async () => {
      responses = await getAddress();
    });

    it("should check country and postal code", async () => {
      responses.forEach((response) => {
        expect(response.status).toEqual(200);
      });
    });

    it("should check country and postal code", async () => {
      const expectedCountry = "United States";
      data.countries.forEach((country) => {
        data.codes.forEach((code) => {
          const response = responses.find(
            (res) => res.body["post code"] === code
          );
          expect(response.body.country).toEqual(expectedCountry);
          expect(response.body["post code"]).toEqual(code);
        });
      });
    });
  });

  describe("Negative and header tests", () => {
    it("should return 404 with an invalid endpoint", async () => {
      const response = await controller.getAddress(config.invalidUrl);
      expect(response.status).toEqual(404);
    });

    it("should check response header and content type", async () => {
      const response = await controller.getAddress("/us/90210");
      expect(response.headers["content-type"]).toContain("/json");
    });
  });
});
