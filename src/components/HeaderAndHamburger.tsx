import { useState, useEffect } from 'react';
import type { PageId } from '../data/siteData';
import { NAV_PAGES, CONTACT_INFO } from '../data/siteData';
import { SetInStoneLogo, QuarryContourPattern } from './StonePatterns';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, productFilter?: string) => void;
}

export function HeaderAndHamburger({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredPage, setHoveredPage] = useState<PageId>(currentPage === 'cookies' ? 'acasa' : currentPage);

  useEffect(() => {
    if ( currentPage !== 'cookies' ) {
      setHoveredPage(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const previewTarget = NAV_PAGES.find((p) => p.id === hoveredPage) || NAV_PAGES[0];

  const handleSelectPage = (page: PageId, filter?: string) => {
    setMenuOpen(false);
    onNavigate(page, filter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ─── Top Bar (from setinstone.ro .sis-header-top) ─── */}
      <div className="bg-[#15100A] text-[#FBF4EF]/80 border-b border-[#C4A07A]/20 px-6 sm:px-12 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${CONTACT_INFO.phoneHref}`}
              className="hover:text-[#C4A07A] transition-colors font-medium"
            >
              {CONTACT_INFO.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hidden sm:inline hover:text-[#C4A07A] transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
            <span className="hidden lg:inline text-[#FBF4EF]/50">
              {CONTACT_INFO.address}
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] uppercase tracking-wider">
            <a
              href={CONTACT_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4A07A] transition-colors"
            >
              Facebook
            </a>
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4A07A] transition-colors"
            >
              Instagram
            </a>
            <a
              href={CONTACT_INFO.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4A07A] transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main Sticky Header ─── */}
      <header className="sticky top-0 z-50 bg-[#EFECE6]/95 backdrop-blur-md border-b border-[#D5CFC4] px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleSelectPage('acasa')}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <SetInStoneLogo className="w-8 h-8 transition-transform duration-500 group-hover:scale-105" />
            <div>
              <span className="font-display text-2xl sm:text-3xl font-medium tracking-normal text-[#15100A] block leading-none">
                Set in Stone
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#7A6F63] block mt-0.5">
                Marmură & Piatră Naturală
              </span>
            </div>
          </button>

          {/* Desktop Primary Nav Links (All 6 Pages from setinstone.ro) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {NAV_PAGES.map((page) => {
              const isCurrent = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => handleSelectPage(page.id)}
                  className={`relative py-1 cursor-pointer transition-colors ${
                    isCurrent
                      ? 'text-[#15100A] font-medium'
                      : 'text-[#5E5D5C] hover:text-[#15100A]'
                  }`}
                >
                  <span>{page.label}</span>
                  {isCurrent && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C4A07A]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA + Architectural Hamburger Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleSelectPage('contact')}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider font-medium hover:bg-[#2B2219] transition-colors cursor-pointer"
            >
              Solicită o Ofertă
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
              className="flex items-center gap-3 px-3.5 py-2.5 border border-[#15100A]/25 bg-[#FBF4EF] hover:border-[#15100A] text-[#15100A] transition-colors cursor-pointer"
            >
              <span className="text-xs uppercase tracking-wider font-medium hidden sm:inline">
                {menuOpen ? 'Închide' : 'Meniu'}
              </span>
              <div className="w-6 h-4 flex flex-col justify-between items-end">
                <span
                  className={`h-[1.5px] bg-[#15100A] transition-all duration-300 ${
                    menuOpen ? 'w-6 translate-y-[7px] rotate-45' : 'w-6'
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-[#C4A07A] transition-all duration-300 ${
                    menuOpen ? 'opacity-0 w-0' : 'w-4'
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-[#15100A] transition-all duration-300 ${
                    menuOpen ? 'w-6 -translate-y-[7px] -rotate-45' : 'w-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Full-Viewport Espresso Basalt Hamburger Overlay ─── */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Meniu principal Set in Stone"
          className="fixed inset-0 z-40 bg-[#15100A] text-[#FBF4EF] pt-28 pb-12 px-6 sm:px-12 overflow-y-auto animate-curtain-open"
        >
          <QuarryContourPattern />

          <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-between gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start my-auto">
              {/* Left Column: Monumental 6-Page Directory */}
              <div className="lg:col-span-6 divide-y divide-[#FBF4EF]/10 border-y border-[#FBF4EF]/10">
                {NAV_PAGES.map((page) => {
                  const isCurrent = currentPage === page.id;
                  return (
                    <button
                      key={page.id}
                      type="button"
                      onMouseEnter={() => setHoveredPage(page.id)}
                      onClick={() => handleSelectPage(page.id)}
                      className="w-full py-4 sm:py-5 text-left flex items-baseline justify-between gap-4 group cursor-pointer"
                    >
                      <div>
                        <span
                          className={`font-display text-3xl sm:text-5xl block transition-transform duration-300 group-hover:translate-x-3 ${
                            isCurrent ? 'text-[#C4A07A]' : 'text-[#FBF4EF] group-hover:text-[#C4A07A]'
                          }`}
                        >
                          {page.label}
                        </span>
                        <span className="text-xs sm:text-sm text-[#FBF4EF]/55 block mt-1 group-hover:translate-x-3 transition-transform duration-300">
                          {page.subtitle}
                        </span>
                      </div>

                      <span className="text-xs uppercase tracking-widest text-[#C4A07A]">
                        {isCurrent ? 'Activ' : 'Deschide'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Live Recessed Stone Niche Preview & Quick Categories */}
              <div className="lg:col-span-6 space-y-6">
                <div className="border border-[#C4A07A]/35 p-2.5 bg-[#1E1710]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#15100A]">
                    <img
                      src={previewTarget.previewImage}
                      alt={previewTarget.label}
                      className="w-full h-full object-cover transition-all duration-700 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15100A] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-widest text-[#C4A07A] block">
                          {previewTarget.previewMaterial}
                        </span>
                        <span className="font-display text-2xl text-[#FBF4EF]">
                          {previewTarget.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Product Categories from setinstone.ro */}
                <div className="border border-[#FBF4EF]/10 p-5 bg-[#1B150E]/90">
                  <span className="text-xs uppercase tracking-widest text-[#C4A07A] block mb-3">
                    Categorii Rapide de Produse
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Blaturi Bucătărie',
                      'Dale & Pavaj',
                      'Scări & Trepte',
                      'Monumente Funerare',
                      'Borduri & Margini',
                      'Placaj Fațadă',
                    ].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleSelectPage('produse', cat)}
                        className="px-3 py-1.5 text-xs border border-[#FBF4EF]/15 hover:border-[#C4A07A] text-[#FBF4EF]/85 hover:text-[#C4A07A] transition-colors cursor-pointer"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Showroom Coordinates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#FBF4EF]/75 pt-2">
                  <div>
                    <span className="text-[#C4A07A] uppercase tracking-wider block mb-1">
                      Atelier & Depozit Cluj
                    </span>
                    <p>{CONTACT_INFO.address}</p>
                    <p className="text-[#FBF4EF]/50 mt-0.5">{CONTACT_INFO.schedule}</p>
                  </div>
                  <div>
                    <span className="text-[#C4A07A] uppercase tracking-wider block mb-1">
                      Contact Direct
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phoneHref}`}
                      className="block text-sm text-[#FBF4EF] font-medium hover:text-[#C4A07A]"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="block hover:text-[#C4A07A] mt-0.5"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
