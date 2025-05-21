import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { StaticImageData } from 'next/image';
import { ForwardRefExoticComponent, JSX, RefAttributes, SVGProps } from 'react';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
}

/**
 * Hero section
 */
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

/**
 * About section
 */
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
  id?: string;
  title: JSX.Element | string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

/**
 * Contact section
 */
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

/**
 * Social items (Social non è una sezione principale, quindi non ha bisogno di id)
 */
export interface Social {
  label: string;
  href: string;
  icon: IconDefinition;
}
