import { Star } from 'lucide-react'

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  rating: number
  avatarIndex: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Malhotra',
    role: 'Managing Director',
    company: 'Skyline Developers',
    quote: 'CREMP transformed how we connect with investors. Within 3 months, we secured partnerships that would have taken years through traditional channels.',
    rating: 5,
    avatarIndex: 15,
  },
  {
    name: 'Priya Sharma',
    role: 'Franchise Head',
    company: 'QuickBite Foods',
    quote: 'The platform made franchise expansion incredibly efficient. We went from 12 to 45 outlets in under a year thanks to verified investor connections.',
    rating: 5,
    avatarIndex: 25,
  },
  {
    name: 'Ankit Desai',
    role: 'Senior Broker',
    company: 'Prime Realty',
    quote: 'As a commercial broker, CREMP gives me access to serious buyers and tenants. The lead quality is unmatched compared to any other platform.',
    rating: 5,
    avatarIndex: 33,
  },
  {
    name: 'Meera Iyer',
    role: 'Investment Analyst',
    company: 'Vertex Capital',
    quote: 'The due diligence data and verified listings save us hundreds of hours. CREMP is now our primary deal sourcing tool for commercial real estate.',
    rating: 5,
    avatarIndex: 44,
  },
  {
    name: 'Vikram Patel',
    role: 'Founder & CEO',
    company: 'NexGen PropTech',
    quote: 'Integrating our solutions into the CREMP ecosystem opened up an entirely new B2B channel. The platform is thoughtfully built for the industry.',
    rating: 5,
    avatarIndex: 52,
  },
  {
    name: 'Sunita Reddy',
    role: 'Wealth Advisor',
    company: 'Pinnacle Wealth',
    quote: 'My clients love the curated inventory and detailed ROI projections. CREMP makes it easy to present high-yield commercial opportunities professionally.',
    rating: 5,
    avatarIndex: 29,
  },
]

export { Star }
