import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>

        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p className="text-lg">
            Hey there! I&apos;m <span className="text-white font-semibold">Lakshya Bhatnagar</span>, 
            a passionate developer and the creator of MarketLens.
          </p>

          <p>
            I built MarketLens because I wanted a clean, no-nonsense platform where I could 
            track stocks, get real-time market data, and receive AI-powered insights — all 
            without the clutter of traditional financial tools.
          </p>

          <p>
            As someone who&apos;s deeply interested in both software engineering and the financial 
            markets, I saw an opportunity to combine my skills to create something genuinely 
            useful. MarketLens is the result of that — a modern, developer-friendly stock 
            tracking platform that leverages the best tools available: TradingView for 
            professional-grade charts, Finnhub for real-time market data, and Google Gemini 
            AI for personalized daily email summaries.
          </p>

          <div className="rounded-xl border border-gray-700 bg-gray-800/40 p-6 my-8">
            <h2 className="text-xl font-semibold text-white mb-4">What drives me</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-[#164a8b] font-bold">→</span>
                Building products that solve real problems
              </li>
              <li className="flex gap-3">
                <span className="text-[#164a8b] font-bold">→</span>
                Clean, intuitive user experiences
              </li>
              <li className="flex gap-3">
                <span className="text-[#164a8b] font-bold">→</span>
                Making financial data accessible to everyone
              </li>
              <li className="flex gap-3">
                <span className="text-[#164a8b] font-bold">→</span>
                Continuously learning and improving
              </li>
            </ul>
          </div>

          <p>
            MarketLens is a constantly evolving project. I&apos;m always working on new features, 
            improving performance, and listening to feedback. If you have ideas or suggestions, 
            I&apos;d love to hear from you!
          </p>

          <p className="text-gray-500 text-sm pt-4">
            Thanks for using MarketLens. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
