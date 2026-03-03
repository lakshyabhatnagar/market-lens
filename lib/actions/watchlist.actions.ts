'use server';

import { connectToDatabase } from '@/database/mongoose';
import { Watchlist } from '@/database/models/watchlist.model';
import { getAuth } from '@/lib/better-auth/auth';
import { headers } from 'next/headers';

async function getCurrentUserId(): Promise<string | null> {
  try {
    const auth = await getAuth();
    const session = await auth.api.getSession({ headers: await headers() });
    return session?.user?.id || null;
  } catch {
    return null;
  }
}

export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]> {
  if (!email) return [];

  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if (!db) throw new Error('MongoDB connection not found');

    // Better Auth stores users in the "user" collection
    const user = await db.collection('user').findOne<{ _id?: unknown; id?: string; email?: string }>({ email });

    if (!user) return [];

    const userId = (user.id as string) || String(user._id || '');
    if (!userId) return [];

    const items = await Watchlist.find({ userId }, { symbol: 1 }).lean();
    return items.map((i) => String(i.symbol));
  } catch (err) {
    console.error('getWatchlistSymbolsByEmail error:', err);
    return [];
  }
}

export async function getUserWatchlist(): Promise<{ symbol: string; company: string; addedAt: string }[]> {
  try {
    const userId = await getCurrentUserId();
    if (!userId) return [];

    await connectToDatabase();
    const items = await Watchlist.find({ userId }).sort({ addedAt: -1 }).lean();

    return items.map((item) => ({
      symbol: String(item.symbol),
      company: String(item.company),
      addedAt: item.addedAt ? new Date(item.addedAt).toISOString() : new Date().toISOString(),
    }));
  } catch (err) {
    console.error('getUserWatchlist error:', err);
    return [];
  }
}

export async function toggleWatchlist(symbol: string, company: string): Promise<{ added: boolean }> {
  const userId = await getCurrentUserId();
  if (!userId) throw new Error('Not authenticated');

  await connectToDatabase();

  const existing = await Watchlist.findOne({ userId, symbol: symbol.toUpperCase() });

  if (existing) {
    await Watchlist.deleteOne({ _id: existing._id });
    return { added: false };
  }

  await Watchlist.create({
    userId,
    symbol: symbol.toUpperCase(),
    company: company || symbol.toUpperCase(),
  });

  return { added: true };
}

export async function getWatchlistSymbols(): Promise<string[]> {
  try {
    const userId = await getCurrentUserId();
    if (!userId) return [];

    await connectToDatabase();
    const items = await Watchlist.find({ userId }, { symbol: 1 }).lean();
    return items.map((i) => String(i.symbol));
  } catch {
    return [];
  }
}
