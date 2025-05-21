import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo, useEffect, useState } from 'react';

import { isMobile } from '../../config';
import { portfolioItems, SectionId } from '../../data/data';
import { PortfolioItem } from '../../data/types';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const mobile = isMobile;
  const [portfolioItemsData, setPortfolioItemsData] = useState<PortfolioItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (portfolioItems) {
      setPortfolioItemsData(portfolioItems);
      setLoading(false);
    } else {
      setError('Dati non disponibili.');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className="text-3xl font-bold text-gray-800 animate-pulse">Caricamento...</p>
      </div>
    );
  }

  if (error) {
    return <div>Errore: {error}</div>;
  }

  if (!portfolioItemsData) {
    return <div>Nessun progetto da mostrare.</div>;
  }

  return (
    <Section className="bg-forest-night-200" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="w-full columns-1 sm:columns-2 lg:columns-4 gap-4 align-middle">
          {portfolioItemsData.map(item => (
            <div className="break-inside-avoid p-6 md:p-3 relative group">
              {' '}
              {/* Contenitore con classe "group" */}
              <div
                className={classNames(
                  'relative h-0 pb-[100%] w-full overflow-hidden rounded-lg shadow-off-white-900/60 shadow-2xl hover:scale-105 active:scale-110',
                )}
              >
                <Image
                  alt={typeof item.title === 'string' ? item.title : ''}
                  className="absolute inset-0 object-cover w-full h-full"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src={item.image}
                />
                <div
                  className={classNames(
                    'absolute inset-0 h-full w-full bg-black/80 transition-opacity duration-300 flex flex-col justify-center text-center p-2',
                    'opacity-0 group-hover:opacity-100',
                    mobile && 'opacity-100',
                  )}
                >
                  <h2 className="text-center font-bold text-white text-lg text-shadow-2xl">
                    {item.title}
                  </h2>
                  <p className="text-xs text-white sm:text-sm text-shadow-lg">{item.description}</p>
                  <Link
                    className="mt-4 w-fit mx-auto rounded-md py-2 px-4 bg-gradient-to-r from-golden-brown-900 to-transparent text-white font-medium transition-transform duration-300 relative overflow-hidden group"
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center relative marquee-container">
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                      <span className="animate-marquee">&nbsp;Vai al Progetto&nbsp;</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

export default Portfolio;
