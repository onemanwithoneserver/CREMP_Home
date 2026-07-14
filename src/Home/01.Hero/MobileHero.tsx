import { Building2, Handshake, ShoppingBag, Pickaxe, MapPin, Store, Clock, Award, HeadphonesIcon, CheckCircle } from 'lucide-react'

export default function MobileHero() {
  return (
    <div className="relative w-full flex flex-col overflow-hidden bg-[#F8F9FA] pb-10">
      
      {/* Background Image Area (Placeholder via CSS) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 h-[600px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#F8F9FA]/90 to-[#F8F9FA] z-0 h-[600px]" />

      <div className="relative z-10 w-full px-5 pt-8 flex flex-col">
        
        {/* Floating Telangana Map graphic */}
        <div className="flex justify-end mb-6">
          <div className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md rounded-full w-28 h-28 border border-white/40 shadow-lg">
            <div className="text-center">
              <span className="block text-[0.65rem] font-semibold text-[#1A1A2E] leading-tight">Launching<br/>First in</span>
              <span className="block text-sm font-bold text-[#E55B13]">Telangana</span>
              <span className="block text-[0.6rem] font-medium text-gray-500">Phase 1</span>
            </div>
          </div>
        </div>
        
        {/* Badge */}
        <div className="flex flex-col gap-1.5 bg-[#FFF4E5] border border-[#FFE0B2] text-[#E55B13] px-3 py-2 rounded-lg text-[0.65rem] font-bold tracking-wide w-fit mb-6 shadow-sm">
          <div className="flex items-center gap-1.5">
            <MapPin size={12} className="text-[#E55B13]" />
            VENDOR ONBOARDING NOW OPEN
          </div>
          <div className="flex items-center gap-1.5 text-[#1A1A2E]">
            <span className="text-[#E55B13]">•</span> EARLY ACCESS
            <span className="text-[#E55B13]">•</span> LAUNCHING FIRST IN TELANGANA
          </div>
        </div>

        <h1 className="text-[2.2rem] leading-[1.1] font-extrabold text-[#0B1426] tracking-tight mb-4">
          India's 1st <br/> Integrated <br/>
          <span className="text-[#E55B13]">Commercial Real<br/>Estate</span> Marketplace
        </h1>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-bold text-[#1A1A2E] mb-5">
          <span>Commercial Properties</span>
          <span className="text-[#E55B13]">•</span>
          <span>Franchise Expansion</span>
          <span className="text-[#E55B13]">•</span>
          <span>Retail Business Opportunities</span>
        </div>

        <p className="text-[#4A5568] text-sm leading-relaxed font-medium mb-8">
          CREMP redefines how commercial opportunities are discovered and connected.
          From commercial properties and retail spaces to franchise expansion and
          business opportunities, CREMP brings together multiple commercial
          ecosystems into one integrated marketplace.
        </p>

        {/* Bottom Vendor Benefits Panel */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-5 flex flex-col gap-6 mt-4">
          
          <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#FFF4E5] flex items-center justify-center text-[#E55B13] shrink-0">
              <MapPin size={20} />
            </div>
            <h3 className="font-bold text-[#1A1A2E] text-sm leading-tight">Launching First in <span className="text-[#E55B13]">Telangana</span> — Phase 1</h3>
          </div>

          <div className="grid grid-cols-3 gap-y-6 gap-x-2">
            <div className="flex flex-col items-center gap-2">
              <Building2 className="text-[#1A1A2E]" size={24} strokeWidth={1.5} />
              <span className="text-[0.6rem] font-bold text-center text-[#4A5568] leading-tight">Commercial<br/>Property</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Pickaxe className="text-[#1A1A2E]" size={24} strokeWidth={1.5} />
              <span className="text-[0.6rem] font-bold text-center text-[#4A5568] leading-tight">Builders &<br/>Developers</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Handshake className="text-[#1A1A2E]" size={24} strokeWidth={1.5} />
              <span className="text-[0.6rem] font-bold text-center text-[#4A5568] leading-tight">Commercial<br/>Brokers</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Store className="text-[#1A1A2E]" size={24} strokeWidth={1.5} />
              <span className="text-[0.6rem] font-bold text-center text-[#4A5568] leading-tight">Franchisors</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="text-[#1A1A2E]" size={24} strokeWidth={1.5} />
              <span className="text-[0.6rem] font-bold text-center text-[#4A5568] leading-tight">Business<br/>Owners</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShoppingBag className="text-[#1A1A2E]" size={24} strokeWidth={1.5} />
              <span className="text-[0.6rem] font-bold text-center text-[#4A5568] leading-tight">Retail<br/>Brands</span>
            </div>
          </div>

          <div className="text-center text-[0.8rem] font-semibold text-[#4A5568] mt-2 mb-2">
            Join early to establish your presence <span className="text-[#E55B13]">before public discovery begins.</span>
          </div>

          <div className="flex flex-col gap-3">
            <button className="bg-[#0B1426] hover:bg-[#1A2639] text-white px-5 py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-between w-full">
              Request Early Access
              <span className="text-lg leading-none">›</span>
            </button>
            <button className="bg-white border border-gray-300 hover:border-gray-400 text-[#0B1426] px-5 py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-between w-full">
              Explore the Marketplace
              <span className="text-lg leading-none">›</span>
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <span className="text-[0.65rem] font-bold text-[#4A5568] tracking-widest uppercase text-center mb-1">Founding Vendor Benefits</span>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Clock className="text-[#E55B13]" size={16} />
                <span className="text-[0.65rem] font-semibold text-[#1A1A2E]">Early Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#E55B13]" size={16} />
                <span className="text-[0.65rem] font-semibold text-[#1A1A2E]">Priority Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-[#E55B13]" size={16} />
                <span className="text-[0.65rem] font-semibold text-[#1A1A2E]">Partner Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="text-[#E55B13]" size={16} />
                <span className="text-[0.65rem] font-semibold text-[#1A1A2E]">Walkthrough & Support</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
