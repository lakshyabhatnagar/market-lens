import { BarChart3, Bell, LineChart, Mail, Search, Star } from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "Real-Time Market Dashboard",
    description:
      "Get a comprehensive overview of the markets with live TradingView widgets including market overview charts, stock heatmaps, top stories, and market quotes — all in one place.",
  },
  {
    icon: Search,
    title: "Powerful Stock Search",
    description:
      "Instantly search across thousands of stocks powered by the Finnhub API. Find any ticker, see exchange info, and add stocks to your watchlist directly from search results.",
  },
  {
    icon: Star,
    title: "Personal Watchlist",
    description:
      "Build your own watchlist of favorite stocks. Each watchlisted stock comes with a live mini chart showing price, change percentage, and a 1-month sparkline — plus a scrolling ticker tape of all your picks.",
  },
  {
    icon: BarChart3,
    title: "In-Depth Stock Analysis",
    description:
      "Dive deep into any stock with candlestick charts, baseline charts, technical analysis indicators, company profiles, and financial statements — all powered by TradingView's professional-grade widgets.",
  },
  {
    icon: Mail,
    title: "AI-Powered Daily Email Summaries",
    description:
      "Receive personalized daily email digests with AI-curated market news relevant to your watchlisted stocks. Powered by Google Gemini, each summary is tailored to your portfolio.",
  },
  {
    icon: Bell,
    title: "Smart Alerts & Notifications",
    description:
      "Stay informed with automated welcome emails on sign-up and configurable stock alerts. Never miss an important market movement for the stocks you care about.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Features</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to track, analyze, and stay ahead of the markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-700 bg-gray-800/40 p-6 transition-colors hover:border-[#164a8b]/50"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[#164a8b]/10 p-3">
                <feature.icon className="h-6 w-6 text-[#164a8b]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
