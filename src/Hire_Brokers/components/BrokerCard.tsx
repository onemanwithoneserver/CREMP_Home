import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Broker } from '../types/broker.types';
import VerifiedBadge from './VerifiedBadge';
import BrokerStats from './BrokerStats';

interface BrokerCardProps {
  broker: Broker;
  isDesktop: boolean;
  isLoading?: boolean;
  onViewProfile?: (broker: Broker) => void;
}

function BrokerCardSkeleton({ isDesktop }: { isDesktop: boolean }) {
  return (
    <div
      className={`bg-surface dark:bg-[#0b1b42] ${isDesktop ? 'rounded-[8px]' : 'rounded-[4px]'} border border-black/5 dark:border-white/10 shadow-sm flex flex-col gap-3 ${
        isDesktop ? 'p-5' : 'p-4'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="cb-skeleton w-12 h-12 rounded-full shrink-0" />
        <div className="flex-1 flex flex-col gap-2">
          <div className="cb-skeleton h-3.5 w-3/4 rounded" />
          <div className="cb-skeleton h-3 w-1/2 rounded" />
          <div className="cb-skeleton h-3 w-2/3 rounded" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="cb-skeleton h-5 w-16 rounded-full" />
        <div className="cb-skeleton h-5 w-20 rounded-full" />
        <div className="cb-skeleton h-5 w-14 rounded-full" />
      </div>
      <div className={`cb-skeleton h-10 w-full ${isDesktop ? 'rounded-[8px]' : 'rounded-[4px]'}`} />
      <div className="flex gap-2">
        <div className={`cb-skeleton h-8 flex-1 ${isDesktop ? 'rounded-[8px]' : 'rounded-[4px]'}`} />
        <div className={`cb-skeleton h-8 flex-1 ${isDesktop ? 'rounded-[8px]' : 'rounded-[4px]'}`} />
      </div>
    </div>
  );
}

function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const half = !filled && hasHalf && i === full;
        return (
          <svg
            key={i}
            viewBox="0 0 16 16"
            className={`w-3 h-3 cb-star ${filled || half ? 'text-[#d4af37]' : 'text-[#6b7280]'}`}
            fill="currentColor"
          >
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${i}`} x1="0" x2="1" y1="0" y2="0">
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="50%" stopColor="#6b7280" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#half-${i})`}
                  d="M8 1.2l1.9 3.8 4.2.6-3 2.9.7 4.2L8 10.5 4.2 12.7l.7-4.2-3-2.9 4.2-.6z"
                />
              </>
            ) : (
              <path d="M8 1.2l1.9 3.8 4.2.6-3 2.9.7 4.2L8 10.5 4.2 12.7l.7-4.2-3-2.9 4.2-.6z" />
            )}
          </svg>
        );
      })}
    </div>
  );
}

export default function BrokerCard({ broker, isDesktop, isLoading = false, onViewProfile }: BrokerCardProps) {
  const [imgError, setImgError] = useState(false);
  if (isLoading) return <BrokerCardSkeleton isDesktop={isDesktop} />;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      className={`bg-surface dark:bg-[#0b1b42] text-gray-900 dark:text-primary ${isDesktop ? 'rounded-[8px]' : 'rounded-[4px]'} border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col relative overflow-hidden ${isDesktop ? 'p-5' : 'p-4'}`}
      role="article"
      aria-label={`Broker: ${broker.name}`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-start gap-3 mb-3">
        <div
          className={`shrink-0 rounded-full overflow-hidden flex items-center justify-center font-bold text-white cb-avatar-ring relative after:absolute after:inset-[-4px] after:rounded-full after:border after:border-[#d4af37]/30 group-hover:after:border-[#d4af37]/60 group-hover:after:shadow-[0_0_12px_rgba(212,175,55,0.4)] after:transition-all after:duration-300 font-['Outfit',sans-serif] tracking-[0.05em] ${
            isDesktop ? 'w-[48px] h-[48px] text-[15px]' : 'w-[44px] h-[44px] text-[13px]'
          }`}
          style={{
            background: `linear-gradient(135deg, ${broker.avatarColor} 0%, ${broker.avatarColor}cc 100%)`
          }}
        >
          {broker.avatarUrl && !imgError ? (
            <img
              src={broker.avatarUrl}
              alt={broker.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            broker.avatarInitials
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3
                  className={`font-bold text-[#0a1128] dark:text-white dark:text-white leading-tight truncate font-['Outfit',sans-serif] ${
                    isDesktop ? 'text-[14px]' : 'text-[13px]'
                  }`}
                >
                  {broker.name}
                </h3>
                {broker.isVerified && <VerifiedBadge size="sm" />}
              </div>
              <p
                className={`text-[#637089] font-medium truncate leading-tight mt-0.5 font-['Outfit',sans-serif] ${
                  isDesktop ? 'text-[12px]' : 'text-[11px]'
                }`}
              >
                {broker.company}
              </p>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[13px] font-bold text-[#0a1128] dark:text-white dark:text-white font-['Outfit',sans-serif]">
                {broker.rating.toFixed(1)}
              </span>
              <RatingStars rating={broker.rating} />
            </div>
          </div>

          <div className="flex items-center gap-1 mt-1">
            <svg viewBox="0 0 16 16" fill="none" stroke="#637089" strokeWidth="1.5" strokeLinecap="round" className="w-3 h-3 shrink-0">
              <path d="M8 1.5C5.79 1.5 4 3.29 4 5.5c0 3 4 9 4 9s4-6 4-9c0-2.21-1.79-4-4-4z" />
              <circle cx="8" cy="5.5" r="1.5" />
            </svg>
            <span className="text-[10px] text-[#637089] font-medium leading-tight font-['Outfit',sans-serif]">
              {broker.location}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {broker.specialties.map((s) => (
          <span key={s} className="cb-tag hover:bg-[#d4af37]/10 hover:text-[#b8903c] transition-colors cursor-default">
            {s}
          </span>
        ))}
      </div>

      <div className="mb-4">
        <BrokerStats
          sqFt={broker.sqFtTransacted}
          deals={broker.dealsClosed}
          experience={broker.experienceYears}
          layout={isDesktop ? 'row' : 'grid'}
        />
      </div>

      <div className="flex gap-2 mt-auto pt-1">
        <button
          onClick={() => onViewProfile?.(broker)}
          className={`cb-btn-outline flex-1 text-[12px] ${isDesktop ? 'py-2.5' : 'py-2'} hover:scale-[1.02] active:scale-[0.98] transition-transform`}
          aria-label={`View profile of ${broker.name}`}
        >
          View Profile
        </button>
        <button
          className={`cb-btn-primary flex-1 text-[12px] ${isDesktop ? 'py-2.5' : 'py-2'} hover:scale-[1.02] active:scale-[0.98] transition-transform`}
          aria-label={`Send requirement to ${broker.name}`}
        >
          Send Requirement
        </button>
      </div>
    </motion.div>
  );
}