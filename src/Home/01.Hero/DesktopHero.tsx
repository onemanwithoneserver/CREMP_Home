import { Building2, Handshake, ShoppingBag, Pickaxe, MapPin, Search, Presentation, CheckCircle, Store, Clock, Award, HeadphonesIcon } from 'lucide-react'

export default function DesktopHero() {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col pt-16 overflow-hidden bg-[#F8F9FA]">
      {/* Background Image Area (Placeholder via CSS) */}
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          maskImage: 'linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(248,249,250,1) 20%, rgba(248,249,250,0.4) 60%, rgba(248,249,250,0) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/90 to-transparent z-0" />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 h-full flex flex-col flex-1">
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl pt-10 pb-32">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFF4E5] border border-[#FFE0B2] text-[#E55B13] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide w-fit mb-8 shadow-sm">
            <MapPin size={14} className="text-[#E55B13]" />
            VENDOR ONBOARDING NOW OPEN 
            <span className="text-gray-300 mx-1">|</span> 
            <span className="text-[#1A1A2E]">EARLY ACCESS</span>
            <span className="text-gray-300 mx-1">|</span> 
            LAUNCHING FIRST IN TELANGANA
          </div>

          <h1 className="text-[3.5rem] leading-[1.1] font-extrabold text-[#0B1426] tracking-tight mb-4">
            India's 1st Integrated <br/>
            <span className="text-[#E55B13]">Commercial Real Estate</span> <br/>
            Marketplace
          </h1>

          <div className="flex items-center gap-3 text-[1rem] font-bold text-[#1A1A2E] mb-6">
            <span>Commercial Properties</span>
            <span className="text-[#E55B13]">•</span>
            <span>Franchise Expansion</span>
            <span className="text-[#E55B13]">•</span>
            <span>Retail Business Opportunities</span>
          </div>

          <p className="text-[#4A5568] text-base leading-relaxed max-w-xl font-medium">
            CREMP redefines how commercial opportunities are discovered and connected.
            From commercial properties and retail spaces to franchise expansion and
            business opportunities, CREMP brings together multiple commercial
            ecosystems into one integrated marketplace—helping property owners,
            brokers, franchisors, business owners, investors and tenants connect,
            collaborate and grow.
          </p>
        </div>

        {/* Floating Telangana Map graphic */}
        <div className="absolute top-20 right-10 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md rounded-full w-48 h-48 border border-white/40 shadow-xl z-20">
          <div className="text-center">
            <span className="block text-sm font-semibold text-[#1A1A2E]">Launching<br/>First in</span>
            <span className="block text-lg font-bold text-[#E55B13]">Telangana</span>
            <span className="block text-xs font-medium text-gray-500 mt-1">Phase 1</span>
          </div>
        </div>

        {/* Bottom Vendor Benefits Panel */}
        <div className="absolute bottom-8 left-0 right-0 max-w-[1200px] mx-auto px-6 w-full z-30">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col gap-6">
            
            {/* Top row of panel */}
            <div className="flex items-stretch justify-between">
              
              <div className="flex items-center gap-4 pr-6 border-r border-gray-100 min-w-[200px]">
                <div className="w-12 h-12 rounded-full bg-[#FFF4E5] flex items-center justify-center text-[#E55B13]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E] leading-tight">Launching First in<br/><span className="text-[#E55B13]">Telangana</span> — Phase 1</h3>
                </div>
              </div>

              <div className="flex items-center gap-6 px-6">
                <div className="flex flex-col items-center gap-2">
                  <Building2 className="text-[#1A1A2E]" size={28} strokeWidth={1.5} />
                  <span className="text-[0.65rem] font-bold text-center text-[#4A5568] leading-tight">Commercial<br/>Property Owners</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Pickaxe className="text-[#1A1A2E]" size={28} strokeWidth={1.5} />
                  <span className="text-[0.65rem] font-bold text-center text-[#4A5568] leading-tight">Builders &<br/>Developers</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Handshake className="text-[#1A1A2E]" size={28} strokeWidth={1.5} />
                  <span className="text-[0.65rem] font-bold text-center text-[#4A5568] leading-tight">Commercial<br/>Brokers</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Store className="text-[#1A1A2E]" size={28} strokeWidth={1.5} />
                  <span className="text-[0.65rem] font-bold text-center text-[#4A5568] leading-tight">Franchisors</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="text-[#1A1A2E]" size={28} strokeWidth={1.5} />
                  <span className="text-[0.65rem] font-bold text-center text-[#4A5568] leading-tight">Business<br/>Owners</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ShoppingBag className="text-[#1A1A2E]" size={28} strokeWidth={1.5} />
                  <span className="text-[0.65rem] font-bold text-center text-[#4A5568] leading-tight">Retail<br/>Brands</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pl-6 border-l border-gray-100 justify-center">
                <button className="bg-[#0B1426] hover:bg-[#1A2639] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center justify-between min-w-[220px]">
                  Request Early Access
                  <span className="text-xl leading-none">›</span>
                </button>
                <button className="bg-white border border-gray-300 hover:border-gray-400 text-[#0B1426] px-6 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center justify-between min-w-[220px]">
                  Explore the Marketplace
                  <span className="text-xl leading-none">›</span>
                </button>
              </div>

            </div>

            <div className="text-center text-sm font-semibold text-[#4A5568] py-2 border-b border-gray-100/60 pb-4">
              Join early to establish your presence <span className="text-[#E55B13]">before public discovery begins.</span>
            </div>

            {/* Bottom row of panel */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-bold text-[#4A5568] tracking-widest uppercase">Founding Vendor Benefits</span>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Clock className="text-[#E55B13]" size={18} />
                  <span className="text-xs font-semibold text-[#1A1A2E]">Early Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#E55B13]" size={18} />
                  <span className="text-xs font-semibold text-[#1A1A2E]">Priority Profile Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-[#E55B13]" size={18} />
                  <span className="text-xs font-semibold text-[#1A1A2E]">Founding Partner Recognition</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeadphonesIcon className="text-[#E55B13]" size={18} />
                  <span className="text-xs font-semibold text-[#1A1A2E]">Product Walkthrough & Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
