
interface FooterLink {
  label: string;
  link: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: 'home', link: '/' },
      { label: 'services', link: 'services' },
      { label: 'products', link: 'products' },
      { label: 'blog', link: 'blog' },
      { label: 'about us', link: 'about-us' },
    ]
  },
  {
    title: "support",
    links: [{ label: 'FAQ', link: 'FAQ' }, { label: 'Contact us', link: '#contact-us' }],
  },
];
