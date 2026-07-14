import { Handshake, User, LayoutGrid, Users, LineChart, Lightbulb, Star, FileText, Briefcase } from 'lucide-react'

export default function MobileEnable() {
  return (
    <div className="relative w-full py-12 px-5 overflow-hidden bg-[#F8FAFC]">
      <div className="relative z-10 w-full flex flex-col">
        
        {/* Section Header */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center bg-[#DBEAFE] text-[#1D4ED8] px-3 py-1 rounded-sm text-[0.6rem] font-bold tracking-widest uppercase mb-3">
            For Growth Partners
          </div>
          <h2 className="text-[2rem] font-extrabold text-[#0B1426] leading-tight mb-3 tracking-tight">
            Enable <br/><span className="text-[#1D4ED8]">Growth.</span>
          </h2>
          <p className="text-sm font-medium text-[#4A5568]">
            Share expertise. Build credibility. Connect the right opportunities.
          </p>

          <div className="absolute top-0 right-0 w-[120px] h-[120px] shrink-0 opacity-40 z-[-1]"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '50%',
              maskImage: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
            }}
          />
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-6">
          
          {/* Brokers Card */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 p-5 flex flex-col">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#DBEAFE] text-[#1D4ED8] flex items-center justify-center shrink-0">
                <Handshake size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-[#1A1A2E] leading-tight">
                Commercial Brokers
              </h3>
            </div>
            
            <div className="text-[#1D4ED8] font-bold text-xs mb-3">Build Your Brand. Grow Your Network.</div>
            
            <div className="w-full h-[120px] rounded-lg overflow-hidden shrink-0 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="Broker using tablet" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-[0.8rem] font-medium text-[#4A5568] leading-relaxed mb-6">
              Showcase exclusive inventory, share market insights and connect with serious buyers, tenants and investors.
            </p>

            <div className="grid grid-cols-4 gap-2 mb-6">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <User size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Personal<br/>Branding</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <LayoutGrid size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Inventory<br/>Showcase</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <Users size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Buyer<br/>Connections</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <LineChart size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Lead<br/>Management</span>
              </div>
            </div>

            <button className="w-full bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
              Explore Broker Solutions <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Consultants Card */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 p-5 flex flex-col">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#DBEAFE] text-[#1D4ED8] flex items-center justify-center shrink-0">
                <Lightbulb size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-[#1A1A2E] leading-tight">
                Franchise Consultants
              </h3>
            </div>
            
            <div className="text-[#1D4ED8] font-bold text-xs mb-3">Be the Growth Catalyst.</div>
            
            <div className="w-full h-[120px] rounded-lg overflow-hidden shrink-0 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=800&auto=format&fit=crop" 
                alt="Chess pieces strategy" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-[0.8rem] font-medium text-[#4A5568] leading-relaxed mb-6">
              Educate brands and investors, showcase your expertise and drive successful expansions together.
            </p>

            <div className="grid grid-cols-4 gap-2 mb-6">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <Star size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Expert<br/>Positioning</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <FileText size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Content<br/>Publishing</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <Users size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Brand & Investor<br/>Connections</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <Briefcase size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Consulting<br/>Opportunities</span>
              </div>
            </div>

            <button className="w-full bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
              Explore Consultant Solutions <span className="text-lg leading-none">→</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
