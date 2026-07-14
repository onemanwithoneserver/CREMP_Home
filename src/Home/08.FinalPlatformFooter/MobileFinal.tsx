import {
    ArrowRight,
    Briefcase,
    Camera,
    Check,
    Clock,
    HeadphonesIcon,
    MessageCircle,
    ShieldCheck,
    Users,
    Video
} from 'lucide-react';
import { Button } from '../../components/ui';
import { features } from "./data";

export default function MobileFinal() {
  return (
    <div className="w-full bg-[#fcfcfd] pt-16 pb-0 border-t border-[#e5e7eb]">
      <div className="px-5">
        
        <div className="text-center mb-10">
          <span className="inline-block px-2.5 py-1 rounded-full bg-[#fdf8f0] text-[#b38728] text-[0.55rem] font-bold tracking-widest uppercase mb-3 border border-[#f6ead6]">
            EVERYTHING YOU NEED
          </span>
          <h2 className="text-[1.6rem] font-extrabold text-[#0a1128] leading-tight tracking-tight mb-3">
            Everything Included to <span className="text-[#b38728]">Power Your Growth</span>
          </h2>
          <p className="text-[0.75rem] text-[#4b5563] font-medium leading-relaxed px-1">
            CREMP provides all the tools and features you need to showcase, connect, manage
            and grow your business.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-10 h-10 rounded-full ${f.bg} ${f.color} flex items-center justify-center shrink-0`}>
                  <f.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[0.95rem] font-bold text-[#0a1128] mb-1">{f.title}</h4>
                  <p className="text-[0.65rem] text-[#6b7280] font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
              
              <ul className="space-y-2.5 mb-5 pl-2">
                {f.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check size={14} className={`${f.color} shrink-0 mt-[2px]`} strokeWidth={2.5} />
                    <span className="text-[0.7rem] text-[#4b5563] font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className={`flex items-center justify-center gap-2 py-2 rounded-lg ${f.bg} border ${f.border} ${f.color}`}>
                <f.tagIcon size={12} strokeWidth={2} />
                <span className="text-[0.65rem] font-bold">{f.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0a1128] rounded-[1.5rem] p-6 shadow-xl mb-12 relative overflow-hidden text-center">
          <div className="absolute left-0 bottom-0 w-full h-[50%] opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop')] bg-cover bg-bottom mix-blend-luminosity mask-image-to-t" style={{ WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }} />
          
          <div className="relative z-10">
            <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-white/90 text-[0.55rem] font-bold tracking-widest uppercase mb-3 border border-white/20">
              READY TO GET STARTED?
            </span>
            <h2 className="text-[1.4rem] font-extrabold text-white leading-tight mb-3">
              Join Thousands of Businesses Growing with <span className="text-[#b38728]">CREMP</span>
            </h2>
            <p className="text-[0.7rem] text-white/80 font-medium leading-relaxed mb-6 px-2">
              Complete your onboarding in just a few minutes and unlock opportunities.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <Button variant="primary" size="sm" fullWidth className="!bg-[#b38728] hover:!bg-[#9a7321] !text-white text-[0.8rem] py-3 border-none">
                Start Onboarding Now <ArrowRight size={14} className="ml-1.5" />
              </Button>
              <Button variant="outline" size="sm" fullWidth className="border-white/30 text-white text-[0.8rem] py-3">
                Talk to an Expert <HeadphonesIcon size={14} className="ml-1.5" />
              </Button>
            </div>
            
            <div className="flex flex-col gap-4 text-left bg-white/5 rounded-xl p-4 border border-white/10">
               <div className="flex items-center gap-3">
                 <Clock size={16} className="text-[#b38728]" strokeWidth={1.5} />
                 <div>
                   <p className="text-[0.7rem] font-bold text-white leading-tight">Quick & Easy Setup</p>
                   <p className="text-[0.55rem] text-white/60 mt-0.5">Get started in 10-15 minutes</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <ShieldCheck size={16} className="text-[#b38728]" strokeWidth={1.5} />
                 <div>
                   <p className="text-[0.7rem] font-bold text-white leading-tight">Verified & Trusted</p>
                   <p className="text-[0.55rem] text-white/60 mt-0.5">Secure onboarding process</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <HeadphonesIcon size={16} className="text-[#b38728]" strokeWidth={1.5} />
                 <div>
                   <p className="text-[0.7rem] font-bold text-white leading-tight">Dedicated Support</p>
                   <p className="text-[0.55rem] text-white/60 mt-0.5">We&apos;re here to help you grow</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-[#e5e7eb] bg-white pt-10 pb-8 px-5">
        <h2 className="text-2xl font-extrabold text-[#0a1128] mb-3">CREMP<span className="text-[#b38728] text-[0.6rem] align-top ml-1">®</span></h2>
        <p className="text-[0.75rem] text-[#6b7280] font-medium leading-relaxed mb-6 pr-4">
          India&apos;s leading commercial real estate marketplace connecting businesses, owners, investors and professionals.
        </p>
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563]"><Briefcase size={14} /></div>
          <div className="w-8 h-8 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563]"><Users size={14} /></div>
          <div className="w-8 h-8 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563]"><MessageCircle size={14} /></div>
          <div className="w-8 h-8 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563]"><Camera size={14} /></div>
          <div className="w-8 h-8 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563]"><Video size={14} /></div>
        </div>
        
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10">
          <div>
            <h4 className="text-[0.85rem] font-bold text-[#0a1128] mb-3">Platform</h4>
            <ul className="space-y-2.5">
              {['How It Works', 'Browse Properties', 'Post Your Property', 'Pricing'].map(l => (
                <li key={l}><a href="#" className="text-[0.75rem] text-[#6b7280] font-medium">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.85rem] font-bold text-[#0a1128] mb-3">Resources</h4>
            <ul className="space-y-2.5">
              {['Help Center', 'Blog', 'Guides', 'Videos'].map(l => (
                <li key={l}><a href="#" className="text-[0.75rem] text-[#6b7280] font-medium">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.85rem] font-bold text-[#0a1128] mb-3">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Careers', 'Partners', 'Contact'].map(l => (
                <li key={l}><a href="#" className="text-[0.75rem] text-[#6b7280] font-medium">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.85rem] font-bold text-[#0a1128] mb-3">Support</h4>
            <ul className="space-y-2.5">
              {['Contact Support', 'Request a Demo', 'FAQs'].map(l => (
                <li key={l}><a href="#" className="text-[0.75rem] text-[#6b7280] font-medium">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e5e7eb] pt-6 flex flex-col gap-4 text-center">
           <div className="flex items-center justify-center gap-4">
              <a href="#" className="text-[0.65rem] text-[#6b7280] font-medium">Privacy Policy</a>
              <a href="#" className="text-[0.65rem] text-[#6b7280] font-medium">Terms of Use</a>
              <a href="#" className="text-[0.65rem] text-[#6b7280] font-medium">Cookie Policy</a>
           </div>
           <span className="text-[0.65rem] text-[#9ca3af] font-medium">© 2024 CREMP. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
