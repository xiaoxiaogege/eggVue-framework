//GET	/posts	posts
exports.index = async (ctx) => {
  const { query, params } = ctx;
  ctx.body = `hello restful index : ${query.name} ==== ${params.id}`;
};

//GET	/posts/new	new_post
exports.new = async (ctx) => {
  const { query, params } = ctx;
  ctx.body = "hello restful new";
};

// POST	/posts	posts
exports.create = async (ctx) => {
  const { query, params } = ctx;
  console.log("create=====", ctx.request.body);
  try {
    ctx.validate({
      name: { type: "string" },
      age: { type: "int" },
    });
    const res = await ctx.service.user.find();
    ctx.body = res;
  } catch (error) {
    ctx.logger.error(new Error(error));
    ctx.body = error;

    return;
  }
};

// GET	/posts/:id	post
exports.show = async (ctx) => {
  const { query, params } = ctx;
  ctx.body = `hello restful show : ${query.name} ==== ${params.id}`;
};

// GET	/posts/:id/edit	edit_post
exports.edit = async (ctx) => {
  const { query, params } = ctx;
  ctx.body = "hello restful edit";
};

// PUT	/posts/:id	post
exports.update = async (ctx) => {
  const { query, params } = ctx;
  ctx.body = "hello restful update";
};

// DELETE	/posts/:id	post
exports.destroy = async (ctx) => {
  const { query, params } = ctx;
  ctx.body = "hello restful destroy";
};
