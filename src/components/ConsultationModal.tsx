import { useState } from 'react';
import { X, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ATELIER_CONTACT } from '../data/stoneData';
import type { StoneSpecimen } from '../data/stoneData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedStone?: StoneSpecimen | null;
}

export const ConsultationModal = ({
  isOpen,
  onClose,
  preselectedStone,
}: ConsultationModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: preselectedStone ? `Ofertă pentru ${preselectedStone.name}` : 'Insulă Bucătărie & Blat',
    location: 'Cluj-Napoca / Zonă Metropolitană',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/80 animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl bg-[#0F1117] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#A38F78]/20 border border-[#A38F78] flex items-center justify-center mx-auto text-[#D8D2C4]">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-editorial text-3xl text-white">
              Cererea Dvs. a Fost Înregistrată
            </h3>
            <p className="font-sans-clean text-xs sm:text-sm text-[#848B98] max-w-md mx-auto leading-relaxed">
              Un specialist tehnic din atelierul SetInStone vă va contacta în maximum 24 de ore pentru a stabili detaliile vizitei sau măsurătorii laser.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#F8F7F4] text-[#090A0D] text-xs font-mono-tech uppercase tracking-wider"
            >
              Închide Fereastra
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#A38F78] block mb-1">
                Consultanță Tehnică Fără Costuri Ascunse
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                Solicită Măsurători Laser la Locație
              </h3>
              <p className="font-sans-clean text-xs text-[#848B98] mt-2">
                Pentru proiecte rezidențiale, comerciale sau garduri modulare în Cluj-Napoca și județele limitrofe.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono-tech text-[#848B98] uppercase block mb-1">Nume & Prenume *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Dan Dumitrescu"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/5 text-xs text-white placeholder:text-[#555] focus:outline-none focus:border-[#D8D2C4]/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-mono-tech text-[#848B98] uppercase block mb-1">Telefon de Contact *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+40 7..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/5 text-xs text-white placeholder:text-[#555] focus:outline-none focus:border-[#D8D2C4]/40"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono-tech text-[#848B98] uppercase block mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="contact@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/5 text-xs text-white placeholder:text-[#555] focus:outline-none focus:border-[#D8D2C4]/40"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono-tech text-[#848B98] uppercase block mb-1">Tip Proiect / Lucrare</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/5 text-xs text-white focus:outline-none focus:border-[#D8D2C4]/40"
                >
                  <option value="Insulă Bucătărie & Blat Cascadă">Insulă Bucătărie & Blat Cascadă (Waterfall)</option>
                  <option value="Baie & Lavoar Monolit Sculptat">Baie & Lavoar Monolit Sculptat</option>
                  <option value="Sistem Gard Modular Rezidențial">Sistem Gard Modular Rezidențial</option>
                  <option value="Trepte, Pardoseli & Fațade Ventilate">Trepte, Pardoseli & Fațade Ventilate</option>
                  <option value="Vizită Showroom & Depozit Lastre Cluj">Vizită Showroom & Depozit Lastre Cluj</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono-tech text-[#848B98] uppercase block mb-1">Detalii sau Dimensiuni Estimative</label>
                <textarea
                  rows={2}
                  placeholder="Ex: Insulă 3.2m lungime, preferință pentru cuarțit sau marmură mată..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/5 text-xs text-white placeholder:text-[#555] focus:outline-none focus:border-[#D8D2C4]/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#F8F7F4] hover:bg-[#D8D2C4] text-[#090A0D] text-xs font-sans-clean font-medium tracking-wide transition-all cursor-pointer shadow-lg"
              >
                <span>Programează Măsurătoarea Laser</span>
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#848B98] font-mono-tech">
              <span>Sau contact direct prin telefon:</span>
              <a
                href={`tel:${ATELIER_CONTACT.phoneClean}`}
                className="text-[#D8D2C4] hover:text-white flex items-center gap-1 font-medium"
              >
                <Phone size={11} />
                <span>{ATELIER_CONTACT.phone}</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
