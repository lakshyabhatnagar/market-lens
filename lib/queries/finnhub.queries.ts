import { getDateRange, validateArticle, formatArticle } from '@/lib/utils';

const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

async function fetchJSON<T>(url: string): Promise<T> {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`Fetch failed ${res.status}: ${text}`);
    }
    return (await res.json()) as T;
}

export async function getNews(symbols?: string[]): Promise<MarketNewsArticle[]> {
    const range = getDateRange(5);
    const token = process.env.FINNHUB_API_KEY ?? process.env.NEXT_PUBLIC_FINNHUB_API_KEY ?? '';
    if (!token) {
        throw new Error('FINNHUB API key is not configured');
    }

    const cleanSymbols = (symbols || [])
        .map((s) => s?.trim().toUpperCase())
        .filter((s): s is string => Boolean(s));

    const maxArticles = 6;

    if (cleanSymbols.length > 0) {
        const perSymbolArticles: Record<string, RawNewsArticle[]> = {};

        await Promise.all(
            cleanSymbols.map(async (sym) => {
                try {
                    const url = `${FINNHUB_BASE_URL}/company-news?symbol=${encodeURIComponent(sym)}&from=${range.from}&to=${range.to}&token=${token}`;
                    const articles = await fetchJSON<RawNewsArticle[]>(url);
                    perSymbolArticles[sym] = (articles || []).filter(validateArticle);
                } catch (e) {
                    console.error('Error fetching company news for', sym, e);
                    perSymbolArticles[sym] = [];
                }
            })
        );

        const collected: MarketNewsArticle[] = [];
        for (let round = 0; round < maxArticles; round++) {
            for (let i = 0; i < cleanSymbols.length; i++) {
                const sym = cleanSymbols[i];
                const list = perSymbolArticles[sym] || [];
                if (list.length === 0) continue;
                const article = list.shift();
                if (!article || !validateArticle(article)) continue;
                collected.push(formatArticle(article, true, sym, round));
                if (collected.length >= maxArticles) break;
            }
            if (collected.length >= maxArticles) break;
        }

        if (collected.length > 0) {
            collected.sort((a, b) => (b.datetime || 0) - (a.datetime || 0));
            return collected.slice(0, maxArticles);
        }
    }

    const generalUrl = `${FINNHUB_BASE_URL}/news?category=general&token=${token}`;
    const general = await fetchJSON<RawNewsArticle[]>(generalUrl);

    const seen = new Set<string>();
    const unique: RawNewsArticle[] = [];
    for (const art of general || []) {
        if (!validateArticle(art)) continue;
        const key = `${art.id}-${art.url}-${art.headline}`;
        if (seen.has(key)) continue;
        seen.add(key);
        unique.push(art);
        if (unique.length >= 20) break;
    }

    return unique.slice(0, maxArticles).map((a, idx) => formatArticle(a, false, undefined, idx));
}
