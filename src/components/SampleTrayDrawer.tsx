import React, { useState } from 'react';
import { X, Box, Trash2, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { StoneSpecimen } from '../data/stoneData';

interface SampleTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStones: StoneSpecimen[];
  onRemoveStone: (stoneId: string) => void;
}

export const SampleTrayDrawer: React.FC<SampleTrayDrawerProps> = ({
  isOpen,
  onClose,
  selectedStones,
  onRemoveStone,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    role: 'Arhitect / Designer',
    phone: '',
    email: '',
    deliveryAddress: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const emptySlots = Math.max(0, 3 - selectedStones.length);

  return (
    <div className="fixed inset-0 z-50 flex justify-end backdrop-blur-md bg-black/70 animate-fade-in">
      
      {/* Backdrop Dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-xl bg-[#0F1117] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl p-6 sm:p-10 overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-[#181B24] text-[#A38F78] border border-white/5">
                <Box size={18} />
              </div>
              <div>
                <h3 className="font-editorial text-2xl text-white font-normal">
                  Cutia cu Mostre Arhitecturale
                </h3>
                <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#848B98]">
                  Capacitate: 3 Eșantioane Fizice · Livrare Curier
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/5 text-[#848B98] hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#A38F78]/20 border border-[#A38F78] flex items-center justify-center mx-auto text-[#D8D2C4]">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-editorial text-3xl text-white">
                Comanda de Mostre a Fost Înregistrată
              </h4>
              <p className="font-sans-clean text-xs sm:text-sm text-[#848B98] max-w-md mx-auto leading-relaxed">
                Echipa SetInStone va debita mostrele fizice (150×150 mm) finisate cu marginile alese și le va expedia prin curier rapid către adresa specificată.
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
            <>
              {/* Selected Stones Slots */}
              <div className="space-y-3 mb-8">
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#A38F78] block">
                  Eșantioane Selectate ({selectedStones.length} din 3)
                </span>

                {selectedStones.map((stone) => (
                  <div
                    key={stone.id}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#141620] border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={stone.imageUrl}
                        alt={stone.name}
                        className="w-12 h-12 rounded-xl object-cover border border-white/5"
                      />
                      <div>
                        <h4 className="font-editorial text-lg text-white font-normal leading-tight">
                          {stone.name}
                        </h4>
                        <span className="text-[10px] font-mono-tech text-[#A38F78]">
                          {stone.mineralType} · {stone.finish}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveStone(stone.id)}
                      className="p-2 text-[#848B98] hover:text-red-400 transition-colors cursor-pointer"
                      title="Elimină din cutie"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}

                {/* Empty Slots Placeholder */}
                {Array.from({ length: emptySlots }).map((_, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-dashed border-white/10 flex items-center justify-between text-xs text-[#848B98] font-mono-tech"
                  >
                    <span>[ Slot Gol Mostră 0{selectedStones.length + idx + 1} ]</span>
                    <span className="text-[10px] text-[#A38F78]">Selectați din catalog</span>
                  </div>
                ))}
              </div>

              {/* Order Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#A38F78] block pt-2">
                  Destinație Livrare & Birou
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono-tech text-[#848B98] uppercase block mb-1">Nume Complet *</label>
                    <input
                      type="text"
                      required
                      placeholder="Arh. Mihai Popescu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/5 text-xs text-white placeholder:text-[#555] focus:outline-none focus:border-[#D8D2C4]/40"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono-tech text-[#848B98] uppercase block mb-1">Birou / Studio *</label>
                    <input
                      type="text"
                      required
                      placeholder="Studio Arhitectură / Privat"
                      value={formData.firm}
                      onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/5 text-xs text-white placeholder:text-[#555] focus:outline-none focus:border-[#D8D2C4]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono-tech text-[#848B98] uppercase block mb-1">Telefon *</label>
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
                      placeholder="arhitect@studio.ro"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/5 text-xs text-white placeholder:text-[#555] focus:outline-none focus:border-[#D8D2C4]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono-tech text-[#848B98] uppercase block mb-1">Adresă Sediu / Livrare Curier *</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Strada, Număr, Oraș (Ex: Str. Horea nr. 12, Cluj-Napoca)"
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/5 text-xs text-white placeholder:text-[#555] focus:outline-none focus:border-[#D8D2C4]/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={selectedStones.length === 0}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#F8F7F4] hover:bg-[#D8D2C4] disabled:opacity-40 disabled:cursor-not-allowed text-[#090A0D] text-xs font-sans-clean font-medium tracking-wide transition-all cursor-pointer shadow-lg"
                >
                  <span>Expediază Cutia cu Mostre Fizice</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            </>
          )}

        </div>

        {/* Footer Guarantee */}
        <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono-tech text-[#848B98]">
          <ShieldCheck size={14} className="text-[#A38F78]" />
          <span>Mostre gratuite tăiate din lastre autentice · Cluj & Național</span>
        </div>

      </div>

    </div>
  );
};
