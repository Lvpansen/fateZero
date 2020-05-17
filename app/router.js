'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/init', controller.home.initInfo);
  router.get('/news', controller.news.index);
  router.get('/news/spider', controller.news.spiderNews);
  router.get('/news/detail', controller.news.detail);
  router.get('/user/add', controller.user.add);
  router.get('/user/get', controller.user.getUser);
  router.post('/user/register', controller.user.register);
};
