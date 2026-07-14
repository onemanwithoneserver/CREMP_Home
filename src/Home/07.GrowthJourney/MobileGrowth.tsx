import {
    HeadphonesIcon,
    ShieldCheck,
    Star,
    TrendingUp, Users
} from 'lucide-react';
import { steps } from "./data";

export default function MobileGrowth() {
  return (
    <div className="w-full bg-[#fdfdfd] pt-16 pb-12 border-t border-[#e5e7eb] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-full h-[30%] opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop')] bg-cover bg-bottom mix-blend-luminosity mask-image-to-b" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)' }} />

      <div className="px-5">
        
        <div className="text-center mb-10 relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fdf8f0] text-[#b38728] text-[0.55rem] font-bold tracking-widest uppercase mb-4 border border-[#f6ead6]">
            YOUR GROWTH JOURNEY
          </span>
          <h2 className="text-[1.8rem] font-extrabold text-[#0a1128] leading-tight tracking-tight mb-3">
            From Onboarding to Opportunities
          </h2>
          <p className="text-[0.75rem] text-[#4b5563] font-medium leading-relaxed px-2">
            Once you join CREMP, we make it easy for you to get discovered, connect and grow.
          </p>
        </div>

        <div className="relative mb-12 pl-4">
          <div className="absolute top-4 bottom-4 left-[1.65rem] w-px border-l-2 border-dashed border-[#b38728]/30 z-0" />
          
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="relative z-10 flex gap-4">
                <div className="flex flex-col items-center pt-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#fdf8f0] text-[#b38728] text-[0.55rem] font-bold flex items-center justify-center shrink-0 border border-[#f6ead6] shadow-sm">
                    {step.num}
                  </div>
                </div>
                <div className="bg-white border border-[#e5e7eb] rounded-xl p-3.5 shadow-sm flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-full bg-[#f8fafc] border border-[#e5e7eb] text-[#0a1128] flex items-center justify-center shrink-0">
                      <step.icon size={14} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-[0.8rem] font-bold text-[#0a1128] leading-tight">{step.title}</h4>
                  </div>
                  <p className="text-[0.65rem] text-[#6b7280] leading-relaxed font-medium ml-[2.75rem]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
          <div className="bg-white border border-[#e5e7eb] p-4 rounded-xl shadow-sm flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f8fafc] text-[#0a1128] flex items-center justify-center border border-[#e5e7eb]">
              <Users size={14} strokeWidth={1.5} />
            </div>
            <h4 className="text-[0.7rem] font-bold text-[#0a1128] leading-tight">Real People.<br/>Real Opportunities.</h4>
            <p className="text-[0.55rem] text-[#6b7280] font-medium leading-relaxed">Connect with verified professionals.</p>
          </div>
          <div className="bg-white border border-[#e5e7eb] p-4 rounded-xl shadow-sm flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f8fafc] text-[#0a1128] flex items-center justify-center border border-[#e5e7eb]">
              <ShieldCheck size={14} strokeWidth={1.5} />
            </div>
            <h4 className="text-[0.7rem] font-bold text-[#0a1128] leading-tight">Built on<br/>Trust.</h4>
            <p className="text-[0.55rem] text-[#6b7280] font-medium leading-relaxed">Every profile & listing verified.</p>
          </div>
          <div className="bg-white border border-[#e5e7eb] p-4 rounded-xl shadow-sm flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f8fafc] text-[#0a1128] flex items-center justify-center border border-[#e5e7eb]">
              <TrendingUp size={14} strokeWidth={1.5} />
            </div>
            <h4 className="text-[0.7rem] font-bold text-[#0a1128] leading-tight">Designed for<br/>Growth.</h4>
            <p className="text-[0.55rem] text-[#6b7280] font-medium leading-relaxed">Tools to scale your business.</p>
          </div>
          <div className="bg-white border border-[#e5e7eb] p-4 rounded-xl shadow-sm flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f8fafc] text-[#0a1128] flex items-center justify-center border border-[#e5e7eb]">
              <HeadphonesIcon size={14} strokeWidth={1.5} />
            </div>
            <h4 className="text-[0.7rem] font-bold text-[#0a1128] leading-tight">We&apos;re Always<br/>Here.</h4>
            <p className="text-[0.55rem] text-[#6b7280] font-medium leading-relaxed">Support at every step.</p>
          </div>
        </div>

        <div className="bg-[#0a1128] rounded-xl p-5 flex items-center gap-4 text-white shadow-md relative z-10">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#b38728] shrink-0">
            <Star size={16} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[0.65rem] font-medium text-white/80 mb-0.5">Your success is our mission.</p>
            <p className="text-[0.8rem] font-bold leading-tight">Let&apos;s grow together.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
