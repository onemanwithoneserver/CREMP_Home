import {
    ArrowRight,
    BadgeCheck,
    Building2,
    Check, CheckCircle2,
    ChevronLeft, ChevronRight,
    ClipboardList,
    Clock, Crown,
    FileText,
    ShieldCheck,
    Star,
    TrendingUp,
    Users
} from 'lucide-react';
import { useState } from 'react';
import { Container } from '../../components/layout';
import { Button } from '../../components/ui';
import { roles } from "./data";

export default function DesktopFooter() {
  const [activeRole, setActiveRole] = useState('owner')

  return (
    <div className="w-full bg-[#fdfdfd] pt-24 pb-20 border-t border-[#e5e7eb]">
      <Container>
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fdf8f0] text-[#b38728] text-[0.65rem] font-bold tracking-widest uppercase mb-4 border border-[#f6ead6]">
            CHOOSE YOUR BUSINESS ROLE
          </span>
          <h2 className="text-[2.8rem] font-extrabold text-[#0a1128] leading-tight tracking-tight mb-4">
            Who Are You?
          </h2>
          <p className="text-[0.95rem] text-[#4b5563] font-medium leading-relaxed max-w-2xl mx-auto">
            Select the role that best describes you. We&apos;ll personalize your onboarding experience
            and help you get the most out of CREMP.
          </p>
        </div>

        <div className="relative mb-14 px-8">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] shadow-sm hover:text-[#111827] hover:border-[#111827] z-10 transition-colors">
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex items-stretch gap-4 overflow-x-auto scrollbar-hide py-2 px-1">
            {roles.map(r => (
              <div 
                key={r.id} 
                onClick={() => setActiveRole(r.id)}
                className={`relative shrink-0 w-[180px] rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                  activeRole === r.id 
                    ? 'bg-white border-2 border-[#b38728] shadow-[0_8px_30px_rgba(179,135,40,0.12)] scale-105' 
                    : 'bg-white border border-[#e5e7eb] hover:border-[#b38728]/50 hover:shadow-md opacity-70 hover:opacity-100'
                }`}
              >
                {activeRole === r.id && (
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#b38728] text-white flex items-center justify-center shadow-md border-2 border-white">
                    <Check size={16} strokeWidth={3} />
                  </div>
                )}
                <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 transition-colors ${activeRole === r.id ? 'bg-[#fdf8f0] text-[#b38728] border border-[#f6ead6]' : 'bg-[#f8fafc] text-[#334155] border border-[#f1f5f9]'}`}>
                  <r.icon size={26} strokeWidth={1.2} />
                </div>
                <h4 className={`text-[0.9rem] font-bold text-center whitespace-pre-line mb-3 leading-snug ${activeRole === r.id ? 'text-[#0a1128]' : 'text-[#334155]'}`}>{r.title}</h4>
                <p className="text-[0.65rem] text-[#6b7280] text-center font-medium leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] shadow-sm hover:text-[#111827] hover:border-[#111827] z-10 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="bg-[#fdfcf8] border border-[#f6ead6] rounded-[2rem] p-10 shadow-[0_4px_30px_rgba(179,135,40,0.08)]">
          
          <div className="flex items-start justify-between border-b border-[#e5d5b5] pb-8 mb-10">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-[#fdf8f0] border border-[#f6ead6] flex items-center justify-center text-[#b38728] shrink-0 shadow-sm">
                <Building2 size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#0a1128] mb-3 tracking-tight">Property Owner & Developer</h3>
                <p className="text-[0.95rem] text-[#4b5563] font-medium max-w-xl leading-relaxed">
                  Showcase your commercial properties, reach verified buyers and tenants, and generate quality leads that convert.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#f6ead6] text-[#b38728] text-[0.7rem] font-bold shadow-sm">
                <BadgeCheck size={16} /> Maximize Visibility
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#f6ead6] text-[#b38728] text-[0.7rem] font-bold shadow-sm">
                <TrendingUp size={16} /> Generate Quality Leads
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#f6ead6] text-[#b38728] text-[0.7rem] font-bold shadow-sm">
                <Users size={16} /> Grow Your Portfolio
              </div>
            </div>
          </div>

          <div className="flex items-stretch gap-10 mb-12">
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fdf8f0] text-[#b38728] flex items-center justify-center shadow-sm border border-[#f6ead6]">
                  <Star size={14} fill="currentColor" />
                </div>
                <h4 className="text-[1.05rem] font-bold text-[#0a1128]">Benefits</h4>
              </div>
              <ul className="space-y-4">
                {['List unlimited properties', 'Reach verified buyers & tenants', 'Showcase with photos, videos & docs', 'Get quality leads & enquiries', 'Build credibility with verified profile', 'Priority support and insights'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#b38728] shrink-0" fill="#fdf8f0" strokeWidth={1.5} />
                    <span className="text-[0.8rem] text-[#4b5563] font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 pl-4 border-l border-[#e5d5b5]/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#f8fafc] text-[#4b5563] flex items-center justify-center border border-[#e5e7eb] shadow-sm">
                  <ClipboardList size={16} strokeWidth={1.5} />
                </div>
                <h4 className="text-[1.05rem] font-bold text-[#0a1128]">Requirements</h4>
              </div>
              <ul className="space-y-4">
                {['Business email & phone number', 'Valid business registration', 'Company / Organization details', 'PAN / GST number', 'Authorized contact information'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#b38728] shrink-0 shadow-sm" />
                    <span className="text-[0.8rem] text-[#4b5563] font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-[1.2] pl-4 border-l border-[#e5d5b5]/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#f8fafc] text-[#4b5563] flex items-center justify-center border border-[#e5e7eb] shadow-sm">
                  <FileText size={16} strokeWidth={1.5} />
                </div>
                <h4 className="text-[1.05rem] font-bold text-[#0a1128]">Documents You May Need</h4>
              </div>
              <ul className="space-y-4">
                {['Business Registration Certificate', 'GST Certificate', 'PAN Card', 'Address Proof', 'Authorized Signatory ID'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center bg-white border border-[#e5e7eb] text-[#6b7280] shadow-sm">
                      <FileText size={12} strokeWidth={2} />
                    </div>
                    <span className="text-[0.8rem] text-[#4b5563] font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[320px] shrink-0 relative rounded-2xl overflow-hidden shadow-lg group">
               <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 shadow-xl transform transition-transform group-hover:-translate-y-1">
                 <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                   <ShieldCheck size={20} strokeWidth={1.5} />
                 </div>
                 <p className="text-[0.75rem] font-extrabold text-[#0a1128] leading-snug">
                   Verified profiles get<br />
                   <span className="text-[#2563eb]">3X</span> more visibility & trust
                 </p>
               </div>
            </div>
          </div>

          <div className="flex items-center gap-8 bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
             <div className="flex items-center gap-5 flex-1 pl-2">
               <div className="w-12 h-12 rounded-full bg-[#fdf8f0] text-[#b38728] flex items-center justify-center shrink-0 border border-[#f6ead6] shadow-sm">
                 <Clock size={24} strokeWidth={1.5} />
               </div>
               <div>
                 <p className="text-[0.7rem] text-[#6b7280] font-bold uppercase mb-1 tracking-wide">Estimated Setup Time</p>
                 <p className="text-[1.1rem] font-extrabold text-[#0a1128]">10–15 Minutes</p>
                 <p className="text-[0.65rem] text-[#6b7280] font-medium mt-0.5">To go live on CREMP</p>
               </div>
             </div>
             
             <div className="w-px h-16 bg-[#e5e7eb]" />
             
             <div className="flex items-start gap-5 flex-1 pl-2">
               <div className="w-12 h-12 rounded-full bg-[#fdf8f0] text-[#b38728] flex items-center justify-center shrink-0 border border-[#f6ead6] shadow-sm">
                 <ShieldCheck size={24} strokeWidth={1.5} />
               </div>
               <div>
                 <p className="text-[0.85rem] font-bold text-[#0a1128] mb-1.5">Verification</p>
                 <p className="text-[0.7rem] text-[#6b7280] font-medium leading-relaxed">
                   Verified profiles build trust and get higher visibility in the marketplace.
                 </p>
               </div>
             </div>
             
             <div className="w-px h-16 bg-[#e5e7eb]" />
             
             <div className="flex items-center gap-5 flex-[1.2] pl-2 pr-2">
               <div className="w-12 h-12 rounded-full bg-[#fdf8f0] text-[#b38728] flex items-center justify-center shrink-0 border border-[#f6ead6] shadow-sm">
                 <Crown size={24} strokeWidth={1.5} />
               </div>
               <div className="flex-1">
                 <p className="text-[0.7rem] text-[#6b7280] font-bold uppercase mb-1 tracking-wide">Recommended Plan</p>
                 <p className="text-[1.1rem] font-extrabold text-[#0a1128]">Professional</p>
                 <p className="text-[0.65rem] text-[#6b7280] font-medium mt-0.5">Best for growing businesses</p>
               </div>
               <Button variant="secondary" className="!bg-[#0a1128] !text-white hover:!bg-[#1e293b] text-[0.8rem] px-6 py-2.5">
                 View Plans <ArrowRight size={16} className="ml-1.5" />
               </Button>
             </div>
          </div>
        </div>

      </Container>
    </div>
  )
}
