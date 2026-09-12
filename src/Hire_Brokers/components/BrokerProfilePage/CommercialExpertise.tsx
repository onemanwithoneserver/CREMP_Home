import { useRef, useState, useEffect, useCallback } from 'react';
import type { Broker } from '../../types/broker.types';
import { EXPERTISE_SVG } from './icons';

interface CommercialExpertiseProps {
  broker: Broker;
  isDesktop: boolean;
}

export function CommercialExpertise({ broker, isDesktop }: CommercialExpertiseProps) {
  const expertises = broker.specialties.length > 0 ? broker.specialties : ['Office'];

  const stripRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScroll = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    if (isDesktop) return;
    const el = stripRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener('scroll', updateScroll, { passive: true });
    const ro = new ResizeObserver(updateScroll);
    ro.observe(el);
    return () => { el.removeEventListener('scroll', updateScroll); ro.disconnect(); };
  }, [isDesktop, updateScroll]);

  function scrollStrip(dir: 'left' | 'right') {
    stripRef.current?.scrollBy({ left: dir === 'left' ? -120 : 120, behavior: 'smooth' });
  }

  return (
    <div className={`shrink-0 bg-white dark:bg-[#0b1b42] dark:border-white/10 border-b border-black/[0.05] ${isDesktop ? 'px-5 py-4' : 'px-3 py-3.5'}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-[3px] h-[14px] rounded-full bg-[#d4af37] shrink-0 block" />
          <span className="text-[13px] font-bold text-[#0a1128] dark:text-white font-['Outfit',sans-serif]">
            Commercial Expertise
          </span>
          <span className="text-[11px] font-semibold text-[#a0aabf] font-['Outfit',sans-serif]">
            {expertises.length} specialties
          </span>
        </div>
      </div>

      {isDesktop ? (
        <div className="flex flex-wrap gap-2">
          {expertises.map(exp => <ExpertiseChip key={exp} exp={exp} isDesktop={isDesktop} />)}
        </div>
      ) : (
        <div className="relative">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollStrip('left')}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full flex items-center justify-center focus-visible:outline-none"
              style={{ background: '#fff', border: '1px solid rgba(10,17,40,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.13)' }}
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="#0a1128" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5"><path d="M10 12L6 8l4-4"/></svg>
            </button>
          )}

          <div
            ref={stripRef}
            className="flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ paddingLeft: canScrollLeft ? 28 : 0, paddingRight: canScrollRight ? 28 : 0 }}
          >
            {expertises.map(exp => <ExpertiseChip key={exp} exp={exp} isDesktop={isDesktop} />)}
          </div>

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollStrip('right')}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full flex items-center justify-center focus-visible:outline-none"
              style={{ background: '#fff', border: '1px solid rgba(10,17,40,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.13)' }}
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="#0a1128" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5"><path d="M6 4l4 4-4 4"/></svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

const EXPERTISE_COLORS: Record<string, string> = {
  Office: 'bg-blue-500',
  Retail: 'bg-purple-500',
  Industrial: 'bg-orange-500',
  Warehouse: 'bg-amber-600',
  Land: 'bg-emerald-500',
  Investment: 'bg-green-500',
  Leasing: 'bg-indigo-500',
  'Co-working': 'bg-pink-500',
  'Mixed Use': 'bg-teal-500',
  Residential: 'bg-sky-500',
};

function ExpertiseChip({ exp, isDesktop }: { exp: string; isDesktop: boolean }) {
  const colorClass = EXPERTISE_COLORS[exp] || 'bg-gray-500';
  
  return (
    <div
      className={`flex flex-col items-center gap-2 shrink-0 rounded-[4px] transition-transform hover:-translate-y-0.5 ${
        isDesktop ? 'px-[12px] py-[12px] min-w-[72px]' : 'px-[10px] py-[10px] min-w-[64px]'
      }`}
    >
      <div className={`w-8 h-8 flex items-center justify-center rounded-[4px] shadow-sm text-white ${colorClass}`}>
        <span className="scale-90">
          {EXPERTISE_SVG[exp] ?? EXPERTISE_SVG.Office}
        </span>
      </div>
      <span className="text-[10px] font-semibold leading-tight text-center whitespace-nowrap text-[#3b4d67] dark:text-gray-300 font-['Outfit',sans-serif]">
        {exp}
      </span>
    </div>
  );
}