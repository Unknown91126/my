"use strict";
import { createServer } from "http";
import { storage } from "./storage.js";
import { insertContactSchema, insertQuizResultSchema } from "../shared/schema.js";
import { z } from "zod";

export async function registerRoutes(app) {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      await storage.createContact(contactData);
      res.json({ success: true, message: "Contact submission received successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Submit quiz results
  app.post("/api/quiz-results", async (req, res) => {
    try {
      const resultData = insertQuizResultSchema.parse(req.body);
      const result = await storage.createQuizResult(resultData);
      res.json({ success: true, result });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid quiz data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit quiz results" });
      }
    }
  });

  // Get quiz statistics
  app.get("/api/quiz-stats", async (req, res) => {
    try {
      const results = await storage.getQuizResults();
      const stats = {
        totalSubmissions: results.length,
        averageScore:
          results.length > 0
            ? results.reduce((sum, r) => sum + r.score, 0) / results.length
            : 0,
        highestScore:
          results.length > 0
            ? Math.max(...results.map((r) => r.score))
            : 0,
      };
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quiz statistics" });
    }
  });

  // Return the HTTP server if needed (for dev hot reload, etc.)
  return createServer(app);
}
