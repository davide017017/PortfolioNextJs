import Image from 'next/image';
import { FC, memo } from 'react';

import { certificationsData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  return (
    <Section className="bg-off-white-900" sectionId={SectionId.Certifications ?? 'certifications'}>
      <div className="py-8 px-2 bg-off-white-500 rounded-md">
        <h2 className="text-2xl font-bold font-serif text-dark-olive-700 mb-6 text-center">
          Certificazioni
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {certificationsData.map((cert, idx) => (
            <div className="relative group flex flex-col items-center" key={cert.title + idx}>
              <a
                aria-label={`Verifica ${cert.title} su Credly`}
                className="hover:scale-105 transition-transform"
                href={cert.verifyUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt={cert.title}
                  className="rounded-lg shadow-2xl "
                  height={120}
                  priority
                  src={cert.badgeUrl}
                  width={120}
                />
              </a>
              <span className="mt-4 text-base font-bold text-dark-olive-700 text-center">
                {cert.title}
              </span>
              <span className="text-xs text-gray-500 text-center">
                {cert.issuer} {cert.date && <>• {cert.date}</>}
              </span>
              {cert.tooltip && (
                <div className="absolute z-10 bottom-[-48px] left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white bg-gray-900 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {cert.tooltip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
