import { users, contacts, quizResults, type User, type InsertUser, type Contact, type InsertContact, type QuizResult, type InsertQuizResult } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createQuizResult(result: InsertQuizResult): Promise<QuizResult>;
  getQuizResults(): Promise<QuizResult[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async createQuizResult(insertQuizResult: InsertQuizResult): Promise<QuizResult> {
    const [result] = await db
      .insert(quizResults)
      .values(insertQuizResult)
      .returning();
    return result;
  }

  async getQuizResults(): Promise<QuizResult[]> {
    return await db.select().from(quizResults);
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private quizResults: Map<number, QuizResult>;
  private currentUserId: number;
  private currentContactId: number;
  private currentQuizResultId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.quizResults = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentQuizResultId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date(),
      newsletter: insertContact.newsletter ?? null
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createQuizResult(insertQuizResult: InsertQuizResult): Promise<QuizResult> {
    const id = this.currentQuizResultId++;
    const result: QuizResult = {
      ...insertQuizResult,
      id,
      createdAt: new Date()
    };
    this.quizResults.set(id, result);
    return result;
  }

  async getQuizResults(): Promise<QuizResult[]> {
    return Array.from(this.quizResults.values());
  }
}

export const storage = new DatabaseStorage();
