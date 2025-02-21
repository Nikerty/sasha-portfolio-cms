const { checkCapcha } = require("../../../extensions/utils/checkCapcha");

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const { capcha } = ctx.request.body.data;

    /*if (!capcha) {
            ctx.throw(400, 'Missing capcha'); 
        }

        const result = await checkCapcha(capcha)

        if (!result) {
            ctx.throw(400, 'Invalid or expired token'); 
        }*/

    await next();
  };
};
