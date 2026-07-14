import { Building2, Users, BarChart3, HeadphonesIcon, ShieldCheck, Eye, Handshake, TrendingUp } from 'lucide-react';

export const features = [
  {
    icon: Building2,
    title: 'Visibility & Showcase',
    desc: 'Present your business in the best possible way.',
    color: 'text-[#3b82f6]',
    bg: 'bg-[#eff6ff]',
    border: 'border-[#bfdbfe]',
    items: ['Verified Business Profile', 'High-Impact Listings', 'Photo & Video Gallery', 'Virtual Tours', 'Premium Placement'],
    tag: 'Be visible. Be discovered.',
    tagIcon: Eye
  },
  {
    icon: Users,
    title: 'Lead & Connection',
    desc: 'Manage leads, conversations and relationships in one place.',
    color: 'text-[#10b981]',
    bg: 'bg-[#ecfdf5]',
    border: 'border-[#a7f3d0]',
    items: ['Lead Inbox & Management', 'Enquiry Tracking', 'CRM & Contact Management', 'Meeting Scheduler', 'Real-time Notifications'],
    tag: 'Connect. Engage. Close.',
    tagIcon: Handshake
  },
  {
    icon: BarChart3,
    title: 'Insights & Growth',
    desc: 'Make smarter decisions with powerful data and insights.',
    color: 'text-[#b38728]',
    bg: 'bg-[#fdf8f0]',
    border: 'border-[#f6ead6]',
    items: ['Analytics Dashboard', 'Profile & Listing Performance', 'Market Insights', 'Visitor Analytics', 'Lead Source Tracking'],
    tag: 'Understand. Optimize. Grow.',
    tagIcon: TrendingUp
  },
  {
    icon: HeadphonesIcon,
    title: 'Support & Security',
    desc: 'We ensure a secure experience with expert support.',
    color: 'text-[#8b5cf6]',
    bg: 'bg-[#f5f3ff]',
    border: 'border-[#ddd6fe]',
    items: ['Secure & Transparent Platform', 'Data Privacy Protection', 'Verification & Trust Badges', 'Priority Support', 'Resource Center'],
    tag: 'Secure. Supported. Trusted.',
    tagIcon: ShieldCheck
  }
]