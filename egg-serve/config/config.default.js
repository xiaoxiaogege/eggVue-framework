/* eslint valid-jsdoc: "off" */

"use strict";
const httpCodeHash = require("./httpCodeHash.js");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1596590890521_7427";

  // add your middleware config here
  config.middleware = ["gzip"];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    view: {
      defaultViewEngine: "nunjucks",
      mapping: {
        ".tpl": "nunjucks",
      },
    },
    // 配置 gzip 中间件的配置
    gzip: {
      threshold: 1024, // 小于 1k 的响应体不压缩
    },
    errorHandler: {},
    news: {
      pageSize: 5,
      serverUrl: "https://hacker-news.firebaseio.com/v0",
    },
    security: {
      csrf: false,
    },
    // httpCodeHash: httpCodeHash,
    mysql: {
      client: {
        host: "localhost",
        port: "3307",
        user: "root",
        password: "root",
        database: "demo",
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
