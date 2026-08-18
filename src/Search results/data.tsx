export interface Franchise {
  id: number;
  name: string;
  logo: string;
  investment: string;
  location: string;
  lat: number;
  lng: number;
  category: string;
  matchLevel: 'selected' | 'high' | 'other';
}

export const franchises: Franchise[] = [
  { id: 1, name: "Domino's Pizza", logo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&h=150', investment: '₹35L - ₹60 Lakh', location: 'Koramangala, Bengaluru', lat: 55, lng: 45, category: 'Food & Beverage', matchLevel: 'selected' },
  { id: 2, name: "McDonald's", logo: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=150&h=150', investment: '₹1.5 - ₹2.5 Cr', location: 'Indiranagar, Bengaluru', lat: 25, lng: 30, category: 'Food & Beverage', matchLevel: 'high' },
  { id: 3, name: 'Subway', logo: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=150&h=150', investment: '₹25 - ₹50 Lakh', location: 'HSR Layout, Bengaluru', lat: 70, lng: 55, category: 'Food & Beverage', matchLevel: 'high' },
  { id: 4, name: 'Cafe Coffee Day', logo: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=150&h=150', investment: '₹20 - ₹40 Lakh', location: 'Jayanagar, Bengaluru', lat: 40, lng: 20, category: 'Coffee & Cafe', matchLevel: 'other' },
  { id: 5, name: 'TechFix Hub', logo: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=150&h=150', investment: '₹50K - ₹90K', location: 'Whitefield, Bengaluru', lat: 35, lng: 75, category: 'Technology', matchLevel: 'high' },
  { id: 6, name: 'FitLife Gyms', logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=150&h=150', investment: '₹200K - ₹500K', location: 'Marathahalli, Bengaluru', lat: 30, lng: 65, category: 'Health & Fitness', matchLevel: 'other' },
  { id: 7, name: 'Bean & Leaf', logo: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=150&h=150', investment: '₹80K - ₹120K', location: 'BTM Layout, Bengaluru', lat: 80, lng: 40, category: 'Coffee & Cafe', matchLevel: 'high' },
  { id: 8, name: 'PetCare Plus', logo: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=150&h=150', investment: '₹60K - ₹100K', location: 'Electronic City, Bengaluru', lat: 85, lng: 60, category: 'Pet Services', matchLevel: 'other' },
];
