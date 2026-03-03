import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/database/mongoose';
import { EmailPreference } from '@/database/models/email-preference.model';

export async function GET(request: NextRequest) {
    try {
        const token = request.nextUrl.searchParams.get('token');

        if (!token) {
            return new NextResponse(renderPage('Invalid Link', 'The unsubscribe link is invalid or expired.', false), {
                status: 400,
                headers: { 'Content-Type': 'text/html' },
            });
        }

        await connectToDatabase();

        const pref = await EmailPreference.findOne({ unsubscribeToken: token });

        if (!pref) {
            return new NextResponse(renderPage('Invalid Link', 'The unsubscribe link is invalid or expired.', false), {
                status: 404,
                headers: { 'Content-Type': 'text/html' },
            });
        }

        if (!pref.isSubscribed) {
            return new NextResponse(renderPage('Already Unsubscribed', 'You have already been unsubscribed from MarketLens emails.', true), {
                status: 200,
                headers: { 'Content-Type': 'text/html' },
            });
        }

        pref.isSubscribed = false;
        pref.unsubscribedAt = new Date();
        await pref.save();

        return new NextResponse(renderPage('Unsubscribed', 'You have been successfully unsubscribed from MarketLens emails. You will no longer receive email updates from us.', true), {
            status: 200,
            headers: { 'Content-Type': 'text/html' },
        });
    } catch (error) {
        console.error('Unsubscribe error:', error);
        return new NextResponse(renderPage('Error', 'Something went wrong. Please try again later.', false), {
            status: 500,
            headers: { 'Content-Type': 'text/html' },
        });
    }
}

function renderPage(title: string, message: string, success: boolean) {
    const color = success ? '#FDD458' : '#ef4444';
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - MarketLens</title>
    <style>
        body { margin: 0; padding: 0; background: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        .card { background: #141414; border: 1px solid #30333A; border-radius: 12px; padding: 48px; max-width: 480px; text-align: center; }
        h1 { color: ${color}; font-size: 24px; margin: 0 0 16px 0; }
        p { color: #CCDADC; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0; }
        a { display: inline-block; background: #FDD458; color: #000; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; }
        a:hover { background: #E8BA40; }
    </style>
</head>
<body>
    <div class="card">
        <h1>${title}</h1>
        <p>${message}</p>
        <a href="${process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BASE_URL || '/'}">Back to MarketLens</a>
    </div>
</body>
</html>`;
}
