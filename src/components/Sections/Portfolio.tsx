'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, memo, useEffect, useState } from 'react';

import Section from '@/components/Layout/Section';
import { portfolioItems, SectionId } from '@/data/data';
import type { PortfolioItem } from '@/data/types';

/**
 * NOTE rapide per personalizzare:
 * - Colori/sfumature card: cerca "bg-off-white-700", "from-dark-olive-300/50", "to-dark-olive-100/0"
 * - Ombre/hover: classi "hover:-translate-y-0.5", "hover:shadow-2xl"
 * - Rapporto immagine: "aspect-[16/10]" (puoi usare aspect-video / aspect-square)
 * - Comportamento overlay: è sempre visibile su mobile, va in hover su md+
 */

// eslint-disable-next-line react-memo/require-memo
const PortfolioBase: FC = () => {
  const [data, setData] = useState<PortfolioItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  // In realtà i dati sono statici: questo è solo per mostrare skeleton all'hydration
  useEffect(() => {
    setData(portfolioItems ?? []);
    setLoading(false);
  }, []);

  const getAlt = (title: PortfolioItem['title']) =>
    typeof title === 'string' ? title : 'Anteprima progetto';

  return (
    <Section className="bg-forest-night-200" sectionId={SectionId.Portfolio}>
      <div className="mx-auto flex max-w-7xl flex-col gap-y-8 px-2 sm:px-4 lg:px-6">
        <h2 className="self-center text-xl font-bold text-off-white-50 sm:text-2xl">
          Alcuni dei miei progetti
        </h2>

        {/* GRID responsive: 1 → 2 → 3 colonne */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                className="animate-pulse rounded-2xl bg-off-white-700/40 p-3 ring-1 ring-off-white-800/20"
                key={`skeleton-${i}`}
              >
                <div className="aspect-[16/10] w-full rounded-xl bg-off-white-600/60" />
                <div className="mt-3 h-4 w-2/3 rounded bg-off-white-600/80" />
                <div className="mt-2 h-3 w-full rounded bg-off-white-600/60" />
              </div>
            ))}

          {!loading &&
            data?.map((item, i) => (
              <Link
                aria-label={
                  typeof item.title === 'string' ? `Apri progetto: ${item.title}` : 'Apri progetto'
                }
                className="
                  group relative block h-full rounded-2xl p-[1px]
                  will-change-transform transition-all duration-300
                  hover:-translate-y-1
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70
                  focus-visible:ring-offset-2 focus-visible:ring-offset-forest-night-200

                  /* NEON verde/oro — base + hover */
                  shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_0_22px_rgba(16,185,129,0.18),0_0_32px_rgba(245,158,11,0.18)]
                  hover:shadow-[0_0_0_1px_rgba(245,158,11,0.55),0_0_42px_rgba(16,185,129,0.35),0_0_68px_rgba(245,158,11,0.35)]

                  /* Fondo leggero con gradiente verde→oro */
                  bg-gradient-to-br from-emerald-300/25 via-transparent to-amber-200/10
                "
                href={item.url}
                key={item.url ?? (typeof item.title === 'string' ? item.title : i)}
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* Alone morbido extra in hover (radiale bi-colore) */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0 -z-10 rounded-2xl
                    opacity-0 blur-xl transition-opacity duration-300
                    group-hover:opacity-100
                    bg-[radial-gradient(80%_60%_at_50%_0%,rgba(16,185,129,0.28),rgba(245,158,11,0.22)_60%,transparent)]
                  "
                />

                {/* Card interna */}
                <div
                  className="
                  flex h-full flex-col rounded-2xl shadow-md backdrop-blur-sm  overflow-hidden
                  ring-1 ring-emerald-300/20 transition
                  group-hover:ring-amber-300/40
                "
                >
                  {/* Media con ratio fisso */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
                    <Image
                      alt={getAlt(item.title)}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      src={item.image}
                    />

                    {/* Overlay: mobile visibile, hover su md+ */}
                    <div
                      className="
                      absolute inset-0 flex h-full w-full flex-col justify-end
                      bg-gradient-to-t from-black/70 via-black/30 to-transparent
                      px-4 pb-4
                      opacity-100 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100
                    "
                    >
                      <h3 className="text-base font-semibold leading-tight text-white drop-shadow sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs text-off-white-200 sm:text-sm">
                        {item.description}
                      </p>

                      {/* CTA con gradiente verde→oro */}
                      <span
                        className="
                        mt-3 inline-flex w-fit items-center gap-2 rounded-md
                        bg-gradient-to-r from-emerald-600/80 to-emerald-900/10
                        px-3 py-1.5 text-xs font-medium text-off-white-50
                        shadow transition-all duration-300
                        group-hover:translate-x-0.5
                      "
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        Vai al progetto
                      </span>
                    </div>
                  </div>

                  {/* Footer testo — altezza minima per card uniformi */}
                  <div className="px-4 py-3 min-h-[120px] flex flex-col bg-off-white-700/90">
                    <h4 className="line-clamp-2 text-sm font-semibold text-dark-olive-900 sm:text-base">
                      {item.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-xs text-dark-olive-600 sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default memo(PortfolioBase);
