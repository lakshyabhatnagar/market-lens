export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
        <p className="text-sm text-gray-600 mb-10">Last updated: March 3, 2026</p>

        <div className="space-y-8 text-gray-400 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. 
              They are widely used to make websites work efficiently, provide a better user experience, 
              and give site owners useful information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. How We Use Cookies</h2>
            <p className="mb-3">MarketLens uses cookies for the following purposes:</p>
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-700 bg-gray-800/40 p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-1">Essential Cookies</h3>
                <p className="text-gray-500 text-sm">
                  Required for the platform to function. These include authentication session cookies 
                  that keep you logged in and CSRF tokens that protect your account security.
                </p>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-800/40 p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-1">Functional Cookies</h3>
                <p className="text-gray-500 text-sm">
                  These remember your preferences and settings, such as your selected theme or 
                  display options, to provide a more personalized experience.
                </p>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-800/40 p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-1">Third-Party Cookies</h3>
                <p className="text-gray-500 text-sm">
                  TradingView widgets embedded on our platform may set their own cookies to provide 
                  chart functionality and remember widget settings. These cookies are governed by 
                  TradingView&apos;s own cookie policy.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 pr-4 text-gray-300 font-semibold">Cookie</th>
                    <th className="text-left py-2 pr-4 text-gray-300 font-semibold">Purpose</th>
                    <th className="text-left py-2 text-gray-300 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr className="border-b border-gray-800">
                    <td className="py-2 pr-4 font-mono text-xs">better-auth.session</td>
                    <td className="py-2 pr-4">Authentication session</td>
                    <td className="py-2">7 days</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 pr-4 font-mono text-xs">better-auth.csrf</td>
                    <td className="py-2 pr-4">CSRF protection</td>
                    <td className="py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">TradingView *</td>
                    <td className="py-2 pr-4">Widget functionality</td>
                    <td className="py-2">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can 
              typically find these options in the &quot;Settings&quot;, &quot;Preferences&quot;, or &quot;Privacy&quot; section 
              of your browser. Please note that disabling essential cookies may prevent you from 
              using certain features of MarketLens, including logging into your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. No Tracking or Advertising Cookies</h2>
            <p>
              MarketLens does <strong className="text-gray-300">not</strong> use any advertising, 
              tracking, or analytics cookies. We do not serve ads, and we do not share your 
              browsing data with advertisers or analytics providers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be reflected 
              on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Contact</h2>
            <p>
              If you have questions about our use of cookies, please contact us at{" "}
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
