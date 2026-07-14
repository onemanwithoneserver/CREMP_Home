import { PlaySquare, Video, Search, UserCheck, Megaphone, Users, Globe, Building2, Store } from 'lucide-react'

export default function MobileCreate() {
  return (
    <div className="relative w-full py-12 px-5 overflow-hidden bg-white">
      {/* Background Section header area */}
      <div className="absolute top-0 right-0 w-full h-[250px] z-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        }}
      />

      <div className="relative z-10 w-full flex flex-col">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-[#FFF4E5] text-[#E55B13] px-3 py-1 rounded-sm text-[0.6rem] font-bold tracking-widest uppercase mb-3">
            For Builders, Owners & Franchisors
          </div>
          <h2 className="text-[2rem] font-extrabold text-[#0B1426] leading-tight mb-3 tracking-tight">
            Create <br/><span className="text-[#E55B13]">Opportunities.</span>
          </h2>
          <p className="text-sm font-medium text-[#4A5568]">
            Build your brand. Showcase with impact. Generate quality leads and expand your reach.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-6">
          
          {/* Developer Card */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 p-5 flex flex-col">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FFF4E5] text-[#E55B13] flex items-center justify-center shrink-0">
                <Building2 size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-[#1A1A2E] leading-tight">
                Developers &<br/>Property Owners
              </h3>
            </div>
            
            <div className="text-[#E55B13] font-bold text-xs mb-3">Showcase. Educate. Grow.</div>
            
            <div className="w-full h-[120px] rounded-lg overflow-hidden shrink-0 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" 
                alt="Modern office building" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-[0.8rem] font-medium text-[#4A5568] leading-relaxed mb-6">
              Showcase your commercial projects and properties with rich media and expert content that builds trust and attracts the right investors and tenants.
            </p>

            <div className="grid grid-cols-4 gap-2 mb-6">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <PlaySquare size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Brand<br/>Building</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Video size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Video<br/>Showcase</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Search size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Commercial<br/>Discovery</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <UserCheck size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Qualified<br/>Leads</span>
              </div>
            </div>

            <button className="w-full bg-[#AC6F28] hover:bg-[#8F5A1E] text-white py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
              Explore Developer Solutions <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Franchisor Card */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 p-5 flex flex-col">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FFF4E5] text-[#E55B13] flex items-center justify-center shrink-0">
                <Store size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-[#1A1A2E] leading-tight">
                Franchisors
              </h3>
            </div>
            
            <div className="text-[#E55B13] font-bold text-xs mb-3">Expand Your Brand. Create More Impact.</div>
            
            <div className="w-full h-[120px] rounded-lg overflow-hidden shrink-0 mb-4 bg-gray-900 relative">
              <div className="absolute inset-0 flex items-center justify-center z-10 font-bold text-white tracking-widest text-lg bg-black/30">FRANCHISE</div>
              <img 
                src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop" 
                alt="Modern retail store" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            
            <p className="text-[0.8rem] font-medium text-[#4A5568] leading-relaxed mb-6">
              Showcase your franchise opportunity, educate potential partners through videos and content and expand into new markets.
            </p>

            <div className="grid grid-cols-4 gap-2 mb-6">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Megaphone size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Brand<br/>Awareness</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <PlaySquare size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Video<br/>Explainers</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Users size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Investor<br/>Enquiries</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Globe size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[0.55rem] font-bold text-center text-[#1A1A2E] leading-tight">Market<br/>Expansion</span>
              </div>
            </div>

            <button className="w-full bg-[#AC6F28] hover:bg-[#8F5A1E] text-white py-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
              Explore Franchisor Solutions <span className="text-lg leading-none">→</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
