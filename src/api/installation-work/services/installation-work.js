'use strict';

/**
 * installation-work service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::installation-work.installation-work');
