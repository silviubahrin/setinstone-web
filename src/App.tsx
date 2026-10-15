import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MaterialArchive } from './components/MaterialArchive';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AtelierSection } from './components/AtelierSection';
import { SpecimenInspectorModal } from './components/SpecimenInspectorModal';
import { SampleTrayDrawer } from './components/SampleTrayDrawer';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import type { StoneSpecimen } from './data/stoneData';
import { STONE_COLLECTION } from './data/stoneData';
import { Box } from 'lucide-react';

export function App() {
  const [sampleStones, setSampleStones] = useState<StoneSpecimen[]>([
    STONE_COLLECTION[0], // Preselect Carrara Statuario
    STONE_COLLECTION[3], // Preselect Taj Mahal Quartzite
  ]);
  const [inspectedStone, setInspectedStone] = useState<StoneSpecimen | null>(null);
  const [isSampleTrayOpen, setIsSampleTrayOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [quoteStone, setQuoteStone] = useState<StoneSpecimen | null>(null);

  // Modern Web Guidance: Native View Transitions API support with fallback
  const handleToggleSample = (stone: StoneSpecimen) => {
    const update = () => {
      setSampleStones((prev) => {
        const exists = prev.some((s) => s.id === stone.id);
        if (exists) {
          return prev.filter((s) => s.id !== stone.id);
        }
        if (prev.length >= 3) {
          setIsSampleTrayOpen(true);
          return prev;
        }
        return [...prev, stone];
      });
    };

    if ('startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => update());
    } else {
      update();
    }
  };

  const handleRemoveSample = (stoneId: string) => {
    setSampleStones((prev) => prev.filter((s) => s.id !== stoneId));
  };

  const handleRequestQuote = (stone: StoneSpecimen) => {
    setQuoteStone(stone);
    setInspectedStone(null);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090A0D] text-[#F8F7F4] flex flex-col font-sans-clean antialiased selection:bg-[#A38F78] selection:text-black">
      
      {/* Floating Navigation Pill */}
      <Navbar
        sampleCount={sampleStones.length}
        onOpenSampleTray={() => setIsSampleTrayOpen(true)}
        onOpenConsultation={() => {
          setQuoteStone(null);
          setIsConsultationOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Monolithic Hero */}
        <Hero
          onOpenSampleTray={() => setIsSampleTrayOpen(true)}
          onExploreClick={() => {
            document.getElementById('colectie')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Curated Material Archive */}
        <MaterialArchive
          onInspectStone={(stone) => setInspectedStone(stone)}
          onToggleSample={handleToggleSample}
          selectedSampleIds={sampleStones.map((s) => s.id)}
        />

        {/* Sticky Split-Screen Case Studies */}
        <CaseStudiesSection />

        {/* CNC Precision Atelier in Cluj-Napoca */}
        <AtelierSection />
      </main>

      {/* Persistent Floating Sample Tray Indicator (When stones selected) */}
      {sampleStones.length > 0 && !isSampleTrayOpen && (
        <aside 
          aria-label="Specimen tray drawer trigger"
          className="fixed bottom-6 right-6 z-30"
        >
          <button
            onClick={() => setIsSampleTrayOpen(true)}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#181B24]/90 hover:bg-[#181B24] border border-[#D8D2C4]/40 text-[#D8D2C4] shadow-2xl backdrop-blur-xl transition-all cursor-pointer group"
          >
            <div className="relative">
              <Box size={16} className="text-[#A38F78] group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#A38F78] text-black text-[9px] font-bold flex items-center justify-center">
                {sampleStones.length}
              </span>
            </div>
            <span className="font-mono-tech text-xs tracking-wider">
              Cutia cu Mostre ({sampleStones.length}/3)
            </span>
          </button>
        </aside>
      )}

      {/* 4K Texture Inspection Modal */}
      <SpecimenInspectorModal
        stone={inspectedStone}
        onClose={() => setInspectedStone(null)}
        onToggleSample={handleToggleSample}
        isSelectedSample={Boolean(inspectedStone && sampleStones.some((s) => s.id === inspectedStone.id))}
        onRequestQuote={handleRequestQuote}
      />

      {/* Slide-over Sample Tray Drawer */}
      <SampleTrayDrawer
        isOpen={isSampleTrayOpen}
        onClose={() => setIsSampleTrayOpen(false)}
        selectedStones={sampleStones}
        onRemoveStone={handleRemoveSample}
      />

      {/* Laser Survey & Quote Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedStone={quoteStone}
      />

      {/* Minimal Architectural Footer */}
      <Footer />
    </div>
  );
}

export default App;
