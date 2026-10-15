export interface StoneSpecimen {
  id: string;
  slug: string;
  name: string;
  mineralType: 'Marmură' | 'Granit' | 'Travertin' | 'Cuarțit' | 'Gard Modular';
  finish: string;
  origin: string;
  compressiveStrengthMpa: number;
  densityKgM3: number;
  absorptionRate: string;
  description: string;
  recommendedUse: string[];
  imageUrl: string;
  macroTextureUrl: string;
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Rezidențial Exclusiv' | 'Hospitality & Boutique' | 'Comercial & Fațade';
  location: string;
  year: string;
  materials: string[];
  challenge: string;
  solution: string;
  imageUrl: string;
  detailImages: string[];
  specs: {
    area: string;
    precision: string;
    finishType: string;
  };
}

export const STONE_COLLECTION: StoneSpecimen[] = [
  {
    id: 'carrara-statuario',
    slug: 'carrara-statuario',
    name: 'Bianco Statuario Extra',
    mineralType: 'Marmură',
    finish: 'Lustruit / Velvet Honed',
    origin: 'Bazinul Carrara, Munții Apuani, Italia',
    compressiveStrengthMpa: 142,
    densityKgM3: 2710,
    absorptionRate: '0.12%',
    description: 'Cea mai nobilă expresie a marmurei albe italiene. Fond de lapte imaculat străbătut de venaturi dramatice gri-antracit. Ideală pentru lucrări bookmatch de anvergură.',
    recommendedUse: ['Insule de bucătărie cascadă', 'Lavoare monolit sculptate', 'Placări spectaculoase de perete'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    macroTextureUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=90',
    featured: true
  },
  {
    id: 'nero-assoluto',
    slug: 'nero-assoluto',
    name: 'Nero Assoluto Deep Black',
    mineralType: 'Granit',
    finish: 'Periat / Fiamat & Lustruit',
    origin: 'Masvingo, Zimbabwe / Cariere Selecționate',
    compressiveStrengthMpa: 285,
    densityKgM3: 3080,
    absorptionRate: '0.04%',
    description: 'Granit de o densitate și puritate cromatică excepțională. Rezistență absolută la acizi casnici, zgârieturi și șocuri termice. Textura periată oferă o senzație tactilă de piele naturală.',
    recommendedUse: ['Blaturi bucătărie heavy-duty', 'Trepte masive interioare/exterioare', 'Fațade ventilate'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    macroTextureUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=90',
    featured: true
  },
  {
    id: 'travertino-classico',
    slug: 'travertino-classico',
    name: 'Travertino Romano Alabastrino',
    mineralType: 'Travertin',
    finish: 'Antichizat / Pori Chituiți Mătase',
    origin: 'Tivoli / Roma, Italia',
    compressiveStrengthMpa: 118,
    densityKgM3: 2450,
    absorptionRate: '0.85%',
    description: 'Piatra clasicismului roman redefinită pentru arhitectura contemporană. Nuanțe calde de crem și nisip cu sedimentare liniară care îmblânzesc spațiile minimaliste.',
    recommendedUse: ['Băi mediteraneene & spa-uri', 'Pardoseli încălzite', 'Terase exterioare antiderapante'],
    imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    macroTextureUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=90',
    featured: true
  },
  {
    id: 'taj-mahal-quartzite',
    slug: 'taj-mahal-quartzite',
    name: 'Taj Mahal Lumina Quartzite',
    mineralType: 'Cuarțit',
    finish: 'Leather / Honed Satinat',
    origin: 'Ceará, Brazilia',
    compressiveStrengthMpa: 245,
    densityKgM3: 2680,
    absorptionRate: '0.08%',
    description: 'Eleganța translucidă a onixului combinată cu duritatea superioară a granitului. Tonuri calde de șampanie și venaturi fine care filtrează lumina ambientală.',
    recommendedUse: ['Panouri retroiluminate', 'Insule bucătărie cu îmbinare la 45°', 'Glafuri și blaturi premium'],
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    macroTextureUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90',
    featured: true
  },
  {
    id: 'calacatta-gold',
    slug: 'calacatta-gold',
    name: 'Calacatta Borghini Imperial',
    mineralType: 'Marmură',
    finish: 'Lustruit Bookmatched',
    origin: 'Carrara, Toscana, Italia',
    compressiveStrengthMpa: 138,
    densityKgM3: 2690,
    absorptionRate: '0.14%',
    description: 'Una dintre cele mai căutate pietre din lume. Suprafață caldă de fildeș traversată de filoane aurii și accente cenușii. Simbol al luxului restrâns și arhitectural.',
    recommendedUse: ['Pereți accent bookmatch', 'Mobilier sculptural din piatră', 'Șeminee monolit'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    macroTextureUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=90'
  },
  {
    id: 'gard-modular-brutalist',
    slug: 'gard-modular-brutalist',
    name: 'Sistem Gard Modular "Brutalist Stone"',
    mineralType: 'Gard Modular',
    finish: 'Sablat Texturat / Miez Piatră Compozit',
    origin: 'Atelier SetInStone, Cluj-Napoca',
    compressiveStrengthMpa: 190,
    densityKgM3: 2350,
    absorptionRate: '0.20%',
    description: 'Sistem inovator de împrejmuire rezidențială. Panouri modulare autoportante fabricate din compozit de piatră naturală și profile arhitecturale din aluminiu anodizat. Rezistență nelimitată la cicluri de îngheț.',
    recommendedUse: ['Delimitări perimetrice vile', 'Panouri paravan curte interioară', 'Accente de fațadă modernă'],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    macroTextureUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=90',
    featured: true
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'penthouse-cluj',
    title: 'Penthouse Someșeni — Insulă Monolit & Trepte Flotante',
    category: 'Rezidențial Exclusiv',
    location: 'Cluj-Napoca, România',
    year: '2026',
    materials: ['Cuarțit Taj Mahal Leather', 'Granit Nero Assoluto'],
    challenge: 'Debitarea și asamblarea la 45 de grade a unei insule de 3.8 metri lungime, cu continuitate perfectă a venaturii de la suprafața orizontală spre coborârile laterale waterfall, integrând decupaje invizibile pentru plită cu inducție și chiuvetă sub blat.',
    solution: 'Scanare 3D la fața locului cu laser Leica, debitare CNC de precizie milimetrică în atelierul din Str. D. Georgescu-Kiriac și ranforsare internă din fibră de sticlă structurală.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      area: '48 m² suprafață utilă piatră',
      precision: 'Toleranță debitare < 0.6 mm',
      finishType: 'Honed Soft Touch & Nano-Impermeabilizare'
    }
  },
  {
    id: 'vila-faget',
    title: 'Vila Făget — Lavoare Monolit & Pavaj Piatră Masivă',
    category: 'Rezidențial Exclusiv',
    location: 'Făget / Cluj-Napoca, România',
    year: '2025',
    materials: ['Travertino Romano', 'Granit Grigio Periat'],
    challenge: 'Sculptarea din bloc masiv a două lavoare gemene de 220 kg fiecare, cu pantă interioară ascunsă pentru scurgerea apei, alături de placarea exterioară cu travertin antichizat rezistent la îngheț.',
    solution: 'Frezare multiaxială asistată de calculator și finisare manuală artizanală a muchiilor de contact. Tratament de protecție hidrofugă de profunzime.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      area: '115 m² fațade & băi',
      precision: 'Bizot finisat manual la 1 mm',
      finishType: 'Periat Antichizat & Por chituit transparent'
    }
  },
  {
    id: 'resedinta-borhanci',
    title: 'Reședință Borhanci — Împrejmuire Gard Modular Brutalist',
    category: 'Comercial & Fațade',
    location: 'Borhanci / Cluj-Napoca, România',
    year: '2026',
    materials: ['Compozit Piatră Naturală', 'Aluminiu Anodizat Negru'],
    challenge: 'Instalarea a 42 de metri liniari de gard perimetric modular pe un teren în pantă accentuată, menținând ritmul arhitectural curat și fără fisuri de tasare.',
    solution: 'Module prefabricate SetInStone cu fixare ascunsă mecanică și toleranțe reglabile, asigurând o linie perimetrică impecabilă.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      area: '42 ml gard modular autoportant',
      precision: 'Montaj pe fundație izolată cu nivel laser',
      finishType: 'Sablat texturat hidro-repelent'
    }
  }
];

export const WORKSHOP_METRICS = [
  { value: '< 0.8 mm', label: 'Toleranță Debitări CNC', desc: 'Precizie absolută pentru îmbinări la 45° cu muchii invizibile' },
  { value: '100% Lastre', label: 'Origine Certificată', desc: 'Import direct din cariere de referință din Carrara, Tivoli și Zimbabwe' },
  { value: '3D Laser', label: 'Scanare la Locație', desc: 'Măsurători digitale milimetrice înainte de debitarea primei piese' },
  { value: '10 Ani', label: 'Garanție Structurală', desc: 'Impermeabilizare nanotehnologică și asistență post-montaj' }
];

export const ATELIER_CONTACT = {
  brand: 'SetInStone',
  tagline: 'Piatră Nobilă. Precizie Milimetrică. Arhitectură Atemporală.',
  address: 'Str. Dumitru Georgescu-Kiriac, nr. 60-62',
  city: 'Cluj-Napoca, Jud. Cluj, România',
  areaNote: 'Zona industrială Someșeni / B-dul Muncii',
  phone: '+40 740 647 532',
  phoneClean: '+40740647532',
  email: 'info@setinstone.ro',
  schedule: 'Luni – Vineri: 08:00 – 16:30 | Sâmbătă – Duminică: Închis',
  instagram: 'https://www.instagram.com/set_in_s.t.o.n.e',
  facebook: 'https://www.facebook.com/profile.php?id=61577401417193',
  tiktok: 'https://www.tiktok.com/@set_in_s.t.o.n.e',
  mapsUrl: 'https://maps.app.goo.gl/McAHdn8DMRtoTvAW9'
};
