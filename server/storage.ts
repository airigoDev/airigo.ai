import {
  type User,
  type InsertUser,
  type Waitlist,
  type InsertWaitlist,
} from "@shared/schema";
import { randomUUID } from "crypto";
import { getDb } from "./db";
import { loadEnv } from "./env";
// Ensure env vars are loaded even if storage is imported before server init
loadEnv();

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getWaitlistByEmail(email: string): Promise<Waitlist | undefined>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
  getAllWaitlistEntries(): Promise<Waitlist[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private waitlist: Map<string, Waitlist>;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    return Array.from(this.waitlist.values()).find(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );
  }

  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<Waitlist> {
    const id = randomUUID();
    const entry: Waitlist = {
      ...insertEntry,
      id,
      createdAt: new Date(),
    };
    this.waitlist.set(id, entry);
    return entry;
  }

  async getAllWaitlistEntries(): Promise<Waitlist[]> {
    return Array.from(this.waitlist.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

class MongoStorage implements IStorage {
  private users!: any;
  private waitlist!: any;

  private initialized = false;

  private async init() {
    if (this.initialized) return;
    const db = await getDb();
    this.users = db.collection("users");
    this.waitlist = db.collection("waitlist");
    // ensure unique index on email
    await this.waitlist.createIndex(
      { email: 1 },
      { unique: true, name: "waitlist_email_unique" }
    );
    // ensure unique index on username
    await this.users.createIndex(
      { username: 1 },
      { unique: true, name: "users_username_unique" }
    );
    this.initialized = true;
  }

  async getUser(id: string): Promise<User | undefined> {
    await this.init();
    const found = await this.users.findOne({ id });
    return found ?? undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    await this.init();
    const found = await this.users.findOne({ username });
    return found ?? undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    await this.init();
    const user: User = { id: randomUUID(), ...insertUser } as User;
    await this.users.insertOne(user as any);
    return user;
  }

  async getWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    await this.init();
    const found = await this.waitlist.findOne({
      email: new RegExp(`^${email}$`, "i"),
    });
    return found ?? undefined;
  }

  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<Waitlist> {
    await this.init();
    const entry: Waitlist = {
      id: randomUUID(),
      createdAt: new Date(),
      ...insertEntry,
    } as Waitlist;
    await this.waitlist.insertOne(entry as any);
    return entry;
  }

  async getAllWaitlistEntries(): Promise<Waitlist[]> {
    await this.init();
    const docs = await this.waitlist.find({}).sort({ createdAt: -1 }).toArray();
    return docs as Waitlist[];
  }
}

let storageInstance: IStorage | undefined;
export function getStorage(): IStorage {
  if (!storageInstance) {
    storageInstance = process.env.MONGODB_URI
      ? new MongoStorage()
      : new MemStorage();
  }
  return storageInstance;
}
