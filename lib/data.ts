/**
 * Central content store — data sourced from ssbwings.com (Sanity CMS)
 * and curated copy. Edit here; every page reads from this file.
 */

export const SITE = {
  name: "SSB WINGS",
  tagline: "We give shape to your Dreams",
  phone1: "+91 95605 10035",
  phone1Href: "tel:+919560510035",
  phone2: "+91 95605 10036",
  phone2Href: "tel:+919560510036",
  whatsapp: "https://wa.me/919560510035?text=Jai%20Hind!%20I%20want%20to%20know%20more%20about%20SSB%20Wings%20courses.",
  email: "marketing@ssbwings.com",
  address: "C-56/43, Institutional Area, Phase 2, Sector 62, Noida, Delhi NCR — 201309",
  instagram: "https://www.instagram.com/ssbwings",
  youtube: "https://www.youtube.com/@ssbwings",
  telegram: "https://t.me/ssbwings",
  url: "https://www.ssbwings.com",
};

export const STATS = [
  { value: 677, label: "Recommendations" },
  { value: 3450, label: "Alumni Officers Family" },
  { value: 175, label: "NDA Entries" },
  { value: 168, label: "OTA Entries" },
  { value: 125, label: "AFCAT Entries" },
  { value: 10, label: "All India Rank 1" },
];

export const ENTRIES = [
  "NDA", "CDS", "AFCAT", "TES", "TGC", "10+2 Navy B.Tech",
  "SSC Tech (Men)", "SSC Tech (Women)", "NCC Special Entry",
  "Indian Coast Guard", "ACC", "PC (SL)", "SCO", "University Entry",
];

export type Service = "army" | "navy" | "airforce";

export const SERVICES: { id: Service; name: string; motto: string; color: string }[] = [
  { id: "army", name: "Indian Army", motto: "Service Before Self", color: "army" },
  { id: "navy", name: "Indian Navy", motto: "Śaṁ No Varuṇaḥ", color: "navy" },
  { id: "airforce", name: "Indian Air Force", motto: "Touch the Sky with Glory", color: "air" },
];

export const DAYS = [
  {
    day: "Day 1",
    code: "Screening",
    service: "army" as Service,
    title: "The First Cut is the Deepest",
    subtitle: "OIR Test + PPDT — over 60% go home tonight",
    brief:
      "Within hours of reporting, you face the Officer Intelligence Rating test and the Picture Perception & Discussion Test. A blurred picture, 30 seconds to observe, 4 minutes to write — then defend your story in a group of strangers fighting to be heard.",
    tests: [
      { name: "OIR", detail: "Verbal & non-verbal reasoning — speed and accuracy under the clock" },
      { name: "PPDT", detail: "Perceive, write and narrate a story from a hazy picture" },
      { name: "Group Discussion", detail: "Assert your story without drowning the group" },
    ],
    drill:
      "At SSB WINGS: weekly mock screenings with real-time narration practice, camera-recorded GD reviews and OIR speed drills until Stage-1 feels like home turf.",
  },
  {
    day: "Day 2",
    code: "Psychology",
    service: "navy" as Service,
    title: "The Pen Reveals What the Mouth Hides",
    subtitle: "TAT · WAT · SRT · Self Description — 3 hours, zero masks",
    brief:
      "Twelve pictures, sixty words, sixty situations and one brutally honest self-portrait — written so fast that only your subconscious can answer. The psychologist reads between every line for the 15 Officer Like Qualities.",
    tests: [
      { name: "TAT", detail: "12 stories in 48 minutes — your instincts on paper" },
      { name: "WAT", detail: "60 words, 15 seconds each — first thought wins" },
      { name: "SRT", detail: "60 real-life situations — decisions under time famine" },
      { name: "SD", detail: "What your parents, friends & you truly think of you" },
    ],
    drill:
      "At SSB WINGS: 13 days of psychology immersion, 10 full-length dossier practice sets, each one personally evaluated with written feedback by our psych mentors.",
  },
  {
    day: "Day 3",
    code: "GTO — I",
    service: "army" as Service,
    title: "Mud, Rope and Real Leadership",
    subtitle: "GD · GPE · PGT · Group Obstacle Race · Lecturette",
    brief:
      "The Group Testing Officer hands your group planks, ropes and impossible obstacles. No one is in charge — that's the point. Leaders emerge; followers comply; the GTO notes everything.",
    tests: [
      { name: "GD & GPE", detail: "Two discussions and a military planning exercise on a map" },
      { name: "PGT", detail: "Progressive Group Task — structures, loads and ground rules" },
      { name: "GOR", detail: "Snake Race — group grit at full sprint" },
      { name: "Lecturette", detail: "3 minutes, one topic, all eyes on you" },
    ],
    drill:
      "At SSB WINGS: a real GTO ground on campus with full-scale obstacles — you don't imagine PGT, you sweat through it under an ex-GTO's whistle.",
  },
  {
    day: "Day 4",
    code: "GTO — II + Interview",
    service: "airforce" as Service,
    title: "Command and Be Commanded",
    subtitle: "Individual Obstacles · Command Task · Personal Interview",
    brief:
      "Ten obstacles in three minutes. Then the Command Task — you lead, your group obeys, the GTO tempts you into wrong decisions. And in the evening, a 45-minute conversation where the Interviewing Officer already knows more about you than you expect.",
    tests: [
      { name: "Individual Obstacles", detail: "10 obstacles, 3 minutes, pure determination" },
      { name: "Command Task", detail: "Lead subordinates through a problem the GTO keeps twisting" },
      { name: "Final Group Task", detail: "One last chance to show team spirit" },
      { name: "Personal Interview", detail: "Rapid-fire life questions — coherence is character" },
    ],
    drill:
      "At SSB WINGS: one-on-one mock interviews with a retired Interviewing Officer, PIQ-based grilling and recorded playback so you hear yourself as the Board hears you.",
  },
  {
    day: "Day 5",
    code: "Conference",
    service: "navy" as Service,
    title: "Fifteen Officers. One Verdict.",
    subtitle: "Board Conference — and the words that change lives",
    brief:
      "You walk alone into a hall of uniformed assessors for two final minutes. Then the wait — until an officer reads out chest numbers. Those called stay for medicals. The journey of five days ends in five heartbeats.",
    tests: [
      { name: "Conference", detail: "Final borderline questions before the full Board" },
      { name: "Closing Address", detail: "Results declared — recommended candidates stay back" },
      { name: "Medicals", detail: "5-day medical examination at Command Hospital follows" },
    ],
    drill:
      "At SSB WINGS: conference etiquette, borderline-case handling and the mindset work that keeps you steady whether it's your first attempt or your ninth.",
  },
];

export const COURSES = [
  {
    tag: "Flagship · Most Popular",
    highlight: true,
    title: "15-Day Offline Immersion",
    where: "Noida Sector 62 Campus",
    service: "army" as Service,
    desc: "Live like a cadet for 15 days. Psychology dossiers, real GTO ground, mock boards and one-on-one interviews — the complete rebuild.",
    features: [
      "Week-long psychology lab — TAT, WAT, SRT, SD with written feedback",
      "Full-scale GTO ground: PGT, HGT, Command Task on real obstacles",
      "Mock personal interviews by retired Interviewing Officers",
      "Mock PPDT screenings & group discussions every week",
      "2 fresh batches every month · optional AC hostel @ ₹500/day with meals",
    ],
    cta: "Reserve Offline Seat",
  },
  {
    tag: "For Working Aspirants",
    highlight: false,
    title: "20-Day Online Masterclass",
    where: "Live · 8:00–10:00 PM IST",
    service: "airforce" as Service,
    desc: "The same mentors, the same method — beamed to your desk every evening. Built for college students, working professionals and remote aspirants.",
    features: [
      "13 days of deep psychology training with dossier reviews",
      "7 days of GTO concepts, GPE solutions & lecturette practice",
      "Personal interview preparation with PIQ analysis",
      "Live doubt-clearing with mentors after every session",
      "Recordings available — never miss a class",
    ],
    cta: "Join Online Batch",
  },
  {
    tag: "Train Anywhere",
    highlight: false,
    title: "SSB Smart Learning App",
    where: "Android · Google Play",
    service: "navy" as Service,
    image: {
      src: "/images/app-gto-ground.webp",
      alt: "SSB Wings Smart Learning App — AI virtual GTO ground gameplay on a tablet",
    },
    desc: "India's first AI-powered virtual GTO ground in your pocket — practice the Board's toughest day from anywhere in the country.",
    features: [
      "AI virtual GTO ground — 300+ structures across 70 levels",
      "Complete recorded psychology course",
      "10 full-length psychology practice test sets",
      "MCQ-based personal interview practice bank",
      "Curated study material & real SSB data",
    ],
    cta: "Get the App",
  },
];

export const MENTORS = [
  {
    name: "Col. Arun",
    role: "Ex-Interviewing Officer",
    specialty: "Personal Interview & Conference",
    photo: "/images/mentors/col-arun.png",
    bio: "Sat across the table from thousands of aspirants as a serving Interviewing Officer. Now he trains you to face the very questions he once asked.",
  },
  {
    name: "Ayush Tomar",
    role: "Psychology Mentor",
    specialty: "TAT · WAT · SRT · SD",
    photo: "/images/mentors/ayush-tomar-sir.png",
    bio: "Decodes what your pen tells the psychologist. Every dossier you write here comes back with line-by-line written feedback.",
  },
  {
    name: "Vishal Kaushik",
    role: "Group Testing Mentor · Director",
    specialty: "GTO Ground & Outdoor Tasks",
    photo: "/images/mentors/vishal-kaushik.png",
    bio: "Runs the campus GTO ground like a real Board — whistle, load, rules and all. His command task variations are famous among alumni.",
  },
];

export const TESTIMONIALS = [
  {
    name: "NC. Khushvant Sharma",
    rank: "INA · 10+2 Navy B.Tech",
    photo: "/images/testimonials/nc-khushvant-sharma.jpg",
    text: "I enrolled in the SACA program at SSB WINGS and received valuable feedback from Vishal Sir on communication, personality development and expression. Over 6–7 months I stayed in close contact with my mentors and attended numerous practice sessions. Despite three setbacks, I persevered — and was finally recommended from 12 SSB Bangalore for the 10+2 Indian Navy B.Tech entry.",
  },
  {
    name: "GC. Ashok Suthar",
    rank: "OTA Gaya · SSC Tech · AIR-1",
    photo: "/images/testimonials/gc-ashok-suthar.jpg",
    text: "After two setbacks I joined SSB WINGS' online workshop. I then achieved AIR-1 and AIR-8 consecutively — but was declared medically unfit. Determined, I sought guidance from Vishal Sir and made a comeback. In January 2024 I received my third recommendation from 32 SSB Jalandhar, securing AIR-1, and joined OTA Gaya.",
  },
  {
    name: "GC. Maan Singh",
    rank: "IMA · ACC Entry",
    photo: "/images/testimonials/gc-maan-singh.jpg",
    text: "I served as a Sipahi in the Army Medical Corps. My mentors met me whenever duty allowed — and took my calls even at midnight or 1 AM before my Board. On my third attempt I was recommended from 14 SSB Allahabad. From Sipahi to officer training at Army Cadet College — I owe a great deal to SSB WINGS.",
  },
  {
    name: "GC. Chandan Sahani",
    rank: "IMA · CDS Entry",
    photo: "/images/testimonials/gc-chandan-sahani.jpg",
    text: "I went from Constable in the UP Police to Gentleman Cadet. Working full time, I had failed five attempts. After SSB WINGS' online workshop and mock interviews — sometimes travelling Allahabad to Meerut for extra guidance — I was recommended for CDS-IMA from 14 SSB Allahabad. Soon I'll be commissioned.",
  },
];

/** Recommended students — photos fetched from ssbwings.com (Sanity CDN) */
export const STUDENTS: { name: string; exam: string; file: string }[] = [
  { name: "Tanishq", exam: "10+2 Navy B.Tech", file: "tanishq.png" },
  { name: "Ayush", exam: "CDS OTA", file: "ayush.png" },
  { name: "Mitesh", exam: "NCC Special (123)", file: "mitesh.jpg" },
  { name: "Taranjeet", exam: "NCC Special (123)", file: "taranjeet.jpg" },
  { name: "Tejas", exam: "CDS OTA", file: "tejas.jpg" },
  { name: "Yash", exam: "Navy (Pilot) SSC", file: "yash.jpg" },
  { name: "Tarun", exam: "Navy GS(X)", file: "tarun.jpg" },
  { name: "Sep Ravi", exam: "ACC 132", file: "sep-ravi.jpg" },
  { name: "Chetan", exam: "CDS IMA", file: "chetan.jpg" },
  { name: "Rahul", exam: "CDS IMA", file: "rahul.jpg" },
  { name: "Rewa", exam: "NCC Special (123)", file: "rewa.jpg" },
  { name: "Sayjal", exam: "CDS OTA", file: "sayjal.jpg" },
  { name: "Tanya", exam: "CDS OTA (W)", file: "tanya.jpg" },
  { name: "Prikshit", exam: "CDS OTA", file: "prikshit.jpg" },
  { name: "Prashanth", exam: "SSC Tech 66", file: "prashanth.jpg" },
  { name: "Nishant", exam: "AFCAT", file: "nishant.jpg" },
  { name: "Mehboob", exam: "AFCAT", file: "mehboob.jpg" },
  { name: "Dhirendra", exam: "SCO 58", file: "dhirendra.jpg" },
  { name: "Harshvardhan", exam: "AFCAT", file: "harshvardhan.jpg" },
  { name: "Deepak", exam: "CDS OTA", file: "deepak.jpg" },
  { name: "Ravi", exam: "ACC 132", file: "ravi.jpg" },
  { name: "Chaitanya", exam: "TGC 142", file: "chaitanya.jpg" },
  { name: "Mohit", exam: "CDS OTA", file: "mohit.jpg" },
  { name: "Priyanshu", exam: "Navy SSC (Logistics)", file: "priyanshu.jpg" },
  { name: "Khushi", exam: "10+2 Navy B.Tech", file: "khushi.jpg" },
  { name: "Sarvesh", exam: "AFCAT", file: "sarvesh.jpg" },
  { name: "Akanksha", exam: "Navy SSC (ATC)", file: "akanksha.jpg" },
  { name: "Harsh", exam: "CDS IMA", file: "harsh.jpg" },
  { name: "Daksh", exam: "10+2 Navy B.Tech", file: "daksh.jpg" },
  { name: "Preksha", exam: "Navy SSC (Education)", file: "preksha.jpg" },
  { name: "Abhisht", exam: "NCC-59", file: "abhisht.jpg" },
  { name: "Sumit", exam: "CDS OTA", file: "sumit.png" },
  { name: "Ved Prakash", exam: "CDS OTA", file: "ved-prakash.png" },
  { name: "Yogesh", exam: "TGC", file: "yogesh.png" },
  { name: "Abhinav", exam: "CDS OTA", file: "abhinav.png" },
  { name: "Aditya", exam: "TES", file: "aditya.png" },
];

/** Achievement posters from ssbwings.com — AIR laurel cards (portrait) */
export const AIR_CARDS = Array.from({ length: 15 }, (_, i) => `/images/campus/images-${i}.jpg`);

/** Commissioned-officer banners from ssbwings.com (wide) */
export const OFFICER_BANNERS = Array.from({ length: 25 }, (_, i) => `/images/campus/imagestwo-${i + 15}.jpg`);

/** Real recommendation-interview videos from the SSB Wings YouTube channel */
export const YT_VIDEOS = ["2m14ob1OUHo", "XlmVnxhg2IY", "JeuWNbPZC4U", "waAzH9vHnFc", "OqcBtRKJqEA", "cIpcpexNiO4"];

export const FAQS = [
  {
    q: "What exactly is the SSB and why is it 5 days long?",
    a: "The Services Selection Board is the Armed Forces' personality and intelligence assessment for officer entry. Over 5 days, three independent assessors — a Psychologist, a Group Testing Officer and an Interviewing Officer — evaluate you for 15 Officer Like Qualities through Screening (Day 1), Psychology tests (Day 2), GTO tasks (Days 3–4), Personal Interview and the final Conference (Day 5). Three opinions, one verdict.",
  },
  {
    q: "I've cleared the written exam. How early should I start SSB preparation?",
    a: "Ideally 30–45 days before your Board date. Personality projection isn't crammed — it's conditioned. Our 15-day offline immersion or 20-day online masterclass, followed by self-practice on the Smart Learning App, is the rhythm most of our recommended candidates followed.",
  },
  {
    q: "I'm a repeater with conference-outs. Can you actually help?",
    a: "Repeaters are our specialty. We begin with a forensic analysis of your previous attempts, identify the exact OLQs you failed to project, and rebuild your dossier, interview narrative and GTO approach around them. Khushvant (3 conference-outs) and Chandan (5 attempts) wear stars today.",
  },
  {
    q: "Do you guarantee a recommendation?",
    a: "No — and be wary of anyone who does. The Board's assessment is independent and confidential. What we guarantee is honest, assessor-grade preparation, personal attention and mentorship till your recommendation, however many attempts that takes. Our alumni also get free monthly practice sessions for life.",
  },
  {
    q: "What are the batch options and hostel arrangements?",
    a: "Offline: two 15-day batches begin every month at our Noida Sector 62 campus, with optional AC hostel at ₹500/day (3–4 sharing) including three meals. Online: 20-day batches run live from 8–10 PM IST with recordings provided. Seats in both are limited to protect personal attention.",
  },
  {
    q: "Which entries do you prepare aspirants for?",
    a: "All of them — NDA, CDS, AFCAT, TES, TGC, 10+2 Navy B.Tech, SSC Tech (Men & Women), NCC Special Entry, Indian Coast Guard, and service entries like ACC, PC(SL) and SCO. The SSB process is common; we tailor the interview and PIQ strategy to your specific entry.",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ssb-process", label: "The 5-Day SSB" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];
