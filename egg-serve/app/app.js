// app.js

module.exports = app => {
  app.once('server', server => {
    // websocket
    console.log('server....',server)
  });
  app.on('error', (err, ctx) => {
    // report error
    console.log('error....')
  });
  app.on('request', ctx => {
    // log receive request
    console.log('request....',ctx)
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    console.log('response....',ctx)
    // log total cost
  });
};