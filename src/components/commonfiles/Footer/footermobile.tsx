import logoLight from "../../../Logo/CREMP_Light.png";
import CrempTextLogo from "../../CrempTextLogo";
import { brandLinks, legalLinks } from "./data";

export default function FooterMobile() {
  return (
    <footer className="bg-[#0a1128] border-t border-white/5 pt-8 pb-6 overflow-hidden relative font-sans">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#d4af37]/10 to-transparent blur-3xl opacity-50" />
      <div className="px-6 relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-3 items-center text-center">
          <a href="#" className="flex items-center group w-fit">
            <img src={logoLight} alt="CREMP" className="h-8 w-auto" />
            <CrempTextLogo className="h-3 w-auto text-white ml-2 opacity-90" />
          </a>
          <p className="text-[11px] text-gray-400 leading-relaxed max-w-[280px]">
            The premier Commercial Real Estate Marketplace. Discover, invest, and grow with confidence.
          </p>
          <div className="flex items-center gap-3 mt-1">
            {brandLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all shadow-sm ${link.hoverBg} ${link.hoverColor} ${link.hoverBorder}`}
                >
                  <Icon sx={{ fontSize: 16 }} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-2 pt-6 border-t border-white/10 text-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-semibold text-gray-500">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#d4af37] transition-colors uppercase tracking-wider underline underline-offset-4">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-[10px] font-medium tracking-wide">
            © {new Date().getFullYear()} CREMP Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
