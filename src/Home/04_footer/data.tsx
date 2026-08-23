const LinkedinIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const InstagramIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const YoutubeIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);
export const footerLinks = [
  { label: "About Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Contact Us", href: "#" },
];
export const socialLinks = [
  {
    icon: LinkedinIcon,
    href: "#",
    label: "LinkedIn",
    hoverClass:
      "hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:border-transparent dark:hover:border-transparent hover:shadow-[0_4px_10px_rgba(37,99,235,0.2)] dark:hover:shadow-[0_4px_10px_rgba(59,130,246,0.2)]",
  },
  {
    icon: InstagramIcon,
    href: "#",
    label: "Instagram",
    hoverClass:
      "hover:bg-pink-600 dark:hover:bg-pink-600 hover:text-white dark:hover:text-white hover:border-transparent dark:hover:border-transparent hover:shadow-[0_4px_10px_rgba(219,39,119,0.2)] dark:hover:shadow-[0_4px_10px_rgba(236,72,153,0.2)]",
  },
  {
    icon: YoutubeIcon,
    href: "#",
    label: "YouTube",
    hoverClass:
      "hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white hover:border-transparent dark:hover:border-transparent hover:shadow-[0_4px_10px_rgba(220,38,38,0.2)] dark:hover:shadow-[0_4px_10px_rgba(239,68,68,0.2)]",
  },
];
