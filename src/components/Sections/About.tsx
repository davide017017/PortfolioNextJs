import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { profileImageSrc, description, aboutItems } = aboutData;

  return (
    <Section className="bg-dark-olive-700" sectionId={SectionId.About}>
      <div
        className={classNames(
          'grid grid-cols-1 gap-y-4', 
          profileImageSrc && 'md:grid-cols-4' 
        )}
      >
        {profileImageSrc && ( 
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="m-2 relative h-44 w-44 overflow-hidden rounded-xl md:h-56 md:w-56">
              <Image
                alt="About me image" 
                className="h-full w-full object-cover"
                src={profileImageSrc}
                fill
                sizes="100vw"
              />
            </div>
          </div>
        )}
        <div
          className={classNames(
            'col-span-1 flex flex-col gap-y-6', 
            profileImageSrc && 'md:col-span-3' 
          )}
        >
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className="prose prose-sm text-off-white-200 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-7 w-7 text-white" />}
                <span className="text-md font-bold text-white">{label}:</span>
                <span className="text-sm text-gray-300">{text}</span>
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