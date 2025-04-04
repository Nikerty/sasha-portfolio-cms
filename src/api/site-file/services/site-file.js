'use strict';

/**
 * site-file service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-file.site-file');
