import { ArrowUpRight, Phone, MapPin } from 'lucide-react';

const SERVICES = [
  { code: '01', title: 'Blaturi & Insule 45°', spec: 'Bucătării · Băi · Îmbinări Waterfall' },
  { code: '02', title: 'Trepte & Scări', spec: 'Interior · Exterior Antiderapant' },
  { code: '03', title: 'Glafuri & Placări', spec: 'Tăiate la Cotă · Cu Picurător' },
  { code: '04', title: 'Garduri Modulare', spec: 'Sisteme Prefabricate din Piatră' },
];

const MATERIALS = [
  { code: 'M.01', name: 'Granit', finish: 'Lustruit · Fiamat · Periat', use: 'Duritate Maximă' },
  { code: 'M.02', name: 'Marmură', finish: 'Lustruit · Mat Honed · Bookmatch', use: 'Venatură Naturală' },
  { code: 'M.03', name: 'Travertin', finish: 'Chituit Mat · Antichizat', use: 'Interior & Terase' },
  { code: 'M.04', name: 'Cuarțit & Quartz', finish: 'Suprafață Non-Poroasă', use: 'Absorbție 0%' },
];

export function App() {
  return (
    <div className="min-h-screen bg-transparent text-[#161616] flex flex-col justify-between">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 bg-[#F9F8F5]/90 backdrop-blur-md border-b border-[#161616]/15 px-6 py-4 md:px-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="font-extrabold text-xl sm:text-2xl tracking-tighter text-[#161616] lowercase leading-none"
            >
              setinstone.
            </a>
            <span className="hidden sm:inline-block font-mono-tech text-[10px] uppercase tracking-widest text-zinc-500 border-l border-[#161616]/20 pl-3">
              Cluj-Napoca
            </span>
          </div>

          <nav className="flex items-center gap-6 font-mono-tech text-xs uppercase tracking-wider">
            <a href="#executie" className="hidden md:inline hover:text-[#D94E1F] transition-colors">
              Execuție
            </a>
            <a href="#materiale" className="hidden md:inline hover:text-[#D94E1F] transition-colors">
              Materiale
            </a>
            <a href="#contact" className="hidden md:inline hover:text-[#D94E1F] transition-colors">
              Atelier
            </a>
            <a
              href="tel:+40740647532"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#161616] text-[#F9F8F5] text-xs font-bold uppercase tracking-wider hover:bg-[#D94E1F] transition-colors"
            >
              <span>0740 647 532</span>
              <ArrowUpRight size={13} />
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* ─── Hero (Clean Presentation + Direct CTA) ─── */}
        <section className="pt-20 sm:pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-[#161616]">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-zinc-600 uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#D94E1F] inline-block" />
            <span>Atelier Piatră Naturală // Cluj-Napoca</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight leading-[0.90] max-w-4xl mb-6">
            Piatră tăiată{' '}
            <span className="font-serif-editorial italic font-normal text-[1.08em] tracking-normal lowercase text-black inline-block px-1">
              la milimetru.
            </span>{' '}
            <br />
            <span className="text-[#D94E1F]">Montaj direct.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 font-medium max-w-xl mb-10">
            Marmură, granit, travertin și cuarțit. Debităm și montăm din stoc propriu în Cluj-Napoca.
          </p>

          {/* Clean Call to Action */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-16">
            <a
              href="tel:+40740647532"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#161616] text-[#F9F8F5] font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-[#D94E1F] transition-colors"
            >
              <Phone size={14} />
              <span>Sună: 0740 647 532</span>
            </a>

            <a
              href="https://wa.me/40740647532?text=Salut%20SetInStone%2C%20doresc%20o%20oferta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 border border-[#161616] bg-white text-[#161616] font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-[#161616] hover:text-white transition-colors"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://maps.app.goo.gl/McAHdn8DMRtoTvAW9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-4 font-mono-tech text-xs text-zinc-700 hover:text-[#D94E1F] uppercase tracking-wider underline underline-offset-4"
            >
              <MapPin size={13} />
              <span>Locație Atelier</span>
            </a>
          </div>

          {/* 4 Minimal Benchmark Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#161616]/15 font-mono-tech">
            <div className="border-l-2 border-[#161616] pl-4">
              <div className="text-2xl font-black text-black">±0.5 mm</div>
              <div className="text-[11px] text-zinc-600 uppercase tracking-wider mt-0.5">
                Debitare CNC
              </div>
            </div>
            <div className="border-l-2 border-[#161616] pl-4">
              <div className="text-2xl font-black text-black">20 / 30 mm</div>
              <div className="text-[11px] text-zinc-600 uppercase tracking-wider mt-0.5">
                Lastre Masive
              </div>
            </div>
            <div className="border-l-2 border-[#161616] pl-4">
              <div className="text-2xl font-black text-black">5–10 Zile</div>
              <div className="text-[11px] text-zinc-600 uppercase tracking-wider mt-0.5">
                Termen Execuție
              </div>
            </div>
            <div className="border-l-2 border-[#D94E1F] pl-4">
              <div className="text-2xl font-black text-[#D94E1F]">100% Cluj</div>
              <div className="text-[11px] text-zinc-600 uppercase tracking-wider mt-0.5">
                Măsurători & Montaj
              </div>
            </div>
          </div>
        </section>

        {/* ─── 01 / Execuție (Ultra-Concise Grid) ─── */}
        <section
          id="executie"
          className="py-16 sm:py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-[#161616] scroll-mt-14"
        >
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
              01 / Execuție.
            </h2>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-zinc-500">
              Interior & Exterior
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((item) => (
              <div
                key={item.code}
                className="border border-[#161616] bg-white p-6 flex flex-col justify-between hover:border-[#D94E1F] transition-colors"
              >
                <span className="font-mono-tech text-xs font-bold text-[#D94E1F] mb-3">
                  [{item.code}]
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black mb-1">
                  {item.title}
                </h3>
                <p className="font-mono-tech text-xs text-zinc-600 uppercase tracking-wider">
                  {item.spec}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 02 / Materiale (Ultra-Concise Grid) ─── */}
        <section
          id="materiale"
          className="py-16 sm:py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-[#161616] scroll-mt-14"
        >
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
              02 / Materiale.
            </h2>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-zinc-500">
              Stoc Cluj-Napoca
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MATERIALS.map((mat) => (
              <div
                key={mat.code}
                className="border border-[#161616] bg-white p-6 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center font-mono-tech text-[10px] text-zinc-500 uppercase tracking-widest pb-3 mb-4 border-b border-[#161616]/15">
                  <span>{mat.code}</span>
                  <span className="text-[#D94E1F] font-bold">{mat.use}</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-1">
                  {mat.name}
                </h3>
                <p className="font-mono-tech text-xs text-zinc-600">{mat.finish}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 03 / Contact & Atelier ─── */}
        <section id="contact" className="py-16 sm:py-20 px-6 md:px-12 max-w-6xl mx-auto scroll-mt-14">
          <div className="border border-[#161616] bg-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="font-mono-tech text-xs text-[#D94E1F] font-bold uppercase tracking-widest">
                03 / ATELIER & DEPOZIT
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
                Str. D. Georgescu-Kiriac 60–62
              </h2>
              <p className="font-mono-tech text-xs sm:text-sm text-zinc-600 uppercase tracking-wider">
                Cluj-Napoca · Luni – Vineri: 08:00 – 16:30 · info@setinstone.ro
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+40740647532"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#161616] text-[#F9F8F5] font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-[#D94E1F] transition-colors"
              >
                <Phone size={14} />
                <span>+40 740 647 532</span>
              </a>
              <a
                href="https://maps.app.goo.gl/McAHdn8DMRtoTvAW9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-[#161616] bg-[#F9F8F5] text-[#161616] font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-[#161616] hover:text-white transition-colors"
              >
                <span>Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Minimal Footer ─── */}
      <footer className="border-t border-[#161616] py-10 px-6 md:px-12 bg-white/80 font-mono-tech text-xs text-zinc-600">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-sm tracking-tighter lowercase text-black font-sans">
              setinstone.
            </span>
            <span className="text-zinc-400">/</span>
            <span>Cluj-Napoca</span>
          </div>

          <div className="flex items-center gap-6 uppercase tracking-wider text-[11px] font-bold">
            <a
              href="https://www.instagram.com/set_in_s.t.o.n.e"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@set_in_s.t.o.n.e"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577401417193"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
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
