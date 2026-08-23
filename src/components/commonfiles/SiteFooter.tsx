import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import logoLight from "../../Logo/CREMP_Light.png";
import logoDark from "../../Logo/CREMP.png";
import CrempTextLogo from "../CrempTextLogo";

export default function SiteFooter() {
  return (
    <footer className="relative bg-white dark:bg-[#050b14] border-t border-gray-200 dark:border-white/5 pt-16 pb-8 overflow-hidden font-sans transition-colors duration-500">
      {/* Background Accents */}
      <div className="pointer-events-none absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#d4af37]/5 blur-[120px] dark:bg-[#d4af37]/10" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#d4af37]/5 blur-[100px] dark:bg-[#d4af37]/10" />

      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <a href="/" className="flex items-center group w-fit">
              <img
                src={logoLight}
                alt="CREMP"
                className="block h-12 w-auto dark:hidden transition-transform group-hover:scale-105"
              />
              <img
                src={logoDark}
                alt="CREMP"
                className="hidden h-12 w-auto dark:block transition-transform group-hover:scale-105"
              />
              <CrempTextLogo className="h-5 w-auto text-[#0a1128] dark:text-white ml-2 opacity-90 group-hover:opacity-100" />
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              The premier Commercial Real Estate Marketplace. Discover, invest, and grow with confidence using our technology-backed operations and vast network.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-100 dark:bg-[#121c33] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-[#d4af37] hover:text-white dark:hover:bg-[#d4af37] dark:hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#0a1128] dark:text-white">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3.5">
              {["Properties for Sale", "Properties for Rent", "Franchise Opportunities", "Video Library", "Hand Picked", "Saved Items"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#0a1128] dark:text-white">
              Resources
            </h3>
            <div className="flex flex-col gap-3.5">
              {["About Us", "Market Insights", "Success Stories", "Investor Relations", "Help Center", "Contact Support"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#0a1128] dark:text-white">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#d4af37] shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  123 Business Avenue, Suite 500<br />Mumbai, Maharashtra 400001<br />India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#d4af37] shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  +91 98765 43210
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#d4af37] shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  contact@cremp.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 dark:text-gray-500 text-xs font-semibold tracking-wide">
            © {new Date().getFullYear()} CREMP Group. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
            <button className="hover:text-[#d4af37] transition-colors uppercase tracking-wider">
              Privacy Policy
            </button>
            <button className="hover:text-[#d4af37] transition-colors uppercase tracking-wider">
              Terms of Service
            </button>
            <button className="hover:text-[#d4af37] transition-colors uppercase tracking-wider">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
