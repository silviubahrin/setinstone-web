import { ArrowDown, Box, Sparkles } from 'lucide-react';
import { WORKSHOP_METRICS } from '../data/stoneData';

interface HeroProps {
  onOpenSampleTray: () => void;
  onExploreClick: () => void;
}

export const Hero = ({ onOpenSampleTray, onExploreClick }: HeroProps) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 px-6 sm:px-12 border-b border-white/5 overflow-hidden">
      
      {/* Background Organic Stone Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Monolith Marble Surface"
          className="w-full h-full object-cover opacity-18 filter grayscale contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/85 to-[#090A0D]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto py-8">
        
        {/* Overline Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#12141B]/90 text-[11px] font-mono-tech text-[#A38F78] uppercase tracking-[0.25em] mb-8">
          <Sparkles size={12} className="text-[#A38F78]" />
          <span>Atelier Prelucrare CNC & Montaj · Cluj-Napoca</span>
        </div>

        {/* Editorial Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F8F7F4] leading-[1.08] mb-8 max-w-5xl">
          Piatră Nobilă. <br />
          <span className="italic font-normal text-[#D8D2C4]">Precizie Milimetrică.</span> <br />
          Arhitectură Atemporală.
        </h1>

        {/* Narrative Description */}
        <p className="font-sans-clean text-[#848B98] text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-12">
          Transformăm lastre masive de marmură, granit, travertin și cuarțit în piese arhitecturale de o geometrie impecabilă. De la scanare digitală 3D la fața locului și debitare CNC de înaltă finețe, până la îmbinări continue la 45° (waterfall) și montaj garantat.
        </p>

        {/* Primary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          <button
            onClick={onExploreClick}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F8F7F4] hover:bg-[#D8D2C4] text-[#090A0D] text-sm font-sans-clean font-medium tracking-wide transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span>Explorează Arhiva de Piatră</span>
            <ArrowDown size={15} />
          </button>

          <button
            onClick={onOpenSampleTray}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/15 hover:border-[#D8D2C4] bg-[#141620]/60 hover:bg-[#141620] text-sm font-sans-clean text-[#D8D2C4] transition-all cursor-pointer"
          >
            <Box size={16} className="text-[#A38F78]" />
            <span>Comandă Cutia cu Mostre (Arhitecți)</span>
          </button>
        </div>

      </div>

      {/* Workshop Metric Ribbon */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-12 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {WORKSHOP_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-editorial text-2xl sm:text-3xl text-white font-normal tracking-tight">
                {metric.value}
              </span>
              <span className="font-mono-tech text-xs uppercase tracking-wider text-[#A38F78] mt-1">
                {metric.label}
              </span>
              <span className="text-[11px] text-[#848B98] mt-1 leading-snug">
                {metric.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
