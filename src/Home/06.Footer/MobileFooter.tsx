import {
    ArrowRight,
    BadgeCheck,
    Building2,
    Check, CheckCircle2,
    Clock, Crown,
    ShieldCheck,
    Star,
    TrendingUp
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../components/ui';
import { roles } from "./data";

export default function MobileFooter() {
  const [activeRole, setActiveRole] = useState('owner')

  return (
    <div className="w-full bg-[#fdfdfd] pt-16 pb-12 border-t border-[#e5e7eb]">
      <div className="px-5">
        
        <div className="text-center mb-10">
          <span className="inline-block px-2.5 py-1 rounded-full bg-[#fdf8f0] text-[#b38728] text-[0.55rem] font-bold tracking-widest uppercase mb-3 border border-[#f6ead6]">
            CHOOSE YOUR BUSINESS ROLE
          </span>
          <h2 className="text-[1.8rem] font-extrabold text-[#0a1128] leading-tight tracking-tight mb-3">
            Who Are You?
          </h2>
          <p className="text-[0.75rem] text-[#4b5563] font-medium leading-relaxed px-1">
            Select the role that best describes you to personalize your onboarding experience.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 gap-3 mb-10 pb-4">
          {roles.map(r => (
            <div 
              key={r.id} 
              onClick={() => setActiveRole(r.id)}
              className={`snap-center shrink-0 w-[160px] relative rounded-2xl p-5 transition-all duration-300 ${
                activeRole === r.id 
                  ? 'bg-white border-2 border-[#b38728] shadow-[0_4px_20px_rgba(179,135,40,0.12)] scale-[1.02]' 
                  : 'bg-white border border-[#e5e7eb]'
              }`}
            >
              {activeRole === r.id && (
                <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#b38728] text-white flex items-center justify-center shadow-sm border border-white">
                  <Check size={14} strokeWidth={3} />
                </div>
              )}
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 transition-colors ${activeRole === r.id ? 'bg-[#fdf8f0] text-[#b38728] border border-[#f6ead6]' : 'bg-[#f8fafc] text-[#334155] border border-[#f1f5f9]'}`}>
                <r.icon size={22} strokeWidth={1.5} />
              </div>
              <h4 className={`text-[0.8rem] font-bold text-center whitespace-pre-line mb-2 ${activeRole === r.id ? 'text-[#0a1128]' : 'text-[#334155]'}`}>{r.title}</h4>
              <p className="text-[0.6rem] text-[#6b7280] text-center font-medium leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#fdfcf8] border border-[#f6ead6] rounded-[1.5rem] p-5 shadow-sm">
          
          <div className="flex flex-col items-center text-center border-b border-[#e5d5b5] pb-6 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#fdf8f0] border border-[#f6ead6] flex items-center justify-center text-[#b38728] mb-4 shadow-sm">
              <Building2 size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-extrabold text-[#0a1128] mb-2">Property Owner & Developer</h3>
            <p className="text-[0.75rem] text-[#4b5563] font-medium leading-relaxed mb-5">
              Showcase your commercial properties, reach verified buyers and tenants, and generate quality leads.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#f6ead6] text-[#b38728] text-[0.6rem] font-bold shadow-sm">
                <BadgeCheck size={12} /> Maximize Visibility
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#f6ead6] text-[#b38728] text-[0.6rem] font-bold shadow-sm">
                <TrendingUp size={12} /> Generate Leads
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#fdf8f0] text-[#b38728] flex items-center justify-center border border-[#f6ead6] shadow-sm">
                <Star size={12} fill="currentColor" />
              </div>
              <h4 className="text-[0.95rem] font-bold text-[#0a1128]">Benefits</h4>
            </div>
            <ul className="space-y-3">
              {['List unlimited properties', 'Reach verified buyers & tenants', 'Showcase with photos & docs', 'Build credibility with verified profile'].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[#b38728] shrink-0 mt-0.5" fill="#fdf8f0" strokeWidth={1.5} />
                  <span className="text-[0.75rem] text-[#4b5563] font-medium leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-[180px] relative rounded-xl overflow-hidden shadow-md mb-8">
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Building" className="w-full h-full object-cover" />
             <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 shadow-lg">
               <div className="w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-sm">
                 <ShieldCheck size={16} strokeWidth={1.5} />
               </div>
               <p className="text-[0.65rem] font-extrabold text-[#0a1128] leading-tight">
                 Verified profiles get <span className="text-[#2563eb]">3X</span> more trust
               </p>
             </div>
          </div>

          <div className="flex flex-col gap-5 bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-[#fdf8f0] text-[#b38728] flex items-center justify-center shrink-0 border border-[#f6ead6]">
                 <Clock size={18} strokeWidth={1.5} />
               </div>
               <div>
                 <p className="text-[0.6rem] text-[#6b7280] font-bold uppercase mb-0.5 tracking-wide">Estimated Setup Time</p>
                 <p className="text-[0.95rem] font-extrabold text-[#0a1128]">10–15 Minutes</p>
               </div>
             </div>
             
             <div className="w-full h-px bg-[#e5e7eb]" />
             
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-[#fdf8f0] text-[#b38728] flex items-center justify-center shrink-0 border border-[#f6ead6]">
                 <Crown size={18} strokeWidth={1.5} />
               </div>
               <div className="flex-1">
                 <p className="text-[0.6rem] text-[#6b7280] font-bold uppercase mb-0.5 tracking-wide">Recommended Plan</p>
                 <p className="text-[0.95rem] font-extrabold text-[#0a1128] mb-3">Professional</p>
                 <Button variant="secondary" size="sm" fullWidth className="!bg-[#0a1128] !text-white hover:!bg-[#1e293b] text-[0.75rem]">
                   View Plans <ArrowRight size={14} className="ml-1" />
                 </Button>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}
