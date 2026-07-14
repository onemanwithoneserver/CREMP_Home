import { Handshake, User, LayoutGrid, Users, LineChart, Lightbulb, Star, FileText, Briefcase } from 'lucide-react'

export default function DesktopEnable() {
  return (
    <div className="relative w-full py-20 px-6 overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header and Top Illustration */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="inline-flex items-center bg-[#DBEAFE] text-[#1D4ED8] px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase mb-4">
              For Growth Partners
            </div>
            <h2 className="text-[3rem] font-extrabold text-[#0B1426] leading-tight mb-4 tracking-tight">
              Enable <span className="text-[#1D4ED8]">Growth.</span>
            </h2>
            <p className="text-lg font-medium text-[#4A5568] max-w-md">
              Share expertise. Build credibility.<br/>
              Connect the right opportunities.
            </p>
          </div>
          
          <div className="hidden md:block w-[400px] h-[200px] shrink-0 opacity-80"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '16px',
              maskImage: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            }}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Brokers Card */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300">
            
            <div className="flex gap-6 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#DBEAFE] text-[#1D4ED8] flex items-center justify-center shrink-0">
                    <Handshake size={20} />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1A1A2E] leading-tight">
                    Commercial Brokers
                  </h3>
                </div>
                <div className="text-[#1D4ED8] font-bold text-sm mb-4">Build Your Brand. Grow Your Network.</div>
                <p className="text-sm font-medium text-[#4A5568] leading-relaxed">
                  Showcase exclusive inventory, share market insights and connect with serious buyers, tenants and investors.
                </p>
              </div>
              <div className="w-[180px] h-[140px] rounded-lg overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                  alt="Broker using tablet" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <User size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Personal<br/>Branding</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <LayoutGrid size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Inventory<br/>Showcase</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <Users size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Buyer<br/>Connections</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <LineChart size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Lead<br/>Management</span>
              </div>
            </div>

            <button className="mt-auto w-full bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white py-3.5 rounded-md font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
              Explore Broker Solutions <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Consultants Card */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300">
            
            <div className="flex gap-6 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#DBEAFE] text-[#1D4ED8] flex items-center justify-center shrink-0">
                    <Lightbulb size={20} />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1A1A2E] leading-tight">
                    Franchise Consultants
                  </h3>
                </div>
                <div className="text-[#1D4ED8] font-bold text-sm mb-4">Be the Growth Catalyst.</div>
                <p className="text-sm font-medium text-[#4A5568] leading-relaxed">
                  Educate brands and investors, showcase your expertise and drive successful expansions together.
                </p>
              </div>
              <div className="w-[180px] h-[140px] rounded-lg overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=800&auto=format&fit=crop" 
                  alt="Chess pieces strategy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <Star size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Expert<br/>Positioning</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <FileText size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Content<br/>Publishing</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <Users size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Brand & Investor<br/>Connections</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1D4ED8]">
                  <Briefcase size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Consulting<br/>Opportunities</span>
              </div>
            </div>

            <button className="mt-auto w-full bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white py-3.5 rounded-md font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
              Explore Consultant Solutions <span className="text-lg leading-none">→</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
