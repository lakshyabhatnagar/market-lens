"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { toggleWatchlist } from "@/lib/actions/watchlist.actions";
import TradingViewWidget from "@/components/TradingViewWidget";
import { WATCHLIST_MINI_CHART_CONFIG } from "@/lib/constants";

interface WatchlistItem {
  symbol: string;
  company: string;
  addedAt: string;
}

export default function WatchlistClient({ initialWatchlist }: { initialWatchlist: WatchlistItem[] }) {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>(initialWatchlist);
  const [removingSymbol, setRemovingSymbol] = useState<string | null>(null);

  const scriptUrl = "https://s3.tradingview.com/external-embedding/embed-widget-";

  const handleRemove = async (symbol: string, company: string) => {
    setRemovingSymbol(symbol);
    try {
      await toggleWatchlist(symbol, company);
      setWatchlist((prev) => prev.filter((item) => item.symbol !== symbol));
    } catch (err) {
      console.error("Failed to remove from watchlist:", err);
    } finally {
      setRemovingSymbol(null);
    }
  };

  if (watchlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-xl font-semibold text-gray-400 mb-2">Watchlist is empty</h2>
        <p className="text-gray-500">All stocks have been removed. Use search to add more.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {watchlist.map((item) => (
        <div
          key={item.symbol}
          className="rounded-xl border border-gray-700 bg-gray-800/40 overflow-hidden transition-colors hover:border-gray-600"
        >
          {/* Header: remove button */}
          <div className="flex items-center justify-end px-3 pt-2">
            <button
              onClick={() => handleRemove(item.symbol, item.company)}
              disabled={removingSymbol === item.symbol}
              className="p-1.5 rounded-md text-gray-500 hover:text-red-400 hover:bg-gray-700 transition-colors cursor-pointer disabled:opacity-50"
              title="Remove from watchlist"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          {/* Mini Chart Widget — includes symbol, price & sparkline */}
          <Link href={`/stocks/${item.symbol}`} className="block px-2 pb-2">
            <TradingViewWidget
              scriptUrl={`${scriptUrl}mini-symbol-overview.js`}
              config={WATCHLIST_MINI_CHART_CONFIG(item.symbol)}
              height={220}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
