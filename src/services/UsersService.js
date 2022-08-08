import { $api } from "http";

export class UsersService {
  static getUsers(page, count) {
    return $api.get("/users", { params: { page, count } });
  }

  static getPositions() {
    return $api.get("/positions");
  }

  static addUser(params, token) {
    return $api({
      method: "post",
      url: "/users",
      data: params,
      headers: {
        Token: token
      }
    });
  }

  static getToken() {
    return $api.get("/token");
  }
}
