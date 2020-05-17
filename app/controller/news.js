'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    this.ctx.body = 'News Page';
  }

  async spiderNews() {
    const list = await this.service.news.getSpiderNewsList();

    this.ctx.body = list;
  }

  async detail() {
    const query = this.ctx.query;
    console.log(query);
    const data = await this.service.news.echo(query.name);
    this.ctx.body = data;
  }
}

module.exports = NewsController;
