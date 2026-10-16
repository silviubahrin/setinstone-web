export type PageId = 'acasa' | 'despre' | 'servicii' | 'produse' | 'proiecte' | 'contact' | 'cookies';

export interface NavPage {
  id: PageId;
  label: string;
  subtitle: string;
  previewImage: string;
  previewMaterial: string;
}

export interface HeroSlab {
  id: string;
  name: string;
  origin: string;
  finish: string;
  thickness: string;
  use: string;
  baseGradient: string;
  textureUrl: string;
  textColor: string;
  mutedColor: string;
  accentLine: string;
  filterId: string;
  veinPath: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  category:
    | 'Blaturi Bucătărie'
    | 'Dale & Pavaj'
    | 'Scări & Trepte'
    | 'Monumente Funerare'
    | 'Borduri & Margini'
    | 'Placaj Fațadă';
  material: 'Marmură' | 'Granit' | 'Travertin' | 'Compozit';
  price: string;
  priceNote: string;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  specs: {
    color: string;
    origin: string;
    finish: string;
    usage: string;
    dimensions: string;
    weight: string;
  };
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Rezidențial' | 'Hospitality' | 'Comercial' | 'Urban';
  location: string;
  material: string;
  image: string;
}

export const NAV_PAGES: NavPage[] = [
  {
    id: 'acasa',
    label: 'Acasă',
    subtitle: 'Suprafețe din piatră care definesc arhitectura',
    previewImage: 'https://setinstone.ro/images/hero-bg.webp',
    previewMaterial: 'Marmură Carrara & Travertin Premium',
  },
  {
    id: 'despre',
    label: 'Despre Noi',
    subtitle: 'Atelierul din Cluj-Napoca, vizionare 3D & execuție',
    previewImage: 'https://setinstone.ro/images/about-us-image.webp',
    previewMaterial: '1200+ Proiecte Finalizate din Piatră',
  },
  {
    id: 'servicii',
    label: 'Servicii',
    subtitle: 'Debitare de precizie, finisare & montaj cu garanție',
    previewImage: 'https://setinstone.ro/images/service-image_1.webp',
    previewMaterial: 'Tăiere CNC · Îmbinări 45° · Montaj la Cheie',
  },
  {
    id: 'produse',
    label: 'Produse',
    subtitle: 'Blaturi, scări, dale, placări, garduri modulare & monumente',
    previewImage: 'https://setinstone.ro/images/travertine-texture1.jpg',
    previewMaterial: 'Catalog Marmură, Granit & Travertin',
  },
  {
    id: 'proiecte',
    label: 'Proiecte',
    subtitle: 'Portofoliu rezidențial, hospitality, comercial & urban',
    previewImage: 'https://setinstone.ro/images/what-we-do1.webp',
    previewMaterial: 'Lucrări de Referință în România',
  },
  {
    id: 'contact',
    label: 'Contact',
    subtitle: 'Str. Dumitru Georgescu-Kiriac 60–62, Cluj-Napoca',
    previewImage: 'https://setinstone.ro/images/contact-image.webp',
    previewMaterial: 'Consultanță Tehnică & Măsurători la Locație',
  },
];

export const HERO_SLABS: HeroSlab[] = [
  {
    id: 'marmura',
    name: 'Marmură',
    origin: 'Carrara, Toscana',
    finish: 'Lustruită sau mată (honed)',
    thickness: '20 / 30 mm',
    use: 'Blaturi de bucătărie, insule la 45°, băi și placări interioare',
    baseGradient: 'linear-gradient(155deg, #FBF9F5 0%, #EDE7DD 55%, #DFD7C9 100%)',
    textureUrl: 'https://setinstone.ro/images/service-image_1.webp',
    textColor: '#15100A',
    mutedColor: '#5E564D',
    accentLine: '#C4A07A',
    filterId: 'vein-marble',
    veinPath: 'M -10 35 Q 85 95, 145 185 T 310 340 M 65 -10 Q 115 125, 245 215',
  },
  {
    id: 'granit',
    name: 'Granit',
    origin: 'Negru Absolut & Grigio Sardo',
    finish: 'Lustruit, periat sau fiamat',
    thickness: '20 / 30 / 80 mm',
    use: 'Blaturi rezistente la temperatură, trepte exterioare, dale și monumente',
    baseGradient: 'linear-gradient(160deg, #26221E 0%, #17130F 60%, #0E0B08 100%)',
    textureUrl: 'https://setinstone.ro/images/service-image_2.webp',
    textColor: '#FBF4EF',
    mutedColor: '#B8ADA1',
    accentLine: '#C4A07A',
    filterId: 'grain-granite',
    veinPath: 'M 20 0 L 195 380 M 145 0 L 55 380',
  },
  {
    id: 'travertin',
    name: 'Travertin',
    origin: 'Tivoli & Cariere Certificate',
    finish: 'Chituit mat, periat sau antichizat',
    thickness: '20 mm',
    use: 'Placări interioare și exterioare, băi calde, terase și fațade',
    baseGradient: 'linear-gradient(165deg, #E8DEC8 0%, #D7C8AC 55%, #C4B293 100%)',
    textureUrl: 'https://setinstone.ro/images/travertine-texture1.jpg',
    textColor: '#15100A',
    mutedColor: '#574B3D',
    accentLine: '#9E7B56',
    filterId: 'vein-travertine',
    veinPath: 'M 0 70 Q 120 65, 300 85 M 0 180 Q 150 195, 300 170 M 0 270 Q 140 260, 300 285',
  },
  {
    id: 'gard-compozit',
    name: 'Garduri & Quartz',
    origin: 'Compozit Piatră & Cuarț',
    finish: 'Texturat arhitectural / Satinat',
    thickness: 'Panouri modulare & 20 mm',
    use: 'Module de gard de lux, paravane exterioare și suprafețe din cuarț',
    baseGradient: 'linear-gradient(150deg, #EFEBE2 0%, #DED6C6 50%, #CCC1AE 100%)',
    textureUrl: 'https://setinstone.ro/images/service-image_3.webp',
    textColor: '#15100A',
    mutedColor: '#595146',
    accentLine: '#C4A07A',
    filterId: 'vein-quartzite',
    veinPath: 'M -20 120 C 70 80, 160 150, 290 90 M 10 260 C 110 220, 180 290, 310 230',
  },
];

export const MARQUEE_ITEMS = [
  'Marmură Premium',
  'Piatră Naturală',
  'Garduri Modulare de Lux',
  'Plăci Arhitecturale',
  'Meșteșug de Precizie',
  'Design Atemporal',
  'Granit & Suprafețe Quartz',
  'Construit să Reziste',
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: 'blat-carrara',
    slug: 'blat-bucatarie-marmura-alba-carrara',
    title: 'Blat Bucătărie Marmură Albă Carrara',
    category: 'Blaturi Bucătărie',
    material: 'Marmură',
    price: '280 EUR / ml',
    priceNote: 'Prețuri fără TVA. Montaj calculat separat.',
    summary: 'Blat de bucătărie din marmură Carrara italiană, finisaj lustruit sau mat. Dimensiuni la comandă.',
    description:
      'Marmura Carrara este cea mai renumită piatră naturală din lume, extrasă din Toscana, Italia. Venele gri delicate pe fond alb pur creează un aspect de lux inconfundabil, debitat la dimensiunile exacte ale mobilierului.',
    image: 'https://setinstone.ro/images/service-image_1.webp',
    gallery: [
      'https://setinstone.ro/images/service-image_1.webp',
      'https://setinstone.ro/images/about-us-image.webp',
      'https://setinstone.ro/images/page_banner.jpg',
    ],
    featured: true,
    specs: {
      color: 'Alb Carrara cu venatură gri fină',
      origin: 'Italia (Carrara, Toscana)',
      finish: 'Lustruit / Mat (Honed)',
      usage: 'Interior (Bucătării, Insule 45°, Băi)',
      dimensions: 'L: La comandă × l: La comandă × h: 2 / 3 cm',
      weight: '55 kg/m²',
    },
    highlights: [
      'Suprafață hiper-lustruită, ușor de igienizat',
      'Tăiat la dimensiunile exacte ale bucătăriei tale',
      'Rezistent la temperaturi ridicate',
    ],
  },
  {
    id: 'dale-grigio-sardo',
    slug: 'dale-granit-grigio-sardo',
    title: 'Dale Granit Grigio Sardo',
    category: 'Dale & Pavaj',
    material: 'Granit',
    price: '85 RON / m²',
    priceNote: 'Prețuri fără TVA. Montaj calculat separat.',
    summary: 'Dale din granit Grigio Sardo, ideale pentru terase, alei și pavaje exterioare.',
    description:
      'Granitul Grigio Sardo din Sardinia este o alegere excelentă pentru pavaje exterioare datorită rezistenței sale excepționale la trafic intens, cicluri de îngheț și radiații UV.',
    image: 'https://setinstone.ro/images/travertine-texture1.jpg',
    gallery: [
      'https://setinstone.ro/images/travertine-texture1.jpg',
      'https://setinstone.ro/images/project-list3.webp',
      'https://setinstone.ro/images/what-we-do2.webp',
    ],
    featured: true,
    specs: {
      color: 'Gri Cristal',
      origin: 'Sardinia, Italia',
      finish: 'Fiamat / Lustruit',
      usage: 'Exterior (Terase, Alei, Parcări)',
      dimensions: 'L: 60 cm × l: 30 cm × h: 3 cm',
      weight: '75 kg/m²',
    },
    highlights: [
      'Rezistență maximă la îngheț, trafic auto și pietonal',
      'Aderență naturală pentru terase și alei exterioare',
      'Calibrare dimensională la 3 cm grosime',
    ],
  },
  {
    id: 'trepte-verde-ubatuba',
    slug: 'trepte-granit-verde-ubatuba',
    title: 'Trepte Granit Verde Ubatuba',
    category: 'Scări & Trepte',
    material: 'Granit',
    price: 'La cerere',
    priceNote: 'Calcul personalizat după releveu și lungimea treptelor.',
    summary: 'Trepte și scări din granit Verde Ubatuba brazilian, finisaj lustruit sau periat.',
    description:
      'Granitul Verde Ubatuba, cu cristalele aurii pe fond verde închis profund, este una dintre cele mai spectaculoase pietre naturale disponibile. Ideal pentru scări interioare și exterioare de reprezentare.',
    image: 'https://setinstone.ro/images/service-image_2.webp',
    gallery: [
      'https://setinstone.ro/images/service-image_2.webp',
      'https://setinstone.ro/images/project-list1.webp',
    ],
    featured: true,
    specs: {
      color: 'Verde Ubatuba cu reflexii aurii',
      origin: 'Brazilia',
      finish: 'Lustruit / Periat / Bandă antiderapantă',
      usage: 'Interior + Exterior',
      dimensions: 'L: 100–200 cm × l: 30–40 cm × h: 3 cm',
      weight: '~25 kg/buc',
    },
    highlights: [
      'Duritate superioară la abraziune și trafic intens',
      'Prelucrare profil semibaston, bizot sau îmbinare la 45°',
      'Potrivit atât pentru scări interioare cât și exterioare',
    ],
  },
  {
    id: 'monument-granit-negru',
    slug: 'monument-granit-negru-absolut',
    title: 'Monument Granit Negru Absolut',
    category: 'Monumente Funerare',
    material: 'Granit',
    price: '800 EUR / buc',
    priceNote: 'Prețuri fără TVA. Montaj calculat separat.',
    summary: 'Monument funerar din granit Negru Absolut, lucrare artizanală cu gravuri laser personalizate.',
    description:
      'Monumentul din Granit Negru Absolut este realizat din piatră masivă de cea mai înaltă calitate, extrasă din carierele din Zimbabwe. Suprafața perfect lustruită conferă un aspect solemn și durabil în timp.',
    image: 'https://setinstone.ro/images/page_banner.jpg',
    gallery: ['https://setinstone.ro/images/page_banner.jpg'],
    specs: {
      color: 'Negru Absolut',
      origin: 'Zimbabwe / Africa de Sud',
      finish: 'Lustruit Oglindă',
      usage: 'Exterior',
      dimensions: 'L: 60 cm × l: 30 cm × h: 8 cm',
      weight: '~14 kg/buc',
    },
    highlights: [
      'Rezistent la îngheț și variații climatice extreme',
      'Gravuri laser personalizate incluse',
      'Livrare și montaj în toată România',
    ],
  },
  {
    id: 'module-gard-lux',
    slug: 'module-gard-compozit-piatra',
    title: 'Module de Gard din Compozit de Piatră',
    category: 'Borduri & Margini',
    material: 'Compozit',
    price: 'La cerere',
    priceNote: 'Configurare personalizată pe metru liniar și înălțime.',
    summary: 'Garduri decorative, paravane și plăci arhitecturale din compozit de piatră naturală pentru exterior.',
    description:
      'Sisteme modulare de împrejmuire și panouri decorative fabricate din compozit de piatră naturală. Oferă o linie arhitecturală curată, montaj rapid și rezistență completă la intemperii.',
    image: 'https://setinstone.ro/images/service-image_3.webp',
    gallery: [
      'https://setinstone.ro/images/service-image_3.webp',
      'https://setinstone.ro/images/project-list4.webp',
    ],
    featured: true,
    specs: {
      color: 'Calcar Cald / Antracit',
      origin: 'Producție SetInStone, Cluj-Napoca',
      finish: 'Texturat Arhitectural / Mat',
      usage: 'Exterior (Împrejmuiri, Paravane, Borduri)',
      dimensions: 'Module prefabricate la cotă',
      weight: '~45 kg/modul',
    },
    highlights: [
      'Montaj modular curat, fără fisuri de tasare',
      'Rezistență la cicluri repetate de îngheț-dezgheț',
      'Integrare cu porți pietonale și auto moderne',
    ],
  },
  {
    id: 'placaj-travertin-fatada',
    slug: 'placaj-fatada-travertin-premium',
    title: 'Placaj Fațadă & Travertin Premium',
    category: 'Placaj Fațadă',
    material: 'Travertin',
    price: 'La cerere',
    priceNote: 'Disponibil în finisaj chituit mat, periat sau antichizat.',
    summary: 'Selecție de travertin de cea mai înaltă calitate pentru fațade, socluri și finisaje interioare.',
    description:
      'Plăci și lastre de travertin natural selectate pentru placări verticale exterioare, fațade ventilate, băi și livinguri. Tratate hidrofug pentru păstrarea culorii calde.',
    image: 'https://setinstone.ro/images/what-we-do2.webp',
    gallery: [
      'https://setinstone.ro/images/what-we-do2.webp',
      'https://setinstone.ro/images/travertine-texture1.jpg',
    ],
    specs: {
      color: 'Crem / Romano Classico',
      origin: 'Tivoli, Italia / Turcia',
      finish: 'Chituit Mat / Periat / Antichizat',
      usage: 'Interior + Exterior (Fațade, Băi, Terase)',
      dimensions: '60 × 30 × 2 cm / Lastre la comandă',
      weight: '48 kg/m²',
    },
    highlights: [
      'Izolare termică și fonică naturală pentru fațade',
      'Impermeabilizare profesională la montaj',
      'Compatibil cu sistemele de încălzire în pardoseală',
    ],
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'restaurant-cluj',
    title: 'Restaurant Premium Cluj',
    category: 'Hospitality',
    location: 'Cluj-Napoca',
    material: 'Marmură & Travertin',
    image: 'https://setinstone.ro/images/what-we-do1.webp',
  },
  {
    id: 'vila-bucuresti',
    title: 'Vila Modernă București',
    category: 'Rezidențial',
    location: 'București',
    material: 'Marmură Carrara & Granit',
    image: 'https://setinstone.ro/images/project-list1.webp',
  },
  {
    id: 'hotel-sinaia',
    title: 'Hotel Boutique Sinaia',
    category: 'Hospitality',
    location: 'Sinaia',
    material: 'Travertin Premium & Recepție Monolit',
    image: 'https://setinstone.ro/images/project-list2.webp',
  },
  {
    id: 'sediu-iasi',
    title: 'Sediu Corporate Iași',
    category: 'Comercial',
    location: 'Iași',
    material: 'Placări Granit & Suprafețe Quartz',
    image: 'https://setinstone.ro/images/project-list3.webp',
  },
  {
    id: 'piata-brasov',
    title: 'Piață Centrală Brașov',
    category: 'Urban',
    location: 'Brașov',
    material: 'Dale & Pavaj Granit Grigio Sardo',
    image: 'https://setinstone.ro/images/project-list4.webp',
  },
  {
    id: 'casa-mamaia',
    title: 'Casă de Vacanță Mamaia',
    category: 'Rezidențial',
    location: 'Mamaia, Constanța',
    material: 'Fațadă Travertin & Terase Exterioare',
    image: 'https://setinstone.ro/images/project-img-top.webp',
  },
];

export const ABOUT_PILLARS = [
  {
    title: 'Design Arhitectural Inovator',
    description:
      'Proiectăm soluții arhitecturale care echilibrează funcționalitatea, estetica și valoarea pe termen lung pentru proiecte rezidențiale și comerciale.',
  },
  {
    title: 'Vizualizare 3D & Planificare',
    description:
      'Experimentați proiectul înainte de execuție cu modele 3D realiste, relevee la fața locului și simulări de materiale.',
  },
  {
    title: 'Design Interior Personalizat',
    description:
      'De la blaturi și insule monolit la scări și placări de baie, creăm suprafețe care reflectă arhitectura fiecărui spațiu.',
  },
  {
    title: 'Management Complet de Proiect',
    description:
      'Gestionăm fiecare fază — de la selecția blocului de piatră și debitarea CNC până la transport și montaj cu garanție.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Adrian P.',
    role: 'Proprietar Vilă',
    avatar: 'https://setinstone.ro/images/our-team1.webp',
    quote:
      'Calitatea travertinului este excepțională. Echipa a fost profesionistă de la măsurătoare până la montaj.',
  },
  {
    name: 'Andrei I.',
    role: 'Arhitect',
    avatar: 'https://setinstone.ro/images/our-team2.webp',
    quote:
      'Colaborăm de peste 3 ani. Materialele sunt mereu conforme, tăieturile la milimetru și livrarea la timp.',
  },
  {
    name: 'Radu C.',
    role: 'Dezvoltator Rezidențial',
    avatar: 'https://setinstone.ro/storage/sections/6205c25e-c351-416f-bc1b-98e43d88e2b6.webp',
    quote:
      'Finisajele pentru scările din granit și glafuri au fost executate fără cusur. Un partener de încredere în Cluj.',
  },
];

export const CONTACT_INFO = {
  phoneDisplay: '(+40) 740-647.532',
  phoneHref: '+40740647532',
  email: 'info@setinstone.ro',
  address: 'Str. Dumitru Georgescu-Kiriac, nr. 60-62, Cluj-Napoca',
  schedule: 'Luni - Vineri: 08:00 - 16:30',
  mapsUrl: 'https://maps.app.goo.gl/McAHdn8DMRtoTvAW9',
  facebook: 'https://www.facebook.com/profile.php?id=61577401417193',
  instagram: 'https://www.instagram.com/set_in_s.t.o.n.e',
  tiktok: 'https://www.tiktok.com/@set_in_s.t.o.n.e',
};
