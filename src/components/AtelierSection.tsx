import React from 'react';
import { Scan, Cpu, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { ATELIER_CONTACT } from '../data/stoneData';

const STEPS = [
  {
    num: '01',
    title: 'Scanare Laser 3D la Fața Locului',
    desc: 'Nu ne bazăm pe schițe aproximative. Utilizăm echipamente laser 3D de mare precizie la locația dvs. din Cluj sau din țară, capturând abaterile pereților la fracțiuni de milimetru.',
    icon: Scan,
  },
  {
    num: '02',
    title: 'Simulare Digitală Bookmatch',
    desc: 'Fotografiem lastrele brute la rezoluție 8K. Împreună cu arhitectul sau clientul, simulăm orientarea fiecărei venaturi înainte ca lama utilajului CNC să atingă piatra.',
    icon: Compass,
  },
  {
    num: '03',
    title: 'Debitare CNC & Îmbinări la 45°',
    desc: 'Centrul nostru de prelucrare din Someșeni execută tăieri curate cu toleranță sub 0.8 mm. Executăm canturi la 45° (mitered edge) pentru efectul de bloc de piatră monolit masiv.',
    icon: Cpu,
  },
  {
    num: '04',
    title: 'Impermeabilizare Nanotehnologică',
    desc: 'Aplicăm soluții de sigilare nanometrice care pătrund în microporii pietrei fără a altera textura tactilă naturală. Piatra devine complet imună la pete de cafea, vin și acizi.',
    icon: ShieldCheck,
  },
];

export const AtelierSection: React.FC = () => {
  return (
    <section id="atelier" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-white/5 bg-[#090A0D]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-[#A38F78] block mb-3">
            Atelierul din Cluj-Napoca
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F8F7F4] tracking-tight mb-6">
            Măiestria Prelucrării la Milimetru
          </h2>
          <p className="font-sans-clean text-sm sm:text-base text-[#848B98] leading-relaxed font-light">
            De la blocurile brute sosite din carierele din Toscana și până la montajul final în vila dumneavoastră, fiecare milimetru de piatră trece prin mâinile meșterilor noștri specializați.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 rounded-3xl bg-[#12141B] border border-white/5 flex flex-col justify-between hover:border-[#D8D2C4]/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono-tech text-xl text-[#A38F78] font-medium">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-full bg-white/5 text-[#D8D2C4]">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl text-white font-normal mb-3">
                    {step.title}
                  </h3>

                  <p className="font-sans-clean text-xs text-[#848B98] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workshop Location Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141620] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono-tech text-[#A38F78] uppercase tracking-wider">
              <MapPin size={13} />
              <span>Baza de Producție & Depozit Lastre</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
              Vizitați Atelierul Nostru din Cluj-Napoca
            </h3>
            <p className="text-xs sm:text-sm text-[#848B98] max-w-xl font-light">
              {ATELIER_CONTACT.address}, {ATELIER_CONTACT.city} ({ATELIER_CONTACT.areaNote}). Vă invităm să alegeți personal lastra de piatră sub lumină naturală.
            </p>
          </div>

          <a
            href={ATELIER_CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#F8F7F4] hover:bg-[#D8D2C4] text-[#090A0D] text-xs font-sans-clean font-medium tracking-wide transition-all whitespace-nowrap"
          >
            Deschide pe Google Maps →
          </a>
        </div>

      </div>
    </section>
  );
};
