'use strict';

/**
 *  life-hack controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::life-hack.life-hack');
