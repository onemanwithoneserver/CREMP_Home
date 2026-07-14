import { Building2, Store, ShoppingBag, PlaySquare, CheckCircle, Video, Scale, Users } from 'lucide-react'

export default function MobileDiscover() {
  return (
    <div className="relative w-full py-12 px-5 overflow-hidden bg-white">
      <div className="relative z-10 w-full flex flex-col">
        
        {/* Main large card */}
        <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#DCFCE7] p-5 flex flex-col gap-6">
          
          {/* Top Content Area */}
          <div className="flex flex-col">
            <div className="inline-flex items-center bg-[#DCFCE7] text-[#166534] px-3 py-1 rounded-sm text-[0.6rem] font-bold tracking-widest uppercase mb-4 w-fit">
              For Buyers, Investors & Tenants
            </div>
            
            <h2 className="text-[2rem] font-extrabold text-[#0B1426] leading-tight mb-3 tracking-tight">
              Discover <br/>Opportunities<br/>
              with <span className="text-[#166534]">Confidence.</span>
            </h2>
            
            <h4 className="text-sm font-bold text-[#166534] mb-3">Explore. Learn. Decide with Confidence.</h4>
            
            <p className="text-[0.8rem] font-medium text-[#4A5568] leading-relaxed mb-6">
              Discover commercial properties, franchise opportunities and retail business opportunities while learning through expert videos, market insights and business education.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#DCFCE7] flex items-center justify-center text-[#166534] shadow-sm shrink-0">
                  <Building2 size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.65rem] font-bold text-[#1A1A2E] leading-tight">Commercial<br/>Properties</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#DCFCE7] flex items-center justify-center text-[#166534] shadow-sm shrink-0">
                  <Store size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.65rem] font-bold text-[#1A1A2E] leading-tight">Franchise<br/>Opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#DCFCE7] flex items-center justify-center text-[#166534] shadow-sm shrink-0">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.65rem] font-bold text-[#1A1A2E] leading-tight">Retail Business<br/>Opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#DCFCE7] flex items-center justify-center text-[#166534] shadow-sm shrink-0">
                  <PlaySquare size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.65rem] font-bold text-[#1A1A2E] leading-tight">Expert<br/>Videos & Insights</span>
              </div>
            </div>

            <button className="bg-[#166534] hover:bg-[#14532D] text-white py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm w-full mb-6">
              Explore Marketplace <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Image and Features Area */}
          <div className="flex flex-col relative w-full h-[300px]">
            <div className="w-full h-full rounded-xl overflow-hidden relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" 
                alt="Person browsing marketplace on laptop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F0FDF4]/90 to-transparent mix-blend-overlay" />
            </div>
            
            {/* Overlaid feature list */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
              <div className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-sm flex items-center justify-between border border-gray-100/50">
                <span className="text-xs font-bold text-[#1A1A2E]">Verified Opportunities</span>
                <div className="w-6 h-6 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
                  <CheckCircle size={12} strokeWidth={2.5} />
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-sm flex items-center justify-between border border-gray-100/50">
                <span className="text-xs font-bold text-[#1A1A2E]">Video-Led Discovery</span>
                <div className="w-6 h-6 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
                  <Video size={12} strokeWidth={2.5} />
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-sm flex items-center justify-between border border-gray-100/50">
                <span className="text-xs font-bold text-[#1A1A2E]">Compare & Shortlist</span>
                <div className="w-6 h-6 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
                  <Scale size={12} strokeWidth={2.5} />
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-sm flex items-center justify-between border border-gray-100/50">
                <span className="text-xs font-bold text-[#1A1A2E]">Connect with Right Partners</span>
                <div className="w-6 h-6 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
                  <Users size={12} strokeWidth={2.5} />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
