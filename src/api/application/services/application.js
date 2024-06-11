'use strict';

const { sendEmail } = require('../../../extensions/utils/sendEmail');

/**
 * application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application.application', ({ strapi }) => ({
    async create({ data }) {
        const createdEntity = await strapi.entityService.create('api::application.application', {
            data: {
                name: data.name,
                phone: data.phone
            }
        })

        sendEmail(
            'New request', 
            `The user ${createdEntity.name} has left a new request \n You can look it there -> http://localhost:1337/admin/content-manager/collection-types/api::application.application?page=1&pageSize=10&sort=name:ASC`
        )

        return createdEntity
    }
}));
