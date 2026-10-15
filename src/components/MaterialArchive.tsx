import { useState } from 'react';
import { Eye, Plus, Check, MapPin, Gauge } from 'lucide-react';
import type { StoneSpecimen } from '../data/stoneData';
import { STONE_COLLECTION } from '../data/stoneData';

interface MaterialArchiveProps {
  onInspectStone: (stone: StoneSpecimen) => void;
  onToggleSample: (stone: StoneSpecimen) => void;
  selectedSampleIds: string[];
}

const CATEGORIES = ['Toate', 'Marmură', 'Granit', 'Travertin', 'Cuarțit', 'Gard Modular'] as const;

export const MaterialArchive = ({
  onInspectStone,
  onToggleSample,
  selectedSampleIds,
}: MaterialArchiveProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('Toate');

  const filteredStones = STONE_COLLECTION.filter((stone) => {
    if (activeCategory === 'Toate') return true;
    return stone.mineralType === activeCategory;
  });

  return (
    <section id="colectie" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-white/5 bg-[#090A0D]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-[#A38F78] block mb-3">
              Arhivă Minerală & Lastre
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F8F7F4] tracking-tight">
              Colecție Curată de Piatră Nobilă
            </h2>
          </div>

          <p className="font-sans-clean text-sm text-[#848B98] max-w-md font-light leading-relaxed">
            Fiecare lastră este selectată direct din cariere cu tradiție și scanată dimensional în atelierul nostru înainte de fasonare.
          </p>
        </div>

        {/* Mineral Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-white/5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#F8F7F4] text-[#090A0D] font-medium'
                  : 'bg-transparent text-[#848B98] hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStones.map((stone) => {
            const isSelected = selectedSampleIds.includes(stone.id);

            return (
              <article
                key={stone.id}
                className="group flex flex-col bg-[#12141B]/80 border border-white/5 rounded-2xl overflow-hidden hover:border-[#D8D2C4]/30 transition-all duration-500 shadow-xl"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#181B24]">
                  <img
                    src={stone.imageUrl}
                    alt={stone.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141B] via-transparent to-transparent opacity-80" />

                  {/* Mineral Type Pill */}
                  <span className="absolute top-4 left-4 font-mono-tech text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#090A0D]/80 backdrop-blur-md text-[#D8D2C4] border border-white/10">
                    {stone.mineralType}
                  </span>

                  {/* Quick Inspect Button */}
                  <button
                    onClick={() => onInspectStone(stone)}
                    className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#090A0D]/90 hover:bg-[#F8F7F4] hover:text-[#090A0D] text-[#F8F7F4] text-xs font-mono-tech transition-colors backdrop-blur-md border border-white/10 cursor-pointer"
                  >
                    <Eye size={12} />
                    <span>Inspecție 4K</span>
                  </button>
                </div>

                {/* Stone Metadata & Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Origin Tag */}
                    <div className="flex items-center gap-1.5 text-xs text-[#848B98] font-mono-tech mb-2">
                      <MapPin size={11} className="text-[#A38F78]" />
                      <span className="truncate">{stone.origin}</span>
                    </div>

                    {/* Stone Name */}
                    <h3 className="font-editorial text-2xl text-white font-normal mb-1 group-hover:text-[#D8D2C4] transition-colors">
                      {stone.name}
                    </h3>

                    {/* Finish Details */}
                    <p className="text-xs text-[#A38F78] font-sans-clean font-medium mb-4">
                      {stone.finish}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs text-[#848B98] leading-relaxed line-clamp-2 mb-6 font-light">
                      {stone.description}
                    </p>
                  </div>

                  {/* Technical Parameters & Sample Toggle */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-mono-tech text-xs text-[#C5BCAB]">
                      <Gauge size={12} className="text-[#848B98]" />
                      <span>{stone.compressiveStrengthMpa} MPa</span>
                    </div>

                    <button
                      onClick={() => onToggleSample(stone)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-tech transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#A38F78] text-black font-semibold'
                          : 'border border-white/10 hover:border-white/30 text-[#D8D2C4] hover:bg-white/5'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check size={12} />
                          <span>În Cutie</span>
                        </>
                      ) : (
                        <>
                          <Plus size={12} />
                          <span>+ Mostră</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
