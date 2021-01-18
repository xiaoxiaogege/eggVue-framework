'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const gzip = app.middleware.gzip({ threshold: 1024 });
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/needgzip',  gzip, controller.handler.index);

  router.resources('posts','/api/posts', controller.posts)
};
