import { useState } from 'react';
import { CASE_STUDIES } from '../data/stoneData';
import type { CaseStudy } from '../data/stoneData';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

export const CaseStudiesSection = () => {
  const [activeProject, setActiveProject] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="proiecte" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-white/5 bg-[#0A0B0E]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Intro */}
        <div className="mb-16">
          <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-[#A38F78] block mb-3">
            Portofoliu & Măiestrie
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F8F7F4] tracking-tight">
            Studii de Caz Arhitecturale
          </h2>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-col md:flex-row gap-3 mb-12 border-b border-white/5 pb-4 overflow-x-auto">
          {CASE_STUDIES.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`text-left px-5 py-3 rounded-2xl transition-all cursor-pointer flex items-center justify-between gap-4 ${
                activeProject.id === project.id
                  ? 'bg-[#161922] border border-[#D8D2C4]/40 text-white'
                  : 'bg-transparent border border-transparent text-[#848B98] hover:text-[#D8D2C4] hover:bg-white/5'
              }`}
            >
              <div>
                <span className="font-editorial text-lg block text-white font-normal">
                  {project.title.split('—')[0]}
                </span>
                <span className="font-mono-tech text-[10px] text-[#A38F78] uppercase tracking-wider">
                  {project.category} · {project.location.split(',')[0]}
                </span>
              </div>
              <ChevronRight size={14} className={activeProject.id === project.id ? 'text-[#D8D2C4]' : 'text-transparent'} />
            </button>
          ))}
        </div>

        {/* Sticky Split-Screen Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Architectural Specs & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              
              <div className="flex items-center gap-4 text-xs font-mono-tech text-[#848B98] mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#A38F78]" />
                  {activeProject.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-[#A38F78]" />
                  {activeProject.year}
                </span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl text-white font-normal mb-6 leading-tight">
                {activeProject.title}
              </h3>

              {/* Materials Used Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#161922] text-xs font-mono-tech text-[#D8D2C4] border border-white/10"
                  >
                    {mat}
                  </span>
                ))}
              </div>

              {/* Challenge vs Solution Narrative */}
              <div className="space-y-6 text-xs sm:text-sm font-sans-clean leading-relaxed text-[#848B98] font-light">
                <div>
                  <h4 className="text-xs uppercase font-mono-tech tracking-wider text-[#A38F78] mb-2 font-medium">
                    Provocarea Arhitecturală
                  </h4>
                  <p className="bg-[#12141B] p-4 rounded-2xl border border-white/5">
                    {activeProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono-tech tracking-wider text-[#D8D2C4] mb-2 font-medium">
                    Execuția Tehnică în Atelier
                  </h4>
                  <p className="bg-[#12141B] p-4 rounded-2xl border border-white/5 text-[#C5BCAB]">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

            </div>

            {/* Technical Specification Badges */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4 font-mono-tech text-xs">
              <div className="bg-[#141620] p-3.5 rounded-xl border border-white/5">
                <span className="block text-[#848B98] text-[10px] uppercase">Suprafață Lucrată</span>
                <span className="text-white font-medium text-xs sm:text-sm mt-0.5 block">{activeProject.specs.area}</span>
              </div>
              <div className="bg-[#141620] p-3.5 rounded-xl border border-white/5">
                <span className="block text-[#848B98] text-[10px] uppercase">Precizie Muchii</span>
                <span className="text-[#A38F78] font-medium text-xs sm:text-sm mt-0.5 block">{activeProject.specs.precision}</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Editorial Photography */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Main Shot */}
            <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-[#161922] border border-white/10 shadow-2xl">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 font-mono-tech text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D8D2C4] border border-white/10">
                Fotografie Proiect Finalizat
              </div>
            </div>

            {/* Supporting Detail Macros */}
            <div className="grid grid-cols-2 gap-6">
              {activeProject.detailImages.map((imgUrl, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#161922] border border-white/5">
                  <img
                    src={imgUrl}
                    alt={`Detaliu ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 left-3 font-mono-tech text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-black/75 text-[#848B98]">
                    Detaliu Îmbinare [Fig. 0{idx + 1}]
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
