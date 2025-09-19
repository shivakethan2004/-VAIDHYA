interface HeaderProps {
  title: string;
  tagline: string;
  logo: string;
}

interface UserRole {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
  gradient: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface Stat {
  label: string;
  value: string;
}
export type { HeaderProps, UserRole, Feature, Testimonial, Stat };
