import { Building2, Store, ShoppingBag, PlaySquare, CheckCircle, Video, Scale, Users } from 'lucide-react'

export default function DesktopDiscover() {
  return (
    <div className="relative w-full py-20 px-6 overflow-hidden bg-white">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Main large card */}
        <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#DCFCE7] p-10 flex items-stretch gap-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300">
          
          {/* Left Content Area */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center bg-[#DCFCE7] text-[#166534] px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase mb-6 w-fit">
              For Buyers, Investors & Tenants
            </div>
            
            <h2 className="text-[2.5rem] font-extrabold text-[#0B1426] leading-tight mb-4 tracking-tight">
              Discover Opportunities<br/>
              with <span className="text-[#166534]">Confidence.</span>
            </h2>
            
            <h4 className="text-base font-bold text-[#166534] mb-3">Explore. Learn. Decide with Confidence.</h4>
            
            <p className="text-sm font-medium text-[#4A5568] leading-relaxed max-w-lg mb-10">
              Discover commercial properties, franchise opportunities and retail business opportunities while learning through expert videos, market insights and business education before making your next move.
            </p>

            <div className="grid grid-cols-4 gap-4 mb-10">
              <div className="flex flex-col items-start gap-2">
                <div className="w-12 h-12 rounded-lg bg-white border border-[#DCFCE7] flex items-center justify-center text-[#166534] shadow-sm">
                  <Building2 size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-[#1A1A2E] leading-tight mt-1">Commercial<br/>Properties</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-12 h-12 rounded-lg bg-white border border-[#DCFCE7] flex items-center justify-center text-[#166534] shadow-sm">
                  <Store size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-[#1A1A2E] leading-tight mt-1">Franchise<br/>Opportunities</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-12 h-12 rounded-lg bg-white border border-[#DCFCE7] flex items-center justify-center text-[#166534] shadow-sm">
                  <ShoppingBag size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-[#1A1A2E] leading-tight mt-1">Retail Business<br/>Opportunities</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-12 h-12 rounded-lg bg-white border border-[#DCFCE7] flex items-center justify-center text-[#166534] shadow-sm">
                  <PlaySquare size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-[#1A1A2E] leading-tight mt-1">Expert<br/>Videos & Insights</span>
              </div>
            </div>

            <button className="bg-[#166534] hover:bg-[#14532D] text-white py-3.5 px-8 rounded-md font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm w-fit">
              Explore Marketplace <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Center Image Area */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" 
                alt="Person browsing marketplace on laptop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F0FDF4]/30 mix-blend-overlay" />
            </div>
            
            {/* Right side floating feature list */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              <div className="bg-white px-5 py-3 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex items-center gap-3 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
                  <CheckCircle size={16} strokeWidth={2} />
                </div>
                <span className="text-sm font-bold text-[#1A1A2E]">Verified<br/>Opportunities</span>
              </div>
              
              <div className="bg-white px-5 py-3 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex items-center gap-3 border border-gray-100 translate-x-4">
                <div className="w-8 h-8 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
                  <Video size={16} strokeWidth={2} />
                </div>
                <span className="text-sm font-bold text-[#1A1A2E]">Video-Led<br/>Discovery</span>
              </div>
              
              <div className="bg-white px-5 py-3 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex items-center gap-3 border border-gray-100 translate-x-8">
                <div className="w-8 h-8 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
                  <Scale size={16} strokeWidth={2} />
                </div>
                <span className="text-sm font-bold text-[#1A1A2E]">Compare &<br/>Shortlist</span>
              </div>

              <div className="bg-white px-5 py-3 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex items-center gap-3 border border-gray-100 translate-x-12">
                <div className="w-8 h-8 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
                  <Users size={16} strokeWidth={2} />
                </div>
                <span className="text-sm font-bold text-[#1A1A2E]">Connect with<br/>Right Partners</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
