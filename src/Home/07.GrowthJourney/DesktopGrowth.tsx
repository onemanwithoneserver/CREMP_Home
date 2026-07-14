import {
    HeadphonesIcon,
    ShieldCheck,
    Star,
    TrendingUp, Users
} from 'lucide-react';
import { Container } from '../../components/layout';
import { steps } from "./data";

export default function DesktopGrowth() {
  return (
    <div className="w-full bg-[#fdfdfd] pt-24 pb-16 border-t border-[#e5e7eb] relative overflow-hidden">
      
      <div className="absolute right-0 top-0 w-1/3 h-[120%] opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-bottom mix-blend-luminosity mask-image-to-l" style={{ WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }} />

      <Container>
        
        <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fdf8f0] text-[#b38728] text-[0.65rem] font-bold tracking-widest uppercase mb-5 border border-[#f6ead6]">
            YOUR GROWTH JOURNEY WITH CREMP
          </span>
          <h2 className="text-[2.8rem] font-extrabold text-[#0a1128] leading-tight tracking-tight mb-4">
            From Onboarding to Opportunities <br /><span className="text-[#b38728]">We&apos;re With You Every Step</span>
          </h2>
          <p className="text-[1.05rem] text-[#4b5563] font-medium leading-relaxed max-w-2xl mx-auto">
            Once you join CREMP, we make it easy for you to get discovered, connect
            with the right people and grow your business.
          </p>
        </div>

        <div className="flex items-start gap-12 mb-20 relative z-10">
          
          <div className="flex-[1.2] relative pl-4">
             
             <div className="absolute top-[3rem] left-12 right-12 h-0 border-t-2 border-dashed border-[#b38728]/30" />
             <div className="absolute top-[3rem] right-12 w-0 h-[14.5rem] border-r-2 border-dashed border-[#b38728]/30 rounded-tr-[2rem] rounded-br-[2rem]" />
             <div className="absolute top-[17.5rem] left-28 right-12 h-0 border-t-2 border-dashed border-[#b38728]/30" />

             <div className="grid grid-cols-4 gap-y-[7rem] gap-x-2 relative z-10">
               {steps.map(step => (
                 <div key={step.num} className="flex flex-col items-center text-center" style={{ gridColumn: step.col, gridRow: step.row }}>
                   <div className="w-9 h-9 rounded-full bg-[#fdf8f0] text-[#b38728] text-[0.7rem] font-bold flex items-center justify-center mb-4 border border-[#f6ead6] shadow-sm">
                     {step.num}
                   </div>
                   <div className="w-16 h-16 rounded-full bg-white border-2 border-[#e5e7eb] flex items-center justify-center text-[#0a1128] mb-4 shadow-sm hover:border-[#b38728] hover:text-[#b38728] transition-colors">
                     <step.icon size={26} strokeWidth={1.5} />
                   </div>
                   <h4 className="text-[0.8rem] font-bold text-[#0a1128] mb-2">{step.title}</h4>
                   <p className="text-[0.6rem] text-[#6b7280] font-medium leading-[1.4] px-1">{step.desc}</p>
                 </div>
               ))}
             </div>
          </div>

          <div className="flex-1 shrink-0 bg-white border border-[#e5e7eb] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
            
            <div className="bg-[#f8fafc] border-b border-[#e5e7eb] p-3.5 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="ml-auto w-48 h-6 bg-white border border-[#e5e7eb] rounded-md flex items-center px-3">
                <span className="text-[0.55rem] text-[#94a3b8]">cremp.com/dashboard</span>
              </div>
            </div>
            
            <div className="flex h-[450px]">
              
              <div className="w-36 bg-[#0a1128] p-5 flex flex-col gap-4">
                 <div className="w-20 h-5 bg-white/20 rounded mb-6" />
                 {[1,2,3,4,5,6].map(i => (
                   <div key={i} className="w-full h-3.5 bg-white/10 rounded" />
                 ))}
              </div>
              
              <div className="flex-1 bg-[#fdfdfd] p-6">
                 <div className="w-40 h-5 bg-[#e2e8f0] rounded mb-3" />
                 <div className="w-56 h-3 bg-[#f1f5f9] rounded mb-8" />
                 <div className="grid grid-cols-4 gap-3 mb-8">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="bg-white border border-[#e5e7eb] h-20 rounded shadow-sm" />
                   ))}
                 </div>
                 <div className="flex gap-4">
                   <div className="flex-[2] bg-white border border-[#e5e7eb] h-36 rounded shadow-sm" />
                   <div className="flex-1 bg-white border border-[#e5e7eb] h-36 rounded shadow-sm flex items-center justify-center">
                     <div className="w-20 h-20 rounded-full border-[5px] border-[#10b981] border-r-[#e5e7eb]" />
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#e5e7eb] rounded-2xl p-4 shadow-sm flex items-center relative z-10 overflow-hidden">
          <div className="flex-[2.5] grid grid-cols-4 gap-4 px-4 divide-x divide-[#e5e7eb]">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f8fafc] text-[#0a1128] flex items-center justify-center border border-[#e5e7eb]">
                <Users size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[0.75rem] font-bold text-[#0a1128] mb-1">Real People. Real Opportunities.</h4>
                <p className="text-[0.6rem] text-[#6b7280] font-medium leading-relaxed">Connect with verified professionals and grow your network.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pl-4">
              <div className="w-10 h-10 rounded-full bg-[#f8fafc] text-[#0a1128] flex items-center justify-center border border-[#e5e7eb]">
                <ShieldCheck size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[0.75rem] font-bold text-[#0a1128] mb-1">Built on Trust.</h4>
                <p className="text-[0.6rem] text-[#6b7280] font-medium leading-relaxed">Every profile. Every listing. Every connection.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pl-4">
              <div className="w-10 h-10 rounded-full bg-[#f8fafc] text-[#0a1128] flex items-center justify-center border border-[#e5e7eb]">
                <TrendingUp size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[0.75rem] font-bold text-[#0a1128] mb-1">Designed for Growth.</h4>
                <p className="text-[0.6rem] text-[#6b7280] font-medium leading-relaxed">Powerful tools to help you scale your business.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pl-4 pr-4">
              <div className="w-10 h-10 rounded-full bg-[#f8fafc] text-[#0a1128] flex items-center justify-center border border-[#e5e7eb]">
                <HeadphonesIcon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[0.75rem] font-bold text-[#0a1128] mb-1">We&apos;re Always Here.</h4>
                <p className="text-[0.6rem] text-[#6b7280] font-medium leading-relaxed">Our team is here to support you at every step.</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-[#0a1128] rounded-xl p-6 flex items-center gap-4 text-white shadow-md ml-4 h-full min-h-[110px]">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#b38728] shrink-0">
              <Star size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[0.75rem] font-medium text-white/80 mb-1">Your success is our mission.</p>
              <p className="text-[0.95rem] font-bold leading-tight">Let&apos;s grow together.</p>
            </div>
          </div>
        </div>

      </Container>
    </div>
  )
}
