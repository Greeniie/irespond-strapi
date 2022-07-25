'use strict';

/**
 * life-hack router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::life-hack.life-hack');
