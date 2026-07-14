import { Menu, Rocket } from 'lucide-react'
import { Button } from '../../components/ui'

export default function MobileNavbar() {
  return (
    <div className="w-full bg-white border-b border-[#e5e7eb] sticky top-0 z-40 shadow-sm px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex flex-col justify-center cursor-pointer">
          <div className="flex items-center leading-none">
            <span className="text-[1.6rem] font-black text-[#0a1128] tracking-tight">CRE</span>
            <div className="relative inline-flex items-center justify-center mx-[1px]">
              <div className="absolute -top-[1.5px] w-[12px] h-[2.5px] bg-[#b38728]" />
              <span className="text-[1.6rem] font-black text-[#0a1128] tracking-tight">M</span>
            </div>
            <span className="text-[1.6rem] font-black text-[#0a1128] tracking-tight">P</span>
          </div>
          <div className="text-[0.35rem] font-extrabold tracking-[0.15em] mt-1 leading-[1.3] uppercase">
            <span className="text-[#0a1128]">Commercial Real Estate</span><br />
            <span className="text-[#b38728]">& Business Opportunities</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="primary" className="!bg-[#0a1128] hover:!bg-[#1e293b] !text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-md border-none shadow-sm h-8">
            <Rocket size={12} className="text-[#b38728] mr-1.5" strokeWidth={2} />
            Pre-Launch
          </Button>
          <button className="text-[#0a1128] hover:text-[#b38728] transition-colors p-1">
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  )
}
