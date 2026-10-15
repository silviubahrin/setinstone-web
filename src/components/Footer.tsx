import { ATELIER_CONTACT } from '../data/stoneData';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#07080A] text-[#848B98] pt-20 pb-12 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border border-[#D8D2C4]/40 flex items-center justify-center bg-[#12141B]">
                <span className="font-editorial text-xs italic font-semibold text-[#D8D2C4]">S</span>
              </div>
              <span className="font-editorial text-2xl tracking-wider text-white font-medium uppercase">
                Set<span className="text-[#A38F78]">In</span>Stone
              </span>
            </div>
            
            <p className="font-editorial text-lg text-[#D8D2C4] italic font-light max-w-sm">
              "{ATELIER_CONTACT.tagline}"
            </p>

            <p className="font-sans-clean text-xs leading-relaxed text-[#848B98] max-w-sm font-light">
              Atelier specializat în debitarea, prelucrarea de precizie și montajul marmurei, granitului, travertinului, cuarțitului și gardurilor modulare de lux. Cluj-Napoca.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={ATELIER_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#12141B] hover:bg-white/10 text-[#D8D2C4] hover:text-white transition-colors"
                title="Instagram @set_in_s.t.o.n.e"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={ATELIER_CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#12141B] hover:bg-white/10 text-[#D8D2C4] hover:text-white transition-colors"
                title="Facebook SetInStone"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4 font-sans-clean text-xs">
            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#A38F78] block mb-2">
              Baza Operațională & Contact
            </span>

            <div className="flex items-start gap-3">
              <MapPin size={15} className="text-[#A38F78] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">{ATELIER_CONTACT.address}</p>
                <p className="text-[#848B98]">{ATELIER_CONTACT.city}</p>
                <p className="text-[10px] text-[#A38F78]">{ATELIER_CONTACT.areaNote}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={15} className="text-[#A38F78] shrink-0" />
              <a href={`tel:${ATELIER_CONTACT.phoneClean}`} className="text-white hover:text-[#D8D2C4] font-mono-tech transition-colors">
                {ATELIER_CONTACT.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={15} className="text-[#A38F78] shrink-0" />
              <a href={`mailto:${ATELIER_CONTACT.email}`} className="text-white hover:text-[#D8D2C4] transition-colors">
                {ATELIER_CONTACT.email}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={15} className="text-[#A38F78] shrink-0 mt-0.5" />
              <span className="text-[#848B98]">{ATELIER_CONTACT.schedule}</span>
            </div>
          </div>

          {/* Quick Direct Links */}
          <div className="lg:col-span-3 space-y-3 font-mono-tech text-xs">
            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#A38F78] block mb-2">
              Navigare Arhitectură
            </span>
            <ul className="space-y-2">
              <li><a href="#colectie" className="hover:text-white transition-colors">Colecții Materiale</a></li>
              <li><a href="#proiecte" className="hover:text-white transition-colors">Studii de Caz Rezidențiale</a></li>
              <li><a href="#atelier" className="hover:text-white transition-colors">Atelier CNC & Toleranțe</a></li>
              <li><a href={ATELIER_CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Localizare Showroom <ArrowUpRight size={11} /></a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech gap-4 text-[#848B98]">
          <p>© {new Date().getFullYear()} SetInStone Cluj-Napoca. Toate drepturile rezervate.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Politică de Confidențialitate</a>
            <a href="#" className="hover:text-white transition-colors">Termeni & Garanții</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
