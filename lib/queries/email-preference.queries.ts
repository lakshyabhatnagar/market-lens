import { connectToDatabase } from '@/database/mongoose';
import { EmailPreference } from '@/database/models/email-preference.model';

/**
 * Get or create an unsubscribe token for the given email.
 * Returns the token string used in unsubscribe URLs.
 */
export async function getUnsubscribeToken(email: string): Promise<string> {
    await connectToDatabase();

    let pref = await EmailPreference.findOne({ email: email.toLowerCase() });

    if (!pref) {
        pref = await EmailPreference.create({ email: email.toLowerCase() });
    }

    return pref.unsubscribeToken;
}

/**
 * Build the full unsubscribe URL for a given email.
 */
export async function getUnsubscribeUrl(email: string): Promise<string> {
    const token = await getUnsubscribeToken(email);
    const baseUrl = process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    return `${baseUrl}/api/unsubscribe?token=${token}`;
}

/**
 * Check if a user is still subscribed to emails.
 */
export async function isUserSubscribed(email: string): Promise<boolean> {
    await connectToDatabase();

    const pref = await EmailPreference.findOne({ email: email.toLowerCase() });

    // If no preference record exists, they're subscribed by default
    if (!pref) return true;

    return pref.isSubscribed;
}
