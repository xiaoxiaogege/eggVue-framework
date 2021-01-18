"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    // console.log("home===", this);
    const { ctx } = this;
    // ctx.validate({
    //   title: { type: 'string' },
    //   content: { type: 'string' }
    // })
    // const res = await this.service.user.find();
    ctx.body = "hello egg!";
  }
}

module.exports = HomeController;
