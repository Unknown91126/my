import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  ageGroup: text("age_group").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  newsletter: boolean("newsletter").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const quizResults = pgTable("quiz_results", {
  id: serial("id").primaryKey(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: text("answers").notNull(), // JSON string of answers
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  firstName: true,
  lastName: true,
  email: true,
  ageGroup: true,
  subject: true,
  message: true,
  newsletter: true,
});

export const insertQuizResultSchema = createInsertSchema(quizResults).pick({
  score: true,
  totalQuestions: true,
  answers: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertQuizResult = z.infer<typeof insertQuizResultSchema>;
export type QuizResult = typeof quizResults.$inferSelect;
