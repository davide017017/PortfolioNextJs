// Import di icone da librerie esterne (raggruppate e ordinate alfabeticamente)
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import React from 'react'; // Import di React

// Import di immagini (raggruppate)
import heroImage from '../images/header-background.webp';
import MorraCineseView from '../images/portfolio/Morra-Cinese-View.jpg';
import perdiana from '../images/portfolio/PerdianaReview.jpg';
import Synapsyscreen from '../images/portfolio/SYNAPSIlogo.png';
import todoAppImage from '../images/portfolio/ToDo-App.jpg';
import profilepic from '../images/profilepic.jpg';
import { About, Hero, HomepageMeta, PortfolioItem, Social } from './types';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Davide Martinico | Aspirante Sviluppatore Full-Stack',
  description:
    'Portfolio di Davide Martinico, studente di sviluppo full-stack. Esploro le tecnologie web più moderne, tra cui React, Next.js, TypeScript, Tailwind CSS, MySQl e PHP per creare applicazioni innovative.',
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
  SoftSkills: 'softskills',
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
      <div className="mx-auto max-w-prose">
        <p className="prose-sm text-off-white-200 sm:prose-base lg:prose-lg">
          Sviluppatore full-stack junior con esperienza in <strong>Laravel</strong>,{' '}
          <strong>PHP</strong>, <strong>MySQL</strong> e <strong>Tailwind CSS</strong>, affiancata
          da solide basi in <strong>React</strong>, <strong>Next.js</strong> e{' '}
          <strong>TypeScript</strong>.
        </p>
        <p className="prose-sm text-off-white-200 sm:prose-base lg:prose-lg mt-4">
          Approccio pratico e orientato alla soluzione, con particolare attenzione alla scrittura di
          codice chiaro e manutenibile.
        </p>
        <p className="prose-sm text-off-white-200 sm:prose-base lg:prose-lg mt-4">
          Background in gestione e coordinamento, utile per collaborare in team e contribuire al
          raggiungimento di obiettivi concreti.
        </p>
      </div>
    </>
  ),

  actions: [
    {
      href: '/cv-dark.pdf',
      text: 'CV Modalità Scura',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: '/cv-light.pdf',
      text: 'CV Modalità Chiara',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Scrivimi',
      primary: false,
    },
    {
      href: 'https://github.com/davide017017',
      text: 'GitHub',
      primary: false,
      Icon: CodeBracketSquareIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Junior Full-Stack Developer con background nel settore retail e una forte passione per lo sviluppo web. Dopo aver consolidato le competenze frontend, mi sto specializzando nel backend con PHP e Laravel. Lavoro con tecnologie moderne come React, Next.js, Tailwind CSS e MySQL, con particolare attenzione alla qualità del codice e alla user experience. Attualmente approfondisco Laravel avanzato, API REST e CI/CD con Docker, con l'obiettivo di crescere come sviluppatore completo e affidabile.`,
  aboutItems: [
    {
      label: 'Formazione',
      text: 'Corso Full Stack Web Developer presso Musa Formazione',
      Icon: AcademicCapIcon,
    },
    { label: 'Studi', text: 'Diploma - Tecnico dei Sistemi Energetici', Icon: AcademicCapIcon },
    {
      label: 'Skills',
      text: 'HTML, CSS, JavaScript, TypeScript, Blade, React, Next.js, Tailwind CSS, PHP, Laravel, MySQL, Node.js, Git, Docker',
      Icon: CodeBracketSquareIcon,
    },
    { label: 'Lingue', text: 'Italiano (madrelingua), Inglese (B2)', Icon: GlobeEuropeAfricaIcon },
    {
      label: 'Interessi',
      text: 'Informatica, Giardinaggio, Manga, Viaggi, Musica (Batteria), Cucina',
      Icon: SparklesIcon,
    },
    { label: 'Città', text: 'Genova - IT', Icon: MapPinIcon },
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: (
      <>
        <div className="flex flex-col">
          <h1>Perdiana Accomodation</h1>
          <span className="text-sm font-light"> (B&B-Site)</span>
        </div>
      </>
    ),
    description: 'Piccolo sito in Html Css e Javascript',
    url: 'https://davide017017.github.io/PerdianaSite/',
    image: perdiana,
  },
  {
    title: 'ToDo-App ',
    description:
      'Una applicazione per la gestione di liste di attività (To-Do List) con React e salvataggio in localStorage.',
    url: 'https://todo-app-davide-martinco.netlify.app/',
    image: todoAppImage,
  },
  {
    title: 'MorraCineseView',
    description:
      'Un divertente gioco di Morra Cinese (Carta, Pietra, Forbici) sviluppato con Next.js e Tailwind CSS.',
    url: 'https://morra-cinese-davide017017.netlify.app/',
    image: MorraCineseView,
  },
  {
    title: 'Synapsi',
    description:
      "Synapsi Finance è un'applicazione Laravel modulare progettata per semplificare la gestione finanziaria personale e professionale",
    url: 'https://github.com/davide017017/Synapsy',
    image: Synapsyscreen,
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
      Icon: DevicePhoneMobileIcon,
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
