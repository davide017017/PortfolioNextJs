import { FC, memo } from 'react';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiGit,
    SiTailwindcss,
} from 'react-icons/si';
import type { Skills } from '../../data/types';
import Section from '../Layout/Section';
import { SectionId } from '../../data/data';

const Skills: FC = memo(() => {
    const skills: Skills[] = [
        { name: 'HTML5', icon: <SiHtml5 size={64} />, alt: 'HTML5 Logo', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS3', icon: <SiCss3 size={64} />, alt: 'CSS3 Logo', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'JavaScript', icon: <SiJavascript size={64} />, alt: 'JavaScript Logo', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'React', icon: <SiReact size={64} />, alt: 'React Logo', url: 'https://reactjs.org/' },
        { name: 'Next.js', icon: <SiNextdotjs size={64} />, alt: 'Next.js Logo', url: 'https://nextjs.org/' },
        { name: 'TypeScript', icon: <SiTypescript size={64} />, alt: 'TypeScript Logo', url: 'https://www.typescriptlang.org/' },
        { name: 'Git', icon: <SiGit size={64} />, alt: 'Git Logo', url: 'https://git-scm.com/doc' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={64} />, alt: 'Tailwind CSS Logo', url: 'https://tailwindcss.com/' },
    ];

    return (
        <Section className="bg-off-white-900" sectionId={SectionId.Skills}>
            <div className="bg-off-white-500 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-dark-olive-700 mb-8 text-center">Skills</h2>
                    <div className="grid gap-8 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                        {skills.map((skill) => (
                            <a
                                key={skill.id} 
                                href={skill.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-sage-green-400 hover:opacity-75 transition-opacity"
                                aria-label={`Vai alla documentazione di ${skill.name}`} 
                            >
                                {skill.icon}
                                <span className="mt-2 text-dark-olive-700 font-medium">{skill.name}</span>
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