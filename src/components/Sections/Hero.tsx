import { ArrowTopRightOnSquareIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const { imageSrc, name, description, actions } = heroData;

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
            <h1 className="text-4xl font-bold font-serif text-off-white-200 sm:text-5xl lg:text-7xl p-2">
              {name}
            </h1>
            {description}
            <Socials />

            <div className="flex justify-center w-full flex-wrap gap-3">
              {actions.map(({ href, text, primary, Icon }) => {
                const isExternal = !href.startsWith('#');

                return (
                  <a
                    className={classNames(
                      'group relative flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold sm:text-base transition-all duration-300',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                      primary
                        ? 'border-forest-green-200 text-forest-green-100 hover:bg-forest-green-200/20 focus-visible:ring-forest-green-200'
                        : 'border-off-white-200 text-off-white-200 hover:bg-off-white-200/20 focus-visible:ring-off-white-200',
                    )}
                    href={href}
                    key={text}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    target={isExternal ? '_blank' : undefined}
                  >
                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-white">
                      {text}
                    </span>

                    {Icon && (
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                    )}

                    {isExternal && (
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 sm:h-5 sm:w-5 text-off-white-300 group-hover:text-white transition duration-300" />
                    )}

                    {/* LED-style ring */}
                    <span
                      className={classNames(
                        'pointer-events-none absolute -inset-px rounded-full transition duration-300 opacity-0 group-hover:opacity-100',
                        primary
                          ? 'group-hover:ring-2 group-hover:ring-forest-green-200'
                          : 'group-hover:ring-2 group-hover:ring-off-white-200',
                      )}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 inset-x-0 flex justify-center">
          <a
            className="rounded-full bg-off-white-200 p-1 ring-white ring-offset-2 ring-offset-golden-brown-50/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}
          >
            <ChevronDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
