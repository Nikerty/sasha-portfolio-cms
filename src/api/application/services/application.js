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
            'Новая заявка', 
            `Пользователь ${createdEntity.name} оставил(a) заявку \n 
            Вы можете посмотреть её здесь -> ${strapi.config.get('email.application-manage-link')}`
        )

        return createdEntity
    }
}));
