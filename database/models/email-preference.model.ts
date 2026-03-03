import { Schema, model, models, type Document, type Model } from 'mongoose';
import crypto from 'crypto';

export interface EmailPreferenceDoc extends Document {
    email: string;
    unsubscribeToken: string;
    unsubscribedAt: Date | null;
    isSubscribed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const EmailPreferenceSchema = new Schema<EmailPreferenceDoc>(
    {
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        unsubscribeToken: {
            type: String,
            required: true,
            unique: true,
            default: () => crypto.randomBytes(32).toString('hex'),
        },
        unsubscribedAt: { type: Date, default: null },
        isSubscribed: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export const EmailPreference: Model<EmailPreferenceDoc> =
    (models?.EmailPreference as Model<EmailPreferenceDoc>) ||
    model<EmailPreferenceDoc>('EmailPreference', EmailPreferenceSchema);
