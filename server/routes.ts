import type { Express } from "express";
import { createServer, type Server } from "http";
import { getStorage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/waitlist", async (req, res) => {
    try {
      const result = insertWaitlistSchema.safeParse(req.body);

      if (!result.success) {
        const error = fromZodError(result.error);
        return res.status(400).json({
          error: error.message,
        });
      }

      // Check if email already exists
      const existing = await getStorage().getWaitlistByEmail(result.data.email);
      if (existing) {
        return res.status(409).json({
          error: "This email is already on the waitlist",
        });
      }

      const entry = await getStorage().createWaitlistEntry(result.data);
      return res.status(201).json(entry);
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      return res.status(500).json({
        error: "Failed to join waitlist. Please try again.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
