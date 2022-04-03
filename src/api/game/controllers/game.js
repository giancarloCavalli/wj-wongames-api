'use strict';

const game = require('../routes/game');

/**
 *  game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::game.game', ({ strapi }) => ({
  populate: async (ctx) => {
    try {
      console.log("Starting to populate...")

      await strapi.service('api::game.game').populate();

      ctx.send("Finished populating")
    } catch (err) {
      ctx.send = err;
    }
  }
}));
