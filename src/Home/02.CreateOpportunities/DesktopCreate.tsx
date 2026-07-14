import { PlaySquare, Video, Search, UserCheck, Megaphone, Lightbulb, Users, Globe, Building2, Store } from 'lucide-react'

export default function DesktopCreate() {
  return (
    <div className="relative w-full py-20 px-6 overflow-hidden bg-white">
      {/* Background Section header area */}
      <div className="absolute top-0 right-0 w-2/3 h-[300px] z-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          maskImage: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center bg-[#FFF4E5] text-[#E55B13] px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase mb-4">
            For Builders, Owners & Franchisors
          </div>
          <h2 className="text-[3rem] font-extrabold text-[#0B1426] leading-tight mb-4 tracking-tight">
            Create <span className="text-[#E55B13]">Opportunities.</span>
          </h2>
          <p className="text-lg font-medium text-[#4A5568] max-w-md">
            Build your brand. Showcase with impact.<br/>
            Generate quality leads and expand your reach.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Developer Card */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300">
            
            <div className="flex gap-6 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#FFF4E5] text-[#E55B13] flex items-center justify-center shrink-0">
                    <Building2 size={20} />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1A1A2E] leading-tight">
                    Developers &<br/>Property Owners
                  </h3>
                </div>
                <div className="text-[#E55B13] font-bold text-sm mb-4">Showcase. Educate. Grow.</div>
                <p className="text-sm font-medium text-[#4A5568] leading-relaxed">
                  Showcase your commercial projects and properties with rich media and expert content that builds trust and attracts the right investors and tenants.
                </p>
              </div>
              <div className="w-[180px] h-[140px] rounded-lg overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern office building" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <PlaySquare size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Brand<br/>Building</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Video size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Video<br/>Showcase</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Search size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Commercial<br/>Discovery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <UserCheck size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Qualified<br/>Leads</span>
              </div>
            </div>

            <button className="mt-auto w-full bg-[#AC6F28] hover:bg-[#8F5A1E] text-white py-3.5 rounded-md font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
              Explore Developer Solutions <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Franchisor Card */}
          <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300">
            
            <div className="flex gap-6 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#FFF4E5] text-[#E55B13] flex items-center justify-center shrink-0">
                    <Store size={20} />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1A1A2E] leading-tight">
                    Franchisors
                  </h3>
                </div>
                <div className="text-[#E55B13] font-bold text-sm mb-4">Expand Your Brand.<br/>Create More Impact.</div>
                <p className="text-sm font-medium text-[#4A5568] leading-relaxed">
                  Showcase your franchise opportunity, educate potential partners through videos and content and expand into new markets.
                </p>
              </div>
              <div className="w-[180px] h-[140px] rounded-lg overflow-hidden shrink-0 bg-gray-900 relative">
                <div className="absolute inset-0 flex items-center justify-center z-10 font-bold text-white tracking-widest text-lg bg-black/30">FRANCHISE</div>
                <img 
                  src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern retail store" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Megaphone size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Brand<br/>Awareness</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <PlaySquare size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Video<br/>Explainers</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Users size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Investor<br/>Enquiries</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#E55B13]">
                  <Globe size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[0.7rem] font-bold text-center text-[#1A1A2E] leading-tight">Market<br/>Expansion</span>
              </div>
            </div>

            <button className="mt-auto w-full bg-[#AC6F28] hover:bg-[#8F5A1E] text-white py-3.5 rounded-md font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
              Explore Franchisor Solutions <span className="text-lg leading-none">→</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
