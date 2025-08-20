// ==============================
// Imports (solo tipi)
// ==============================
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { StaticImageData } from 'next/image';
import type { ForwardRefExoticComponent, JSX, RefAttributes, SVGProps } from 'react';

// ==============================
// Meta
// ==============================
export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
}

// ==============================
// Hero
// ==============================
export interface Hero {
  id?: string;
  imageSrc: StaticImageData;
  name: string;
  description: JSX.Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

// ==============================
// About
// ==============================
export interface About {
  id?: string;
  profileImageSrc?: string | StaticImageData;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

// ==============================
// Skills
// ==============================
export interface Skills {
  id?: string;
  name: string;
  icon: JSX.Element;
  alt: string;
  url: string;
}

// ==============================
// Portfolio
// ==============================
export interface PortfolioItem {
  id?: string;
  title: JSX.Element | string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

// ==============================
// Contact
// ==============================
export interface ContactItem {
  text: string;
  href?: string;
  Icon: IconComponent;
  srLabel: string;
}

export type IconComponent = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;

// ==============================
// Social
// ==============================
export interface Social {
  label: string;
  href: string;
  icon: IconDefinition;
}

// ==============================
// Certifications
// ==============================
export interface CertificationBadge {
  title: string;
  issuer: string;
  date?: string;
  badgeUrl: string; // immagine del badge (es. Credly)
  verifyUrl?: string; // link di verifica
  tooltip?: string;
}

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  pdfUrl: string; // link pubblico al PDF in /public/...
  verifyUrl?: string;

  // RENDILI OPZIONALI (↓)
  thumbUrl?: string; // miniatura (es. -thumb.webp) - se assente la ricaviamo dal nome del PDF
  imageUrl?: string; // preview grande (es. -preview.webp) - idem
};
