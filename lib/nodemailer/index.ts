import nodemailer from 'nodemailer';
import {WELCOME_EMAIL_TEMPLATE, NEWS_SUMMARY_EMAIL_TEMPLATE} from "@/lib/nodemailer/templates";
import {getUnsubscribeUrl} from "@/lib/queries/email-preference.queries";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,
    }
})

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const unsubscribeUrl = await getUnsubscribeUrl(email);

    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{intro}}', intro)
        .replace(/\{\{unsubscribeUrl\}\}/g, unsubscribeUrl);

    const mailOptions = {
        from: `"MarketLens" <${process.env.NODEMAILER_EMAIL}>`,
        to: email,
        subject: `Welcome to MarketLens - your stock market toolkit is ready!`,
        text: 'Thanks for joining MarketLens. You now have the tools to track markets and make smarter moves.',
        html: htmlTemplate,
        headers: {
            'List-Unsubscribe': `<${unsubscribeUrl}>`,
        },
    }

    await transporter.sendMail(mailOptions);
}

export const sendNewsSummaryEmail = async (
    { email, date, newsContent }: { email: string; date: string; newsContent: string }
): Promise<void> => {
    const unsubscribeUrl = await getUnsubscribeUrl(email);

    const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE
        .replace('{{date}}', date)
        .replace('{{newsContent}}', newsContent)
        .replace(/\{\{unsubscribeUrl\}\}/g, unsubscribeUrl);

    const mailOptions = {
        from: `"MarketLens News" <${process.env.NODEMAILER_EMAIL}>`,
        to: email,
        subject: `📈 Market News Summary Today - ${date}`,
        text: `Today's market news summary from MarketLens`,
        html: htmlTemplate,
        headers: {
            'List-Unsubscribe': `<${unsubscribeUrl}>`,
        },
    };

    await transporter.sendMail(mailOptions);
};
