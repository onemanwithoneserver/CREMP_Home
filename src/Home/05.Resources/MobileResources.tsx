import {
    Building2,
    Handshake,
    Star,
    TrendingUp,
    Users
} from 'lucide-react';
import { benefits } from "./data";

export default function MobileResources() {
  return (
    <div className="w-full bg-[#fdfdfd] pt-16 pb-12 border-t border-[#e5e7eb]">
      <div className="px-5">
        
        <div className="text-center mb-10">
          <span className="inline-block px-2.5 py-1 rounded-full bg-[#fdf8f0] text-[#b38728] text-[0.55rem] font-bold tracking-widest uppercase mb-3 border border-[#f6ead6]">
            WHY JOIN CREMP
          </span>
          <h2 className="text-[1.35rem] font-extrabold text-[#111827] leading-tight tracking-tight mb-3">
            Powerful Benefits. <br /><span className="text-[#b38728]">Real Growth.</span>
          </h2>
          <p className="text-[0.75rem] text-[#4b5563] font-medium leading-relaxed px-1">
            CREMP is designed to help you connect, showcase, and grow your business
            with the right opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {benefits.map((b) => (
            <div key={b.num} className="bg-white border border-[#e5e7eb] rounded-xl p-4 relative shadow-sm">
              <span className="absolute top-3 right-3 text-[#b38728] text-[0.55rem] font-bold bg-[#fdf8f0] px-1.5 py-0.5 rounded border border-[#f6ead6]">
                {b.num}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#334155] mb-3">
                <b.icon size={16} strokeWidth={1.5} />
              </div>
              <h4 className="text-[0.75rem] font-bold text-[#111827] mb-1.5 leading-tight">{b.title}</h4>
              <p className="text-[0.6rem] text-[#6b7280] leading-relaxed font-medium">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-xl p-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] relative overflow-hidden text-center">
          <div className="absolute left-0 bottom-0 w-full h-[60%] opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-bottom mix-blend-luminosity mask-image-to-t" style={{ WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }} />
          
          <div className="relative z-10 flex flex-col items-center mb-6 border-b border-[#e5e7eb] pb-6">
            <div className="w-14 h-16 relative shrink-0 mb-4">
               <div className="absolute inset-0 bg-[#0a1128]" style={{ clipPath: 'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)' }}></div>
               <div className="absolute inset-[1.5px] bg-gradient-to-b from-[#111827] to-[#1e293b]" style={{ clipPath: 'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)' }}></div>
               <div className="absolute inset-0 flex items-center justify-center pt-1.5">
                 <Star size={20} className="text-[#b38728]" fill="currentColor" />
               </div>
            </div>
            <h3 className="text-[1.15rem] font-extrabold text-[#111827] mb-1 leading-tight">Trusted by Thousands.</h3>
            <h3 className="text-[1.15rem] font-extrabold text-[#b38728] mb-2 leading-tight">Chosen for Results.</h3>
            <p className="text-[0.65rem] text-[#4b5563] font-medium leading-relaxed px-2">
              Join a growing community of businesses and professionals who trust CREMP.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 relative z-10">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] mb-2 shadow-sm">
                <Users size={16} strokeWidth={1.5} />
              </div>
              <span className="block text-xl font-extrabold text-[#111827]">500+</span>
              <span className="text-[0.6rem] font-bold text-[#6b7280]">Verified Vendors</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] mb-2 shadow-sm">
                <Building2 size={16} strokeWidth={1.5} />
              </div>
              <span className="block text-xl font-extrabold text-[#111827]">25+</span>
              <span className="text-[0.6rem] font-bold text-[#6b7280]">Cities</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] mb-2 shadow-sm">
                <Handshake size={16} strokeWidth={1.5} />
              </div>
              <span className="block text-xl font-extrabold text-[#111827]">10K+</span>
              <span className="text-[0.6rem] font-bold text-[#6b7280]">Connections</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] mb-2 shadow-sm">
                <TrendingUp size={16} strokeWidth={1.5} />
              </div>
              <span className="block text-xl font-extrabold text-[#111827]">1</span>
              <span className="text-[0.6rem] font-bold text-[#6b7280]">Platform</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
