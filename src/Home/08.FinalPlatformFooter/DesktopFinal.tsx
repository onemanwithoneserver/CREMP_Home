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
import { Container } from '../../components/layout';
import { Button } from '../../components/ui';
import { features } from "./data";

export default function DesktopFinal() {
  return (
    <div className="w-full bg-[#fcfcfd] pt-24 pb-0 border-t border-[#e5e7eb]">
      <Container>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fdf8f0] text-[#b38728] text-xs font-bold tracking-widest uppercase mb-4 border border-[#f6ead6]">
            EVERYTHING YOU NEED, ALL IN ONE PLATFORM
          </span>
          <h2 className="text-[2.6rem] font-extrabold text-[#0a1128] leading-tight tracking-tight mb-4">
            Everything Included to <span className="text-[#b38728]">Power Your Growth</span>
          </h2>
          <p className="text-[1.05rem] text-[#4b5563] font-medium leading-relaxed max-w-2xl mx-auto">
            CREMP provides all the tools and features you need to showcase, connect, manage
            and grow your business—seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex flex-col items-center text-center mb-6">
                <div className={`w-12 h-12 rounded-full ${f.bg} ${f.color} flex items-center justify-center mb-4`}>
                  <f.icon size={22} strokeWidth={1.5} />
                </div>
                <h4 className="text-[1rem] font-bold text-[#0a1128] mb-2">{f.title}</h4>
                <p className="text-[0.7rem] text-[#6b7280] font-medium leading-relaxed">{f.desc}</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {f.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check size={14} className={`${f.color} shrink-0 mt-0.5`} strokeWidth={2.5} />
                    <span className="text-[0.75rem] text-[#4b5563] font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className={`flex items-center justify-center gap-2 py-2.5 rounded-lg ${f.bg} border ${f.border} ${f.color} mt-auto`}>
                <f.tagIcon size={14} strokeWidth={2} />
                <span className="text-[0.7rem] font-bold">{f.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0a1128] rounded-[2rem] p-10 flex items-center justify-between shadow-xl mb-20 relative overflow-hidden">
          
          <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-bottom mix-blend-luminosity mask-image-to-r" style={{ WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }} />
          
          <div className="relative z-10 max-w-xl pr-8">
            <span className="inline-block px-3 py-1 rounded bg-white/10 text-white/90 text-[0.6rem] font-bold tracking-widest uppercase mb-4 border border-white/20">
              READY TO GET STARTED?
            </span>
            <h2 className="text-[2.2rem] font-extrabold text-white leading-tight mb-4">
              Join Thousands of Businesses Growing with <span className="text-[#b38728]">CREMP</span>
            </h2>
            <p className="text-[0.95rem] text-white/80 font-medium leading-relaxed">
              Complete your onboarding in just a few minutes and unlock a world of commercial real estate opportunities.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-6 pl-8 border-l border-white/20">
            <div className="flex items-center gap-4">
              <Button variant="primary" className="!bg-[#b38728] hover:!bg-[#9a7321] !text-white text-[0.9rem] px-8 py-3 whitespace-nowrap shadow-lg shadow-[#b38728]/20 border-none">
                Start Onboarding Now <ArrowRight size={16} className="ml-1.5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-[0.9rem] px-8 py-3 whitespace-nowrap">
                Talk to an Expert <HeadphonesIcon size={16} className="ml-1.5" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2.5">
                 <Clock size={16} className="text-[#b38728]" strokeWidth={1.5} />
                 <div>
                   <p className="text-[0.7rem] font-bold text-white leading-tight">Quick & Easy Setup</p>
                   <p className="text-[0.6rem] text-white/60">Get started in 10-15 minutes</p>
                 </div>
               </div>
               <div className="w-px h-8 bg-white/20" />
               <div className="flex items-center gap-2.5">
                 <ShieldCheck size={16} className="text-[#b38728]" strokeWidth={1.5} />
                 <div>
                   <p className="text-[0.7rem] font-bold text-white leading-tight">Verified & Trusted</p>
                   <p className="text-[0.6rem] text-white/60">Secure onboarding process</p>
                 </div>
               </div>
               <div className="w-px h-8 bg-white/20" />
               <div className="flex items-center gap-2.5">
                 <HeadphonesIcon size={16} className="text-[#b38728]" strokeWidth={1.5} />
                 <div>
                   <p className="text-[0.7rem] font-bold text-white leading-tight">Dedicated Support</p>
                   <p className="text-[0.6rem] text-white/60">We&apos;re here to help you grow</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </Container>

      <footer className="w-full border-t border-[#e5e7eb] bg-white pt-16 pb-8">
        <Container>
          <div className="grid grid-cols-6 gap-8 mb-12">
            <div className="col-span-2 pr-8">
              <h2 className="text-3xl font-extrabold text-[#0a1128] mb-4">CREMP<span className="text-[#b38728] text-sm align-top ml-1">®</span></h2>
              <p className="text-[0.85rem] text-[#6b7280] font-medium leading-relaxed mb-6">
                India&apos;s leading commercial real estate marketplace connecting businesses, owners, investors and professionals.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] hover:text-[#0a1128] hover:border-[#0a1128] cursor-pointer transition-colors"><Briefcase size={16} /></div>
                <div className="w-9 h-9 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] hover:text-[#0a1128] hover:border-[#0a1128] cursor-pointer transition-colors"><Users size={16} /></div>
                <div className="w-9 h-9 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] hover:text-[#0a1128] hover:border-[#0a1128] cursor-pointer transition-colors"><MessageCircle size={16} /></div>
                <div className="w-9 h-9 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] hover:text-[#0a1128] hover:border-[#0a1128] cursor-pointer transition-colors"><Camera size={16} /></div>
                <div className="w-9 h-9 rounded-full bg-[#f8fafc] border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] hover:text-[#0a1128] hover:border-[#0a1128] cursor-pointer transition-colors"><Video size={16} /></div>
              </div>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-[0.95rem] font-bold text-[#0a1128] mb-5">Platform</h4>
              <ul className="space-y-3">
                {['How It Works', 'Browse Properties', 'Post Your Property', 'Find Businesses', 'Pricing'].map(l => (
                  <li key={l}><a href="#" className="text-[0.8rem] text-[#6b7280] hover:text-[#b38728] font-medium">{l}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-[0.95rem] font-bold text-[#0a1128] mb-5">Resources</h4>
              <ul className="space-y-3">
                {['Help Center', 'Blog', 'Guides & Insights', 'Videos', 'Webinars'].map(l => (
                  <li key={l}><a href="#" className="text-[0.8rem] text-[#6b7280] hover:text-[#b38728] font-medium">{l}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-[0.95rem] font-bold text-[#0a1128] mb-5">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Media Kit', 'Partners', 'Contact Us'].map(l => (
                  <li key={l}><a href="#" className="text-[0.8rem] text-[#6b7280] hover:text-[#b38728] font-medium">{l}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-[0.95rem] font-bold text-[#0a1128] mb-5">Support</h4>
              <ul className="space-y-3">
                {['Contact Support', 'Request a Demo', 'Talk to Sales', 'FAQs'].map(l => (
                  <li key={l}><a href="#" className="text-[0.8rem] text-[#6b7280] hover:text-[#b38728] font-medium">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#e5e7eb] pt-8 flex items-center justify-between flex-wrap gap-4">
             <div className="flex items-center gap-6">
                <span className="text-[0.75rem] text-[#9ca3af] font-medium">© 2024 CREMP. All rights reserved.</span>
             </div>
             <div className="flex items-center gap-6">
                <a href="#" className="text-[0.75rem] text-[#6b7280] hover:text-[#0a1128] font-medium">Privacy Policy</a>
                <a href="#" className="text-[0.75rem] text-[#6b7280] hover:text-[#0a1128] font-medium">Terms of Use</a>
                <a href="#" className="text-[0.75rem] text-[#6b7280] hover:text-[#0a1128] font-medium">Cookie Policy</a>
             </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
