'use client';

/* =========================================================================
 * Certifications Section (2 colonne)
 * - Sinistra: featured badge (sticky)
 * - Destra: carosello verticale di PDF con thumbnail
 * - Paginatore puntini verticale (sticky, cliccabile)
 * - Modale con preview immagine (o PDF inline)
 * ========================================================================= */

import Image from 'next/image';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import Section from '@/components/Layout/Section';
import { certificationPdfs, featuredCertification, SectionId } from '@/data/data';

/* =============================
 * Configurazione rapida (UI)
 * ============================= */
const BADGE_SIZE = 180; // px — dimensione del badge in evidenza
const THUMB_W = 160; // px — larghezza miniatura
const THUMB_H = 96; // px — altezza miniatura
const LIST_H = '70vh'; // altezza visibile del carosello verticale
const USE_IMAGE_PREVIEW = true; // true = usa -preview.webp in modale; false = embed PDF

/* =============================
 * Utils
 * ============================= */
const encodePath = (path: string) => encodeURI(path).replace(/'/g, '%27');
const thumbFromPdf = (pdfUrl: string) => pdfUrl.replace(/\.pdf$/i, '-thumb.webp');
const previewFromPdf = (pdfUrl: string) => pdfUrl.replace(/\.pdf$/i, '-preview.webp');

const formatDate = (input?: string) => {
  if (!input) return '';
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(d);
};

/* =============================
 * Fallback icon (se manca la thumb)
 * ============================= */

const PdfIcon = memo(function PdfIcon() {
  return (
    <svg aria-hidden="true" height="40" viewBox="0 0 24 24" width="40">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#fff" />
      <path d="M14 2v6h6" fill="#eee" />
      <rect fill="#e11d48" height="8" rx="1" width="14" x="5" y="11" />
      <text fill="#fff" fontSize="7" fontWeight="700" textAnchor="middle" x="12" y="17">
        PDF
      </text>
      <path d="M14 2v6h6" fill="none" stroke="#bbb" />
    </svg>
  );
});

/* =============================
 * Tipi helper (niente any)
 * ============================= */
type CSSVars = React.CSSProperties & Record<'--list-h', string>;

/* =============================
 * Component
 * ============================= */
// eslint-disable-next-line react-memo/require-memo
function CertificationsBase() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // refs per scroll controllato nel carosello verticale
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, []);

  const scrollToCurrent = useCallback((i: number) => {
    const el = itemRefs.current[i];
    if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, []);

  const prev = useCallback(() => {
    setIndex(i => {
      const ni = (i - 1 + certificationPdfs.length) % certificationPdfs.length;
      scrollToCurrent(ni);
      return ni;
    });
  }, [scrollToCurrent]);

  const next = useCallback(() => {
    setIndex(i => {
      const ni = (i + 1) % certificationPdfs.length;
      scrollToCurrent(ni);
      return ni;
    });
  }, [scrollToCurrent]);

  // Tastiera globale quando la modale è aperta
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, prev, next]);

  // Tastiera sul carosello (quando la modale è chiusa) — SENZA any
  useEffect(() => {
    if (open) return;
    const el = listRef.current;
    if (!el) return;

    const listener: EventListener = (e: Event) => {
      const evt = e as KeyboardEvent;
      if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        prev();
      } else if (evt.key === 'ArrowDown') {
        evt.preventDefault();
        next();
      } else if (evt.key === 'Enter') {
        evt.preventDefault();
        openAt(index);
      }
    };

    el.addEventListener('keydown', listener);
    return () => el.removeEventListener('keydown', listener);
  }, [open, prev, next, openAt, index]);

  // Aggiorna l'indice in base all'elemento più vicino al centro del contenitore durante lo scroll
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      itemRefs.current.forEach((btn, idx) => {
        if (!btn) return;
        const r = btn.getBoundingClientRect();
        const c = (r.top + r.bottom) / 2;
        const dist = Math.abs(c - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });
      setIndex(bestIdx);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // stile con CSS var tipizzato
  const listStyle: CSSVars = { '--list-h': LIST_H };

  return (
    <Section className="bg-off-white-900" sectionId={SectionId.Certifications ?? 'certifications'}>
      <div className="rounded-md bg-off-white-500 px-2 py-8">
        <h2 className="mb-6 text-center font-serif text-2xl font-bold text-dark-olive-700">
          Certificazioni
        </h2>

        {/* GRID 2 colonne (md+): sx sticky, dx carosello verticale */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-2 sm:px-4 md:grid-cols-2">
          {/* Colonna SINISTRA — featured (sticky) */}
          <aside className="md:sticky md:top-4 md:self-start">
            <div className="flex flex-col items-center rounded-xl bg-off-white-700/70 p-5 shadow">
              <a
                aria-label={`Verifica ${featuredCertification.title}`}
                className="group"
                href={featuredCertification.verifyUrl}
                rel="noreferrer"
                target="_blank"
                title={featuredCertification.tooltip ?? featuredCertification.title}
              >
                <Image
                  alt={featuredCertification.title}
                  className="rounded-xl shadow-2xl transition-transform group-hover:scale-105"
                  height={BADGE_SIZE}
                  priority
                  src={featuredCertification.badgeUrl}
                  width={BADGE_SIZE}
                />
              </a>

              <div className="mt-3 text-center">
                <p className="text-base font-semibold text-dark-olive-700">
                  {featuredCertification.title}
                </p>
                <p className="text-xs text-gray-500">
                  {featuredCertification.issuer}
                  {featuredCertification.date ? ` • ${featuredCertification.date}` : ''}
                </p>

                {featuredCertification.verifyUrl && (
                  <a
                    className="mt-3 inline-block rounded border px-2 py-1 text-xs hover:bg-gray-50"
                    href={featuredCertification.verifyUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Verifica su Credly
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* Colonna DESTRA — carosello verticale + puntini */}
          <div className="relative ">
            {/* Header e controlli */}
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-dark-olive-700">Altri attestati (PDF)</h3>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Precedente"
                  className="rounded border px-2 py-1 text-xs hover:bg-gray-50"
                  onClick={prev}
                >
                  ↑
                </button>
                <button
                  aria-label="Successivo"
                  className="rounded border px-2 py-1 text-xs hover:bg-gray-50"
                  onClick={next}
                >
                  ↓
                </button>
              </div>
            </div>

            {/* LISTA VERTICALE scrollabile con snap */}
            <div
              aria-label="Certificati PDF"
              className="h-[var(--list-h)] overflow-y-auto pr-6" /* spazio per i puntini */
              ref={listRef}
              role="listbox"
              style={listStyle}
              tabIndex={0}
            >
              <div className="flex flex-col gap-3 snap-y snap-mandatory">
                {certificationPdfs.map((cert, i) => {
                  const thumbUrl = encodePath(cert.thumbUrl ?? thumbFromPdf(cert.pdfUrl));
                  const selected = i === index;
                  return (
                    <button
                      aria-selected={selected}
                      className={`
                        group relative flex snap-start items-center gap-3 rounded-xl border p-3 text-left
                        transition-all duration-300
                        ${
                          selected
                            ? 'border-dark-olive-500 bg-off-white-700 ring-1 ring-dark-olive-500/50'
                            : 'border-dark-olive-300/40 bg-off-white-700/70 hover:border-dark-olive-400/60'
                        }
                        focus-visible:ring-2 focus-visible:ring-dark-olive-400/60
                        focus-visible:ring-offset-2 focus-visible:ring-offset-off-white-500
                      `}
                      key={cert.title + i}
                      onClick={() => openAt(i)}
                      // ✅ Fix TS2322: la callback NON ritorna nulla
                      ref={el => {
                        itemRefs.current[i] = el;
                      }}
                      title="Apri anteprima"
                    >
                      {/* Thumb */}
                      <div className="flex h-[96px] w-[160px] items-center justify-center overflow-hidden rounded-lg bg-dark-olive-100/70 ring-1 ring-dark-olive-200/40">
                        <Image
                          alt={`Anteprima ${cert.title}`}
                          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                          height={THUMB_H}
                          loading="lazy"
                          src={thumbUrl}
                          width={THUMB_W}
                        />
                      </div>

                      {/* Testi */}
                      <div className="min-w-0 flex-1">
                        <div className="line-clamp-2 text-sm font-semibold text-dark-olive-800">
                          {cert.title}
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-dark-olive-500">
                          <span className="truncate">{cert.issuer}</span>
                          {cert.date && (
                            <span className="rounded bg-dark-olive-700/10 px-1.5 py-[2px] text-[10px] text-dark-olive-700">
                              {formatDate(cert.date)}
                            </span>
                          )}
                        </div>

                        {/* micro-CTA visiva */}
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-flex items-center gap-2 text-[11px] text-dark-olive-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        >
                          Apri anteprima
                          <span className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5">
                            →
                          </span>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PAGINATORE PUNTINI (sticky, cliccabile) */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden md:flex items-center">
              <div className="pointer-events-auto flex flex-col items-center gap-2 pr-1">
                {certificationPdfs.map((_, i) => {
                  const active = i === index;
                  return (
                    <button
                      aria-current={active ? 'true' : undefined}
                      aria-label={`Vai a certificato ${i + 1}`}
                      className={`
                        h-2.5 w-2.5 rounded-full transition-all
                        ${active ? 'scale-110 bg-dark-olive-600 ring-2 ring-dark-olive-300/60' : 'bg-dark-olive-300/60 hover:bg-dark-olive-400/80'}
                      `}
                      key={`dot-${i}`}
                      onClick={() => {
                        setIndex(i);
                        scrollToCurrent(i);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =========================
         * MODALE PREVIEW
         * ========================= */}
        {open && (
          <div
            aria-modal="true"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
            onClick={close}
            role="dialog"
          >
            <div
              className="relative w-full max-w-5xl rounded-xl bg-off-white-900 p-4 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-off-white-50">
                    {certificationPdfs[index].title}
                  </h3>
                  <p className="text-xs text-off-white-200/80">
                    {certificationPdfs[index].issuer}
                    {certificationPdfs[index].date
                      ? ` • ${formatDate(certificationPdfs[index].date)}`
                      : ''}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="rounded border px-2 py-1 text-xs text-off-white-50 hover:bg-blue-100 hover:text-black"
                    href={encodePath(certificationPdfs[index].pdfUrl)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Apri PDF
                  </a>
                  <a
                    className="rounded border px-2 py-1 text-xs text-off-white-50 hover:bg-yellow-200 hover:text-black"
                    download
                    href={encodePath(certificationPdfs[index].pdfUrl)}
                  >
                    Download
                  </a>
                  <button
                    aria-label="Chiudi"
                    className="rounded border px-2 py-1 text-xs text-off-white-50 hover:bg-red-200 hover:text-black"
                    onClick={close}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Body */}
              <div
                className="w-full overflow-hidden rounded-lg bg-off-white-800"
                style={{ height: LIST_H }}
              >
                {USE_IMAGE_PREVIEW ? (
                  (() => {
                    const cert = certificationPdfs[index];
                    const imageUrl = encodePath(cert.imageUrl ?? previewFromPdf(cert.pdfUrl));
                    return (
                      <div className="relative h-full w-full">
                        <Image
                          alt={cert.title}
                          className="object-contain"
                          fill
                          priority
                          sizes="100vw"
                          src={imageUrl}
                        />
                      </div>
                    );
                  })()
                ) : (
                  <object
                    className="h-full w-full"
                    data={encodePath(certificationPdfs[index].pdfUrl)}
                    type="application/pdf"
                  >
                    <iframe
                      className="h-full w-full"
                      src={encodePath(certificationPdfs[index].pdfUrl)}
                      title={certificationPdfs[index].title}
                    />
                  </object>
                )}
              </div>

              {/* Navigazione modale */}
              <div className="mt-3 flex items-center justify-between">
                <button
                  className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
                  onClick={prev}
                >
                  ←
                </button>
                <span className="text-xs text-gray-400">
                  {index + 1} / {certificationPdfs.length}
                </span>
                <button
                  className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
                  onClick={next}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

export default memo(CertificationsBase);
