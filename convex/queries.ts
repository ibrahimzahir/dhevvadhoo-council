import { query } from './_generated/server';

import { v } from 'convex/values';

export const getCouncilMembers = query({
  async handler(ctx) {
    return ctx.db.query('staffs').collect();
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

export const fetchPopulations = query(async ({ db }) => {
  // Fetch all records from the 'population' table
  const populations = await db.query('populations').collect();

  // Calculate the total population after all records are fetched
  const totalPopulation = populations.reduce(
    (sum, population) => sum + population.amount,
    0
  );

  // Return both the fully resolved populations and the total population
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
  _id: string; // ID of the item
  name: string; // Name of the item
  // Price of the item
}

// Define the structure for category counts
interface CategoryData {
  count: number; // Total number of items in the category
  items: TransportationItem[]; // Array of transportation items
}

// Define the overall structure for category counts
interface CategoryCounts {
  [category: string]: CategoryData; // Using index signature for dynamic keys
}

export const countByCategory = query({
  handler: async (ctx) => {
    // Fetch all items from the transportation table
    const items = await ctx.db.query('transportation').collect();

    // Initialize an empty object to hold category counts
    const categoryCounts: CategoryCounts = {};

    // Iterate over each item to count by category
    for (const item of items) {
      const category = item.category;

      // If the category doesn't exist in categoryCounts, initialize it
      if (!categoryCounts[category]) {
        categoryCounts[category] = { count: 0, items: [] };
      }

      // Increment the count for this category
      categoryCounts[category].count += 1;
      categoryCounts[category].items.push(item); // Add the item to the category's items
    }

    return categoryCounts; // Return the counts per category
  },
});
