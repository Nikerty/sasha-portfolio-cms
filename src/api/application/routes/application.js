'use strict';

/**
 * application router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::application.application', {
    only: ['create'],
    config: {
        create: {
            auth: false,
            policies: [],
            middlewares: ["api::application.capcha-middleware"],
        },
      },
})


