export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-10">Last updated: March 3, 2026</p>

        <div className="space-y-8 text-gray-400 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using MarketLens, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Description of Service</h2>
            <p>
              MarketLens is a stock tracking and market analysis platform that provides real-time 
              market data, interactive charts, watchlist management, and AI-powered email summaries. 
              The platform is intended for informational and educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Not Financial Advice</h2>
            <p>
              <strong className="text-gray-300">MarketLens does not provide financial, investment, or trading advice.</strong>{" "}
              All data, charts, AI-generated summaries, and information displayed on the platform are 
              for informational purposes only. You should consult a qualified financial advisor before 
              making any investment decisions. We are not responsible for any financial losses resulting 
              from decisions made based on information provided by MarketLens.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. User Accounts</h2>
            <ul className="list-disc list-inside space-y-1.5 text-gray-500">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-500">
              <li>Use the platform for any illegal or unauthorized purpose</li>
              <li>Attempt to interfere with or disrupt the platform&apos;s infrastructure</li>
              <li>Scrape, crawl, or extract data from the platform using automated means</li>
              <li>Impersonate another person or misrepresent your identity</li>
              <li>Use the platform to distribute malware or harmful content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Intellectual Property</h2>
            <p>
              All content, design, code, and branding on MarketLens are the property of MarketLens 
              and its creator. TradingView widgets and Finnhub data are provided under their respective 
              licenses and terms. You may not reproduce, distribute, or create derivative works from 
              our platform without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Third-Party Data</h2>
            <p>
              Market data, stock prices, and financial information are provided by third-party sources 
              including TradingView and Finnhub. While we strive for accuracy, we cannot guarantee 
              that all data is real-time or error-free. Data may be delayed or subject to inaccuracies 
              from upstream providers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              MarketLens is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent 
              permitted by law, we disclaim all warranties, express or implied. We shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages, including 
              loss of profits, data, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Service Availability</h2>
            <p>
              We strive to keep MarketLens available at all times, but we do not guarantee 
              uninterrupted access. The platform may be temporarily unavailable due to maintenance, 
              updates, or circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              posted on this page with an updated date. Your continued use of MarketLens after 
              changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at{" "}
              <a href="mailto:lakshyabhatnagar1@gmail.com" className="text-[#164a8b] hover:underline">
                lakshyabhatnagar1@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
