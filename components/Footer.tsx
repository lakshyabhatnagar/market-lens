import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const FOOTER_LINKS = {
  product: [
    { href: "/features", label: "Features" },
  ],
  company: [
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact", icon: true },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a] rounded-t-2xl">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/assets/images/logo.png" alt="MarketLens logo" width={126} height={29} className="h-7 w-auto" />
              <span className="text-xl font-bold tracking-wide text-[#164a8b]">
                MARKETLENS
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              AI-powered stock tracking platform for modern investors.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#164a8b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#164a8b] transition-colors flex items-center gap-1.5"
                  >
                    {link.icon && <Mail className="h-3.5 w-3.5" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#164a8b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} MarketLens. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Created by Lakshya Bhatnagar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
