import * as supertest from "supertest";
import config from "../config/config.baseurl"
const request = supertest(config.baseUrl);

class ZippotamusController {
  getAddress(endpoint) {
    return request.get(endpoint);
  }
}

export default new ZippotamusController();