'use strict';

/**
 * cooperation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cooperation.cooperation');
