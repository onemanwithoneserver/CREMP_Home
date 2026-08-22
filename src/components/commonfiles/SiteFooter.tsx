export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#0a1628] via-[#12223a] to-[#0a1628] border-t border-[#c9a961]/20 py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <p className="text-gray-400 text-xs font-light tracking-wide">
          © {new Date().getFullYear()} CREMP - Commercial Real Estate Marketplace. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs font-light text-gray-400">
          <button className="hover:text-[#c9a961] transition-colors">Privacy</button>
          <span>•</span>
          <button className="hover:text-[#c9a961] transition-colors">Terms</button>
          <span>•</span>
          <button className="hover:text-[#c9a961] transition-colors">Contact</button>
        </div>
      </div>
    </footer>
  );
}
