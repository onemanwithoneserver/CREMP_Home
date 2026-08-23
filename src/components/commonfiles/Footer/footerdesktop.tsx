import { MapPin, Mail, Phone } from "lucide-react";
import logoDark from "../../../Logo/CREMP.png";
import CrempTextLogo from "../../CrempTextLogo";
import { brandLinks, quickLinks, resources, legalLinks } from "./data";

import FooterMobile from "./footermobile";

export default function SiteFooter({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    return <FooterMobile />;
  }

  return (
    <footer className="relative bg-[#050b14] border-t border-white/5 pt-16 pb-8 overflow-hidden font-sans">
      <div className="pointer-events-none absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#d4af37]/5 blur-[120px] dark:bg-[#d4af37]/10" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#d4af37]/5 blur-[100px] dark:bg-[#d4af37]/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center group w-fit">
              <img
                src={logoDark}
                alt="CREMP"
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
              <CrempTextLogo className="h-5 w-auto text-white ml-2 opacity-90 group-hover:opacity-100" />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              The premier Commercial Real Estate Marketplace. Discover, invest, and grow with confidence using our technology-backed operations and vast network.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {brandLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={i}
                    href={link.href}
                    className="w-9 h-9 rounded-full bg-[#121c33] flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white">
              Resources
            </h3>
            <div className="flex flex-col gap-3.5">
              {resources.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#d4af37] shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  123 Business Avenue, Suite 500<br />Mumbai, Maharashtra 400001<br />India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#d4af37] shrink-0" />
                <p className="text-sm text-gray-400">
                  +91 98765 43210
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#d4af37] shrink-0" />
                <p className="text-sm text-gray-400">
                  contact@cremp.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs font-semibold tracking-wide">
            © {new Date().getFullYear()} CREMP Group. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-gray-400">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#d4af37] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
