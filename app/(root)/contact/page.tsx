import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-gray-500 mb-10">
          Have a question, suggestion, or just want to say hello? Feel free to reach out.
        </p>

        <div className="rounded-xl border border-gray-700 bg-gray-800/40 p-8">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center rounded-lg bg-[#164a8b]/10 p-3 shrink-0">
              <Mail className="h-6 w-6 text-[#164a8b]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">Email</h2>
              <p className="text-sm text-gray-500 mb-4">
                The best way to reach me. I typically respond within 24–48 hours.
              </p>
              <a
                href="mailto:lakshyabhatnagar1@gmail.com"
                className="inline-flex items-center gap-2 text-[#164a8b] hover:underline font-medium"
              >
                lakshyabhatnagar1@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-gray-700 bg-gray-800/40 p-8">
          <h2 className="text-lg font-semibold text-white mb-3">What to expect</h2>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-3">
              <span className="text-[#164a8b] font-bold shrink-0">01</span>
              Bug reports and feature requests are always welcome.
            </li>
            <li className="flex gap-3">
              <span className="text-[#164a8b] font-bold shrink-0">02</span>
              Feedback on the platform helps shape future updates.
            </li>
            <li className="flex gap-3">
              <span className="text-[#164a8b] font-bold shrink-0">03</span>
              Collaboration inquiries? I&apos;m open to interesting projects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
