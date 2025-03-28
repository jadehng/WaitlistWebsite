import { waitlistEntries, type WaitlistEntry, type InsertWaitlistEntry } from "@shared/schema";

export interface IStorage {
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  createWaitlistEntry(entry: InsertWaitlistEntry, confirmationToken: string): Promise<WaitlistEntry>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  getWaitlistEntryByToken(token: string): Promise<WaitlistEntry | undefined>;
  confirmWaitlistEntry(token: string): Promise<WaitlistEntry | undefined>;
  updateConfirmationToken(id: number, token: string): Promise<WaitlistEntry | undefined>;
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

  async getWaitlistEntryByToken(token: string): Promise<WaitlistEntry | undefined> {
    return Array.from(this.entries.values()).find(
      (entry) => entry.confirmationToken === token,
    );
  }

  async createWaitlistEntry(insertEntry: InsertWaitlistEntry, confirmationToken: string): Promise<WaitlistEntry> {
    const id = this.currentId++;
    const now = new Date();
    
    // Create a new entry with proper types
    const entry: WaitlistEntry = {
      id,
      name: insertEntry.name,
      email: insertEntry.email,
      comments: insertEntry.comments || null,
      confirmationToken,
      isConfirmed: false,
      createdAt: now
    };
    
    this.entries.set(id, entry);
    return entry;
  }

  async confirmWaitlistEntry(token: string): Promise<WaitlistEntry | undefined> {
    const entry = await this.getWaitlistEntryByToken(token);
    if (entry) {
      const updatedEntry = { ...entry, isConfirmed: true };
      this.entries.set(entry.id, updatedEntry);
      return updatedEntry;
    }
    return undefined;
  }
  
  async updateConfirmationToken(id: number, token: string): Promise<WaitlistEntry | undefined> {
    const entry = this.entries.get(id);
    if (entry) {
      const updatedEntry = { ...entry, confirmationToken: token };
      this.entries.set(id, updatedEntry);
      return updatedEntry;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
