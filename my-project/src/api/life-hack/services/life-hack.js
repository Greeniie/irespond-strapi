'use strict';

/**
 * life-hack service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::life-hack.life-hack');
