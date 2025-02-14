import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

// this mutation is required to generate the url after uploading the file to the storage.
export const getUrl = mutation({
	args: {
	  storageId: v.id("_storage"),
	},
	handler: async (ctx, args) => {
	  return await ctx.storage.getUrl(args.storageId);
	},
  });

  export const createPodcast = mutation({
	args: {
	  audioStorageId: v.id("_storage"),
	  podcastTitle: v.string(),
	  podcastDescription: v.string(),
	  audioUrl: v.string(),
	  imageUrl: v.string(),
	  imageStorageId: v.id("_storage"),
	  voicePrompt: v.string(),
	  imagePrompt: v.string(),
	  voiceType: v.string(),
	  views: v.number(),
	  audioDuration: v.number(),
	},
	handler: async (ctx, args) => {
	  const identity = await ctx.auth.getUserIdentity();
      
	  if (!identity) {
	    throw new ConvexError("User not authenticated");
	  }
      
	  const user = await ctx.db
	    .query("users")
	    .filter((q) => q.eq(q.field("email"), identity.email))
	    .collect();
      
	  if (user.length === 0) {
	    throw new ConvexError("User not found");
	  }
      
	  const podcast = await ctx.db.insert("podcasts", {
	    ...args,
	    user: user[0]._id,
	    author: user[0].name,
	    authorId: user[0].clerkId,
	    authorImageUrl: user[0].imageUrl,
	  });
      
	  return podcast;
	},
      });

      export const getTrendingPodcasts = query({
	handler: async (ctx) => {
	  const podcast = await ctx.db.query("podcasts").collect();
      
	  return podcast.sort((a, b) => b.views - a.views).slice(0, 8);
	},
      });
      
      