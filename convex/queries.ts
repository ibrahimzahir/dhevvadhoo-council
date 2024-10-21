import { query } from './_generated/server';

import { v } from 'convex/values';

export const getCouncilMembers = query({
  async handler(ctx) {
    return ctx.db
      .query('staffs')
      .filter((q) => q.and(q.eq(q.field('category'), 'councilMember')))
      .collect();
  },
});
export const getStaffs = query({
  async handler(ctx) {
    return ctx.db
      .query('staffs')
      .filter((q) => q.and(q.eq(q.field('category'), 'staff')))
      .collect();
  },
});

export const getWdc = query({
  async handler(ctx) {
    return ctx.db
      .query('staffs')
      .filter((q) => q.and(q.eq(q.field('category'), 'wdc')))
      .collect();
  },
});

export const getCouncilStaffs = query({
  async handler(ctx) {
    return ctx.db.query('staffs').collect();
  },
});

export const getIslandInfo = query({
  async handler(ctx) {
    const dvdInfo = await ctx.db.query('dhevvadhoo').order('asc').take(1);
    return dvdInfo;
  },
});

export const getProjects = query({
  async handler(ctx) {
    const projects = ctx.db.query('projects').collect();
    return projects;
  },
});

export const getClubs = query({
  async handler(ctx) {
    const clubs = ctx.db.query('clubs').collect();
    return clubs;
  },
});

export const getOrganizations = query({
  async handler(ctx) {
    const organizations = await ctx.db.query('organizations').collect();
    return organizations;
  },
});
export const fetchPopulations = query(async ({ db }) => {
  // Fetch all records from the 'population' table
  const populations = await db.query('populations').collect();

  // Calculate the total population after all records are fetched
  const totalPopulation = populations.reduce(
    (sum, population) => sum + population.amount,
    0
  );

  return {
    populations,
    totalPopulation,
  };
});
export const getTransport = query({
  async handler(ctx) {
    const transport = ctx.db.query('transportation').collect();
    return transport;
  },
});

interface TransportationItem {
  _id: string;
  name: string;
}

interface CategoryData {
  count: number;
  items: TransportationItem[];
}

interface CategoryCounts {
  [category: string]: CategoryData;
}

export const countByCategory = query({
  handler: async (ctx) => {
    const items = await ctx.db.query('transportation').collect();

    const categoryCounts: CategoryCounts = {};

    for (const item of items) {
      const category = item.category;

      if (!categoryCounts[category]) {
        categoryCounts[category] = { count: 0, items: [] };
      }

      categoryCounts[category].count += 1;
      categoryCounts[category].items.push(item);
    }

    return categoryCounts;
  },
});
