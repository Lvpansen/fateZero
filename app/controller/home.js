'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async initInfo() {
    this.ctx.cookies.set('authNum', Math.round(Math.random() * 10000000));
    // this.ctx.cookies.set('authNum', 'zhangsan');
    const cookies = this.ctx.cookies.get('authNum');
    this.ctx.body = cookies;
  }
}

module.exports = HomeController;
