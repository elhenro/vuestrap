'use strict';

/**
 * Previewbox.js controller
 *
 * @description: A set of functions called "actions" for managing `Previewbox`.
 */

module.exports = {

  /**
   * Retrieve previewbox records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.previewbox.fetchAll(ctx.query);
  },

  /**
   * Retrieve a previewbox record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.previewbox.fetch(ctx.params);
  },

  /**
   * Count previewbox records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.previewbox.count(ctx.query);
  },

  /**
   * Create a/an previewbox record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.previewbox.add(ctx.request.body);
  },

  /**
   * Update a/an previewbox record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.previewbox.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an previewbox record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.previewbox.remove(ctx.params);
  }
};
