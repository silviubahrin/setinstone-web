import { useState, useEffect } from 'react';

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

const WORKS = [
  {
    title: 'Blaturi și insule de bucătărie',
    detail: 'Îmbinări la 45 de grade (waterfall), decupaje pentru plită și chiuvetă sub blat.',
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

export function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Discrete auto-cycle through stone slabs unless hovered/interacted
  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLABS.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [isPaused, activeIndex]);

  const activeSlab = SLABS[activeIndex];

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

      {/* ─── Header ─── */}
      <header className="border-b border-[#D5CFC4] px-6 sm:px-12 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="#"
            className="font-display text-2xl sm:text-3xl font-medium tracking-normal text-[#181715]"
          >
            Set in Stone
          </a>

          <nav className="flex items-center gap-7 text-sm text-[#5C5852]">
            <a href="#lucrari" className="hidden sm:inline hover:text-[#181715] transition-colors">
              Lucrări
            </a>
            <a href="#atelier" className="hidden sm:inline hover:text-[#181715] transition-colors">
              Atelier Cluj
            </a>
            <a
              href="tel:+40740647532"
              className="px-4 py-2 bg-[#181715] text-[#EFECE6] text-sm font-medium hover:bg-[#2E2C28] transition-colors"
            >
              0740 647 532
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* ─── Hero: Editorial Statement + Clean CTA + Kinetic Stone Monoliths ─── */}
        <section className="px-6 sm:px-12 py-12 sm:py-22 border-b border-[#D5CFC4]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Statement & Clean Call to Action */}
            <div className="lg:col-span-6 space-y-6 animate-monolith-1">
              <div className="inline-flex items-center gap-2.5 text-sm text-[#5C5852]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9A7B4F] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9A7B4F]" />
                </span>
                <span>Atelier de prelucrare și montaj în Cluj-Napoca</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-[66px] font-normal leading-[1.04] text-[#181715]">
                Piatră naturală tăiată la cotă și montată curat.
              </h1>

              <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed max-w-lg">
                Executăm blaturi de bucătărie, scări, glafuri și garduri modulare din lastre de marmură, granit, travertin și cuarțit.
              </p>

              {/* Clean Hero Call to Action */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="tel:+40740647532"
                  className="group relative overflow-hidden px-7 py-4 bg-[#181715] text-[#EFECE6] text-sm font-medium transition-all shadow-[0_10px_28px_-10px_rgba(24,23,21,0.45)] hover:shadow-[0_14px_32px_-8px_rgba(24,23,21,0.6)] hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Sună la atelier: 0740 647 532</span>
                </a>

                <a
                  href="https://wa.me/40740647532?text=Bun%C4%83%20ziua%2C%20doresc%20o%20ofert%C4%83%20pentru%20o%20lucrare%20din%20piatr%C4%83%20natural%C4%83."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 border border-[#181715] bg-[#EFECE6] text-[#181715] text-sm font-medium hover:bg-[#E4DFD5] transition-colors"
                >
                  Scrie pe WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Kinetic Expanding Stone Slabs */}
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
                        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
                        aria-hidden="true"
                        preserveAspectRatio="none"
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
        <section id="lucrari" className="px-6 sm:px-12 py-16 sm:py-20 border-b border-[#D5CFC4]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#181715] mb-10">
              Lucrări pe comandă
            </h2>

            <div className="divide-y divide-[#D5CFC4] border-t border-b border-[#D5CFC4]">
              {WORKS.map((work) => (
                <div
                  key={work.title}
                  className="group py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 transition-colors hover:bg-[#E8E3D9]/50 px-2 -mx-2"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#181715] group-hover:translate-x-1 transition-transform duration-300">
                    {work.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C5852] max-w-md">
                    {work.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Atelier & Contact ─── */}
        <section id="atelier" className="px-6 sm:px-12 py-16 sm:py-20 bg-[#E4DFD5]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-3">
              <p className="text-sm text-[#5C5852]">Vizită la depozitul de lastre</p>
              <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#181715]">
                Str. Dumitru Georgescu-Kiriac 60–62, Cluj-Napoca
              </h2>
              <p className="text-sm sm:text-base text-[#5C5852]">
                Luni – Vineri, 08:00 – 16:30 &nbsp;|&nbsp; info@setinstone.ro
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+40740647532"
                className="px-6 py-3.5 bg-[#181715] text-[#EFECE6] text-sm font-medium hover:bg-[#2E2C28] transition-colors shadow-[0_8px_20px_-8px_rgba(24,23,21,0.4)]"
              >
                Sună: +40 740 647 532
              </a>
              <a
                href="https://maps.app.goo.gl/McAHdn8DMRtoTvAW9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#181715] text-[#181715] text-sm font-medium hover:bg-[#EFECE6] transition-colors"
              >
                Deschide în Google Maps
              </a>
            </div>
          </div>
        </section>
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
