import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <footer className="relative bg-forest-night-300 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-off-white-200 p-1 ring-white ring-offset-2 ring-offset-golden-brown-50/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}
      >
        <ChevronDoubleUpIcon className="h-6 w-6 sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-6">
      <Socials />
      <span className="text-sm text-off-white-200">
        © Copyright {currentYear} Davide Martinico
      </span>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
