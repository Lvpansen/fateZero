'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async echo(key) {
    const data = {
      name1: 'jack',
      name2: 'lucy',
      name3: 'jim',
    };
    return data[key] || 'data not exist';
  }

  async getSpiderNewsList() {
    const url = this.config.spiderApi + 'appapi.php?a=getPortalList&catid=20&page=1';
    const res = await this.ctx.curl(url);
    const data = JSON.parse(res.data);
    // console.log(data);
    return data.result;
  }
}

module.exports = NewsService;
