// ponytail: copy this folder for a new clinic, edit only this file + swap images/
window.CLINIC = {
  brand: {
    name:     "Dr. Feras Dental",
    logo:     "Dr. Feras",
    seoTitle: "Dr. Feras Dental | General & Cosmetic Dentist in Sharjah",
    seoDesc:  "Expert general and cosmetic dentistry by Dr. Feras Chakhachiro — licensed, precise, and committed to your smile. Al Qasba, Sharjah, UAE.",
  },

  doctor: {
    name:      "Dr. Feras Chakhachiro",
    shortName: "Dr. Feras",
    bio1: "Dr. Feras Chakhachiro is a General & Cosmetic Dentist at Alibtesamah Al Baieaa Medical Centre in Al Qasba, Sharjah. Known for his precision, attention to detail, and genuine care for every patient, he brings a calm and honest approach to dentistry that patients across the UAE have come to trust.",
    bio2: "Whether you're coming in for a routine check-up or a complete smile transformation, Dr. Feras will walk you through every option clearly — and never recommend treatment you don't need. 32 five-star Google reviews say it better than we can.",
    tags: ["General & Cosmetic Dentist", "Licensed & Registered", "Pain-Free Approach"],
    photo: "images/doctor.jpg",
  },

  contact: {
    phone:    "+971507771089",
    whatsapp: "971507771089",
    email:    "",
    address:  "Al Khan St - Al Khalidiya District - Al Qasba - Sharjah - UAE",
    city:     "Al Qasba, Sharjah",
    mapsUrl:  "https://www.google.com/maps/place/DR.+FERAS+CHAKHACHIRO/",
  },

  hours: [
    "Monday – Tuesday: 9:00 AM – 5:00 PM",
    "Wednesday – Thursday: 12:30 PM – 9:00 PM",
    "Friday: Closed",
    "Saturday – Sunday: 12:30 PM – 9:00 PM",
  ],

  reviews: { rating: 5, count: 32 },

  stats: [
    { num: "500+", label: "Smiles Transformed" },
    { num: "10+",  label: "Years of Experience" },
    { num: "Free", label: "First Consultation" },
    { num: "32",   label: "★ Google Reviews" },
  ],

  marquee: [
    "Same-day appointments available",
    "· Al Qasba, Sharjah",
    "· Free consultation for new patients",
    "· Licensed & insured",
    "· Painless extractions guaranteed",
    "· 500+ smiles transformed",
    "· WhatsApp response within the hour",
    "· E-max veneers",
    "· Nobel implants",
  ],

  trust: [
    { h: "Expert Dental Care",  p: "Licensed General & Cosmetic Dentist with over a decade of clinical experience — dedicated to your care." },
    { h: "Premium Materials",   p: "E-max porcelain veneers, Nobel Biocare implants, FDA-cleared whitening — quality you can see and feel." },
    { h: "Pain-Free Promise",   p: "Nervous patients are our specialty. Comfortable, unhurried treatment from your very first visit." },
  ],

  services: [
    { key: "veneers",   name: "Dental Veneers",     price: "After consultation", tag: "VENEERS",      title: "Dental Veneers",     desc: "Ultra-thin E-max porcelain shells that instantly transform the shape, colour, and symmetry of your smile.",   features: ["E-max porcelain", "Custom-matched shade", "Digital Smile Design preview", "10-year lifespan"] },
    { key: "whitening", name: "Teeth Whitening",     price: "After consultation", tag: "WHITENING",    title: "Teeth Whitening",    desc: "Professional in-clinic whitening for noticeably brighter results in a single visit.",                          features: ["FDA-cleared gel", "Up to 8 shades brighter", "Single 60-minute session", "Low sensitivity formula"] },
    { key: "implants",  name: "Dental Implants",     price: "After consultation", tag: "IMPLANTS",     title: "Dental Implants",    desc: "Nobel Biocare implants that look, feel, and function like natural teeth — a permanent fix for missing teeth.",  features: ["Nobel Biocare implants", "Fixed, permanent solution", "Bone-preserving", "Natural chewing function"] },
    { key: "braces",    name: "Braces & Aligners",   price: "After consultation", tag: "ORTHODONTICS", title: "Braces & Aligners",  desc: "Straighten your teeth with traditional braces or clear aligners, with flexible payment plans.",                  features: ["Metal & ceramic braces", "Clear aligner options", "Flexible payment plans", "Regular progress reviews"] },
    { key: "scaling",   name: "Scaling & Polishing", price: "After consultation", tag: "HYGIENE",      title: "Scaling & Polishing",desc: "Professional cleaning that removes tartar and surface stains, restoring a fresh, healthy mouth.",               features: ["Removes tartar & plaque", "Fresh breath instantly", "Prevents gum disease", "30-minute session"] },
    { key: "rootcanal", name: "Root Canal",           price: "After consultation", tag: "ENDODONTICS",  title: "Root Canal",         desc: "Save your natural tooth with a virtually painless root canal procedure completed in 1–2 visits.",                features: ["Saves your natural tooth", "Virtually painless", "1–2 visits", "Relieves infection pain"] },
  ],

  pricing: [
    { name: "Scaling & Polishing",  price: "After consultation", sub: "per session", popular: false, items: ["Removes tartar & plaque", "Fresh breath instantly", "Prevents gum disease"] },
    { name: "Root Canal Treatment", price: "After consultation", sub: "per tooth",   popular: true,  items: ["Saves your natural tooth", "Virtually painless", "1–2 visits"] },
    { name: "Dental Fillings",      price: "After consultation", sub: "per tooth",   popular: false, items: ["Tooth-coloured composite", "Same-day, one visit", "BPA-free materials"] },
  ],

  heroTags: "Al Qasba, Sharjah · Same-day appointments · Free consultation",
  ctaTags:  "Sharjah · Same-day appointments available",

  testimonials: [
    { quote: "Dr. Feras is an exceptional dentist. He took his time to explain every step of my treatment and made sure I was completely comfortable throughout. Best dental experience I've had in Sharjah.", name: "Ahmed K." },
    { quote: "I was nervous about getting veneers but Dr. Feras was so reassuring and professional. The results are stunning — my smile has completely transformed. Highly recommend!", name: "Sara M." },
    { quote: "Went for a routine cleaning and was so impressed by the level of care. The clinic is spotless and modern, and Dr. Feras is genuinely one of the best dentists I've visited.", name: "Khalid H." },
    { quote: "Had a root canal with Dr. Feras and it was virtually painless — he is incredibly skilled and gentle. Recovery was smooth and fast. Thank you doctor!", name: "Layla A." },
    { quote: "My whole family visits Dr. Feras now. He's honest, thorough, and never pushes unnecessary treatments. That kind of integrity is rare and we trust him completely.", name: "Mohammed T." },
    { quote: "Got dental implants after years of avoiding the dentist. He was patient with all my concerns and the outcome is perfect. Life-changing experience — can't recommend him enough.", name: "Fatima R." },
  ],
};
