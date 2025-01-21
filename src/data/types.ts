import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {StaticImageData} from 'next/image';
import {ForwardRefExoticComponent, RefAttributes, SVGProps} from 'react';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
}

/**
 * Hero section
 */
export interface Hero {
  id?: string; // Aggiunto id
  imageSrc: string;
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

/**
 * About section
 */
export interface About {
  id?: string; // Aggiunto id
  profileImageSrc?: string;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Skills section
 */
export interface Skills {
  id?: string;
  name: string;
  icon: JSX.Element;
  alt: string;
  url: string;
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
  id?: string; // Aggiunto id (anche se PortfolioItem non è una sezione principale, potresti volerlo per altri usi)
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

/**
 * Resume section (TimelineItem non è una sezione principale, quindi non ha bisogno di id)
 */
export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: JSX.Element;
}

/**
 * Contact section
 */
export interface ContactSection {
  id?: string; // Aggiunto id
  headerText?: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];
export type IconComponent = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;

export interface ContactItem {
  text: string;
  href?: string;
  Icon: IconComponent;
  srLabel: string;
}

/**
 * Social items (Social non è una sezione principale, quindi non ha bisogno di id)
 */
export interface Social {
  label: string;
  href: string;
  icon: IconDefinition;
}
