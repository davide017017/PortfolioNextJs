import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative h-screen w-full flex items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute inset-0 object-cover w-full h-full"
          fill
          placeholder="blur"
          priority
          sizes="100vw"
          src={imageSrc}
        />
        <div className="z-10 max-w-screen-lg px-3 lg:px-2">
          <div className="mt-5 md:mt-14 p-2 sm:p-3 lg:p-8 lg:gap-7 flex flex-col items-center gap-1 md:gap-4 rounded-xl bg-forest-night-200/80 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold font-serif text-off-white-200 sm:text-5xl lg:text-7xl p-2">{name}</h1>
            {description}
            <Socials />
            <div className="flex justify-center w-full gap-3">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex items-center justify-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium text-off-white-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary
                      ? 'border-forest-green-200 ring-forest-green-200 hover:bg-sage-green-200/80'
                      : 'border-off-white-200 ring-off-white-200 hover:bg-forest-night-200/80',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 inset-x-0 flex justify-center">
          <a
            className="rounded-full bg-off-white-200 p-1 ring-white ring-offset-2 ring-offset-golden-brown-50/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
