import { query } from './_generated/server';

export const getCouncilMembers = query({
  args: {},
  async handler(ctx, args) {
    return ctx.db.query('council_members').collect();
  },
});
