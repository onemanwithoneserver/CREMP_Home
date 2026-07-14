import {
    Building2,
    Handshake,
    Star,
    TrendingUp,
    Users
} from 'lucide-react';
import { Container } from '../../components/layout';
import { benefits } from "./data";

export default function DesktopResources() {
  return (
    <div className="w-full bg-[#fcfcfd] pt-24 pb-16 border-t border-[#e5e7eb]">
      <Container>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fdf8f0] text-[#b38728] text-xs font-bold tracking-widest uppercase mb-4 border border-[#f6ead6]">
            WHY JOIN CREMP
          </span>
          <h2 className="text-[2.5rem] font-extrabold text-[#111827] leading-tight tracking-tight mb-4">
            Powerful Benefits. <span className="text-[#b38728]">Real Growth.</span>
          </h2>
          <p className="text-[0.95rem] text-[#4b5563] font-medium leading-relaxed max-w-2xl mx-auto">
            CREMP is designed to help you connect, showcase, and grow your business
            with the right opportunities and the right people.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-16">
          {benefits.map((b) => (
            <div key={b.num} className="bg-white border border-[#e5e7eb] rounded-2xl p-7 relative hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all group hover:-translate-y-1">
              <span className="absolute top-6 right-6 text-[#b38728] text-[0.65rem] font-bold bg-[#fdf8f0] px-2 py-1 rounded border border-[#f6ead6]">
                {b.num}
              </span>
              <div className="w-12 h-12 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#334155] mb-5 group-hover:bg-[#111827] group-hover:border-[#111827] group-hover:text-white transition-colors">
                <b.icon size={22} strokeWidth={1.5} />
              </div>
              <h4 className="text-[1.05rem] font-bold text-[#111827] mb-2.5 leading-tight">{b.title}</h4>
              <p className="text-[0.75rem] text-[#6b7280] leading-relaxed font-medium">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-3xl p-10 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
          
          <div className="absolute left-0 bottom-0 w-[45%] h-[150%] opacity-15 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-bottom mix-blend-luminosity mask-image-to-t" style={{ WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }} />
          
          <div className="flex items-center gap-8 relative z-10 w-[55%] pr-8">
            <div className="w-24 h-28 relative shrink-0">
               
               <div className="absolute inset-0 bg-[#0a1128]" style={{ clipPath: 'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)' }}></div>
               <div className="absolute inset-1 bg-gradient-to-br from-[#111827] to-[#1e293b] border border-white/10" style={{ clipPath: 'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)' }}></div>
               <div className="absolute inset-0 flex items-center justify-center pt-2">
                 <Star size={32} className="text-[#b38728]" fill="currentColor" />
               </div>
            </div>
            <div>
              <h3 className="text-[1.6rem] font-extrabold text-[#111827] leading-tight mb-1">Trusted by Thousands.</h3>
              <h3 className="text-[1.6rem] font-extrabold text-[#b38728] leading-tight mb-4">Chosen for Results.</h3>
              <p className="text-[0.85rem] text-[#4b5563] font-medium leading-relaxed max-w-sm">
                Join a growing community of businesses and professionals who trust CREMP for their growth journey.
              </p>
            </div>
          </div>

          <div className="w-px h-28 bg-[#e5e7eb] relative z-10" />

          <div className="flex items-center justify-between flex-1 pl-12 relative z-10">
            <div className="text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] mb-3 shadow-sm">
                <Users size={20} strokeWidth={1.5} />
              </div>
              <span className="block text-[1.4rem] font-extrabold text-[#111827] leading-none mb-1">500+</span>
              <span className="text-[0.65rem] font-bold text-[#6b7280]">Verified Vendors</span>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] mb-3 shadow-sm">
                <Building2 size={20} strokeWidth={1.5} />
              </div>
              <span className="block text-[1.4rem] font-extrabold text-[#111827] leading-none mb-1">25+</span>
              <span className="text-[0.65rem] font-bold text-[#6b7280]">Cities</span>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] mb-3 shadow-sm">
                <Handshake size={20} strokeWidth={1.5} />
              </div>
              <span className="block text-[1.4rem] font-extrabold text-[#111827] leading-none mb-1">10K+</span>
              <span className="text-[0.65rem] font-bold text-[#6b7280]">Business Connections</span>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#2563eb] mb-3 shadow-sm">
                <TrendingUp size={20} strokeWidth={1.5} />
              </div>
              <span className="block text-[1.4rem] font-extrabold text-[#111827] leading-none mb-1">1</span>
              <span className="text-[0.65rem] font-bold text-[#6b7280]">Integrated Platform</span>
            </div>
          </div>
        </div>

      </Container>
    </div>
  )
}
