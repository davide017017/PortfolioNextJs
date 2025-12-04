// ==============================
// Imports — Icone librerie esterne (ordinati)
// ==============================
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
import React from 'react';

// ==============================
// Imports — Tipi
// ==============================
import type {
  About,
  Certification,
  CertificationBadge,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
} from '@/data/types';
// ==============================
// Imports — Immagini locali (raggruppate)
// (questi file devono essere in: src/images/...)
// ==============================
import heroImage from '@/images/header-background.webp';
import MorraCineseView from '@/images/portfolio/Morra-Cinese-View.webp';
import perdiana from '@/images/portfolio/PerdianaReview.webp';
import Synapsyscreen from '@/images/portfolio/SYNAPSIlogo.webp';
import todoAppImage from '@/images/portfolio/ToDo-App.webp';
import profilepic from '@/images/profilepic.webp';

// ==============================
// Page meta data
// ==============================
export const homePageMeta: HomepageMeta = {
  title: 'Davide Martinico | Sviluppatore Full-Stack',

  description:
    'Portfolio di Davide Martinico, sviluppatore full-stack specializzato in PHP, MySQL, React e Next.js. Attualmente collaboro allo sviluppo di HopySuite, piattaforma SaaS per il property management, lavorando su integrazioni API, automazioni, cron e interfacce moderne.',
};

// ==============================
// Section definition
// ==============================
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Certifications: 'certifications',
  Portfolio: 'portfolio',
  Skills: 'skills',
  SoftSkills: 'softskills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

// ==============================
// Hero section
// ==============================
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Davide Martinico`,
  description: (
    <>
      <div className="mx-auto max-w-prose">
        <p className="prose-sm text-off-white-200 sm:prose-base lg:prose-lg prose-strong:text-golden-brown-100">
          Sviluppatore full-stack con esperienza in <strong>PHP</strong>, <strong>MySQL</strong> e{' '}
          <strong>React</strong>. In <strong>HopySuite</strong> lavoro su API, cron e interfacce
          moderne.
        </p>

        <p className="prose-sm text-off-white-200 sm:prose-base lg:prose-lg mt-4 prose-strong:text-golden-brown-100">
          Amo le soluzioni semplici, il codice chiaro e imparare ogni giorno qualcosa di nuovo.
        </p>

        <p className="prose-sm text-off-white-200 sm:prose-base lg:prose-lg mt-4 prose-strong:text-golden-brown-100">
          Curioso, collaborativo e sempre pronto a migliorare.
        </p>
      </div>
    </>
  ),
  actions: [
    { href: '/cv-dark.pdf', text: 'CV Modalità Scura', primary: true, Icon: ArrowDownTrayIcon },
    { href: '/cv-light.pdf', text: 'CV Modalità Chiara', primary: true, Icon: ArrowDownTrayIcon },
    { href: `#${SectionId.Contact}`, text: 'Scrivimi', primary: false },
    {
      href: 'https://github.com/davide017017',
      text: 'GitHub',
      primary: false,
      Icon: CodeBracketSquareIcon,
    },
  ],
};

// ==============================
// About section
// ==============================
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      Junior Full-Stack Developer con esperienza pratica nello sviluppo di applicazioni web e
      sistemi SaaS.
      <br />
      Attualmente collaboro allo sviluppo di <strong>HopySuite</strong>, una piattaforma di property
      management dove mi occupo di integrazioni API, processi automatizzati (cron), gestione dati,
      ottimizzazione SQL e sviluppo front-end con React e Next.js.
      <br />
      <br />
      Ho solide basi in <strong>PHP</strong>, <strong>MySQL</strong>, <strong>JavaScript</strong>,
      <strong>TypeScript</strong> e <strong>Tailwind CSS</strong>, con attenzione alla creazione di
      interfacce pulite e funzionali.
      <br />
      <br />
      Sono appassionato di architettura delle API, flussi di sincronizzazione, debug e scrittura di
      codice chiaro e mantenibile. Sto approfondendo concetti avanzati di JavaScript, sicurezza
      applicativa e CI/CD, con l’obiettivo di crescere come sviluppatore completo e affidabile.
    </>
  ),

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

// ==============================
// Portfolio section
// ==============================
export const portfolioItems: PortfolioItem[] = [
  {
    title: (
      <div className="flex flex-col">
        <h1>Perdiana Accomodation</h1>
        <span className="text-sm font-light">(B&amp;B-Site)</span>
      </div>
    ),
    description: 'Piccolo sito in Html Css e Javascript',
    url: 'https://davide017017.github.io/PerdianaSite/',
    image: perdiana,
  },
  {
    title: 'ToDo-App',
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
    url: 'https://synapsy-frontend.vercel.app/',
    image: Synapsyscreen,
  },
];

// ==============================
// Contact section
// ==============================
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
      href: 'https://www.google.ca/maps/place/Genova+GE/@44.4460902,8.9567474,12z/data=!4m6!3m5!1s0x12d34152dcd49aad:0x236a84f11881620a!8m2!3d44.4071448!4d8.9347381!16zL20vMGhrbmY?entry=ttu',
      Icon: MapPinIcon,
      srLabel: 'Posizione',
    },
  ],
};

// ==============================
// Social items
// ==============================
export const socialLinks: Social[] = [
  { label: 'GitHub', href: 'https://github.com/davide017017', icon: faGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/davide-martinico-017x017/',
    icon: faLinkedin,
  },
];

// ==============================
// Certifications — featured badge (in evidenza)
// ==============================
export const featuredCertification: CertificationBadge = {
  title: 'HTML & CSS Certified',
  issuer: 'Certiport',
  date: 'Luglio 2025',
  badgeUrl: '/assets/certifications/it-specialist-html-and-css(300x300).webp',
  verifyUrl: 'https://www.credly.com/badges/4c527832-86a7-4f35-aab8-b64d7839c357/public_url',
  tooltip: 'Certificazione ufficiale HTML & CSS',
};

// ==============================
// Certifications — altri attestati (PDF, per carosello/modal)
// (thumb/preview saranno ricavati in runtime da .pdf → -thumb.webp / -preview.webp)
// ==============================
export const certificationPdfs: Certification[] = [
  {
    title: 'Certificato Corso Back-End Web Developer',
    issuer: 'Musa Formazione',
    date: '2025-08-27',
    pdfUrl: '/assets/certifications/musa-formazione/Certificato_Corso_Back-End_Web_Developer.pdf',
  },
  {
    title: 'Certificato Corso Front-End Web Developer',
    issuer: 'Musa Formazione',
    date: '2025-01-13',
    pdfUrl: '/assets/certifications/musa-formazione/Certificato_Corso_Front-End_Web_Developer.pdf',
  },
  {
    title: 'Certificato: Introduzione a Git e GitHub',
    issuer: 'Musa Formazione',
    date: '2025-01-18',
    pdfUrl: '/assets/certifications/musa-formazione/Certificato_Introduzione_a_Git_e_GtHub.pdf',
  },
  {
    title: 'Certificato: Programmazione a oggetti',
    issuer: 'Musa Formazione',
    date: '2024-08-05',
    pdfUrl:
      '/assets/certifications/musa-formazione/Certificato_Programmazione_orientata_agli_oggetti.pdf',
  },
  {
    title: 'Attestato corso base Sistema Operativo Microsoft Windows per PC',
    issuer: 'Musa Formazione',
    date: '2024-07-31',
    pdfUrl:
      '/assets/certifications/musa-formazione/Attestato corso base Sistema Operativo Microsoft Windows per PC.pdf',
  },
  {
    title: 'Certificato: Teoria dei database',
    issuer: 'Musa Formazione',
    date: '2025-08-22',
    pdfUrl: '/assets/certifications/musa-formazione/Certificato_Teoria_dei_database.pdf',
  },
  {
    title: 'Certificato: Il mondo del web',
    issuer: 'Musa Formazione',
    date: '2024-08-06',
    pdfUrl: '/assets/certifications/musa-formazione/Certificato_Il_mondo_del_web.pdf',
  },
  {
    title: "Attestato di partecipazione - Introduzione all'informatica",
    issuer: 'Musa Formazione',
    date: '2024-08-03',
    pdfUrl:
      "/assets/certifications/musa-formazione/Attestato_di_partecipazione_al_corso_introduzione_all'informatica.pdf",
  },
];
