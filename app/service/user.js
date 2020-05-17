'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async add(name) {
    const { ctx } = this;
    const result = await ctx.model.User.create({
      name,
    });
    return result;
  }

  async getUser() {
    const users = await this.ctx.model.User.find();
    return { total: users.length, list: users };
  }
}

module.exports = UserService;
