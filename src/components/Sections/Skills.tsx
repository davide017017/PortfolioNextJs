import {FC, memo} from 'react';
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import {SectionId} from '../../data/data';
import type {Skills} from '../../data/types';
import Section from '../Layout/Section';

const Skills: FC = memo(() => {
  const sizeIcon = 32;
  const skills: Skills[] = [
    {
      name: 'HTML5',
      icon: <SiHtml5 size={sizeIcon} />,
      alt: 'HTML5 Logo',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS3',
      icon: <SiCss3 size={sizeIcon} />,
      alt: 'CSS3 Logo',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript size={sizeIcon} />,
      alt: 'JavaScript Logo',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {name: 'React', icon: <SiReact size={sizeIcon} />, alt: 'React Logo', url: 'https://reactjs.org/'},
    {name: 'Next.js', icon: <SiNextdotjs size={sizeIcon} />, alt: 'Next.js Logo', url: 'https://nextjs.org/'},
    {
      name: 'TypeScript',
      icon: <SiTypescript size={sizeIcon} />,
      alt: 'TypeScript Logo',
      url: 'https://www.typescriptlang.org/',
    },
    {name: 'Git', icon: <SiGit size={sizeIcon} />, alt: 'Git Logo', url: 'https://git-scm.com/doc'},
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={sizeIcon} />,
      alt: 'Tailwind CSS Logo',
      url: 'https://tailwindcss.com/',
    },
    {
      name: 'MySQL',
      icon: <SiMysql size={sizeIcon} />,
      alt: 'MySQL Logo',
      url: 'https://www.mysql.com/',
    },
    {
      name: 'PHP',
      icon: <SiPhp size={sizeIcon} />,
      alt: 'PHP Logo',
      url: 'https://www.php.net/',
    },
  ];

  return (
    <Section className="bg-off-white-900" sectionId={SectionId.Skills}>
      <div className="bg-off-white-500 py-12 rounded-md">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-dark-olive-700 mb-8 text-center">Skills</h2>
          <div className="grid gap-2 justify-items-center grid-cols-5  md:grid-cols-10 ">
            {skills.map(skill => (
              <a
                aria-label={`Vai alla documentazione di ${skill.name}`}
                className="flex flex-col items-center text-center text-sage-green-400 hover:opacity-75 transition-opacity"
                href={skill.url}
                key={skill.id}
                rel="noopener noreferrer"
                target="_blank">
                {skill.icon}
                <span className=" text-xxs mt-2 text-dark-olive-700 font-medium">{skill.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

Skills.displayName = 'SkillsT';
export default Skills;
