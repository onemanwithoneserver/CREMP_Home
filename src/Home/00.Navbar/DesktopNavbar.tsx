import { ChevronDown, Rocket } from 'lucide-react'
import { Container } from '../../components/layout'
import { Button } from '../../components/ui'

export default function DesktopNavbar({ activeTab = 'home' }: { activeTab?: 'home' | 'franchise' }) {
  return (
    <div className="w-full bg-white border-b border-[#e5e7eb] sticky top-0 z-40 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex flex-col justify-center cursor-pointer">
            <div className="flex items-center leading-none">
              <span className="text-[2.2rem] font-black text-[#0a1128] tracking-tight">CRE</span>
              <div className="relative inline-flex items-center justify-center mx-[1px]">
                <div className="absolute -top-[2px] w-[16px] h-[3.5px] bg-[#b38728]" />
                <span className="text-[2.2rem] font-black text-[#0a1128] tracking-tight">M</span>
              </div>
              <span className="text-[2.2rem] font-black text-[#0a1128] tracking-tight">P</span>
            </div>
            <div className="text-[0.45rem] font-extrabold tracking-[0.15em] mt-1.5 leading-[1.3] uppercase">
              <span className="text-[#0a1128]">Commercial Real Estate</span><br />
              <span className="text-[#b38728]">& Business Opportunities</span>
            </div>
          </div>

          <nav className="flex items-center gap-10 h-full pl-8">
            <a href="#" className="text-[0.85rem] font-bold text-[#0a1128] hover:text-[#b38728] transition-colors relative h-full flex items-center">
              For Investors
            </a>
            <a href="#" className={`text-[0.85rem] font-bold transition-colors relative h-full flex items-center ${activeTab === 'franchise' ? 'text-[#b38728]' : 'text-[#0a1128] hover:text-[#b38728]'}`}>
              For Franchisors
              {activeTab === 'franchise' && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#b38728] rounded-t-sm" />
              )}
            </a>
            <a href="#" className="text-[0.85rem] font-bold text-[#0a1128] hover:text-[#b38728] transition-colors relative h-full flex items-center">
              For Brokers
            </a>
            <a href="#" className="text-[0.85rem] font-bold text-[#0a1128] hover:text-[#b38728] transition-colors relative h-full flex items-center gap-1.5">
              Resources <ChevronDown size={14} strokeWidth={2.5} className="mt-0.5" />
            </a>
            <a href="#" className="text-[0.85rem] font-bold text-[#0a1128] hover:text-[#b38728] transition-colors relative h-full flex items-center">
              About Us
            </a>
          </nav>

          <div>
            <Button variant="primary" className="!bg-[#0a1128] hover:!bg-[#1e293b] !text-white text-[0.85rem] font-bold px-6 py-2.5 rounded-lg border-none shadow-md">
              <Rocket size={16} className="text-[#b38728] mr-2" strokeWidth={2} />
              Pre-Launch Access
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
