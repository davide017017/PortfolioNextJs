import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  CodeBracketSquareIcon,
  AcademicCapIcon,
  SparklesIcon,
  CakeIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';

import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
} from './types';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Davide Martinico | Aspirante Sviluppatore Full-Stack',
  description: "Portfolio di Davide Martinico, studente di sviluppo full-stack. Esploro le tecnologie web più moderne, tra cui React, Next.js, TypeScript e Tailwind CSS, per creare applicazioni innovative.",
};

/**
 * Section definition
 */

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Skills: 'skills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Davide Martinico`,
  description: (
    <>
      <p className="prose-sm text-off-white-200 sm:prose-base lg:prose-lg font-mono">
        Sviluppatore Full Stack Junior con oltre 10 anni di esperienza in GDO & Retail (gestione e coordinamento).
        Attualmente sto completando la mia formazione per entrare nel mondo IT e mettere a frutto le mie capacità di
        team working e orientamento al risultato.
      </p>
      <p className="prose-sm text-off-white-200 sm:prose-base lg:prose-lg font-mono">
        Nel tempo libero mi dedico all'informatica, al giardinaggio, alla lettura di manga, ai viaggi, alla musica (suono la batteria) e alla cucina.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Cv-Davide Martinico.pdf',
      text: 'Visualizza CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contattami ',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Appassionato di tecnologia e con una mentalità orientata alla soluzione, affronto le sfide dello sviluppo web con entusiasmo e precisione. Il mio background in gestione e coordinamento mi fornisce una solida base per lavorare in team e raggiungere obiettivi concreti. Sono determinato a crescere come sviluppatore full-stack, mettendo a disposizione le mie competenze in React, Next.js, TypeScript e Tailwind CSS per creare applicazioni web performanti e user-friendly.`,
  aboutItems: [
    {label: 'Città', text: 'Genova - IT', Icon: MapPinIcon }, 
    {label: 'Formazione', text: 'Corso Full Stack Web Developer presso Musa Formazione', Icon: AcademicCapIcon },
    {label: 'Studi', text:'Diploma - Tecnico dei Sistemi Energetici',Icon: AcademicCapIcon },
    {label: 'Skills', text: 'HTML, CSS, JavaScript, React, Next.js, TypeScript, Node.js,  Tailwind, Git', Icon: CodeBracketSquareIcon },
    {label: 'Lingue', text: 'Italiano (madrelingua), Inglese (B2)', Icon: GlobeAltIcon },
    {label: 'Età', text: '34', Icon: CakeIcon }, 
    {label: 'Interessi', text: 'Informatica, Giardinaggio, Manga, Viaggi, Musica (Batteria), Cucina', Icon: SparklesIcon },
  ],
};

/**
 * Portfolio section 
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
];
/**
 * Contact section
 */
export const contactData = {
  headerText: 'Contatti',
  items: [
    {
      text: '+39 340 349 6620',
      href: 'tel:+393403496620',
      Icon: PhoneIcon,
      srLabel: 'Numero di telefono',
    },
    {
      text: 'davide017@hotmail.it',
      href: 'mailto:davide017@hotmail.it',
      Icon: EnvelopeIcon,
      srLabel: 'Email',
    },
    {
      text: 'Genova, Italia',
      href: 'https://www.google.ca/maps/place/Genova+GE/@44.4460902,8.9567474,12z/data=!4m6!3m5!1s0x12d34152dcd49aad:0x236a84f11881620a!8m2!3d44.4071448!4d8.9347381!16zL20vMGhrbmY?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D',
      Icon: MapPinIcon,
      srLabel: 'Posizione',
    },

  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'GitHub', href: 'https://github.com/davide017017', icon: faGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: faLinkedin },
];