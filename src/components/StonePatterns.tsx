import { useState } from 'react';
import { MARQUEE_ITEMS } from '../data/siteData';

export function SetInStoneLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.9733 11.4257C6.47184 10.8133 11.9926 9.3114 11.7509 8.057C11.4652 6.56992 8.65543 4.2527 7.86256 3.41206C5.2917 3.83195 3.33334 5.96547 3.33334 8.54074V10.9498C3.33242 11.2717 3.64737 11.5062 3.9733 11.4257Z"
        fill="#C4A07A"
      />
      <path
        d="M30.9491 27.6768C30.6625 25.6693 28.2757 23.5707 26.364 22.2018C24.4523 20.8336 21.9703 19.3728 21.2534 19.9213C20.5374 20.468 20.2499 22.4756 19.6777 25.3955C19.154 28.0687 15.512 33.0321 16.4349 36.0928C16.5374 36.4349 16.8697 36.6667 17.2424 36.6667H26.0152C26.3374 36.6667 26.6341 36.5092 26.798 36.245C28.6327 33.2805 31.1313 28.9566 30.9491 27.6768Z"
        fill="#C4A07A"
      />
      <path
        d="M18.1488 18.0957C20.7269 19.7384 21.8732 14.1724 23.1165 12.5305C24.3571 10.8868 27.6888 7.39044 27.3006 6.57254C26.8355 5.5972 25.7982 4.39791 24.7563 3.33421H18.2852C16.466 5.84475 14.1029 9.18456 13.7569 10.0654C13.1837 11.5254 15.5715 16.4529 18.1488 18.0957Z"
        fill="#C4A07A"
      />
      <path
        d="M18.2458 20.8328C17.5894 19.0903 8.52908 20.9657 4.28093 21.9498C3.7242 22.0775 3.33334 22.5525 3.33334 23.101V31.4584C3.33334 34.3346 5.77419 36.6658 8.78451 36.6658H10.9782C11.3673 36.6658 11.7207 36.4611 11.8974 36.1296C14.1835 31.8179 18.8995 22.5709 18.2458 20.8328Z"
        fill="#C4A07A"
      />
      <path
        d="M4.04014 19.5198C7.40295 19.2538 13.9198 18.5173 13.279 16.8177C12.4202 14.5372 11.6557 11.7073 9.26793 11.7073C7.77466 11.7073 5.35212 12.5279 3.7435 13.1419C3.49539 13.2364 3.33334 13.4682 3.33334 13.7236V18.8934C3.33242 19.26 3.65744 19.5504 4.04014 19.5198Z"
        fill="#C4A07A"
      />
      <path
        d="M32.7316 3.54503C32.3416 3.43743 31.9177 3.57039 31.6751 3.88268C30.5984 5.26479 29.3285 7.00467 28.5622 8.42265C27.0333 11.2516 23.3088 15.7233 23.3088 16.9086C23.3088 18.0948 32.4789 23.5699 34.1974 24.6651C35.5991 25.5591 35.9232 25.601 36.6667 24.8426V8.54249C36.6658 6.16928 35.004 4.17222 32.7316 3.54503Z"
        fill="#C4A07A"
      />
      <path
        d="M35.5332 26.8554C34.6048 26.5816 31.6027 32.6682 30.1397 35.882C29.9712 36.2529 30.2578 36.6658 30.6817 36.6658H31.2146C34.224 36.6658 36.6648 34.3346 36.6648 31.4584V29.9354C36.3297 28.2647 35.9415 26.9753 35.5332 26.8554Z"
        fill="#C4A07A"
      />
      <path
        d="M13.886 5.51322C14.2082 5.71004 15.5019 4.30694 16.0769 3.65437C16.1886 3.52753 16.0943 3.33421 15.9194 3.33421H12.6024C12.3643 3.33421 12.227 3.59139 12.368 3.77421C12.8175 4.35767 13.5957 5.3374 13.886 5.51322Z"
        fill="#C4A07A"
      />
      <path
        d="M28.0568 4.6892C28.3416 5.01898 28.8708 5.00849 29.1409 4.66908L29.9099 3.69986C30.028 3.5494 29.9172 3.33334 29.7186 3.33334H27.5231C27.2475 3.33334 27.101 3.64475 27.285 3.84069C27.524 4.09524 27.8142 4.40578 28.0568 4.6892Z"
        fill="#C4A07A"
      />
    </svg>
  );
}

/**
 * Rotating Kinetic Typography Consultation Seal (inspired by setinstone.ro About badge + Claude SVG motion)
 */
export function RotatingConsultationSeal({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Cere o consultație tehnică"
      className="group relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center cursor-pointer focus:outline-none"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <path
            id="sealCirclePath"
            d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          />
        </defs>

        {/* Outer Basalt Disc */}
        <circle
          cx="100"
          cy="100"
          r="94"
          fill="#15100A"
          stroke="#C4A07A"
          strokeWidth="1.2"
        />

        {/* Subtle Inner Architectural Ring */}
        <circle
          cx="100"
          cy="100"
          r="52"
          fill="none"
          stroke="#C4A07A"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Rotating Circular Text */}
        <g className="animate-seal-spin origin-center">
          <text
            fill="#C4A07A"
            fontSize="10.5"
            fontWeight="500"
            letterSpacing="3.1px"
          >
            <textPath href="#sealCirclePath" startOffset="0%">
              CERE O CONSULTAȚIE • SET IN STONE • CLUJ •
            </textPath>
          </text>
        </g>
      </svg>

      {/* Center Stone Mosaic Mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-[#1E1710] border border-[#C4A07A]/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <SetInStoneLogo className="w-7 h-7" />
        </div>
      </div>
    </button>
  );
}

/**
 * Claude Motion Vector Choreography: Live CNC Waterjet & 3D Laser Calibration Schematic
 */
export function CncSlabMotionSvg() {
  return (
    <div className="border border-[#15100A]/15 bg-[#15100A] text-[#FBF4EF] p-5 sm:p-6 relative overflow-hidden">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-[#C4A07A] pb-3 mb-3 border-b border-[#FBF4EF]/10">
        <span>CADRAN CNC // DEBITARE LASER & JET DE APĂ</span>
        <span>TOLERANȚĂ ±0.5 MM</span>
      </div>

      <svg viewBox="0 0 480 140" className="w-full h-32 sm:h-36" fill="none">
        {/* Background Technical Grid */}
        <g stroke="#FBF4EF" strokeOpacity="0.06" strokeWidth="1">
          <line x1="0" y1="35" x2="480" y2="35" />
          <line x1="0" y1="70" x2="480" y2="70" />
          <line x1="0" y1="105" x2="480" y2="105" />
          <line x1="120" y1="0" x2="120" y2="140" />
          <line x1="240" y1="0" x2="240" y2="140" />
          <line x1="360" y1="0" x2="360" y2="140" />
        </g>

        {/* Raw Stone Slab Outline */}
        <rect
          x="36"
          y="22"
          width="408"
          height="96"
          fill="#C4A07A"
          fillOpacity="0.08"
          stroke="#FBF4EF"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Organic Vein Inside Slab */}
        <path
          d="M 36 85 Q 150 40, 265 72 T 444 45"
          stroke="#C4A07A"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />

        {/* Animated CNC Cutting Path (45 deg Island + Sink Cutout) */}
        <rect
          x="56"
          y="34"
          width="230"
          height="72"
          stroke="#C4A07A"
          strokeWidth="1.6"
          className="animate-cnc-cut"
        />
        {/* Sink Cutout */}
        <rect
          x="105"
          y="46"
          width="76"
          height="48"
          stroke="#FBF4EF"
          strokeOpacity="0.7"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        {/* 45 Degree Miter Diagonal Line */}
        <line
          x1="286"
          y1="34"
          x2="338"
          y2="106"
          stroke="#C4A07A"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <polygon
          points="286,34 420,34 420,106 338,106"
          fill="#C4A07A"
          fillOpacity="0.14"
          stroke="#FBF4EF"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />

        {/* Animated Laser Scan Beam */}
        <g className="animate-laser-sweep">
          <line x1="60" y1="12" x2="60" y2="128" stroke="#C4A07A" strokeWidth="1.5" />
          <circle cx="60" cy="34" r="3.5" fill="#C4A07A" />
          <circle cx="60" cy="106" r="3.5" fill="#C4A07A" />
        </g>

        {/* Dimension Labels */}
        <text x="64" y="29" fill="#C4A07A" fontSize="9.5" letterSpacing="1">
          L: 3200 MM // INSULĂ MONOLIT
        </text>
        <text x="342" y="74" fill="#FBF4EF" fillOpacity="0.8" fontSize="9.5" letterSpacing="1">
          CANT 45.0°
        </text>
      </svg>
    </div>
  );
}

/**
 * Symmetrical Bookmatched Marble Veining (Macchia Aperta) architectural background motif.
 */
export function BookmatchWatermark({ dark = false }: { dark?: boolean }) {
  const strokeColor = dark ? '#C4A07A' : '#8C7458';
  const strokeOpacity = dark ? 0.14 : 0.11;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <line
          x1="600"
          y1="0"
          x2="600"
          y2="600"
          stroke={strokeColor}
          strokeOpacity={strokeOpacity * 1.4}
          strokeWidth="1"
          strokeDasharray="6 6"
        />

        <g opacity={strokeOpacity}>
          <path d="M 0 90 C 180 130, 320 260, 600 220" stroke={strokeColor} strokeWidth="1.2" />
          <path d="M 120 0 C 240 160, 410 190, 600 220" stroke={strokeColor} strokeWidth="0.7" />
          <path d="M 0 420 C 210 380, 420 490, 600 440" stroke={strokeColor} strokeWidth="1.1" />
          <path d="M 240 600 C 370 500, 490 465, 600 440" stroke={strokeColor} strokeWidth="0.65" />
        </g>

        <g opacity={strokeOpacity} transform="translate(1200, 0) scale(-1, 1)">
          <path d="M 0 90 C 180 130, 320 260, 600 220" stroke={strokeColor} strokeWidth="1.2" />
          <path d="M 120 0 C 240 160, 410 190, 600 220" stroke={strokeColor} strokeWidth="0.7" />
          <path d="M 0 420 C 210 380, 420 490, 600 440" stroke={strokeColor} strokeWidth="1.1" />
          <path d="M 240 600 C 370 500, 490 465, 600 440" stroke={strokeColor} strokeWidth="0.65" />
        </g>

        <g stroke={strokeColor} strokeOpacity={strokeOpacity * 1.8} strokeWidth="1">
          <path d="M 595 220 L 605 220 M 600 215 L 600 225" />
          <path d="M 595 440 L 605 440 M 600 435 L 600 445" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Stepped Quarry Extraction Contours for dark Espresso Basalt (#15100A) sections.
 */
export function QuarryContourPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      <svg
        viewBox="0 0 1200 500"
        fill="none"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <g stroke="#C4A07A" strokeOpacity="0.09" strokeWidth="1">
          <path d="M -50 80 Q 320 20, 680 130 T 1250 90" />
          <path d="M -50 155 Q 340 95, 700 205 T 1250 165" />
          <path d="M -50 230 Q 360 170, 720 280 T 1250 240" />
          <path d="M -50 305 Q 380 245, 740 355 T 1250 315" />
          <path d="M -50 380 Q 400 320, 760 430 T 1250 390" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Smooth Horizontal Stone Marquee Band from setinstone.ro
 */
export function StoneMarquee() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative overflow-hidden bg-[#15100A] text-[#FBF4EF] border-y border-[#C4A07A]/25 py-3.5">
      <div className="animate-stone-marquee flex items-center whitespace-nowrap gap-10">
        {repeated.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-10 shrink-0">
            <span className="font-display text-lg sm:text-xl tracking-wide text-[#FBF4EF]/90">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C4A07A] inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}

const EDGE_PROFILES = [
  {
    id: 'waterfall-45',
    name: 'Îmbinare la 45° (Waterfall)',
    thickness: '20 mm / 30 mm',
    desc: 'Continuitate neîntreruptă a venaturii între suprafața orizontală și piciorul vertical al insulei.',
  },
  {
    id: 'bizot',
    name: 'Muchie Dreaptă cu Bizot 2 mm',
    thickness: '20 mm / 30 mm',
    desc: 'Tăietură arhitecturală curată cu micro-șanfren la 45° pentru protecția muchiei la impact.',
  },
  {
    id: 'semibaston',
    name: 'Profil Semibaston (Bullnose)',
    thickness: '30 mm',
    desc: 'Muchie superioară rotunjită clasic, ideală pentru trepte de scară și blaturi rezidențiale.',
  },
  {
    id: 'picurator',
    name: 'Glaf Exterior cu Picurător',
    thickness: '20 mm / 30 mm',
    desc: 'Canal inferior frezat CNC la 15 mm de margine pentru oprirea infiltrării apei pe fațadă.',
  },
];

export function EdgeProfileShowcase() {
  const [selected, setSelected] = useState(EDGE_PROFILES[0].id);
  const current = EDGE_PROFILES.find((p) => p.id === selected) || EDGE_PROFILES[0];

  return (
    <div className="border border-[#D5CFC4] bg-[#FBF4EF] p-6 sm:p-10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-5">
          <p className="text-xs uppercase tracking-widest text-[#9E7B56] font-medium">
            Detalii Tehnice de Prelucrare CNC
          </p>
          <h3 className="font-display text-3xl sm:text-4xl text-[#15100A]">
            Profile de Muchie & Îmbinări
          </h3>
          <p className="text-sm sm:text-base text-[#5E5D5C] leading-relaxed">
            Fiecare piesă este profilată cu discuri diamantate și apă sub presiune pentru o geometrie impecabilă.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {EDGE_PROFILES.map((prof) => {
              const isSelected = prof.id === selected;
              return (
                <button
                  key={prof.id}
                  type="button"
                  onClick={() => setSelected(prof.id)}
                  className={`text-left p-3.5 border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#15100A] text-[#FBF4EF] border-[#15100A]'
                      : 'bg-[#EFECE6] text-[#15100A] border-[#D5CFC4] hover:border-[#C4A07A]'
                  }`}
                >
                  <span className="font-display text-lg block leading-snug">{prof.name}</span>
                  <span
                    className={`text-xs block mt-0.5 ${
                      isSelected ? 'text-[#C4A07A]' : 'text-[#5E5D5C]'
                    }`}
                  >
                    {prof.thickness}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#15100A] text-[#FBF4EF] p-6 sm:p-8 border border-[#15100A] relative">
          <div className="flex items-center justify-between text-xs text-[#C4A07A] pb-4 mb-4 border-b border-[#FBF4EF]/10">
            <span>SECȚIUNE TRANSVERSALĂ // TOLERANȚĂ ±0.5 MM</span>
            <span>{current.thickness}</span>
          </div>

          <div className="h-44 flex items-center justify-center">
            <svg viewBox="0 0 360 150" className="w-full h-full max-w-md" fill="none">
              <line x1="20" y1="35" x2="340" y2="35" stroke="#C4A07A" strokeOpacity="0.15" strokeDasharray="3 3" />
              <line x1="20" y1="95" x2="340" y2="95" stroke="#C4A07A" strokeOpacity="0.15" strokeDasharray="3 3" />

              {selected === 'waterfall-45' && (
                <g>
                  <polygon
                    points="40,35 260,35 220,75 40,75"
                    fill="#C4A07A"
                    fillOpacity="0.18"
                    stroke="#FBF4EF"
                    strokeWidth="1.8"
                  />
                  <polygon
                    points="264,39 264,140 224,140 224,79"
                    fill="#C4A07A"
                    fillOpacity="0.28"
                    stroke="#C4A07A"
                    strokeWidth="1.8"
                  />
                  <line x1="215" y1="80" x2="270" y2="25" stroke="#C4A07A" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="275" y="32" fill="#C4A07A" fontSize="11">45.0° Rost Rășină Epoxidică</text>
                </g>
              )}

              {selected === 'bizot' && (
                <g>
                  <polygon
                    points="40,35 270,35 280,45 280,95 40,95"
                    fill="#C4A07A"
                    fillOpacity="0.22"
                    stroke="#FBF4EF"
                    strokeWidth="1.8"
                  />
                  <circle cx="275" cy="40" r="14" stroke="#C4A07A" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="245" y="22" fill="#C4A07A" fontSize="11">Bizot 2×2 mm la 45°</text>
                </g>
              )}

              {selected === 'semibaston' && (
                <g>
                  <path
                    d="M 40 35 L 250 35 Q 285 35, 285 70 L 285 95 L 40 95 Z"
                    fill="#C4A07A"
                    fillOpacity="0.22"
                    stroke="#FBF4EF"
                    strokeWidth="1.8"
                  />
                  <text x="230" y="24" fill="#C4A07A" fontSize="11">Rază R=15 mm Semibaston</text>
                </g>
              )}

              {selected === 'picurator' && (
                <g>
                  <path
                    d="M 40 35 L 290 35 L 290 95 L 265 95 L 265 82 L 253 82 L 253 95 L 40 95 Z"
                    fill="#C4A07A"
                    fillOpacity="0.22"
                    stroke="#FBF4EF"
                    strokeWidth="1.8"
                  />
                  <circle cx="259" cy="88" r="14" stroke="#C4A07A" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="195" y="125" fill="#C4A07A" fontSize="11">Canal Picurător 6×8 mm</text>
                </g>
              )}
            </svg>
          </div>

          <p className="text-xs sm:text-sm text-[#FBF4EF]/80 pt-3 border-t border-[#FBF4EF]/10">
            <strong className="text-[#C4A07A]">{current.name}:</strong> {current.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
