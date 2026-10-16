import { useState, useEffect } from 'react';

type PageId = 'acasa' | 'produse' | 'servicii' | 'proiecte' | 'despre' | 'contact';

interface StoneSlab {
  id: string;
  name: string;
  origin: string;
  finish: string;
  thickness: string;
  use: string;
  baseGradient: string;
  textColor: string;
  mutedColor: string;
  accentLine: string;
  filterId: string;
  veinPath: string;
}

const SLABS: StoneSlab[] = [
  {
    id: 'marmura',
    name: 'Marmură',
    origin: 'Carrara & Volakas',
    finish: 'Lustruită sau mată (honed)',
    thickness: '20 / 30 mm',
    use: 'Insule de bucătărie la 45°, băi, lavoare și trepte interioare',
    baseGradient: 'linear-gradient(155deg, #FBF9F5 0%, #EDE8DF 55%, #E2DBD0 100%)',
    textColor: '#181715',
    mutedColor: '#5C5852',
    accentLine: '#9A7B4F',
    filterId: 'vein-marble',
    veinPath: 'M -10 40 Q 80 90, 140 180 T 320 340 M 60 -10 Q 110 120, 240 210',
  },
  {
    id: 'granit',
    name: 'Granit',
    origin: 'Nero Assoluto',
    finish: 'Lustruit, periat sau fiamat',
    thickness: '20 / 30 mm',
    use: 'Blaturi de bucătărie intens utilizate, scări exterioare și glafuri',
    baseGradient: 'linear-gradient(160deg, #282624 0%, #191816 60%, #11100F 100%)',
    textColor: '#F5F2EB',
    mutedColor: '#A39E93',
    accentLine: '#C4A474',
    filterId: 'grain-granite',
    veinPath: 'M 20 0 L 190 380 M 140 0 L 60 380',
  },
  {
    id: 'travertin',
    name: 'Travertin',
    origin: 'Tivoli Roman',
    finish: 'Chituit mat sau antichizat',
    thickness: '20 mm',
    use: 'Placări calde de baie, livinguri, fațade ventilate și terase',
    baseGradient: 'linear-gradient(165deg, #E6DEC8 0%, #D6C9B0 55%, #C7B89C 100%)',
    textColor: '#181715',
    mutedColor: '#574F42',
    accentLine: '#8C6D3F',
    filterId: 'vein-travertine',
    veinPath: 'M 0 70 Q 120 65, 300 85 M 0 180 Q 150 195, 300 170 M 0 270 Q 140 260, 300 285',
  },
  {
    id: 'cuartit',
    name: 'Cuarțit',
    origin: 'Taj Mahal & Quartz',
    finish: 'Suprafață satinată, non-poroasă',
    thickness: '20 mm',
    use: 'Blaturi de bucătărie cu rezistență totală la pete, vin și acizi',
    baseGradient: 'linear-gradient(150deg, #EFECE4 0%, #DFD8C8 50%, #CFC5B3 100%)',
    textColor: '#181715',
    mutedColor: '#5C564C',
    accentLine: '#9A7B4F',
    filterId: 'vein-quartzite',
    veinPath: 'M -20 120 C 70 80, 160 150, 290 90 M 10 260 C 110 220, 180 290, 310 230',
  },
];

const ALL_MATERIALS: StoneSlab[] = [
  ...SLABS,
  {
    id: 'portelan',
    name: 'Gresie Porțelanată',
    origin: 'Lastre XXL 3200 × 1600 mm',
    finish: 'Mată sau satinată',
    thickness: '12 / 20 mm',
    use: 'Blaturi termorezistente, placări fără rosturi și fațade exterioare',
    baseGradient: 'linear-gradient(155deg, #D9D4CA 0%, #C6BFB2 55%, #B5ADA0 100%)',
    textColor: '#181715',
    mutedColor: '#4E4A44',
    accentLine: '#8C6D3F',
    filterId: 'vein-marble',
    veinPath: 'M 0 110 Q 150 60, 300 130 M 30 280 Q 180 220, 300 260',
  },
  {
    id: 'garduri',
    name: 'Garduri Modulare',
    origin: 'Blocuri prefabricate din piatră',
    finish: 'Textură spartă / buciardată',
    thickness: 'Modular',
    use: 'Împrejmuiri rezidențiale durabile, stâlpi și capace de gard la cotă',
    baseGradient: 'linear-gradient(160deg, #3A3733 0%, #272522 60%, #1C1A18 100%)',
    textColor: '#F5F2EB',
    mutedColor: '#B0AAA0',
    accentLine: '#C4A474',
    filterId: 'grain-granite',
    veinPath: 'M 0 120 L 300 120 M 0 240 L 300 240 M 150 0 L 150 120 M 90 120 L 90 240',
  },
];

const WORKS = [
  {
    title: 'Blaturi și insule de bucătărie',
    detail: 'Îmbinări la 45 de grade (waterfall), decupaje CNC pentru plită și chiuvetă.',
  },
  {
    title: 'Trepte și scări',
    detail: 'Trepte interioare profilate și scări exterioare fiamate, antiderapante.',
  },
  {
    title: 'Glafuri și pervazuri',
    detail: 'Tăiate la cotă din lastră masivă, cu picurător frezat pentru exterior.',
  },
  {
    title: 'Garduri modulare din piatră',
    detail: 'Elemente prefabricate din piatră pentru împrejmuiri rezidențiale durabile.',
  },
];

const EDGE_PROFILES = [
  {
    id: 'waterfall',
    name: '45° Waterfall',
    spec: 'Vena pietrei continuă neîntrerupt pe verticală.',
    svgPath: 'M 30 45 L 190 45 L 165 70 L 30 70 M 190 45 L 190 145 L 165 145 L 165 70 M 190 45 L 165 70',
  },
  {
    id: 'bizot',
    name: 'Bizot 45°',
    spec: 'Teșitură precisă de 3–5 mm pentru protecția muchiei.',
    svgPath: 'M 30 50 L 175 50 L 190 65 L 190 110 L 30 110',
  },
  {
    id: 'semibaston',
    name: 'Semibaston',
    spec: 'Curbură clasică pe raza superioară a treptei sau blatului.',
    svgPath: 'M 30 50 L 165 50 Q 192 50 192 80 L 192 110 L 30 110',
  },
  {
    id: 'picurator',
    name: 'Picurător Exterior',
    spec: 'Canal frezat sub glaf pentru oprirea infiltrării apei.',
    svgPath: 'M 30 50 L 190 50 L 190 105 L 168 105 L 168 93 L 158 93 L 158 105 L 30 105',
  },
];

const PROJECTS = [
  {
    title: 'Insulă de bucătărie la 45°',
    material: 'Marmură Volakas · 20 mm',
    slab: SLABS[0],
    sketch: 'M 30 110 L 210 110 L 210 175 M 30 110 L 65 80 L 245 80 L 210 110 M 245 80 L 245 145 L 210 175',
  },
  {
    title: 'Blat și contra-blat bucătărie',
    material: 'Granit Nero Assoluto · 30 mm',
    slab: SLABS[1],
    sketch: 'M 25 140 L 245 140 L 245 154 L 25 154 Z M 25 75 L 245 75 L 245 140',
  },
  {
    title: 'Baie și lavoar monolit',
    material: 'Travertin Roman mat · 20 mm',
    slab: SLABS[2],
    sketch: 'M 40 95 L 230 95 L 230 155 L 40 155 Z M 95 95 L 110 122 L 160 122 L 175 95',
  },
  {
    title: 'Scară interioară consolă',
    material: 'Cuarțit Taj Mahal · 30 mm',
    slab: SLABS[3],
    sketch: 'M 35 160 L 105 160 L 105 130 L 175 130 L 175 100 L 240 100',
  },
];

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'acasa', label: 'Acasă' },
  { id: 'produse', label: 'Produse' },
  { id: 'servicii', label: 'Servicii' },
  { id: 'proiecte', label: 'Proiecte' },
  { id: 'despre', label: 'Despre' },
  { id: 'contact', label: 'Contact' },
];

/** Subtle Macchia Aperta (bookmatched marble vein) background motif */
function BookmatchVeins() {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      className="absolute inset-0 w-full h-full pointer-events-none select-none animate-vein-breath"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Left slab vein */}
      <path
        d="M 600 0 C 520 140, 410 210, 260 360 C 170 450, 90 520, 0 600"
        stroke="#9A7B4F"
        strokeWidth="1.2"
      />
      <path
        d="M 600 120 C 540 240, 460 310, 340 460"
        stroke="#181715"
        strokeWidth="0.7"
      />
      {/* Mirrored right slab vein (Macchia Aperta) */}
      <path
        d="M 600 0 C 680 140, 790 210, 940 360 C 1030 450, 1110 520, 1200 600"
        stroke="#9A7B4F"
        strokeWidth="1.2"
      />
      <path
        d="M 600 120 C 660 240, 740 310, 860 460"
        stroke="#181715"
        strokeWidth="0.7"
      />
      {/* Bookmatch center seam */}
      <line x1="600" y1="0" x2="600" y2="600" stroke="#9A7B4F" strokeWidth="0.6" strokeDasharray="6 6" />
    </svg>
  );
}

export function App() {
  const [page, setPage] = useState<PageId>('acasa');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeEdge, setActiveEdge] = useState<number>(0);

  // Auto-cycle hero slabs
  useEffect(() => {
    if (isPaused || page !== 'acasa') return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLABS.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [isPaused, activeIndex, page]);

  // Close burger on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navigate = (next: PageId) => {
    setPage(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeSlab = SLABS[activeIndex];
  const currentEdge = EDGE_PROFILES[activeEdge];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#EFECE6] text-[#181715]">
      {/* Hidden SVG Mineral Filters for tactile stone grain */}
      <svg className="sr-only" aria-hidden="true">
        <defs>
          <filter id="vein-marble" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.014 0.045" numOctaves="4" seed="8" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.90  0 1 0 0 0.88  0 0 1 0 0.84  0 0 0 0.22 0"
            />
          </filter>
          <filter id="grain-granite" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="4" />
            <feColorMatrix
              type="matrix"
              values="0.25 0 0 0 0.12  0 0.25 0 0 0.12  0 0 0.25 0 0.12  0 0 0 0.32 0"
            />
          </filter>
          <filter id="vein-travertine" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="turbulence" baseFrequency="0.006 0.095" numOctaves="3" seed="14" />
            <feColorMatrix
              type="matrix"
              values="0.8 0 0 0 0.76  0 0.75 0 0 0.70  0 0 0.65 0 0.60  0 0 0 0.25 0"
            />
          </filter>
          <filter id="vein-quartzite" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="4" seed="21" />
            <feColorMatrix
              type="matrix"
              values="0.9 0 0 0 0.84  0 0.88 0 0 0.80  0 0 0.82 0 0.74  0 0 0 0.24 0"
            />
          </filter>
        </defs>
      </svg>

      {/* ─── Header (Desktop: Nav Bar Only | Mobile: Burger Only) ─── */}
      <header className="sticky top-0 z-50 bg-[#EFECE6]/95 backdrop-blur-sm border-b border-[#D5CFC4] px-5 sm:px-12 py-3.5 sm:py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('acasa')}
            className="font-display text-2xl sm:text-3xl font-medium tracking-normal text-[#181715] cursor-pointer"
          >
            Set in Stone
          </button>

          {/* Desktop Only: Nav Links + Phone CTA */}
          <div className="hidden md:flex items-center gap-7 text-sm text-[#5C5852]">
            <nav className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigate(item.id)}
                  className={`cursor-pointer transition-colors ${
                    page === item.id
                      ? 'text-[#181715] font-medium underline underline-offset-8 decoration-[#9A7B4F]'
                      : 'hover:text-[#181715]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <a
              href="tel:+40740647532"
              className="px-4 py-2 bg-[#181715] text-[#EFECE6] text-sm font-medium hover:bg-[#2E2C28] transition-colors"
            >
              0740 647 532
            </a>
          </div>

          {/* Mobile Only: Minimal 2-Line Burger Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
            className="flex md:hidden items-center gap-2.5 px-3 py-2 border border-[#D5CFC4] hover:border-[#181715] text-[#181715] transition-colors cursor-pointer"
          >
            <span className="text-xs font-medium tracking-wide">
              {menuOpen ? 'Închide' : 'Meniu'}
            </span>
            <span className="w-4 h-2.5 flex flex-col justify-between">
              <span
                className={`block h-[1.5px] bg-[#181715] transition-transform duration-300 ${
                  menuOpen ? 'translate-y-[4px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] bg-[#181715] transition-transform duration-300 ${
                  menuOpen ? '-translate-y-[4px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ─── Mobile Burger Menu Overlay ─── */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Meniu"
          className="fixed inset-0 z-40 md:hidden bg-[#181715] text-[#EFECE6] pt-24 pb-10 px-6 flex flex-col justify-between"
        >
          <div className="max-w-6xl w-full mx-auto my-auto">
            <nav className="grid grid-cols-1 gap-y-4 border-y border-[#EFECE6]/15 py-8">
              {NAV_ITEMS.map((item) => {
                const isActive = page === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigate(item.id)}
                    className={`font-display text-4xl text-left py-1 transition-all duration-200 cursor-pointer ${
                      isActive ? 'text-[#C4A474]' : 'text-[#EFECE6]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="max-w-6xl w-full mx-auto flex items-center justify-between gap-4 text-sm text-[#A39E93]">
            <span>Cluj-Napoca</span>
            <div className="flex items-center gap-5">
              <a href="tel:+40740647532" className="text-[#EFECE6] font-medium">
                0740 647 532
              </a>
              <a
                href="https://wa.me/40740647532"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4A474]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* =========================================================
            1. ACASĂ (Zero-scroll mobile viewport + Full-size Stone Slabs)
           ========================================================= */}
        {page === 'acasa' && (
          <>
            <section className="relative px-5 sm:px-12 pt-5 pb-7 sm:py-20 border-b border-[#D5CFC4] overflow-hidden">
              <BookmatchVeins />

              <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Left Column: Statement & Clean Call to Action */}
                <div className="lg:col-span-6 space-y-3.5 sm:space-y-6 animate-monolith-1">
                  <h1 className="font-display text-[36px] sm:text-6xl lg:text-[66px] font-normal leading-[1.04] text-[#181715]">
                    Piatră naturală tăiată la cotă și montată curat.
                  </h1>

                  <p className="text-sm sm:text-lg text-[#5C5852] leading-snug sm:leading-relaxed max-w-lg">
                    Executăm blaturi de bucătărie, scări, glafuri și garduri modulare din lastre de marmură, granit, travertin și cuarțit.
                  </p>

                  {/* Clean Hero Call to Action (Side-by-side on mobile, inline on desktop) */}
                  <div className="pt-1 sm:pt-2 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5">
                    <a
                      href="tel:+40740647532"
                      className="px-4 sm:px-7 py-3.5 sm:py-4 bg-[#181715] text-[#EFECE6] text-xs sm:text-sm font-medium text-center transition-all shadow-[0_10px_28px_-10px_rgba(24,23,21,0.45)] hover:bg-[#2E2C28]"
                    >
                      Sună: 0740 647 532
                    </a>

                    <button
                      type="button"
                      onClick={() => navigate('produse')}
                      className="px-4 sm:px-7 py-3.5 sm:py-4 border border-[#181715] bg-[#EFECE6] text-[#181715] text-xs sm:text-sm font-medium text-center hover:bg-[#E4DFD5] transition-colors cursor-pointer"
                    >
                      Vezi lastrele
                    </button>
                  </div>
                </div>

                {/* Right Column: Full-Size Kinetic Expanding Stone Slabs */}
                <div
                  className="lg:col-span-6"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="flex gap-2.5 sm:gap-3 h-80 sm:h-96">
                    {SLABS.map((slab, idx) => {
                      const isActive = idx === activeIndex;
                      const riseClass =
                        idx === 0
                          ? 'animate-monolith-1'
                          : idx === 1
                          ? 'animate-monolith-2'
                          : idx === 2
                          ? 'animate-monolith-3'
                          : 'animate-monolith-4';

                      return (
                        <button
                          key={slab.id}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          style={{
                            background: slab.baseGradient,
                            color: slab.textColor,
                          }}
                          className={`slab-transition ${riseClass} relative overflow-hidden text-left p-4 sm:p-5 flex flex-col justify-between cursor-pointer border ${
                            isActive
                              ? 'flex-[2.7] border-[#181715] shadow-[0_20px_45px_-18px_rgba(24,23,21,0.35)]'
                              : 'flex-1 border-[#D5CFC4] opacity-80 hover:opacity-100'
                          }`}
                        >
                          {/* Mineral Grain Filter */}
                          <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            aria-hidden="true"
                          >
                            <rect width="100%" height="100%" filter={`url(#${slab.filterId})`} />
                          </svg>

                          {/* Fine Architectural Vein Geometry */}
                          <svg
                            viewBox="0 0 300 380"
                            fill="none"
                            preserveAspectRatio="none"
                            className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
                            aria-hidden="true"
                          >
                            <path
                              d={slab.veinPath}
                              stroke={slab.accentLine}
                              strokeWidth="1.2"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>

                          {/* Discrete Raking Sunlight Sheen on Active Slab */}
                          {isActive && (
                            <div
                              className="animate-raking-light absolute inset-y-0 -left-1/4 w-1/2 pointer-events-none"
                              style={{
                                background:
                                  slab.id === 'granit'
                                    ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)'
                                    : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)',
                              }}
                            />
                          )}

                          {/* Top Caliper Mark & Origin */}
                          <div className="relative z-10 flex items-center justify-between gap-2">
                            <span
                              className="text-xs tracking-wide transition-opacity duration-300 truncate"
                              style={{
                                color: slab.mutedColor,
                                opacity: isActive ? 1 : 0,
                              }}
                            >
                              {slab.origin}
                            </span>

                            {/* 45° Miter Corner Graphic */}
                            {isActive && (
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                className="shrink-0"
                                aria-hidden="true"
                              >
                                <path
                                  d="M2 20 L20 20 L20 2 Z"
                                  stroke={slab.accentLine}
                                  strokeWidth="1.2"
                                  className="animate-draw-line"
                                />
                              </svg>
                            )}
                          </div>

                          {/* Bottom Title & Finish Spec */}
                          <div className="relative z-10 space-y-1">
                            <span className="font-display text-xl sm:text-2xl font-medium block leading-tight">
                              {slab.name}
                            </span>

                            {isActive && (
                              <p
                                className="text-xs leading-snug line-clamp-2"
                                style={{ color: slab.mutedColor }}
                              >
                                {slab.finish}
                              </p>
                            )}
                          </div>

                          {/* Bottom Brass Progress Hairline */}
                          {isActive && !isPaused && (
                            <span
                              key={`progress-${activeIndex}`}
                              className="animate-slab-progress absolute bottom-0 left-0 right-0 h-[2px]"
                              style={{ backgroundColor: slab.accentLine }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Slab Architectural Caption Bar */}
                  <div className="mt-4 pt-3.5 border-t border-[#D5CFC4] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-sm">
                    <div>
                      <span className="font-medium text-[#181715]">{activeSlab.name}</span>
                      <span className="text-[#5C5852]"> — {activeSlab.use}</span>
                    </div>
                    <span className="text-xs font-medium text-[#9A7B4F] shrink-0">
                      Grosime lastră: {activeSlab.thickness}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── Lucrări pe comandă (Quiet Architectural Ledger) ─── */}
            <section className="px-6 sm:px-12 py-16 sm:py-20 border-b border-[#D5CFC4]">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-baseline justify-between mb-10">
                  <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#181715]">
                    Lucrări pe comandă
                  </h2>
                  <button
                    type="button"
                    onClick={() => navigate('servicii')}
                    className="text-sm text-[#9A7B4F] hover:text-[#181715] transition-colors cursor-pointer"
                  >
                    Detalii prelucrare →
                  </button>
                </div>

                <div className="divide-y divide-[#D5CFC4] border-t border-b border-[#D5CFC4]">
                  {WORKS.map((work) => (
                    <button
                      key={work.title}
                      type="button"
                      onClick={() => navigate('proiecte')}
                      className="w-full text-left group py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 transition-colors hover:bg-[#E8E3D9]/50 px-2 -mx-2 cursor-pointer"
                    >
                      <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#181715] group-hover:translate-x-1 transition-transform duration-300">
                        {work.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#5C5852] max-w-md">
                        {work.detail}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* =========================================================
            2. PRODUSE (Concise 6-Slab Material Collection)
           ========================================================= */}
        {page === 'produse' && (
          <section className="relative px-6 sm:px-12 py-14 sm:py-20 border-b border-[#D5CFC4] overflow-hidden">
            <BookmatchVeins />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#9A7B4F] mb-2">Colecție</p>
                  <h1 className="font-display text-4xl sm:text-5xl font-normal text-[#181715]">
                    Lastre și materiale în stoc
                  </h1>
                </div>
                <p className="text-sm text-[#5C5852]">
                  Tăiate la cotă în atelierul din Cluj-Napoca.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {ALL_MATERIALS.map((mat, idx) => (
                  <div
                    key={mat.id}
                    className={`border border-[#D5CFC4] bg-[#F5F2EB] flex flex-col justify-between animate-monolith-${(idx % 4) + 1}`}
                  >
                    {/* Tactile Procedural Slab Swatch */}
                    <div
                      style={{ background: mat.baseGradient, color: mat.textColor }}
                      className="relative h-48 p-5 flex flex-col justify-between overflow-hidden group"
                    >
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                        <rect width="100%" height="100%" filter={`url(#${mat.filterId})`} />
                      </svg>
                      <svg
                        viewBox="0 0 300 380"
                        fill="none"
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
                        aria-hidden="true"
                      >
                        <path
                          d={mat.veinPath}
                          stroke={mat.accentLine}
                          strokeWidth="1.2"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>

                      <div className="relative z-10 flex items-center justify-between text-xs">
                        <span style={{ color: mat.mutedColor }}>{mat.origin}</span>
                        <span
                          className="px-2 py-0.5 border text-[11px]"
                          style={{ borderColor: mat.accentLine, color: mat.textColor }}
                        >
                          {mat.thickness}
                        </span>
                      </div>

                      <h2 className="relative z-10 font-display text-3xl font-normal">
                        {mat.name}
                      </h2>
                    </div>

                    {/* Concise 2-Line Spec Footer */}
                    <div className="p-5 space-y-3 bg-[#EFECE6]">
                      <p className="text-xs text-[#9A7B4F] font-medium">{mat.finish}</p>
                      <p className="text-sm text-[#5C5852] leading-snug">{mat.use}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            3. SERVICII (3 Concise Steps + Claude Vector Edge Profiles)
           ========================================================= */}
        {page === 'servicii' && (
          <section className="relative px-6 sm:px-12 py-14 sm:py-20 border-b border-[#D5CFC4] overflow-hidden">
            <BookmatchVeins />
            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#9A7B4F] mb-2">Servicii</p>
                <h1 className="font-display text-4xl sm:text-5xl font-normal text-[#181715]">
                  De la măsurătoare la montaj.
                </h1>
              </div>

              {/* 3 Concise Rows */}
              <div className="divide-y divide-[#D5CFC4] border-y border-[#D5CFC4]">
                {[
                  {
                    num: '01',
                    title: 'Consultanță și selecție lastre',
                    desc: 'Alegem direct în depozit lastra potrivită pentru bucătărie, scară sau baie.',
                  },
                  {
                    num: '02',
                    title: 'Măsurători și debitare CNC la 45°',
                    desc: 'Releveu la milimetru, decupaje pentru chiuvetă/plită și profilare cant.',
                  },
                  {
                    num: '03',
                    title: 'Transport și montaj în Cluj-Napoca',
                    desc: 'Livrare cu utilaje proprii, montaj curat și impermeabilizare profesională.',
                  },
                ].map((s) => (
                  <div
                    key={s.num}
                    className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-medium text-[#9A7B4F]">{s.num}</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#181715]">
                        {s.title}
                      </h2>
                    </div>
                    <p className="text-sm sm:text-base text-[#5C5852] max-w-md">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Minimal Claude-Style Vector Edge Profile Switcher */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-xs uppercase tracking-widest text-[#9A7B4F]">
                    Prelucrare cant
                  </p>
                  <h2 className="font-display text-3xl font-normal text-[#181715]">
                    Profile de muchie executate în atelier
                  </h2>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {EDGE_PROFILES.map((edge, idx) => (
                      <button
                        key={edge.id}
                        type="button"
                        onClick={() => setActiveEdge(idx)}
                        className={`px-4 py-2 text-xs font-medium border transition-colors cursor-pointer ${
                          activeEdge === idx
                            ? 'bg-[#181715] text-[#EFECE6] border-[#181715]'
                            : 'bg-transparent text-[#181715] border-[#D5CFC4] hover:border-[#181715]'
                        }`}
                      >
                        {edge.name}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-[#5C5852] pt-1">{currentEdge.spec}</p>
                </div>

                {/* Animated Vector Cross-Section */}
                <div className="lg:col-span-6 border border-[#D5CFC4] bg-[#E4DFD5]/60 p-6 flex items-center justify-between">
                  <svg
                    key={currentEdge.id}
                    viewBox="0 0 240 160"
                    fill="none"
                    className="w-full h-36"
                    aria-label={currentEdge.name}
                  >
                    <path
                      d={currentEdge.svgPath}
                      stroke="#181715"
                      strokeWidth="1.75"
                      className="animate-draw-line"
                    />
                    <circle cx="190" cy="50" r="3" fill="#9A7B4F" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            4. PROIECTE (4 Clean Architectural Stone Works)
           ========================================================= */}
        {page === 'proiecte' && (
          <section className="relative px-6 sm:px-12 py-14 sm:py-20 border-b border-[#D5CFC4] overflow-hidden">
            <BookmatchVeins />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="mb-12">
                <p className="text-xs uppercase tracking-widest text-[#9A7B4F] mb-2">Portofoliu</p>
                <h1 className="font-display text-4xl sm:text-5xl font-normal text-[#181715]">
                  Lucrări montate în Cluj-Napoca
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((proj, idx) => (
                  <div
                    key={proj.title}
                    className={`border border-[#D5CFC4] animate-monolith-${idx + 1}`}
                  >
                    {/* Stone Slab + Minimal Vector Elevation */}
                    <div
                      style={{
                        background: proj.slab.baseGradient,
                        color: proj.slab.textColor,
                      }}
                      className="relative h-56 p-6 flex flex-col justify-between overflow-hidden"
                    >
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                        <rect width="100%" height="100%" filter={`url(#${proj.slab.filterId})`} />
                      </svg>
                      <svg
                        viewBox="0 0 300 380"
                        fill="none"
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full pointer-events-none opacity-35"
                        aria-hidden="true"
                      >
                        <path
                          d={proj.slab.veinPath}
                          stroke={proj.slab.accentLine}
                          strokeWidth="1.2"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>

                      {/* Clean Claude-Style Architectural Line Sketch */}
                      <svg
                        viewBox="0 0 270 200"
                        fill="none"
                        className="relative z-10 w-44 h-32 self-end opacity-85"
                        aria-hidden="true"
                      >
                        <path
                          d={proj.sketch}
                          stroke={proj.slab.accentLine}
                          strokeWidth="1.5"
                          className="animate-draw-line"
                        />
                      </svg>

                      <div className="relative z-10 flex items-baseline justify-between gap-4">
                        <h2 className="font-display text-2xl sm:text-3xl font-normal">
                          {proj.title}
                        </h2>
                        <span className="text-xs shrink-0" style={{ color: proj.slab.mutedColor }}>
                          {proj.material}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            5. DESPRE (1 Concise Statement + 3 Crisp Metrics)
           ========================================================= */}
        {page === 'despre' && (
          <section className="relative px-6 sm:px-12 py-16 sm:py-24 border-b border-[#D5CFC4] overflow-hidden">
            <BookmatchVeins />
            <div className="relative z-10 max-w-6xl mx-auto space-y-12">
              <div className="max-w-2xl space-y-5">
                <p className="text-xs uppercase tracking-widest text-[#9A7B4F]">Despre atelier</p>
                <h1 className="font-display text-4xl sm:text-6xl font-normal leading-[1.06] text-[#181715]">
                  20 de ani de prelucrare a pietrei naturale în Cluj-Napoca.
                </h1>
                <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed">
                  Selectăm direct lastre de marmură, granit, travertin și cuarțit pe care le debităm la milimetru în atelierul nostru de pe Str. Dumitru Georgescu-Kiriac.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#D5CFC4]">
                <div>
                  <span className="font-display text-4xl text-[#181715] block">20+ ani</span>
                  <span className="text-sm text-[#5C5852]">Experiență în debitare și montaj</span>
                </div>
                <div>
                  <span className="font-display text-4xl text-[#181715] block">45° CNC</span>
                  <span className="text-sm text-[#5C5852]">Îmbinări continue la milimetru</span>
                </div>
                <div>
                  <span className="font-display text-4xl text-[#181715] block">Cluj-Napoca</span>
                  <span className="text-sm text-[#5C5852]">Depozit de lastre și atelier propriu</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            6. CONTACT (Minimal Direct Atelier Contact)
           ========================================================= */}
        {page === 'contact' && (
          <section className="relative px-6 sm:px-12 py-16 sm:py-24 border-b border-[#D5CFC4] overflow-hidden">
            <BookmatchVeins />
            <div className="relative z-10 max-w-6xl mx-auto space-y-8">
              <p className="text-xs uppercase tracking-widest text-[#9A7B4F]">Contact</p>
              <h1 className="font-display text-4xl sm:text-6xl font-normal text-[#181715] max-w-3xl">
                Str. Dumitru Georgescu-Kiriac 60–62, Cluj-Napoca
              </h1>
              <p className="text-base text-[#5C5852]">
                Luni – Vineri, 08:00 – 16:30 &nbsp;|&nbsp; info@setinstone.ro
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="tel:+40740647532"
                  className="px-7 py-4 bg-[#181715] text-[#EFECE6] text-sm font-medium hover:bg-[#2E2C28] transition-colors"
                >
                  Sună: +40 740 647 532
                </a>
                <a
                  href="https://wa.me/40740647532?text=Bun%C4%83%20ziua%2C%20doresc%20o%20ofert%C4%83%20pentru%20o%20lucrare%20din%20piatr%C4%83%20natural%C4%83."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 border border-[#181715] text-[#181715] text-sm font-medium hover:bg-[#E4DFD5] transition-colors"
                >
                  Scrie pe WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/McAHdn8DMRtoTvAW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 border border-[#D5CFC4] text-[#5C5852] text-sm font-medium hover:border-[#181715] hover:text-[#181715] transition-colors"
                >
                  Deschide în Google Maps
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ─── Shared Bottom Atelier Strip (on non-contact pages) ─── */}
        {page !== 'contact' && (
          <section className="px-6 sm:px-12 py-14 sm:py-18 bg-[#E4DFD5]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-2">
                <p className="text-sm text-[#5C5852]">Vizită la depozitul de lastre</p>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#181715]">
                  Str. Dumitru Georgescu-Kiriac 60–62, Cluj-Napoca
                </h2>
                <p className="text-sm text-[#5C5852]">
                  Luni – Vineri, 08:00 – 16:30 &nbsp;|&nbsp; info@setinstone.ro
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="tel:+40740647532"
                  className="px-6 py-3.5 bg-[#181715] text-[#EFECE6] text-sm font-medium hover:bg-[#2E2C28] transition-colors"
                >
                  Sună: +40 740 647 532
                </a>
                <a
                  href="https://maps.app.goo.gl/McAHdn8DMRtoTvAW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-[#181715] text-[#181715] text-sm font-medium hover:bg-[#EFECE6] transition-colors"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#D5CFC4] px-6 sm:px-12 py-8 text-sm text-[#5C5852]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>Set in Stone, Cluj-Napoca</span>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/set_in_s.t.o.n.e"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#181715] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@set_in_s.t.o.n.e"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#181715] transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577401417193"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#181715] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
