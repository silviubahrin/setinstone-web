import { useState } from 'react';

interface StoneSlab {
  id: string;
  name: string;
  finish: string;
  thickness: string;
  use: string;
  baseColor: string;
  veinColor: string;
  textColor: string;
  filterId: string;
}

const SLABS: StoneSlab[] = [
  {
    id: 'marmura',
    name: 'Marmură',
    finish: 'Lustruită sau mată (honed)',
    thickness: 'Lastre de 20 mm și 30 mm',
    use: 'Insule de bucătărie, băi, lavoare și trepte interioare',
    baseColor: '#F4F1EB',
    veinColor: '#B8B2A6',
    textColor: '#1C1B19',
    filterId: 'vein-marble',
  },
  {
    id: 'granit',
    name: 'Granit',
    finish: 'Lustruit, periat sau fiamat antiderapant',
    thickness: 'Lastre de 20 mm și 30 mm',
    use: 'Blaturi de bucătărie, scări exterioare, glafuri și socluri',
    baseColor: '#232220',
    veinColor: '#4A4742',
    textColor: '#EFECE6',
    filterId: 'grain-granite',
  },
  {
    id: 'travertin',
    name: 'Travertin',
    finish: 'Chituit mat, periat sau antichizat',
    thickness: 'Lastre de 20 mm',
    use: 'Placări de baie, livinguri, fațade și terase',
    baseColor: '#DDD4C3',
    veinColor: '#B5A892',
    textColor: '#1C1B19',
    filterId: 'vein-travertine',
  },
  {
    id: 'cuartit',
    name: 'Cuarțit și Compozit',
    finish: 'Suprafață satinată, non-poroasă',
    thickness: 'Lastre de 20 mm',
    use: 'Blaturi de bucătărie cu rezistență totală la pete și acizi',
    baseColor: '#E6E1D6',
    veinColor: '#C4BBA9',
    textColor: '#1C1B19',
    filterId: 'vein-quartzite',
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
  const [activeSlabId, setActiveSlabId] = useState<string>('marmura');
  const activeSlab = SLABS.find((s) => s.id === activeSlabId) || SLABS[0];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#EFECE6] text-[#1C1B19]">
      {/* Hidden SVG Mineral Filters for authentic tactile stone grain */}
      <svg className="sr-only" aria-hidden="true">
        <defs>
          <filter id="vein-marble" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.04" numOctaves="4" seed="8" result="noise" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.92  0 1 0 0 0.90  0 0 1 0 0.87  0 0 0 0.22 0"
            />
          </filter>
          <filter id="grain-granite" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="3" seed="2" result="noise" />
            <feColorMatrix
              type="matrix"
              values="0.2 0 0 0 0.1  0 0.2 0 0 0.1  0 0 0.2 0 0.1  0 0 0 0.35 0"
            />
          </filter>
          <filter id="vein-travertine" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="turbulence" baseFrequency="0.006 0.09" numOctaves="3" seed="14" />
            <feColorMatrix
              type="matrix"
              values="0.8 0 0 0 0.78  0 0.75 0 0 0.72  0 0 0.65 0 0.64  0 0 0 0.25 0"
            />
          </filter>
          <filter id="vein-quartzite" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.025" numOctaves="4" seed="21" />
            <feColorMatrix
              type="matrix"
              values="0.9 0 0 0 0.84  0 0.88 0 0 0.81  0 0 0.82 0 0.76  0 0 0 0.24 0"
            />
          </filter>
        </defs>
      </svg>

      {/* ─── Header ─── */}
      <header className="border-b border-[#D5CFC4] px-6 sm:px-12 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="font-display text-2xl sm:text-3xl font-medium tracking-normal text-[#1C1B19]">
            Set in Stone
          </a>

          <nav className="flex items-center gap-7 text-sm text-[#5C5852]">
            <a href="#lucrari" className="hidden sm:inline hover:text-[#1C1B19] transition-colors">
              Lucrări
            </a>
            <a href="#atelier" className="hidden sm:inline hover:text-[#1C1B19] transition-colors">
              Atelier Cluj
            </a>
            <a
              href="tel:+40740647532"
              className="px-4 py-2 bg-[#1C1B19] text-[#EFECE6] text-sm font-medium hover:bg-[#33312E] transition-colors"
            >
              0740 647 532
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* ─── Hero: Editorial Statement + Clean CTA + Interactive Stone Slabs ─── */}
        <section className="px-6 sm:px-12 py-14 sm:py-24 border-b border-[#D5CFC4]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Statement & Clean Call to Action */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm text-[#5C5852]">
                Atelier de prelucrare și montaj în Cluj-Napoca
              </p>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-normal leading-[1.06] text-[#1C1B19]">
                Piatră naturală tăiată la cotă și montată curat.
              </h1>

              <p className="text-base sm:text-lg text-[#5C5852] leading-relaxed max-w-lg">
                Executăm blaturi de bucătărie, scări, glafuri și garduri modulare din lastre de marmură, granit, travertin și cuarțit.
              </p>

              {/* Clean Hero Call to Action */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+40740647532"
                  className="px-6 py-3.5 bg-[#1C1B19] text-[#EFECE6] text-sm font-medium hover:bg-[#33312E] transition-colors"
                >
                  Sună la atelier: 0740 647 532
                </a>

                <a
                  href="https://wa.me/40740647532?text=Bun%C4%83%20ziua%2C%20doresc%20o%20ofert%C4%83%20pentru%20o%20lucrare%20din%20piatr%C4%83%20natural%C4%83."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-[#1C1B19] text-[#1C1B19] text-sm font-medium hover:bg-[#E4DFD5] transition-colors"
                >
                  Scrie pe WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Monolithic Stone Slab Swatches */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-4 gap-2 sm:gap-3 h-72 sm:h-88">
                {SLABS.map((slab) => {
                  const isActive = slab.id === activeSlab.id;
                  return (
                    <button
                      key={slab.id}
                      type="button"
                      onClick={() => setActiveSlabId(slab.id)}
                      style={{
                        backgroundColor: slab.baseColor,
                        color: slab.textColor,
                      }}
                      className={`relative overflow-hidden text-left p-4 flex flex-col justify-between transition-all cursor-pointer border ${
                        isActive
                          ? 'border-[#1C1B19] ring-1 ring-[#1C1B19]'
                          : 'border-[#D5CFC4] opacity-80 hover:opacity-100'
                      }`}
                    >
                      {/* Mineral Texture Layer */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                        <rect width="100%" height="100%" filter={`url(#${slab.filterId})`} />
                      </svg>

                      <span className="relative z-10 text-xs opacity-75">
                        {isActive ? 'Selectat' : ''}
                      </span>

                      <span className="relative z-10 font-display text-lg sm:text-xl font-medium leading-tight">
                        {slab.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Slab Caption */}
              <div className="mt-4 pt-4 border-t border-[#D5CFC4] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-sm">
                <div>
                  <span className="font-medium text-[#1C1B19]">{activeSlab.name}</span>
                  <span className="text-[#5C5852]"> — {activeSlab.use}</span>
                </div>
                <span className="text-xs text-[#5C5852] shrink-0">
                  {activeSlab.thickness}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Lucrări pe comandă (Quiet Architectural Ledger) ─── */}
        <section id="lucrari" className="px-6 sm:px-12 py-16 sm:py-20 border-b border-[#D5CFC4]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1C1B19] mb-10">
              Lucrări pe comandă
            </h2>

            <div className="divide-y divide-[#D5CFC4] border-t border-b border-[#D5CFC4]">
              {WORKS.map((work) => (
                <div
                  key={work.title}
                  className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1C1B19]">
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
              <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#1C1B19]">
                Str. Dumitru Georgescu-Kiriac 60–62, Cluj-Napoca
              </h2>
              <p className="text-sm sm:text-base text-[#5C5852]">
                Luni – Vineri, 08:00 – 16:30 &nbsp;|&nbsp; info@setinstone.ro
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+40740647532"
                className="px-6 py-3.5 bg-[#1C1B19] text-[#EFECE6] text-sm font-medium hover:bg-[#33312E] transition-colors"
              >
                Sună: +40 740 647 532
              </a>
              <a
                href="https://maps.app.goo.gl/McAHdn8DMRtoTvAW9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#1C1B19] text-[#1C1B19] text-sm font-medium hover:bg-[#EFECE6] transition-colors"
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
              className="hover:text-[#1C1B19] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@set_in_s.t.o.n.e"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1C1B19] transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577401417193"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1C1B19] transition-colors"
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
