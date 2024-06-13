const { checkCapcha } = require('../../../extensions/utils/checkCapcha');

module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        const { capcha } = ctx.request.body.data
        const ip = ctx.request.ip

        if (!capcha) {
            ctx.throw(400, 'Missing capcha'); 
        }

        const result = await checkCapcha(capcha, ip)

        if (!result) {
            ctx.throw(400, 'Invalid or expired token'); 
        }

        await next()
    };
};