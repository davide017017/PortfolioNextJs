import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { profileImageSrc, description, aboutItems } = aboutData;

  return (
    <Section className="bg-forest-night-300" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4 ', profileImageSrc && 'md:grid-cols-4')}>
        {profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="m-2 relative h-44 w-44 overflow-hidden rounded-xl md:h-56 md:w-56 shadow-off-white-900/60 shadow-2xl">
              <Image
                alt="About me image"
                className="h-full w-full object-cover"
                fill
                sizes="100vw"
                src={profileImageSrc}
              />
            </div>
          </div>
        )}
        <div
          className={classNames(
            'col-span-1 flex flex-col gap-y-6',
            profileImageSrc && 'md:col-span-3',
          )}
        >
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold font-serif text-white">About me</h2>
            <p className="prose prose-xs text-off-white-200 sm:prose-base">{description}</p>
          </div>
        </div>

        <div className="col-span-full w-full flex justify-center">
          <ul className="flex flex-wrap justify-center items-stretch w-full max-w-5xl">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <li
                key={idx}
                className="w-1/2 sm:w-1/3 lg:w-1/6 px-2 mb-4 flex flex-col items-center text-center"
              >
                {Icon && <Icon className="h-8 w-8 text-white mb-1" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className="text-xs text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
