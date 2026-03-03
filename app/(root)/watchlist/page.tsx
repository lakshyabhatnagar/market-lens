import { getUserWatchlist } from "@/lib/actions/watchlist.actions";
import WatchlistClient from "@/components/WatchlistClient";
import TradingViewWidget from "@/components/TradingViewWidget";
import { WATCHLIST_TICKER_TAPE_CONFIG } from "@/lib/constants";

export default async function WatchlistPage() {
  const watchlist = await getUserWatchlist();

  const tickerSymbols = watchlist.map((item) => ({
    proName: item.symbol.toUpperCase(),
    title: item.company,
  }));

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Your Watchlist</h1>
        <p className="text-gray-500 mb-6">
          Track your favorite stocks in one place.
        </p>

        {watchlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-600 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-400 mb-2">No stocks yet</h2>
            <p className="text-gray-500 max-w-md">
              Use the search bar to find stocks and tap the star icon to add them to your watchlist.
            </p>
          </div>
        ) : (
          <>
            {/* Scrolling ticker tape of watchlisted symbols */}
            <div className="mb-8 rounded-lg overflow-hidden border border-gray-700">
              <TradingViewWidget
                scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
                config={WATCHLIST_TICKER_TAPE_CONFIG(tickerSymbols)}
                height={78}
              />
            </div>

            {/* Watchlist stock cards with mini charts */}
            <WatchlistClient initialWatchlist={watchlist} />
          </>
        )}
      </div>
    </div>
  );
}
