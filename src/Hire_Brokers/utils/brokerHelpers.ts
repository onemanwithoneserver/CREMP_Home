import type { Broker, BrokerSortOption } from '../types/broker.types';


export function matchesExperienceRange(years: number, rangeId: string): boolean {
  switch (rangeId) {
    case '0-3': return years >= 0 && years <= 3;
    case '4-7': return years >= 4 && years <= 7;
    case '8-12': return years >= 8 && years <= 12;
    case '12+': return years > 12;
    default: return true;
  }
}


export function parseSqFt(value: string): number {
  const num = parseFloat(value);
  if (value.toUpperCase().endsWith('M')) return num * 1_000_000;
  if (value.toUpperCase().endsWith('L')) return num * 100_000;
  return num;
}


export function sortBrokers(brokers: Broker[], option: BrokerSortOption): Broker[] {
  const copy = [...brokers];
  switch (option) {
    case 'rating-high':
      return copy.sort((a, b) => b.rating - a.rating);
    case 'experience-high':
      return copy.sort((a, b) => b.experienceYears - a.experienceYears);
    case 'deals-high':
      return copy.sort((a, b) => b.dealsClosed - a.dealsClosed);
    case 'sqft-high':
      return copy.sort(
        (a, b) => parseSqFt(b.sqFtTransacted) - parseSqFt(a.sqFtTransacted)
      );
    case 'relevance':
    default:
      return copy;
  }
}


export function formatRating(rating: number): string {
  return rating.toFixed(1);
}


export function formatExperience(years: number): string {
  return `${years}+ Yrs`;
}
