'use strict';

/**
 * game service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game.game', ({ strapi }) => ({
  populate: async (...args) => {
    console.log("Calling populate service");
    await new Promise(r => setTimeout(r, 2000));
  }
}));
