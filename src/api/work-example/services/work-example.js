'use strict';

/**
 * work-example service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-example.work-example');
