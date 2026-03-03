export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-10">Last updated: March 3, 2026</p>

        <div className="space-y-8 text-gray-400 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              MarketLens (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you use our stock tracking platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-500">
              <li>Account information (name, email address) when you sign up</li>
              <li>Investment preferences (goals, risk tolerance, preferred industries)</li>
              <li>Watchlist data (stocks you choose to track)</li>
              <li>Usage data (pages visited, features used)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1.5 text-gray-500">
              <li>To provide and maintain our platform</li>
              <li>To personalize your experience and stock recommendations</li>
              <li>To send daily AI-powered email summaries based on your watchlist</li>
              <li>To send welcome emails and important account notifications</li>
              <li>To improve and optimize our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Data Storage & Security</h2>
            <p>
              Your data is stored securely using MongoDB Atlas with industry-standard encryption. 
              We use secure authentication via Better Auth and do not store passwords in plain text. 
              While we implement commercially reasonable security measures, no method of electronic 
              storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Third-Party Services</h2>
            <p className="mb-3">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-500">
              <li><span className="text-gray-400">TradingView</span> — for market charts and financial data widgets</li>
              <li><span className="text-gray-400">Finnhub</span> — for real-time stock data and news</li>
              <li><span className="text-gray-400">Google Gemini AI</span> — for generating personalized email summaries</li>
              <li><span className="text-gray-400">Inngest</span> — for background job processing</li>
            </ul>
            <p className="mt-3">
              Each third-party service has its own privacy policy governing data it processes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Email Communications</h2>
            <p>
              We send transactional emails (welcome emails, account notifications) and optional 
              daily market summary emails. You can unsubscribe from daily summaries at any time 
              using the unsubscribe link provided in every email.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Your Rights</h2>
            <ul className="list-disc list-inside space-y-1.5 text-gray-500">
              <li>Access, correct, or delete your personal data</li>
              <li>Unsubscribe from marketing or summary emails at any time</li>
              <li>Request a copy of the data we hold about you</li>
              <li>Withdraw consent for data processing where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on 
              this page with an updated &quot;Last updated&quot; date. Continued use of MarketLens after 
              changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
