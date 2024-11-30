/**
 * project controller
 */

import { Core, factories } from "@strapi/strapi"

export default factories.createCoreController("api::page.page", ({ strapi }: { strapi: Core.Strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    const project = await strapi.documents("api::page.page").findMany({
      ...sanitizedQueryParams,
      filters: { slug: id },
    });

    const sanitizedEntity = await this.sanitizeOutput(project[0], ctx);

    return this.transformResponse(sanitizedEntity);
  },
})
);