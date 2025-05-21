import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, Fragment, memo, useEffect, useRef, useState } from 'react';

const headerID = 'headerNav';
const navSections = ['about', 'skills', 'softskills', 'portfolio', 'contact'];

const baseNavClass =
  '-m-1 p-1.5 font-bold text-lg rounded-md first-letter:uppercase hover:text-off-white-400 hover:duration-300 focus:outline-none focus-visible:ring-40';
const baseMobileNavClass = 'p-2 first-letter:uppercase';

const Header: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleOpen = () => {
    if (!isOpen && observerRef.current) {
      const entries = observerRef.current.takeRecords();
      const intersectingEntry = entries.find(entry => entry.isIntersecting);
      if (intersectingEntry && intersectingEntry.target.id !== currentSection) {
        setCurrentSection(intersectingEntry.target.id);
      }
    }
    setIsOpen(!isOpen);
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const intersectingEntry = entries.find(entry => entry.isIntersecting);
    if (intersectingEntry && intersectingEntry.target.id !== currentSection) {
      setCurrentSection(intersectingEntry.target.id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observerRef.current = observer;

    const targets = navSections
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    targets.forEach(target => observer.observe(target));

    return () => {
      targets.forEach(target => observer.unobserve(target));
      observer.disconnect();
    };
  }, []);

  const handleClick = (section: string) => {
    setCurrentSection(section);
    toggleOpen();
  };

  return (
    <>
      <MobileNav
        currentSection={currentSection}
        handleClick={handleClick}
        isOpen={isOpen}
        navSections={navSections}
        toggleOpen={toggleOpen}
      />
      <DesktopNav
        currentSection={currentSection}
        handleClick={handleClick}
        navSections={navSections}
      />
    </>
  );
});

const DesktopNav: FC<{
  navSections: string[];
  handleClick: (section: string) => void;
  currentSection: string | null;
}> = memo(({ navSections, handleClick, currentSection }) => (
  <header
    className="fixed top-0 z-50 hidden w-full bg-forest-night-200/60 p-3 backdrop-blur sm:block"
    id={headerID}
  >
    <nav className="flex justify-center gap-x-10">
      {navSections.map(section => (
        <Link
          className={classNames(
            baseNavClass,
            section === currentSection
              ? 'text-golden-brown-100 border-b-2 border-golden-brown-100'
              : 'text-off-white-200',
          )}
          href={`/#${section}`}
          key={section}
          onClick={() => handleClick(section)}
        >
          {section}
        </Link>
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
}> = memo(({ navSections, isOpen, toggleOpen, handleClick, currentSection }) => (
  <>
    <button
      aria-label="Apri il menu di navigazione principale"
      className="fixed right-2 top-2 z-40 rounded-md bg-golden-brown-200 p-2 ring-forest-night-200/60 hover:bg-sage-green-100 focus:outline-none sm:hidden"
      onClick={toggleOpen}
    >
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
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-forest-night-200 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative w-4/5 bg-dark-olive-700">
            <nav className="mt-5 flex flex-col gap-y-2 px-2">
              {navSections.map(section => (
                <Link
                  className={classNames(
                    baseMobileNavClass,
                    section === currentSection && 'bg-golden-brown-200',
                    'text-off-white-200',
                    'font-bold',
                    'rounded-md',
                    section !== currentSection && 'text-off-white-500',
                    'font-medium',
                  )}
                  href={`/#${section}`}
                  key={section}
                  onClick={() => handleClick(section)}
                >
                  {section}
                </Link>
              ))}
            </nav>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  </>
));

export default Header;
