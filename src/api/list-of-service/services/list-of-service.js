'use strict';

/**
 * list-of-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-of-service.list-of-service');
