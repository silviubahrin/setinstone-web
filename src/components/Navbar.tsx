import { Box, Phone, ArrowUpRight } from 'lucide-react';
import { ATELIER_CONTACT } from '../data/stoneData';

interface NavbarProps {
  sampleCount: number;
  onOpenSampleTray: () => void;
  onOpenConsultation: () => void;
}

export const Navbar = ({
  sampleCount,
  onOpenSampleTray,
  onOpenConsultation,
}: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-xl bg-[#090A0D]/75 border border-white/10 rounded-full px-5 sm:px-8 py-3.5 shadow-2xl">
        
        {/* Brand Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-[#D8D2C4]/40 flex items-center justify-center bg-[#12141B] group-hover:border-[#D8D2C4] transition-colors">
            <span className="font-editorial text-sm italic font-semibold text-[#D8D2C4]">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-lg tracking-wider text-white font-medium uppercase leading-none">
              Set<span className="text-[#A38F78]">In</span>Stone
            </span>
            <span className="font-mono-tech text-[9px] tracking-[0.2em] uppercase text-[#848B98] mt-0.5">
              Cluj-Napoca · Atelier
            </span>
          </div>
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono-tech uppercase tracking-[0.15em] text-[#C5BCAB]">
          <a href="#colectie" className="hover:text-white transition-colors">Colecții</a>
          <a href="#proiecte" className="hover:text-white transition-colors">Proiecte</a>
          <a href="#atelier" className="hover:text-white transition-colors">Atelier & Măiestrie</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          
          {/* Sample Tray Button */}
          <button
            onClick={onOpenSampleTray}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#D8D2C4]/50 bg-[#141620] text-xs font-mono-tech text-[#D8D2C4] transition-all cursor-pointer"
            title="Deschide Cutia cu Mostre"
          >
            <Box size={14} className="text-[#A38F78]" />
            <span className="hidden sm:inline">Mostre</span>
            <span className="w-4 h-4 rounded-full bg-[#A38F78] text-black font-semibold text-[10px] flex items-center justify-center">
              {sampleCount}
            </span>
          </button>

          {/* Direct Consultation Trigger */}
          <button
            onClick={onOpenConsultation}
            className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F8F7F4] hover:bg-[#D8D2C4] text-[#090A0D] text-xs font-sans-clean font-medium tracking-wide transition-all cursor-pointer"
          >
            <span>Măsurători Laser</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Quick Phone Call */}
          <a
            href={`tel:${ATELIER_CONTACT.phoneClean}`}
            className="p-2 rounded-full border border-white/10 hover:border-white/30 text-[#D8D2C4] transition-colors"
            title="Sună Atelierul"
          >
            <Phone size={14} />
          </a>
        </div>

      </div>
    </header>
  );
};
