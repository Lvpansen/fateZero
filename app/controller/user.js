'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async add() {
    const query = this.ctx.query;
    const { name } = query;
    const res = await this.ctx.service.user.add(name);
    this.ctx.body = { message: '添加成功', data: res };
    this.ctx.status = 200;
  }

  async getUser() {
    const res = await this.ctx.service.user.getUser();
    this.ctx.body = { message: '查询成功', data: res };
  }

  async register() {
    const param = this.ctx.request.body;
    console.log(param);
    this.ctx.body = `name:${param.name}`;
  }
}

module.exports = UserController;
