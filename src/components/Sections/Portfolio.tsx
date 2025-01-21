import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import {FC, memo, MouseEvent, useCallback, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/types';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const mobile = isMobile;

  return (
    <Section className="bg-forest-night-200" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">
          Check out some of my work (da aggiungere ancora i lavori){' '}
        </h2>
        <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="break-inside-avoid" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-0 pb-[100%] w-full overflow-hidden rounded-lg shadow-off-white-900/60 shadow-2xl hover:scale-105 hover:animate-pulse transition-transform',
                  )}>
                  <Image
                    alt={title}
                    className="absolute inset-0 object-cover w-full h-full"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    src={image}
                  />
                  <ItemOverlay item={item} mobile={mobile} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem; mobile: boolean}> = memo(({item: {url, title, description}, mobile}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(true);
      }
    },
    [mobile, showOverlay],
  );
  const handleCloseOverlay = useCallback(() => setShowOverlay(false), []);

  return (
    <>
      <a
        className={classNames(
          'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
          {'opacity-0 hover:opacity-80': !mobile},
          showOverlay ? 'opacity-80' : 'opacity-0',
        )}
        href={url}
        onClick={handleItemClick}
        rel="noopener noreferrer"
        target="_blank">
        <div className="relative h-full w-full p-4 flex flex-col justify-center">
          <div className="flex flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white">{title}</h2>
            <p className="text-xs text-white sm:text-sm">{description}</p>
          </div>
          <ArrowTopRightOnSquareIcon
            aria-label={`Vai al progetto ${title}`}
            className="absolute bottom-2 right-2 h-4 w-4 shrink-0 text-white sm:bottom-3 sm:right-3"
          />
        </div>
      </a>
      {mobile && showOverlay && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-center justify-center"
          onClick={handleCloseOverlay}>
          <div className="relative w-11/12 max-w-lg bg-neutral-800 rounded-lg p-6 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white">{title}</h2>
            <p className="text-sm text-white sm:text-base mt-4">{description}</p>
            <Link
              className="mt-4 w-fit mx-auto bg-orange-500 rounded-md py-2 px-4 text-white hover:bg-orange-600"
              href={url}
              rel="noopener noreferrer"
              target="_blank">
              Vai al Progetto
            </Link>
          </div>
        </div>
      )}
    </>
  );
});

ItemOverlay.displayName = 'ItemOverlay';
