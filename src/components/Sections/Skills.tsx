import { FC, memo } from 'react';
import {
  SiCss3,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { SectionId } from '../../data/data';
import type { Skills } from '../../data/types';
import Section from '../Layout/Section';

const Skills: FC = memo(() => {
  const size = 28;

  const frontend: Skills[] = [
    {
      name: 'HTML5',
      icon: <SiHtml5 size={size} />,
      alt: 'HTML5',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS3',
      icon: <SiCss3 size={size} />,
      alt: 'CSS3',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript size={size} />,
      alt: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'Blade',
      icon: <SiLaravel size={size} />,
      alt: 'Blade',
      url: 'https://laravel.com/docs/blade',
    },
    { name: 'React', icon: <SiReact size={size} />, alt: 'React', url: 'https://reactjs.org/' },
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={size} />,
      alt: 'Next.js',
      url: 'https://nextjs.org/',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript size={size} />,
      alt: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss size={size} />,
      alt: 'Tailwind CSS',
      url: 'https://tailwindcss.com/',
    },
  ];

  const backend: Skills[] = [
    { name: 'PHP', icon: <SiPhp size={size} />, alt: 'PHP', url: 'https://www.php.net/' },
    {
      name: 'Laravel',
      icon: <SiLaravel size={size} />,
      alt: 'Laravel',
      url: 'https://laravel.com/',
    },
    { name: 'MySQL', icon: <SiMysql size={size} />, alt: 'MySQL', url: 'https://www.mysql.com/' },
    {
      name: 'Node.js',
      icon: <SiNodedotjs size={size} />,
      alt: 'Node.js',
      url: 'https://nodejs.org/',
    },
    {
      name: 'Docker',
      icon: <SiDocker size={size} />,
      alt: 'Docker',
      url: 'https://www.docker.com/',
    },
    { name: 'Git', icon: <SiGit size={size} />, alt: 'Git', url: 'https://git-scm.com/doc' },
  ];

  const renderGroup = (title: string, items: Skills[]) => (
    <div className="w-full sm:w-1/2 px-2 mb-6 sm:mb-0">
      <h3 className="text-lg font-semibold text-dark-olive-700 mb-3 text-center uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {items.map((skill, i) => (
          <div
            className="relative group flex flex-col items-center text-sage-green-400"
            key={`${skill.name}-${i}`}
          >
            <a
              aria-label={`Vai alla documentazione di ${skill.name}`}
              className="hover:scale-110 transition-transform"
              href={skill.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {skill.icon}
            </a>
            <span className="mt-1 text-xs font-medium text-dark-olive-700">{skill.name}</span>

            {/* Tooltip */}
            <div className="absolute z-10 bottom-[-36px] left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {getTooltip(skill.name)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const getTooltip = (name: string): string => {
    switch (name) {
      case 'HTML5':
        return 'Linguaggio di markup per pagine web';
      case 'CSS3':
        return 'Stile e layout per il web';
      case 'JavaScript':
        return 'Linguaggio di scripting lato client';
      case 'React':
        return 'Libreria JS per interfacce utente dinamiche';
      case 'Next.js':
        return 'Framework React per app server-side';
      case 'TypeScript':
        return 'Superset tipizzato di JavaScript';
      case 'Tailwind':
        return 'Utility CSS framework moderno';
      case 'Blade':
        return 'Motore di template Laravel';
      case 'PHP':
        return 'Linguaggio server-side per il web';
      case 'Laravel':
        return 'Framework PHP per applicazioni web';
      case 'MySQL':
        return 'Database relazionale';
      case 'Node.js':
        return 'Esecuzione JS lato server';
      case 'Docker':
        return 'Containerizzazione e deployment';
      case 'Git':
        return 'Versionamento del codice';
      default:
        return '';
    }
  };

  return (
    <Section className="bg-off-white-900" sectionId={SectionId.Skills}>
      <div className="py-6 px-2 bg-off-white-500 rounded-md">
        <h2 className="text-2xl font-bold font-serif text-dark-olive-700 mb-4 text-center">
          Competenze Tecniche
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-stretch gap-4">
          {renderGroup('Frontend', frontend)}
          {renderGroup('Backend & Dev Tools', backend)}
        </div>
      </div>
    </Section>
  );
});

Skills.displayName = 'SkillsT';
export default Skills;
