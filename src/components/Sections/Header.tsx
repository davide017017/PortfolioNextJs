import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useEffect, useRef, useState} from 'react';

export const headerID = 'headerNav';

const navSections = ['about', 'skills', 'portfolio', 'contact'];

// Utility per generare classi CSS
const createNavClass = (...classes: string[]) =>
  classNames(
    '-m-1.5 p-1.5  font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500',
    ...classes,
  );
const createMobileNavClass = (...classes: string[]) =>
  classNames(
    'p-2  first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500',
    ...classes,
  );

const Header: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const intersectingEntry = entries.find(entry => entry.isIntersecting);
    if (intersectingEntry) {
      setCurrentSection(intersectingEntry.target.id);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observerRef.current = observer;

    const targets = navSections.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    targets.forEach(target => observer.observe(target));

    return () => {
      targets.forEach(target => observer.unobserve(target));
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [handleIntersection]);

  const handleClick = useCallback((section: string) => {
    setCurrentSection(section);
  }, [setCurrentSection]); 

  return (
    <>
      <MobileNav
        currentSection={currentSection}
        handleClick={handleClick}
        isOpen={isOpen}
        navSections={navSections}
        toggleOpen={toggleOpen}
      />
      <DesktopNav currentSection={currentSection} handleClick={handleClick} navSections={navSections} />
    </>
  );
});
const DesktopNav: FC<{navSections: string[]; handleClick: (section: string) => void; currentSection: string | null}> =
  memo(({navSections, handleClick, currentSection}) => (
    <header className="fixed top-0 z-50 hidden w-full bg-forest-night-200/50 p-4 backdrop-blur sm:block" id={headerID}>
      <nav className="flex justify-center gap-x-8">
        {navSections.map(section => (
          <NavItem
            activeClass={createNavClass('text-golden-brown-100 ')}
            current={section === currentSection}
            inactiveClass={createNavClass('text-off-white-200')}
            key={section}
            onClick={() => handleClick(section)}
            section={section}
          />
        ))}
      </nav>
    </header>
  ));

const MobileNav: FC<{
  navSections: string[];
  isOpen: boolean;
  toggleOpen: () => void;
  handleClick: (section: string) => void;
  currentSection: string | null;
}> = memo(({navSections, isOpen, toggleOpen, handleClick, currentSection}) => (
  <>
    <button
      aria-label="Apri il menu di navigazione principale"
      className="fixed right-2 top-2 z-40 rounded-md bg-golden-brown-200 p-2 ring-forest-night-200/60 hover:bg-sage-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:hidden"
      onClick={toggleOpen}>
      <Bars3BottomRightIcon className="h-8 w-8 text-off-white-200" />
    </button>
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Dialog.Overlay className="fixed inset-0 bg-forest-night-200 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full">
          <div className="relative w-4/5 bg-dark-olive-700">
            <nav className="mt-5 flex flex-col gap-y-2 px-2">
              {navSections.map(section => (
                <NavItem
                  activeClass={createMobileNavClass('bg-golden-brown-200 text-off-white-200 font-bold rounded-md')}
                  current={section === currentSection}
                  inactiveClass={createMobileNavClass('text-off-white-500 font-medium')}
                  key={section}
                  onClick={() => {
                    handleClick(section);
                    toggleOpen();
                  }}
                  section={section}
                />
              ))}
            </nav>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  </>
));

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick: () => void;
}> = memo(({section, current, activeClass, inactiveClass, onClick}) => (
  <Link className={classNames(current ? activeClass : inactiveClass)} href={`/#${section}`} onClick={onClick}>
    {section}
  </Link>
));

export default Header;
