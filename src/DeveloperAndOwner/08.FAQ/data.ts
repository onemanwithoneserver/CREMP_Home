import { 
  Search, 
  IndianRupee, 
  MessageSquare,
  MapPin,
  CalendarDays,
  PlaySquare,
  Star,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';

export const faqData = {
  tag: 'FREQUENTLY ASKED QUESTIONS',
  title: 'Frequently Asked Questions',
  desc: 'Everything you need to know about listing your projects on CREMP.',
  faqs: [
    { 
      icon: Search, 
      q: '1. How do I list my commercial project?', 
      a: 'Create a developer profile on CREMP, upload your project details, floor plans, and leasing strategy to start attracting anchor tenants.' 
    },
    { 
      icon: IndianRupee, 
      q: '2. Is there a fee to list my property?', 
      a: 'Basic project listings are free. We offer premium discovery packages to boost your visibility among top national and international brands.' 
    },
    { 
      icon: MessageSquare, 
      q: '3. How do brands contact me?', 
      a: 'Brands and their real estate teams can send leasing enquiries or schedule site visits directly through your project page.' 
    },
    { 
      icon: ShieldCheck, 
      q: '4. Are the tenants verified?', 
      a: 'Yes, we verify all brand profiles and institutional investors to ensure you only deal with serious, qualified stakeholders.' 
    },
    { 
      icon: MapPin, 
      q: '5. Can I list greenfield land for development?', 
      a: 'Absolutely. We have a dedicated section for land monetization where you can attract joint venture partners or outright buyers.' 
    },
    { 
      icon: CalendarDays, 
      q: '6. Can I manage multiple projects?', 
      a: 'Yes, your developer dashboard allows you to manage multiple properties, track leasing progress, and monitor incoming leads across your entire portfolio.' 
    },
    { 
      icon: PlaySquare, 
      q: '7. Can I upload drone footage and 3D tours?', 
      a: 'Yes, we encourage uploading rich media including 3D walkthroughs and drone footage to give tenants a comprehensive view of your project.' 
    },
    { 
      icon: Star, 
      q: '8. How does CREMP help with pre-leasing?', 
      a: 'By showcasing your under-construction projects to our network of expanding brands, you can secure anchor tenants before construction is complete.' 
    }
  ],
  banner: {
    icon: Building2,
    title: 'Ready to monetize your\ncommercial assets?',
    desc: 'Join CREMP and connect with top brands and investors across India.',
    btn1: { text: 'List Project', icon: Calendar },
    btn2: { text: 'Talk to Sales', icon: Search }
  }
};
