import { useState, useEffect } from 'react';
import type { PageId, ProductItem } from './data/siteData';
import {
  HERO_SLABS,
  PRODUCTS_CATALOG,
  PORTFOLIO_PROJECTS,
  ABOUT_PILLARS,
  TESTIMONIALS,
  CONTACT_INFO,
} from './data/siteData';
import {
  SetInStoneLogo,
  BookmatchWatermark,
  QuarryContourPattern,
  StoneMarquee,
  EdgeProfileShowcase,
  RotatingConsultationSeal,
  CncSlabMotionSvg,
} from './components/StonePatterns';
import { HeaderAndHamburger } from './components/HeaderAndHamburger';

const PRODUCT_CATEGORIES = [
  'Toate produsele',
  'Blaturi Bucătărie',
  'Dale & Pavaj',
  'Scări & Trepte',
  'Monumente Funerare',
  'Borduri & Margini',
  'Placaj Fațadă',
] as const;

const PROJECT_FILTERS = ['Toate', 'Rezidențial', 'Hospitality', 'Comercial', 'Urban'] as const;

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('acasa');
  const [activeSlabIndex, setActiveSlabIndex] = useState<number>(0);
  const [slabPaused, setSlabPaused] = useState<boolean>(false);

  // Produse page state
  const [selectedCategory, setSelectedCategory] = useState<string>('Toate produsele');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Toate');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);
  const [activeGalleryImg, setActiveGalleryImg] = useState<string>('');

  // Proiecte page state
  const [projectFilter, setProjectFilter] = useState<string>('Toate');

  // Contact form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  // Auto-cycle Hero Slabs on Acasă
  useEffect(() => {
    if (slabPaused || currentPage !== 'acasa') return;
    const timer = window.setInterval(() => {
      setActiveSlabIndex((prev) => (prev + 1) % HERO_SLABS.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [slabPaused, activeSlabIndex, currentPage]);

  const handleNavigate = (page: PageId, categoryFilter?: string) => {
    setActiveProduct(null);
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
      setSelectedMaterial('Toate');
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProductDetail = (product: ProductItem) => {
    setActiveProduct(product);
    setActiveGalleryImg(product.image);
    setCurrentPage('produse');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteForProduct = (productTitle: string) => {
    setMessage(`Solicit ofertă pentru: ${productTitle}`);
    setActiveProduct(null);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Bună ziua SetInStone, doresc o ofertă:`,
      `• Nume: ${firstName} ${lastName}`.trim(),
      phone ? `• Telefon: ${phone}` : '',
      email ? `• Email: ${email}` : '',
      message ? `• Detalii proiect: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `https://wa.me/40740647532?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setFormSent(true);
  };

  const activeSlab = HERO_SLABS[activeSlabIndex];

  const filteredProducts = PRODUCTS_CATALOG.filter((item) => {
    const matchCat =
      selectedCategory === 'Toate produsele' || item.category === selectedCategory;
    const matchMat = selectedMaterial === 'Toate' || item.material === selectedMaterial;
    return matchCat && matchMat;
  });

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (projectFilter === 'Toate') return true;
    return proj.category === projectFilter;
  });

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#EFECE6] text-[#15100A]">
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
              values="0.25 0 0 0 0.12  0 0.25 0 0 0.12  0 0 0.25 0 0.12  0 0 0 0.34 0"
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

      {/* ─── Header & Full-Screen Basalt Hamburger Overlay ─── */}
      <HeaderAndHamburger currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {/* =========================================================
            PAGE 1: ACASĂ (/)
           ========================================================= */}
        {currentPage === 'acasa' && (
          <>
            {/* ─── Hero with Clean CTA & Kinetic Stone Monoliths ─── */}
            <section className="relative px-6 sm:px-12 py-12 sm:py-20 border-b border-[#D5CFC4] overflow-hidden">
              <BookmatchWatermark />

              <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                {/* Left Column: Editorial Statement & Clean Call to Action */}
                <div className="lg:col-span-6 space-y-6 animate-monolith-1">
                  <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C4A07A] opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C4A07A]" />
                    </span>
                    <span>Set in Stone — Frumusețe care Rezistă în Timp</span>
                  </div>

                  <h1 className="font-display text-4xl sm:text-6xl lg:text-[66px] font-normal leading-[1.04] text-[#15100A]">
                    Suprafețe din piatră care definesc arhitectura.
                  </h1>

                  <p className="text-base sm:text-lg text-[#5E5D5C] leading-relaxed max-w-xl">
                    Livrăm soluții complete din marmură, granit, travertin și gresie porțelanată pentru proiecte rezidențiale, comerciale și arhitecturale — de la selecția materialului până la montajul final în Cluj-Napoca.
                  </p>

                  {/* Clean Hero Call to Action */}
                  <div className="pt-1 flex flex-wrap items-center gap-3.5">
                    <button
                      type="button"
                      onClick={() => handleNavigate('produse')}
                      className="px-7 py-4 bg-[#15100A] text-[#FBF4EF] text-sm font-medium transition-all shadow-[0_10px_28px_-10px_rgba(21,16,10,0.45)] hover:bg-[#2A2016] cursor-pointer"
                    >
                      Explorează Catalogul
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavigate('proiecte')}
                      className="px-7 py-4 border border-[#15100A] bg-[#FBF4EF]/80 text-[#15100A] text-sm font-medium hover:bg-[#E4DFD5] transition-colors cursor-pointer"
                    >
                      Vezi Proiecte
                    </button>

                    <a
                      href={`tel:${CONTACT_INFO.phoneHref}`}
                      className="px-4 py-3 text-sm font-medium text-[#7A6A58] hover:text-[#15100A] underline underline-offset-4 transition-colors"
                    >
                      Sună: {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>

                  {/* 2 Original Hero Highlights from setinstone.ro */}
                  <div className="pt-4 border-t border-[#D5CFC4] grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#C4A07A] pl-3.5">
                      <span className="font-display text-xl text-[#15100A] block">
                        Calitate Garantată
                      </span>
                      <span className="text-xs text-[#5E5D5C]">
                        Materiale Certificate & Durabile din Cariere
                      </span>
                    </div>
                    <div className="border-l-2 border-[#15100A] pl-3.5">
                      <span className="font-display text-xl text-[#15100A] block">
                        Prelucrare de Precizie
                      </span>
                      <span className="text-xs text-[#5E5D5C]">
                        Tăiere CNC, Finisare & Montaj la Cheie
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Kinetic Expanding Stone Slabs */}
                <div
                  className="lg:col-span-6"
                  onMouseEnter={() => setSlabPaused(true)}
                  onMouseLeave={() => setSlabPaused(false)}
                >
                  <div className="flex gap-2.5 sm:gap-3 h-84 sm:h-104">
                    {HERO_SLABS.map((slab, idx) => {
                      const isActive = idx === activeSlabIndex;
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
                          onClick={() => setActiveSlabIndex(idx)}
                          style={{
                            background: slab.baseGradient,
                            color: slab.textColor,
                          }}
                          className={`slab-transition ${riseClass} relative overflow-hidden text-left p-4 sm:p-5 flex flex-col justify-between cursor-pointer border ${
                            isActive
                              ? 'flex-[2.7] border-[#15100A] shadow-[0_22px_48px_-18px_rgba(21,16,10,0.4)]'
                              : 'flex-1 border-[#D5CFC4] opacity-85 hover:opacity-100'
                          }`}
                        >
                          {/* Subtle Real Stone Photography Blend */}
                          <img
                            src={slab.textureUrl}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover opacity-22 mix-blend-overlay pointer-events-none"
                          />

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
                            className="absolute inset-0 w-full h-full pointer-events-none opacity-35"
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
                                    ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)'
                                    : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.48), transparent)',
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
                          {isActive && !slabPaused && (
                            <span
                              key={`progress-${activeSlabIndex}`}
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
                      <span className="font-medium text-[#15100A]">{activeSlab.name}</span>
                      <span className="text-[#5E5D5C]"> — {activeSlab.use}</span>
                    </div>
                    <span className="text-xs font-medium text-[#9E7B56] shrink-0">
                      Grosime: {activeSlab.thickness}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── Scrolling Stone Marquee ─── */}
            <StoneMarquee />

            {/* ─── Despre SetInStone Section (with Rotating Seal + CNC Vector Motion) ─── */}
            <section className="relative px-6 sm:px-12 py-20 sm:py-24 border-b border-[#D5CFC4] bg-[#FBF4EF]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Recessed Stone Frames + 1200+ Counter + Rotating Seal */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="relative">
                    <div className="border border-[#D5CFC4] p-2.5 bg-[#EFECE6]">
                      <div className="aspect-[4/3] overflow-hidden bg-[#15100A]">
                        <img
                          src="https://setinstone.ro/images/about-us-image.webp"
                          alt="Atelierul SetInStone Cluj-Napoca"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Rotating Consultation Seal positioned on corner */}
                    <div className="hidden sm:block absolute -bottom-8 -right-6 z-10">
                      <RotatingConsultationSeal onClick={() => handleNavigate('contact')} />
                    </div>
                  </div>

                  {/* 1200+ Projects Counter Box */}
                  <div className="border border-[#D5CFC4] bg-[#EFECE6] p-6 flex items-center gap-6">
                    <span className="font-display text-4xl sm:text-5xl text-[#15100A] font-medium shrink-0">
                      1200+
                    </span>
                    <div>
                      <span className="font-display text-xl text-[#15100A] block">
                        Proiecte Finalizate din Piatră
                      </span>
                      <span className="text-xs text-[#5E5D5C]">
                        Proiecte rezidențiale, comerciale și arhitecturale livrate cu marmură, travertin și granit prelucrat la cele mai înalte standarde.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Editorial Narrative + Claude CNC Motion Graphic */}
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9E7B56] font-medium block">
                    Despre SetInStone
                  </span>

                  <h2 className="font-display text-3xl sm:text-5xl text-[#15100A] leading-[1.08]">
                    Suprafețe din piatră naturală care definesc arhitectura atemporală.
                  </h2>

                  <p className="text-sm sm:text-base text-[#5E5D5C] leading-relaxed">
                    Combinăm expertiza în materiale naturale, prelucrare de precizie și simț estetic pentru a livra suprafețe din piatră care rezistă timpului și impresionează la fiecare privire.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-[#15100A]">
                    <div className="border-l-2 border-[#C4A07A] pl-3 py-0.5">
                      Piatră naturală selectată din cariere de încredere
                    </div>
                    <div className="border-l-2 border-[#C4A07A] pl-3 py-0.5">
                      Tăiere și finisare de precizie pentru calitate constantă
                    </div>
                    <div className="border-l-2 border-[#C4A07A] pl-3 py-0.5">
                      Suprafețe create cu atenție pentru proiecte moderne
                    </div>
                    <div className="border-l-2 border-[#C4A07A] pl-3 py-0.5">
                      Montaj profesionist și consultanță la fața locului
                    </div>
                  </div>

                  {/* Claude-Style CNC Vector Motion Graphic */}
                  <CncSlabMotionSvg />

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleNavigate('despre')}
                      className="px-6 py-3.5 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider font-medium hover:bg-[#2B2219] transition-colors cursor-pointer"
                    >
                      Află Mai Multe Despre Noi
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavigate('contact')}
                      className="px-6 py-3.5 border border-[#15100A] text-[#15100A] text-xs uppercase tracking-wider font-medium hover:bg-[#EFECE6] transition-colors cursor-pointer"
                    >
                      Solicită o Consultație
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── Servicii Premium Section (3 Showcase Cards from setinstone.ro) ─── */}
            <section className="px-6 sm:px-12 py-20 sm:py-24 border-b border-[#D5CFC4] bg-[#EFECE6]">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#9E7B56] font-medium block mb-2">
                      Servicii Premium
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl text-[#15100A]">
                      Marmură, granit și travertin montate la standarde profesionale.
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNavigate('servicii')}
                    className="text-xs uppercase tracking-wider font-medium text-[#15100A] border-b border-[#15100A] pb-1 self-start md:self-auto hover:text-[#9E7B56] hover:border-[#9E7B56] transition-colors cursor-pointer"
                  >
                    Toate Serviciile & Profilele CNC
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Furnizare Marmură și Piatră Naturală',
                      desc: 'Marmură, travertin și piatră naturală importate din cariere certificate, disponibile în multiple dimensiuni și finisaje.',
                      img: 'https://setinstone.ro/images/service-image_1.webp',
                      filter: 'Blaturi Bucătărie',
                    },
                    {
                      title: 'Suprafețe din Granit și Cuarț',
                      desc: 'Suprafețe rezistente și estetice pentru blaturi de bucătărie, pardoseli și fațade — granit și cuarț tăiate la comandă.',
                      img: 'https://setinstone.ro/images/service-image_2.webp',
                      filter: 'Scări & Trepte',
                    },
                    {
                      title: 'Module de Gard de Lux',
                      desc: 'Garduri decorative, paravane și plăci arhitecturale din compozit de piatră naturală pentru amenajarea spațiului exterior.',
                      img: 'https://setinstone.ro/images/service-image_3.webp',
                      filter: 'Borduri & Margini',
                    },
                  ].map((srv) => (
                    <div
                      key={srv.title}
                      className="border border-[#D5CFC4] bg-[#FBF4EF] p-4 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="aspect-[16/11] overflow-hidden bg-[#15100A] mb-5">
                          <img
                            src={srv.img}
                            alt={srv.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl text-[#15100A] mb-2">
                          {srv.title}
                        </h3>
                        <p className="text-sm text-[#5E5D5C] leading-relaxed mb-6">
                          {srv.desc}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleNavigate('produse', srv.filter)}
                        className="w-full py-3 border border-[#15100A]/20 text-xs uppercase tracking-wider font-medium text-[#15100A] group-hover:bg-[#15100A] group-hover:text-[#FBF4EF] transition-colors cursor-pointer"
                      >
                        Explorează Produsele
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ─── Featured Products & Projects Teaser ─── */}
            <section className="px-6 sm:px-12 py-20 sm:py-24 border-b border-[#D5CFC4] bg-[#FBF4EF]">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#9E7B56] font-medium block mb-2">
                      Litoteca SetInStone
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl text-[#15100A]">
                      Produse și lucrări din piatră naturală
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNavigate('produse')}
                    className="px-6 py-3 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider font-medium hover:bg-[#2B2219] transition-colors cursor-pointer"
                  >
                    Vezi Tot Catalogul ({PRODUCTS_CATALOG.length})
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {PRODUCTS_CATALOG.slice(0, 4).map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => openProductDetail(prod)}
                      className="border border-[#D5CFC4] bg-[#EFECE6] p-3.5 flex flex-col justify-between cursor-pointer group hover:border-[#15100A] transition-colors"
                    >
                      <div>
                        <div className="aspect-[4/3] overflow-hidden bg-[#15100A] mb-4 relative">
                          <img
                            src={prod.image}
                            alt={prod.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <span className="absolute top-2.5 left-2.5 bg-[#15100A]/90 text-[#C4A07A] text-[10px] uppercase tracking-wider px-2.5 py-1">
                            {prod.material}
                          </span>
                        </div>
                        <span className="text-[11px] uppercase tracking-wider text-[#7A6A58] block">
                          {prod.category}
                        </span>
                        <h3 className="font-display text-2xl text-[#15100A] mt-0.5 mb-2 group-hover:text-[#9E7B56] transition-colors">
                          {prod.title}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-[#D5CFC4] flex items-center justify-between text-xs">
                        <span className="font-medium text-[#15100A]">{prod.price}</span>
                        <span className="uppercase tracking-wider text-[#7A6A58] group-hover:text-[#15100A]">
                          Detalii
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* =========================================================
            PAGE 2: DESPRE NOI (/despre-setinstone)
           ========================================================= */}
        {currentPage === 'despre' && (
          <>
            <section className="relative bg-[#15100A] text-[#FBF4EF] px-6 sm:px-12 py-16 sm:py-24 border-b border-[#C4A07A]/25 overflow-hidden">
              <QuarryContourPattern />
              <div className="relative z-10 max-w-7xl mx-auto">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A07A] mb-3">
                  Acasă / Despre Noi
                </p>
                <h1 className="font-display text-4xl sm:text-6xl text-[#FBF4EF] max-w-3xl">
                  Creăm arhitectură și suprafețe din piatră cu scop.
                </h1>
              </div>
            </section>

            <StoneMarquee />

            {/* Ce Facem — 4 Pillars */}
            <section className="px-6 sm:px-12 py-20 sm:py-24 border-b border-[#D5CFC4] bg-[#FBF4EF] relative overflow-hidden">
              <BookmatchWatermark />
              <div className="relative z-10 max-w-7xl mx-auto">
                <div className="max-w-3xl mb-14">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9E7B56] font-medium block mb-2">
                    Ce Facem
                  </span>
                  <h2 className="font-display text-3xl sm:text-5xl text-[#15100A] mb-4">
                    Combinăm precizia arhitecturală, eleganța interioară și planificarea strategică.
                  </h2>
                  <p className="text-sm sm:text-base text-[#5E5D5C] leading-relaxed">
                    De la selecția blocului brut și vizualizarea 3D, până la debitarea la milimetru și montajul final, gestionăm fiecare etapă în atelierul nostru din Cluj-Napoca.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {ABOUT_PILLARS.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="border border-[#D5CFC4] bg-[#EFECE6] p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-[2px] bg-[#C4A07A] mb-5" />
                        <h3 className="font-display text-2xl text-[#15100A] mb-3">
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-[#5E5D5C] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3 Authentic Workshop / Architecture Photos from setinstone.ro */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      img: 'https://setinstone.ro/images/what-we-image-1.png',
                      caption: 'Selecție Riguroasă a Lastrelor',
                    },
                    {
                      img: 'https://setinstone.ro/images/what-we-image-2.png',
                      caption: 'Planificare & Detaliu de Îmbinare',
                    },
                    {
                      img: 'https://setinstone.ro/images/what-we-image-3.png',
                      caption: 'Montaj Rezidențial & Comercial',
                    },
                  ].map((item) => (
                    <div key={item.caption} className="border border-[#D5CFC4] p-2.5 bg-[#EFECE6]">
                      <div className="aspect-[4/3] overflow-hidden bg-[#15100A]">
                        <img
                          src={item.img}
                          alt={item.caption}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs uppercase tracking-wider text-[#5E5D5C] pt-3 px-1">
                        {item.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* De ce SetinStone? */}
            <section className="px-6 sm:px-12 py-20 sm:py-24 bg-[#EFECE6] border-b border-[#D5CFC4]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9E7B56] font-medium block">
                    De ce SetinStone?
                  </span>
                  <h2 className="font-display text-3xl sm:text-5xl text-[#15100A]">
                    Partenerul tău de încredere de la început la sfârșit.
                  </h2>
                  <p className="text-sm sm:text-base text-[#5E5D5C] leading-relaxed">
                    Te ghidăm prin fiecare etapă a procesului de design și execuție cu claritate, profesionalism și atenție personalizată — asigurând o experiență fără stres de la concept la finalizare.
                  </p>

                  {/* Real Progress Bars from setinstone.ro/despre-setinstone */}
                  <div className="space-y-4 pt-2">
                    <div>
                      <div className="flex justify-between text-sm font-medium text-[#15100A] mb-1.5">
                        <span>Aplicații Arhitecturale din Piatră</span>
                        <span>97%</span>
                      </div>
                      <div className="h-2 bg-[#D5CFC4] overflow-hidden">
                        <div className="h-full bg-[#15100A] w-[97%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm font-medium text-[#15100A] mb-1.5">
                        <span>Planificare Suprafețe Marmură & Plăci</span>
                        <span>94%</span>
                      </div>
                      <div className="h-2 bg-[#D5CFC4] overflow-hidden">
                        <div className="h-full bg-[#C4A07A] w-[94%]" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => handleNavigate('contact')}
                      className="px-7 py-4 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider font-medium hover:bg-[#2B2219] transition-colors cursor-pointer"
                    >
                      Hai să construim împreună — Solicită Consultație
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6">
                  <div className="border border-[#D5CFC4] p-3 bg-[#FBF4EF]">
                    <div className="aspect-[16/10] overflow-hidden bg-[#15100A]">
                      <img
                        src="https://setinstone.ro/images/choose-us-img.jpg"
                        alt="Expertiză de Încredere SetInStone"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-2xl text-[#15100A] mb-1">
                        Expertiză de Încredere
                      </h3>
                      <p className="text-sm text-[#5E5D5C]">
                        Cu ani de experiență în industrie și o echipă multidisciplinară, livrăm spații proiectate cu grijă care echilibrează funcționalitatea, estetica și valoarea pe termen lung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* =========================================================
            PAGE 3: SERVICII (/servicii)
           ========================================================= */}
        {currentPage === 'servicii' && (
          <>
            <section className="relative bg-[#15100A] text-[#FBF4EF] px-6 sm:px-12 py-16 sm:py-24 border-b border-[#C4A07A]/25 overflow-hidden">
              <QuarryContourPattern />
              <div className="relative z-10 max-w-7xl mx-auto">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A07A] mb-3">
                  Acasă / Servicii
                </p>
                <h1 className="font-display text-4xl sm:text-6xl text-[#FBF4EF] max-w-3xl">
                  Servicii complete de prelucrare și montaj piatră naturală.
                </h1>
              </div>
            </section>

            {/* Core Services Grid */}
            <section className="px-6 sm:px-12 py-20 sm:py-24 border-b border-[#D5CFC4] bg-[#EFECE6]">
              <div className="max-w-7xl mx-auto space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Travertin Premium & Marmură',
                      desc: 'Selecție de travertin și marmură de cea mai înaltă calitate pentru finisaje interioare, băi monolitice, blaturi și placări.',
                      img: 'https://setinstone.ro/images/service-image_1.webp',
                    },
                    {
                      title: 'Placări Exterioare & Granit',
                      desc: 'Soluții durabile de placare exterioară, trepte fiamate antiderapante, glafuri și dale cu piatră naturală rezistentă la intemperii.',
                      img: 'https://setinstone.ro/images/service-image_2.webp',
                    },
                    {
                      title: 'Design Interior & Garduri Modulare',
                      desc: 'Proiectare și execuție amenajări interioare personalizate, insule la 45° și sisteme de garduri modulare din compozit de piatră.',
                      img: 'https://setinstone.ro/images/service-image_3.webp',
                    },
                  ].map((srv) => (
                    <div
                      key={srv.title}
                      className="border border-[#D5CFC4] bg-[#FBF4EF] p-4 flex flex-col justify-between"
                    >
                      <div>
                        <div className="aspect-[16/10] overflow-hidden bg-[#15100A] mb-5">
                          <img
                            src={srv.img}
                            alt={srv.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl text-[#15100A] mb-2">
                          {srv.title}
                        </h3>
                        <p className="text-sm text-[#5E5D5C] leading-relaxed mb-6">
                          {srv.desc}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleNavigate('contact')}
                        className="w-full py-3 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider font-medium hover:bg-[#2B2219] transition-colors cursor-pointer"
                      >
                        Solicită Ofertă
                      </button>
                    </div>
                  ))}
                </div>

                {/* Interactive Edge Profile Blueprints */}
                <EdgeProfileShowcase />
              </div>
            </section>

            {/* Client Testimonials from setinstone.ro/servicii */}
            <section className="px-6 sm:px-12 py-20 sm:py-24 bg-[#FBF4EF] border-b border-[#D5CFC4]">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#9E7B56] font-medium block mb-2">
                      Recenzii Clienți
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl text-[#15100A]">
                      Ce spun clienții și arhitecții cu care colaborăm
                    </h2>
                  </div>
                  <div className="px-4 py-2 border border-[#D5CFC4] bg-[#EFECE6] text-xs font-medium text-[#15100A]">
                    Evaluare medie: <span className="text-[#9E7B56] font-bold">4.9 ★★★★★</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((t) => (
                    <div
                      key={t.name}
                      className="border border-[#D5CFC4] bg-[#EFECE6] p-6 flex flex-col justify-between"
                    >
                      <p className="font-display text-xl sm:text-2xl text-[#15100A] leading-relaxed mb-6">
                        „{t.quote}”
                      </p>
                      <div className="flex items-center gap-3.5 pt-4 border-t border-[#D5CFC4]">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-11 h-11 object-cover border border-[#15100A]/20"
                          loading="lazy"
                        />
                        <div>
                          <span className="text-sm font-medium text-[#15100A] block">
                            {t.name}
                          </span>
                          <span className="text-xs text-[#5E5D5C]">{t.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* =========================================================
            PAGE 4: PRODUSE (/produse & Product Details)
           ========================================================= */}
        {currentPage === 'produse' && (
          <>
            <section className="relative bg-[#15100A] text-[#FBF4EF] px-6 sm:px-12 py-16 sm:py-20 border-b border-[#C4A07A]/25 overflow-hidden">
              <QuarryContourPattern />
              <div className="relative z-10 max-w-7xl mx-auto">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A07A] mb-3">
                  Acasă / Produse {activeProduct ? `/ ${activeProduct.title}` : ''}
                </p>
                <h1 className="font-display text-4xl sm:text-6xl text-[#FBF4EF]">
                  {activeProduct ? activeProduct.title : 'Produse din piatră naturală'}
                </h1>
              </div>
            </section>

            <section className="px-6 sm:px-12 py-16 sm:py-20 bg-[#EFECE6] border-b border-[#D5CFC4]">
              <div className="max-w-7xl mx-auto">
                {activeProduct ? (
                  /* ─── Single Product Detail View (matching /produse/[slug]) ─── */
                  <div className="space-y-12">
                    <button
                      type="button"
                      onClick={() => setActiveProduct(null)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#15100A] border border-[#15100A] px-4 py-2 hover:bg-[#15100A] hover:text-[#FBF4EF] transition-colors cursor-pointer"
                    >
                      Înapoi la Catalogul de Produse
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      {/* Left: Product Image Gallery */}
                      <div className="lg:col-span-6 space-y-4">
                        <div className="border border-[#D5CFC4] p-3 bg-[#FBF4EF]">
                          <div className="aspect-[4/3] overflow-hidden bg-[#15100A]">
                            <img
                              src={activeGalleryImg || activeProduct.image}
                              alt={activeProduct.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {activeProduct.gallery.length > 1 && (
                          <div className="grid grid-cols-4 gap-3">
                            {activeProduct.gallery.map((imgUrl, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setActiveGalleryImg(imgUrl)}
                                className={`border p-1 bg-[#FBF4EF] cursor-pointer ${
                                  activeGalleryImg === imgUrl
                                    ? 'border-[#15100A]'
                                    : 'border-[#D5CFC4] opacity-70 hover:opacity-100'
                                }`}
                              >
                                <img
                                  src={imgUrl}
                                  alt=""
                                  className="aspect-[4/3] w-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: Full Technical Specs & Order CTA */}
                      <div className="lg:col-span-6 border border-[#D5CFC4] bg-[#FBF4EF] p-6 sm:p-10 space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D5CFC4] pb-4">
                          <span className="text-xs uppercase tracking-widest text-[#9E7B56] font-medium">
                            {activeProduct.category} · {activeProduct.material}
                          </span>
                          <span className="font-display text-2xl sm:text-3xl text-[#15100A] font-medium">
                            {activeProduct.price}
                          </span>
                        </div>

                        <p className="text-xs text-[#5E5D5C]">{activeProduct.priceNote}</p>

                        <p className="text-sm sm:text-base text-[#15100A] leading-relaxed">
                          {activeProduct.description}
                        </p>

                        {/* Technical Spec Table */}
                        <div className="border-t border-b border-[#D5CFC4] divide-y divide-[#D5CFC4] text-sm">
                          <div className="py-2.5 flex justify-between">
                            <span className="text-[#5E5D5C]">Material</span>
                            <span className="font-medium text-[#15100A]">{activeProduct.material}</span>
                          </div>
                          <div className="py-2.5 flex justify-between">
                            <span className="text-[#5E5D5C]">Culoare</span>
                            <span className="font-medium text-[#15100A]">{activeProduct.specs.color}</span>
                          </div>
                          <div className="py-2.5 flex justify-between">
                            <span className="text-[#5E5D5C]">Origine</span>
                            <span className="font-medium text-[#15100A]">{activeProduct.specs.origin}</span>
                          </div>
                          <div className="py-2.5 flex justify-between">
                            <span className="text-[#5E5D5C]">Finisaj</span>
                            <span className="font-medium text-[#15100A]">{activeProduct.specs.finish}</span>
                          </div>
                          <div className="py-2.5 flex justify-between">
                            <span className="text-[#5E5D5C]">Utilizare</span>
                            <span className="font-medium text-[#15100A]">{activeProduct.specs.usage}</span>
                          </div>
                          <div className="py-2.5 flex justify-between">
                            <span className="text-[#5E5D5C]">Dimensiuni (cm)</span>
                            <span className="font-medium text-[#15100A]">{activeProduct.specs.dimensions}</span>
                          </div>
                          <div className="py-2.5 flex justify-between">
                            <span className="text-[#5E5D5C]">Greutate</span>
                            <span className="font-medium text-[#15100A]">{activeProduct.specs.weight}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-2">
                          <span className="text-xs uppercase tracking-wider text-[#9E7B56] font-medium block">
                            Caracteristici & Avantaje
                          </span>
                          {activeProduct.highlights.map((h) => (
                            <div key={h} className="text-sm text-[#5E5D5C] border-l-2 border-[#C4A07A] pl-3">
                              {h}
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => handleQuoteForProduct(activeProduct.title)}
                            className="flex-1 py-4 px-6 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider font-medium hover:bg-[#2B2219] transition-colors cursor-pointer"
                          >
                            Solicită Ofertă Personalizată
                          </button>
                          <a
                            href={`tel:${CONTACT_INFO.phoneHref}`}
                            className="py-4 px-6 border border-[#15100A] text-[#15100A] text-xs uppercase tracking-wider font-medium hover:bg-[#EFECE6] transition-colors"
                          >
                            Sună: {CONTACT_INFO.phoneDisplay}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ─── Full Catalog View with Sidebar Filters (matching /produse) ─── */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Sidebar (3 cols) */}
                    <aside className="lg:col-span-3 space-y-6">
                      {/* Categories */}
                      <div className="border border-[#D5CFC4] bg-[#FBF4EF] p-5">
                        <span className="text-xs uppercase tracking-widest text-[#9E7B56] font-medium block pb-3 mb-3 border-b border-[#D5CFC4]">
                          Categorii
                        </span>
                        <div className="space-y-1">
                          {PRODUCT_CATEGORIES.map((cat) => {
                            const active = selectedCategory === cat;
                            return (
                              <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                className={`w-full text-left px-3 py-2 text-sm transition-colors cursor-pointer flex items-center justify-between ${
                                  active
                                    ? 'bg-[#15100A] text-[#FBF4EF] font-medium'
                                    : 'text-[#5E5D5C] hover:text-[#15100A] hover:bg-[#EFECE6]'
                                }`}
                              >
                                <span>{cat}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Material Filter */}
                      <div className="border border-[#D5CFC4] bg-[#FBF4EF] p-5">
                        <span className="text-xs uppercase tracking-widest text-[#9E7B56] font-medium block pb-3 mb-3 border-b border-[#D5CFC4]">
                          Filtrează după Material
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {['Toate', 'Granit', 'Marmură', 'Travertin', 'Compozit'].map((mat) => (
                            <button
                              key={mat}
                              type="button"
                              onClick={() => setSelectedMaterial(mat)}
                              className={`px-3 py-1.5 text-xs border transition-colors cursor-pointer ${
                                selectedMaterial === mat
                                  ? 'bg-[#15100A] text-[#FBF4EF] border-[#15100A]'
                                  : 'bg-[#EFECE6] text-[#15100A] border-[#D5CFC4] hover:border-[#15100A]'
                              }`}
                            >
                              {mat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Sidebar CTA Card from setinstone.ro */}
                      <div className="border border-[#15100A] bg-[#15100A] text-[#FBF4EF] p-6 space-y-3">
                        <h3 className="font-display text-2xl text-[#C4A07A]">
                          Solicită o ofertă
                        </h3>
                        <p className="text-xs text-[#FBF4EF]/80 leading-relaxed">
                          Dimensiuni speciale? Lucrare personalizată? Contactează-ne pentru o ofertă adaptată nevoilor tale.
                        </p>
                        <button
                          type="button"
                          onClick={() => handleNavigate('contact')}
                          className="w-full py-3 bg-[#C4A07A] text-[#15100A] text-xs uppercase tracking-wider font-medium hover:bg-[#d4b28c] transition-colors cursor-pointer"
                        >
                          Contactează-ne
                        </button>
                      </div>
                    </aside>

                    {/* Products Grid (9 cols) */}
                    <div className="lg:col-span-9">
                      {filteredProducts.length === 0 ? (
                        <div className="border border-[#D5CFC4] bg-[#FBF4EF] p-12 text-center space-y-4">
                          <h3 className="font-display text-3xl text-[#15100A]">
                            Lucrări pe comandă pentru această categorie
                          </h3>
                          <p className="text-sm text-[#5E5D5C] max-w-md mx-auto">
                            Executăm la comandă piese în categoria „{selectedCategory}” după dimensiunile proiectului dumneavoastră.
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCategory('Toate produsele');
                              setSelectedMaterial('Toate');
                            }}
                            className="px-6 py-3 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider cursor-pointer"
                          >
                            Afișează Toate Produsele
                          </button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {filteredProducts.map((prod) => (
                            <div
                              key={prod.id}
                              onClick={() => openProductDetail(prod)}
                              className="border border-[#D5CFC4] bg-[#FBF4EF] p-4 flex flex-col justify-between cursor-pointer group hover:border-[#15100A] transition-colors"
                            >
                              <div>
                                <div className="aspect-[16/10] overflow-hidden bg-[#15100A] mb-4 relative">
                                  <img
                                    src={prod.image}
                                    alt={prod.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                  />
                                  <span className="absolute top-3 left-3 bg-[#15100A]/90 text-[#C4A07A] text-[10px] uppercase tracking-wider px-2.5 py-1">
                                    {prod.material}
                                  </span>
                                </div>

                                <span className="text-xs uppercase tracking-wider text-[#7A6A58] block">
                                  {prod.category}
                                </span>
                                <h3 className="font-display text-2xl sm:text-3xl text-[#15100A] mt-0.5 mb-2 group-hover:text-[#9E7B56] transition-colors">
                                  {prod.title}
                                </h3>
                                <p className="text-sm text-[#5E5D5C] leading-relaxed mb-5">
                                  {prod.summary}
                                </p>
                              </div>

                              <div className="pt-3.5 border-t border-[#D5CFC4] flex items-center justify-between text-xs">
                                <span className="text-sm font-medium text-[#15100A]">
                                  {prod.price}
                                </span>
                                <span className="uppercase tracking-wider font-medium text-[#15100A] group-hover:text-[#9E7B56]">
                                  Fișă Tehnică & Comandă
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {/* =========================================================
            PAGE 5: PROIECTE (/proiecte)
           ========================================================= */}
        {currentPage === 'proiecte' && (
          <>
            <section className="relative bg-[#15100A] text-[#FBF4EF] px-6 sm:px-12 py-16 sm:py-24 border-b border-[#C4A07A]/25 overflow-hidden">
              <QuarryContourPattern />
              <div className="relative z-10 max-w-7xl mx-auto">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A07A] mb-3">
                  Acasă / Proiecte
                </p>
                <h1 className="font-display text-4xl sm:text-6xl text-[#FBF4EF]">
                  Portofoliu de proiecte realizate
                </h1>
              </div>
            </section>

            <section className="px-6 sm:px-12 py-16 sm:py-20 bg-[#EFECE6] border-b border-[#D5CFC4]">
              <div className="max-w-7xl mx-auto">
                {/* Category Filter Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#D5CFC4]">
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_FILTERS.map((flt) => (
                      <button
                        key={flt}
                        type="button"
                        onClick={() => setProjectFilter(flt)}
                        className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors cursor-pointer ${
                          projectFilter === flt
                            ? 'bg-[#15100A] text-[#FBF4EF] border-[#15100A]'
                            : 'bg-[#FBF4EF] text-[#15100A] border-[#D5CFC4] hover:border-[#15100A]'
                        }`}
                      >
                        {flt}
                      </button>
                    ))}
                  </div>
                  <span className="text-xs text-[#5E5D5C]">
                    {filteredProjects.length} proiecte selectate
                  </span>
                </div>

                {/* 6 Authentic Portfolio Projects from setinstone.ro/proiecte */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="border border-[#D5CFC4] bg-[#FBF4EF] p-3.5 group"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#15100A] mb-4 relative">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 bg-[#15100A]/90 text-[#C4A07A] text-[10px] uppercase tracking-widest px-2.5 py-1">
                          {proj.category}
                        </span>
                      </div>
                      <div className="px-1 pb-1">
                        <h3 className="font-display text-2xl text-[#15100A]">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-[#5E5D5C] mt-1">
                          {proj.location} — {proj.material}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* =========================================================
            PAGE 6: CONTACT (/contact)
           ========================================================= */}
        {currentPage === 'contact' && (
          <>
            <section className="relative bg-[#15100A] text-[#FBF4EF] px-6 sm:px-12 py-16 sm:py-24 border-b border-[#C4A07A]/25 overflow-hidden">
              <QuarryContourPattern />
              <div className="relative z-10 max-w-7xl mx-auto">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A07A] mb-3">
                  Acasă / Contact
                </p>
                <h1 className="font-display text-4xl sm:text-6xl text-[#FBF4EF]">
                  Hai să modelăm proiectul tău din piatră împreună.
                </h1>
              </div>
            </section>

            <section className="px-6 sm:px-12 py-16 sm:py-24 bg-[#EFECE6] border-b border-[#D5CFC4]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Contact Card (from setinstone.ro/contact) */}
                <div className="lg:col-span-5 border border-[#D5CFC4] bg-[#15100A] text-[#FBF4EF] p-6 sm:p-8 space-y-6">
                  <div className="aspect-[16/10] overflow-hidden border border-[#C4A07A]/30">
                    <img
                      src="https://setinstone.ro/images/contact-image.webp"
                      alt="Contact SetInStone Cluj-Napoca"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4 divide-y divide-[#FBF4EF]/10 text-sm">
                    <div className="pb-3">
                      <span className="text-xs uppercase tracking-widest text-[#C4A07A] block mb-1">
                        Sunați-ne Oricând
                      </span>
                      <a
                        href={`tel:${CONTACT_INFO.phoneHref}`}
                        className="font-display text-2xl text-[#FBF4EF] hover:text-[#C4A07A] transition-colors"
                      >
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>

                    <div className="py-3">
                      <span className="text-xs uppercase tracking-widest text-[#C4A07A] block mb-1">
                        Adresă Email
                      </span>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-base text-[#FBF4EF] hover:text-[#C4A07A] transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>

                    <div className="py-3">
                      <span className="text-xs uppercase tracking-widest text-[#C4A07A] block mb-1">
                        Locație Atelier & Showroom
                      </span>
                      <p className="text-[#FBF4EF]/90">{CONTACT_INFO.address}</p>
                      <a
                        href={CONTACT_INFO.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xs text-[#C4A07A] underline underline-offset-4 mt-1.5"
                      >
                        Deschide în Google Maps
                      </a>
                    </div>

                    <div className="pt-3">
                      <span className="text-xs uppercase tracking-widest text-[#C4A07A] block mb-1">
                        Program de Lucru
                      </span>
                      <p className="text-[#FBF4EF]/90">{CONTACT_INFO.schedule}</p>
                    </div>
                  </div>
                </div>

                {/* Right Quote Request Form (matching setinstone.ro/contact) */}
                <div className="lg:col-span-7 border border-[#D5CFC4] bg-[#FBF4EF] p-6 sm:p-10">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9E7B56] font-medium block mb-2">
                    Contactează-ne
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl text-[#15100A] mb-3">
                    Dăm viață proiectului tău din piatră naturală
                  </h2>
                  <p className="text-sm text-[#5E5D5C] leading-relaxed mb-8">
                    Contactează-ne pentru orice întrebare legată de marmură, granit, travertin sau alte materiale din piatră naturală. Oferim consultanță tehnică și măsurători la fața locului — fără costuri ascunse.
                  </p>

                  {formSent ? (
                    <div className="border border-[#15100A] bg-[#EFECE6] p-8 space-y-4">
                      <h3 className="font-display text-3xl text-[#15100A]">
                        Solicitarea a fost pregătită
                      </h3>
                      <p className="text-sm text-[#5E5D5C]">
                        Vă mulțumim. Dacă fereastra WhatsApp nu s-a deschis, ne puteți apela direct la{' '}
                        <a href={`tel:${CONTACT_INFO.phoneHref}`} className="underline font-medium text-[#15100A]">
                          {CONTACT_INFO.phoneDisplay}
                        </a>{' '}
                        sau pe email la{' '}
                        <a href={`mailto:${CONTACT_INFO.email}`} className="underline font-medium text-[#15100A]">
                          {CONTACT_INFO.email}
                        </a>.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSent(false)}
                        className="px-6 py-3 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider cursor-pointer"
                      >
                        Trimite un alt mesaj
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#5E5D5C] mb-1.5">
                            Prenume *
                          </label>
                          <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Prenume"
                            className="w-full px-4 py-3 border border-[#D5CFC4] bg-[#EFECE6] text-sm text-[#15100A] focus:outline-none focus:border-[#15100A]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#5E5D5C] mb-1.5">
                            Nume *
                          </label>
                          <input
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Nume"
                            className="w-full px-4 py-3 border border-[#D5CFC4] bg-[#EFECE6] text-sm text-[#15100A] focus:outline-none focus:border-[#15100A]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#5E5D5C] mb-1.5">
                            Adresă Email
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nume@exemplu.ro"
                            className="w-full px-4 py-3 border border-[#D5CFC4] bg-[#EFECE6] text-sm text-[#15100A] focus:outline-none focus:border-[#15100A]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#5E5D5C] mb-1.5">
                            Număr de Telefon *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="07xx xxx xxx"
                            className="w-full px-4 py-3 border border-[#D5CFC4] bg-[#EFECE6] text-sm text-[#15100A] focus:outline-none focus:border-[#15100A]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#5E5D5C] mb-1.5">
                          Mesajul tău / Detalii proiect
                        </label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Dimensiuni aproximative, material dorit (Marmură, Granit, Travertin, Gard Modular)..."
                          className="w-full px-4 py-3 border border-[#D5CFC4] bg-[#EFECE6] text-sm text-[#15100A] focus:outline-none focus:border-[#15100A]"
                        />
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <button
                          type="submit"
                          className="px-8 py-4 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider font-medium hover:bg-[#2B2219] transition-colors cursor-pointer"
                        >
                          Trimite Solicitarea (WhatsApp)
                        </button>
                        <a
                          href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
                            `Solicitare Oferta SetInStone - ${firstName} ${lastName}`
                          )}&body=${encodeURIComponent(
                            `Nume: ${firstName} ${lastName}\nTelefon: ${phone}\nEmail: ${email}\n\nDetalii:\n${message}`
                          )}`}
                          className="px-8 py-4 border border-[#15100A] text-[#15100A] text-xs uppercase tracking-wider font-medium hover:bg-[#EFECE6] transition-colors"
                        >
                          Trimite pe Email
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </>
        )}

        {/* =========================================================
            PAGE 7: POLITICA DE COOKIES (/politica-cookies)
           ========================================================= */}
        {currentPage === 'cookies' && (
          <section className="px-6 sm:px-12 py-16 sm:py-24 max-w-4xl mx-auto space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9E7B56]">GDPR & Cookies</p>
            <h1 className="font-display text-4xl sm:text-5xl text-[#15100A]">
              Politica de Cookies
            </h1>
            <p className="text-sm sm:text-base text-[#5E5D5C] leading-relaxed">
              Acest site utilizează exclusiv cookie-uri tehnice strict necesare pentru funcționarea corectă a interfeței și păstrarea preferințelor de navigare. Nu colectăm date de profilare publicitară fără consimțământ.
            </p>
            <p className="text-sm text-[#5E5D5C]">
              Pentru orice solicitări privind protecția datelor, ne puteți contacta la{' '}
              <a href={`mailto:${CONTACT_INFO.email}`} className="underline text-[#15100A]">
                {CONTACT_INFO.email}
              </a>.
            </p>
            <button
              type="button"
              onClick={() => handleNavigate('acasa')}
              className="px-6 py-3 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider cursor-pointer"
            >
              Înapoi la Acasă
            </button>
          </section>
        )}

        {/* ─── Shared Bottom Showroom Banner (on non-contact pages) ─── */}
        {currentPage !== 'contact' && (
          <section className="px-6 sm:px-12 py-16 sm:py-20 bg-[#E4DFD5] border-t border-[#D5CFC4]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">
                  Atelier & Showroom Cluj-Napoca
                </p>
                <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#15100A]">
                  {CONTACT_INFO.address}
                </h2>
                <p className="text-sm text-[#5E5D5C]">
                  {CONTACT_INFO.schedule} &nbsp;|&nbsp; {CONTACT_INFO.email}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => handleNavigate('contact')}
                  className="px-6 py-3.5 bg-[#15100A] text-[#FBF4EF] text-xs uppercase tracking-wider font-medium hover:bg-[#2B2219] transition-colors cursor-pointer"
                >
                  Solicită o Ofertă
                </button>
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-[#15100A] text-[#15100A] text-xs uppercase tracking-wider font-medium hover:bg-[#FBF4EF] transition-colors"
                >
                  Deschide în Google Maps
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ─── Complete Footer (matching setinstone.ro footer columns) ─── */}
      <footer className="bg-[#15100A] text-[#FBF4EF]/80 border-t border-[#C4A07A]/25 px-6 sm:px-12 pt-16 pb-10 text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FBF4EF]/10">
            {/* Brand Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <SetInStoneLogo className="w-8 h-8" />
                <span className="font-display text-2xl text-[#FBF4EF]">Set in Stone</span>
              </div>
              <p className="text-xs text-[#FBF4EF]/65 leading-relaxed max-w-sm">
                SetinStone este un brand premium de marmură, granit, travertin și plăci ceramice care oferă soluții din piatră naturală pentru proiecte rezidențiale, comerciale și arhitecturale.
              </p>
              <p className="text-xs text-[#C4A07A]">{CONTACT_INFO.address}</p>
            </div>

            {/* Column 1: LINK-URI RAPIDE (3 cols) */}
            <div className="lg:col-span-3 space-y-2.5">
              <span className="text-xs uppercase tracking-widest text-[#C4A07A] block mb-3">
                Link-uri Rapide
              </span>
              {[
                { id: 'acasa' as PageId, label: 'Acasă' },
                { id: 'despre' as PageId, label: 'Despre Noi' },
                { id: 'servicii' as PageId, label: 'Servicii' },
                { id: 'produse' as PageId, label: 'Produse' },
                { id: 'proiecte' as PageId, label: 'Proiecte' },
                { id: 'contact' as PageId, label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className="block text-xs text-[#FBF4EF]/75 hover:text-[#C4A07A] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Column 2: SOLUȚIILE NOASTRE (3 cols) */}
            <div className="lg:col-span-3 space-y-2.5">
              <span className="text-xs uppercase tracking-widest text-[#C4A07A] block mb-3">
                Soluțiile Noastre
              </span>
              {[
                { label: 'Marmură & Piatră Naturală', cat: 'Blaturi Bucătărie' },
                { label: 'Granit & Suprafețe Quartz', cat: 'Scări & Trepte' },
                { label: 'Dale & Pavaje Exterioare', cat: 'Dale & Pavaj' },
                { label: 'Module de Gard de Lux', cat: 'Borduri & Margini' },
                { label: 'Placaj Fațadă & Travertin', cat: 'Placaj Fațadă' },
                { label: 'Monumente Granit Masiv', cat: 'Monumente Funerare' },
              ].map((sol) => (
                <button
                  key={sol.label}
                  type="button"
                  onClick={() => handleNavigate('produse', sol.cat)}
                  className="block text-xs text-[#FBF4EF]/75 hover:text-[#C4A07A] transition-colors cursor-pointer text-left"
                >
                  {sol.label}
                </button>
              ))}
            </div>

            {/* Column 3: URMĂREȘTE-NE (2 cols) */}
            <div className="lg:col-span-2 space-y-2.5">
              <span className="text-xs uppercase tracking-widest text-[#C4A07A] block mb-3">
                Urmărește-ne
              </span>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-[#FBF4EF]/75 hover:text-[#C4A07A] transition-colors"
              >
                Facebook
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-[#FBF4EF]/75 hover:text-[#C4A07A] transition-colors"
              >
                Instagram
              </a>
              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-[#FBF4EF]/75 hover:text-[#C4A07A] transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBF4EF]/55">
            <span>© {new Date().getFullYear()} SetinStone. Toate drepturile rezervate.</span>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => handleNavigate('cookies')}
                className="hover:text-[#C4A07A] transition-colors cursor-pointer"
              >
                Politica de Cookies
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('contact')}
                className="hover:text-[#C4A07A] transition-colors cursor-pointer"
              >
                Solicită Ofertă
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
