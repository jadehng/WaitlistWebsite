import { waitlistEntries, type WaitlistEntry, type InsertWaitlistEntry } from "@shared/schema";

export interface IStorage {
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
}

export class MemStorage implements IStorage {
  private entries: Map<number, WaitlistEntry>;
  currentId: number;

  constructor() {
    this.entries = new Map();
    this.currentId = 1;
  }

  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.entries.values());
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    return Array.from(this.entries.values()).find(
      (entry) => entry.email === email,
    );
  }

  async createWaitlistEntry(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const id = this.currentId++;
    const now = new Date();
    const entry: WaitlistEntry = { 
      ...insertEntry, 
      id, 
      createdAt: now 
    };
    this.entries.set(id, entry);
    return entry;
  }
}

export const storage = new MemStorage();
