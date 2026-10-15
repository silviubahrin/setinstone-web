import React, { useState } from 'react';
import { X, Check, Plus, MapPin } from 'lucide-react';
import type { StoneSpecimen } from '../data/stoneData';

interface SpecimenInspectorModalProps {
  stone: StoneSpecimen | null;
  onClose: () => void;
  onToggleSample: (stone: StoneSpecimen) => void;
  isSelectedSample: boolean;
  onRequestQuote: (stone: StoneSpecimen) => void;
}

export const SpecimenInspectorModal: React.FC<SpecimenInspectorModalProps> = ({
  stone,
  onClose,
  onToggleSample,
  isSelectedSample,
  onRequestQuote,
}) => {
  const [lensPosition, setLensPosition] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);

  if (!stone) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPosition({ x, y });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 backdrop-blur-2xl bg-black/85 animate-fade-in">
      
      {/* Background Click Away */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-[#0F1117] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-[#1A1D27] hover:bg-white/10 text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Visual Macro Column */}
        <div className="lg:w-1/2 relative bg-[#090A0D] flex flex-col">
          <div
            className="relative w-full h-72 sm:h-96 lg:h-full overflow-hidden cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
          >
            <img
              src={stone.macroTextureUrl}
              alt={stone.name}
              className="w-full h-full object-cover"
            />

            {/* Simulated 4K Crystal Inspection Zoom Lens */}
            {isZooming && (
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                style={{
                  backgroundImage: `url(${stone.macroTextureUrl})`,
                  backgroundPosition: `${lensPosition.x}% ${lensPosition.y}%`,
                  backgroundSize: '320%',
                  opacity: 1,
                }}
              />
            )}

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="font-mono-tech text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#D8D2C4] border border-white/10">
                Inspecție Macro 4K · Glisați cursorul
              </span>
              <span className="font-mono-tech text-[10px] text-[#A38F78] px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md">
                100% Piatră Autentică
              </span>
            </div>
          </div>
        </div>

        {/* Technical Data & Provenance Column */}
        <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto">
          <div>
            
            {/* Header info */}
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#A38F78] uppercase tracking-[0.2em] mb-2">
              <MapPin size={12} />
              <span>{stone.origin}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal mb-1">
              {stone.name}
            </h2>

            <p className="font-sans-clean text-xs text-[#C5BCAB] mb-6">
              Finisaj recomandat: <span className="text-white font-medium">{stone.finish}</span>
            </p>

            <p className="font-sans-clean text-xs sm:text-sm text-[#848B98] leading-relaxed mb-8 font-light">
              {stone.description}
            </p>

            {/* Technical Specifications Grid */}
            <div className="border border-white/5 rounded-2xl p-4 bg-[#141620] mb-8 space-y-3 font-mono-tech text-xs">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[#848B98]">Rezistență Compresiune</span>
                <span className="text-white font-medium">{stone.compressiveStrengthMpa} MPa</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[#848B98]">Densitate Aparentă</span>
                <span className="text-white font-medium">{stone.densityKgM3} kg/m³</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[#848B98]">Coeficient Absorbție Apă</span>
                <span className="text-white font-medium">{stone.absorptionRate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#848B98]">Toleranță Debitare Atelier</span>
                <span className="text-[#A38F78] font-medium">&lt; 0.8 mm (CNC)</span>
              </div>
            </div>

            {/* Architectural Applications */}
            <div className="mb-8">
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#A38F78] block mb-2">
                Aplicații Recomandate
              </span>
              <div className="flex flex-wrap gap-2">
                {stone.recommendedUse.map((use, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-sans-clean text-[#D8D2C4] border border-white/5"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onToggleSample(stone)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-xs font-mono-tech transition-all cursor-pointer ${
                isSelectedSample
                  ? 'bg-[#A38F78] text-black font-semibold'
                  : 'border border-white/15 hover:border-white/30 text-white hover:bg-white/5'
              }`}
            >
              {isSelectedSample ? (
                <>
                  <Check size={14} />
                  <span>Mostră Inclusă în Cutie</span>
                </>
              ) : (
                <>
                  <Plus size={14} />
                  <span>Adaugă în Cutia cu Mostre</span>
                </>
              )}
            </button>

            <button
              onClick={() => onRequestQuote(stone)}
              className="flex-1 py-3 rounded-full bg-[#F8F7F4] hover:bg-[#D8D2C4] text-[#090A0D] text-xs font-sans-clean font-medium tracking-wide transition-all cursor-pointer"
            >
              Cere Ofertă Măsurători
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
