// ============================================================
// ABUNDANT AIR CONDITIONING & HEATING LLC — single source of truth.
// All values verified from the Google Business Profile + client photos.
// Reviews are real, captured verbatim (minor spelling normalized).
// Never fabricate trust signals here.
// ============================================================

export interface SiteConfig {
  businessName: string;
  owner: string;
  tagline: string;
  taglineEs?: string;
  slug: string;

  phone: string;
  phoneDisplay: string;
  phoneSms: string;
  email: string; // sentinel "REPLACE_*" until the client confirms; guarded everywhere.
  address: {
    street?: string;
    city: string;
    state: string;
    zip?: string;
    geo: { lat: number; lng: number };
  };

  rating: { value: number; count: number; url: string };

  social: {
    facebook?: string;
    instagram?: string;
    yelp?: string;
    nextdoor?: string;
    googleBusinessProfile?: string;
  };

  trust: {
    licensed: boolean;
    insured: boolean;
    licenseNumber?: string;
    yearsInBusiness?: number;
    bilingualEs: boolean;
    freeEstimates: boolean;
    emergencyAvailable: boolean;
  };

  services: Array<{
    id: string;
    name: string;
    nameEs?: string;
    icon: string;
    shortDesc: string;
    longDesc: string;
    bullets: string[];
    heroImage: string;
    keywords: string[];
    featured: boolean;
  }>;

  primaryCity: string;
  region: string;
  serviceAreas: Array<{
    id: string;
    name: string;
    county: string;
    state: string;
    zip?: string;
    featured: boolean;
  }>;

  gallery: Array<{
    src: string;
    alt: string;
    stage: 'before' | 'after' | 'process';
    caption: string;
  }>;

  featuredBeforeAfter: { before: string; after: string; beforeAlt: string; afterAlt: string };

  testimonials: Array<{
    name: string;
    city?: string;
    rating: number;
    date: string;
    text: string;
    source: 'google';
  }>;

  brand: {
    logoAlt: string;
  };

  seo: {
    titleTemplate: string;
    siteName: string;
    defaultDescription: string;
    canonicalBase: string;
    locale: string;
    ogImage: string;
  };

  form: {
    provider: 'web3forms';
    web3formsAccessKey: string;
    toEmail: string;
    jobTypes: string[];
  };

  hours?: Array<{ days: string; open: string; close: string }>;
}

export const config: SiteConfig = {
  businessName: 'Abundant Air Conditioning & Heating LLC',
  owner: 'Abundant Air',
  tagline: 'Honest HVAC and expert ductwork for the Coachella Valley',
  taglineEs: 'Aire acondicionado, calefacción y ductos honestos en el Valle de Coachella',
  slug: 'abundant-air',

  phone: '+17604233404',
  phoneDisplay: '(760) 423-3404',
  phoneSms: '+17604233404',
  email: '13.csilva@gmail.com', // guarded: hidden from page + schema until set
  address: {
    // Mobile contractor — city only, no street published.
    city: 'La Quinta',
    state: 'CA',
    zip: '92253',
    geo: { lat: 33.6634, lng: -116.31 },
  },

  rating: {
    value: 5.0,
    count: 6,
    url: 'https://www.google.com/maps/place/Abundant+Air+Conditioning+%26+Heating+LLC/@33.774583,-116.3640845,10z/data=!4m6!3m5!1s0x40263d6d55a585d9:0x2f2c0f2dffbf40e9!8m2!3d33.774583!4d-116.3640845!16s%2Fg%2F11y_p_hdpb',
  },

  social: {
    googleBusinessProfile:
      'https://www.google.com/maps/place/Abundant+Air+Conditioning+%26+Heating+LLC/@33.774583,-116.3640845,10z/data=!4m6!3m5!1s0x40263d6d55a585d9:0x2f2c0f2dffbf40e9!8m2!3d33.774583!4d-116.3640845!16s%2Fg%2F11y_p_hdpb',
  },

  trust: {
    licensed: true,
    insured: true,
    licenseNumber: '1150839',
    yearsInBusiness: undefined,
    bilingualEs: true,
    freeEstimates: false,
    emergencyAvailable: true, // review-supported: late-night + last-minute calls
  },

  services: [
    {
      id: 'ductwork',
      name: 'Ductwork Replacement & Sealing',
      nameEs: 'Reemplazo y sellado de ductos',
      icon: 'duct',
      shortDesc:
        'Worn, leaky, or crushed ducts replaced and sealed so the cold air reaches every room instead of the attic.',
      longDesc:
        'Ductwork is what Abundant Air is known for. Old flex duct cracks, collapses, and leaks conditioned air into your attic, so your system runs longer and your power bill climbs. Abundant Air pulls the failed runs, fabricates and fits new plenums and boots, installs sealed flex duct, and wraps it with proper insulation. The result is stronger airflow at the registers and an AC that finally keeps up with a Coachella Valley summer.',
      bullets: [
        'Leaky and collapsed duct replacement',
        'New plenums, boots, and transitions fabricated on site',
        'Sealed joints and proper attic insulation',
        'Airflow and balance checked at every register',
      ],
      heroImage: 'duct-after-new-flex.jpg',
      keywords: ['ductwork', 'duct replacement', 'duct sealing', 'duct repair La Quinta'],
      featured: true,
    },
    {
      id: 'ac-repair',
      name: 'AC Repair',
      nameEs: 'Reparación de aire acondicionado',
      icon: 'wrench',
      shortDesc:
        'AC blowing warm or quit on the hottest day? Abundant Air diagnoses the real problem and gets you cool again, often same day.',
      longDesc:
        'When the AC takes a dive in July, every hour matters. Abundant Air shows up fast, finds the actual fault instead of guessing, and explains exactly what it needs before any work starts. Customers call about a unit blowing hot air late in the evening and have it running again before bedtime. No upsell games, just a straight answer and a fair price.',
      bullets: [
        'Same-day and after-hours response',
        'Honest diagnosis explained in plain language',
        'Capacitors, motors, refrigerant, thermostats',
        'Fair, up-front pricing before work begins',
      ],
      heroImage: 'duct-before-damaged-elbow.jpg',
      keywords: ['AC repair', 'air conditioning repair La Quinta', 'AC blowing hot air'],
      featured: true,
    },
    {
      id: 'ac-installation',
      name: 'AC Installation & Replacement',
      nameEs: 'Instalación y reemplazo de A/C',
      icon: 'unit',
      shortDesc:
        'Right-sized, efficient cooling installed clean, plus tips to keep it running for years.',
      longDesc:
        'A new system is only as good as the install behind it. Abundant Air sizes the equipment to your home, sets it level and sealed, ties it into properly sized ductwork, and shows you how to keep it healthy. You get efficient, even cooling and an installer who stands behind the work instead of disappearing after the truck leaves.',
      bullets: [
        'Correctly sized for your home, not oversold',
        'Clean, level, sealed installation',
        'Paired with sound ductwork for full airflow',
        'Maintenance tips so it lasts',
      ],
      heroImage: 'duct-after-clean-run.jpg',
      keywords: ['AC installation', 'AC replacement La Quinta', 'new air conditioner'],
      featured: true,
    },
    {
      id: 'heating',
      name: 'Heating & Furnace Service',
      nameEs: 'Servicio de calefacción',
      icon: 'flame',
      shortDesc:
        'Desert nights get cold. Furnace and heat-pump repair, service, and replacement done right.',
      longDesc:
        'Coachella Valley winters still drop cold after dark. Abundant Air services and repairs furnaces and heat pumps, replaces aging units, and keeps your heat safe and reliable. The same honest, on-time service customers count on for cooling carries straight through to the heating season.',
      bullets: [
        'Furnace and heat-pump repair',
        'Seasonal heating tune-ups',
        'Safe, reliable replacements',
        'Year-round comfort, one trusted tech',
      ],
      heroImage: 'duct-after-insulated.jpg',
      keywords: ['heating repair', 'furnace service La Quinta', 'heat pump'],
      featured: true,
    },
    {
      id: 'maintenance',
      name: 'AC Tune-Ups & Maintenance',
      nameEs: 'Mantenimiento de A/C',
      icon: 'gauge',
      shortDesc:
        'Catch small problems before the heat wave. Regular service keeps the system efficient and the bill down.',
      longDesc:
        'The cheapest repair is the one you never need. Abundant Air checks refrigerant, electrical, airflow, and the condition of your ducts, then makes sure everything runs efficiently before leaving. Several customers have had Abundant Air maintain their AC and heating for years for exactly this reason.',
      bullets: [
        'Full system and duct inspection',
        'Refrigerant, electrical, and airflow checks',
        'Efficiency verified before he leaves',
        'Repeat customers going back years',
      ],
      heroImage: 'duct-after-sealed-joints.jpg',
      keywords: ['AC tune-up', 'AC maintenance La Quinta', 'HVAC service'],
      featured: false,
    },
    {
      id: 'mini-splits',
      name: 'Mini Split Systems',
      nameEs: 'Sistemas mini split',
      icon: 'split',
      shortDesc:
        'Ductless heating and cooling for additions, garages, and rooms that never get comfortable.',
      longDesc:
        'Mini splits deliver targeted heating and cooling without running new ductwork. Abundant Air sizes and installs wall-mounted indoor units paired with efficient outdoor condensers, perfect for converted garages, room additions, or any space the central system cannot reach. Quiet, energy-efficient, and individually controlled per room.',
      bullets: [
        'Ductless wall-mounted indoor units',
        'Efficient inverter-driven condensers',
        'Zone control for individual rooms',
        'Ideal for additions, garages, and hard-to-cool spaces',
      ],
      heroImage: 'mini-split-outdoor.jpg',
      keywords: ['mini split', 'ductless AC', 'mini split installation La Quinta'],
      featured: true,
    },
    {
      id: 'air-quality',
      name: 'Indoor Air Quality Solutions',
      nameEs: 'Soluciones de calidad del aire interior',
      icon: 'air',
      shortDesc:
        'Breathe cleaner air at home with filtration upgrades, UV systems, and proper ventilation.',
      longDesc:
        'Desert dust, pet dander, and sealed-up homes mean the air inside can be worse than outside. Abundant Air installs high-efficiency filters, UV germicidal lights, and fresh-air ventilation to clean up what your family breathes every day. Paired with sealed ductwork, the result is noticeably cleaner, healthier air.',
      bullets: [
        'High-efficiency air filtration upgrades',
        'UV germicidal light installation',
        'Fresh-air ventilation solutions',
        'Works with sealed ductwork for best results',
      ],
      heroImage: 'tech-condenser-service.jpg',
      keywords: ['indoor air quality', 'air purification La Quinta', 'HVAC air filtration'],
      featured: false,
    },
  ],

  primaryCity: 'La Quinta',
  region: 'Coachella Valley',
  serviceAreas: [
    { id: 'la-quinta', name: 'La Quinta', county: 'Riverside', state: 'CA', zip: '92253', featured: true },
    { id: 'palm-desert', name: 'Palm Desert', county: 'Riverside', state: 'CA', zip: '92260', featured: true },
    { id: 'indio', name: 'Indio', county: 'Riverside', state: 'CA', zip: '92201', featured: true },
    { id: 'indian-wells', name: 'Indian Wells', county: 'Riverside', state: 'CA', zip: '92210', featured: true },
    { id: 'rancho-mirage', name: 'Rancho Mirage', county: 'Riverside', state: 'CA', zip: '92270', featured: true },
    { id: 'palm-springs', name: 'Palm Springs', county: 'Riverside', state: 'CA', zip: '92262', featured: true },
    { id: 'bermuda-dunes', name: 'Bermuda Dunes', county: 'Riverside', state: 'CA', zip: '92203', featured: false },
    { id: 'coachella', name: 'Coachella', county: 'Riverside', state: 'CA', zip: '92236', featured: false },
    { id: 'cathedral-city', name: 'Cathedral City', county: 'Riverside', state: 'CA', zip: '92234', featured: false },
  ],

  gallery: [
    { src: 'duct-before-aged-attic.jpg', stage: 'before', caption: 'Aged, dust-caked duct run in a La Quinta attic before replacement', alt: 'Old grimy round air duct in an attic before Abundant Air ductwork replacement in La Quinta CA' },
    { src: 'duct-before-old-fiberglass.jpg', stage: 'before', caption: 'Sagging, deteriorated fiberglass-wrapped ducts losing cold air', alt: 'Deteriorated fiberglass-wrapped HVAC ducts before duct replacement by Abundant Air' },
    { src: 'duct-before-damaged-elbow.jpg', stage: 'before', caption: 'Crushed metal elbow and torn flex duct leaking conditioned air', alt: 'Crushed sheet metal duct elbow and torn flex duct before repair, La Quinta CA' },
    { src: 'duct-before-torn-boot.jpg', stage: 'before', caption: 'Split duct boot at the register, cold air dumping into the attic', alt: 'Torn metal duct boot leaking air into an attic before Abundant Air repair' },
    { src: 'duct-before-weathered-flex.jpg', stage: 'before', caption: 'Weathered, brittle flex duct at the end of its life', alt: 'Old weathered silver flex duct before replacement by Abundant Air, Coachella Valley' },
    { src: 'duct-fabrication-plenum.jpg', stage: 'process', caption: 'A new sheet-metal plenum fabricated on site', alt: 'New sheet metal plenum being fabricated on site during an Abundant Air duct job' },
    { src: 'duct-after-new-flex.jpg', stage: 'after', caption: 'Clean new sealed flex duct, ready to move air to every room', alt: 'New sealed silver flex ductwork installed by Abundant Air in La Quinta CA' },
    { src: 'duct-after-clean-run.jpg', stage: 'after', caption: 'New plenum and duct run installed straight and supported', alt: 'New plenum and air duct run cleanly installed by Abundant Air, La Quinta CA' },
    { src: 'duct-after-insulated.jpg', stage: 'after', caption: 'Fresh ducts wrapped in proper insulation to hold the cold', alt: 'New ductwork wrapped in fiberglass insulation by Abundant Air' },
    { src: 'duct-after-sealed-joints.jpg', stage: 'after', caption: 'Foil-taped, sealed joints so no cold air escapes', alt: 'Sealed and foil-taped duct joints finished by Abundant Air, Coachella Valley' },
    { src: 'furnace-install.jpg', stage: 'after', caption: 'New Marazerm furnace installed clean and level', alt: 'New furnace installation by Abundant Air in La Quinta CA' },
    { src: 'condenser-oxbox.jpg', stage: 'after', caption: 'OXBOX condenser unit set on a fresh pad, ready to cool', alt: 'New OXBOX condenser unit installed by Abundant Air, Coachella Valley' },
    { src: 'mini-split-outdoor.jpg', stage: 'after', caption: 'Mini split outdoor units installed for zone cooling', alt: 'Mini split outdoor condensers installed by Abundant Air in La Quinta CA' },
    { src: 'rooftop-diagnostics.jpg', stage: 'process', caption: 'Rooftop unit diagnostics with refrigerant gauges', alt: 'Abundant Air technician diagnosing rooftop HVAC unit with gauges' },
    { src: 'mini-split-before.jpg', stage: 'before', caption: 'Room before mini split installation — no dedicated cooling', alt: 'Room before ductless mini split installation by Abundant Air' },
    { src: 'mini-split-after.jpg', stage: 'after', caption: 'Mirage X Life mini split installed, room stays cool year-round', alt: 'Wall-mounted Mirage mini split installed by Abundant Air, La Quinta CA' },
    { src: 'tech-furnace-work.jpg', stage: 'process', caption: 'Abundant Air tech servicing a furnace on site', alt: 'Abundant Air technician working on furnace installation' },
    { src: 'tech-condenser-service.jpg', stage: 'process', caption: 'Checking refrigerant levels on an outdoor condenser', alt: 'Abundant Air technician servicing outdoor condenser unit with R-407C' },
  ],

  featuredBeforeAfter: {
    before: 'duct-before-old-fiberglass.jpg',
    after: 'duct-after-new-flex.jpg',
    beforeAlt: 'Old sagging fiberglass ductwork before Abundant Air replacement in La Quinta',
    afterAlt: 'Clean new sealed flex ductwork after Abundant Air replacement in La Quinta',
  },

  testimonials: [
    {
      name: 'Austin Thompson',
      rating: 5,
      date: '2026-03',
      source: 'google',
      text: 'Carlos from Abundant Air really hits it on the head with his customer service. He got the job done efficiently for a great price, and went above and beyond providing me some tips on maintaining my AC unit. You won’t find better service anywhere else in the valley.',
    },
    {
      name: 'Jasmin Lua',
      rating: 5,
      date: '2026-02',
      source: 'google',
      text: 'We recently had service done on our AC unit and the experience was excellent from start to finish. He was punctual, professional, and took the time to explain exactly what was going on and what needed to be done. What stood out most was his honesty and attention to detail. He made sure everything was running efficiently before leaving and answered all of our questions. Highly recommend.',
    },
    {
      name: 'Sebastian Ramirez',
      rating: 5,
      date: '2026-03',
      source: 'google',
      text: 'I called Carlos late at night because my AC started blowing hot air. With a toddler at home, getting it fixed immediately was a priority. Carlos arrived around 7:00 PM and had the system up and running before bedtime. He was professional, respectful, and kept me informed throughout the entire process. He’s officially my go-to guy — I won’t be calling anyone else!',
    },
    {
      name: 'Christian Jimenez',
      rating: 5,
      date: '2026-02',
      source: 'google',
      text: 'Had a nightmare situation last summer — after I got back from work my house was almost like a sauna! My AC unit took a dive while I was gone. When I called Abundant Air they were able to send someone last minute to fix the problem. Talk about making me a customer for life! They really hooked it up in my time of need. Thank you for being so fast and courteous!',
    },
    {
      name: 'Adrian Batres',
      rating: 5,
      date: '2026-03',
      source: 'google',
      text: 'Abundant Air is the best — honest and reliable work at an affordable price. Will definitely use their services again. Can’t recommend enough.',
    },
    {
      name: 'Lupita Torres',
      rating: 5,
      date: '2026-03',
      source: 'google',
      text: 'Great service. Recommended 100%. Carlos is always so professional. He has been doing our AC and heating for years.',
    },
  ],

  brand: {
    logoAlt: 'Abundant Air Conditioning & Heating LLC logo',
  },

  seo: {
    titleTemplate: '%s | Abundant Air Conditioning & Heating LLC',
    siteName: 'Abundant Air Conditioning & Heating LLC',
    defaultDescription:
      'Honest AC repair, installation, and expert ductwork in La Quinta and across the Coachella Valley. Family-run, 5.0★ on Google, fair prices. Call (760) 423-3404.',
    canonicalBase: 'https://abundantairac.com',
    locale: 'en_US',
    ogImage: '/og-default.jpg',
  },

  form: {
    provider: 'web3forms',
    web3formsAccessKey: '1fb1e158-4399-4b2f-a8e3-b016f2c1a076',
    toEmail: '13.csilva@gmail.com',
    jobTypes: [
      'Ductwork replacement / sealing',
      'AC not cooling / repair',
      'New AC install or replacement',
      'Heating / furnace',
      'Mini split system',
      'Indoor air quality',
      'Tune-up / maintenance',
      'Other',
    ],
  },

  // No hours published on the Google profile. Leave undefined so we never
  // invent business hours in the schema. Emergency availability is review-backed.
  hours: undefined,
};
