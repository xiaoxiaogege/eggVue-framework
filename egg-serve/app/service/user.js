"use strict";
const Service = require("egg").Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.query("select * from my_table");
    return user;
  }
}

module.exports = UserService;
