export interface ArtistData {
  name: string;
  nameKo: string;
  tagline: string;
  bio: string;
  fullBio: string;
}

export interface Photocard {
  id: number;
  title: string;
  project: string;
  year: string;
  type: string;
  image: string;
  role: string;
  description: string;
}

export interface FilmographyItem {
  year: string;
  title: string;
  role: string;
  platform: string;
  platformId: string;
  character: string;
  rating: string;
  ageRating: string;
  watchUrl: string;
  description: string;
  image: string;
}

export interface Award {
  year: string;
  ceremony: string;
  category: string;
  logoUrl: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  caption: string;
  brand: string;
  year: string;
  height: number;
  category: string;
  description: string;
}

export const artistData: ArtistData = {
  name: 'Go Youn-jung',
  nameKo: '고윤정',
  tagline: 'A visionary presence in modern cinema.',
  bio: 'From the ethereal depths of Alchemy of Souls to the visceral intensity of Moving, redefining the boundary of performance and grace.',
  fullBio: `Go Youn-jung (고윤정, born April 22, 1996) is a South Korean actress and model who has rapidly ascended as one of Korea's most compelling on-screen talents. She studied Contemporary Art at Seoul Women's University before her modeling career opened the door to acting.\n\nShe made her acting debut in 2019 with He Is Psychometric, followed by notable supporting turns in Sweet Home (2020) and Law School (2021). Her breakthrough arrived with Alchemy of Souls Season 2 (2022), where her dual role as Nak-su and Jin Bu-yeon showcased extraordinary range.\n\nIn 2023, her role as Jang Hui-soo in the Disney+ superhero epic Moving earned her the Best New Actress Award at the Asia Contents Awards and the 3rd Blue Dragon Series Awards — cementing her status as a leading force in Korean cinema.`,
};

export const photocards: Photocard[] = [
  {
    id: 1,
    title: '장희수 · Jang Hui-soo',
    project: 'Moving',
    year: '2023',
    type: 'Disney+ Original Series',
    image: 'https://image.tmdb.org/t/p/original/t1qdOoYg5miMgKN6tko6ruTFnLR.jpg',
    role: 'Lead Role',
    description:
      'A masterpiece role. Her brilliant performance earned her Best New Actress at the Blue Dragon Series Awards.',
  },
  {
    id: 2,
    title: '차무희 · Cha Mu-hee',
    project: 'Can This Love Be Translated?',
    year: '2026',
    type: 'Netflix Original Series',
    image: 'https://www.themoviedb.org/t/p/w1280/zgUh4cgalSzBjbsT5P0qmU7Rjzk.jpg',
    role: 'Lead Role',
    description: 'A top-tier actress navigating a complex romance in a global mega-hit that topped worldwide charts.',
  },
  {
    id: 3,
    title: '진부연 · Jin Bu-yeon',
    project: 'Alchemy of Souls',
    year: '2022–2023',
    type: 'tvN / Netflix',
    image: 'https://www.themoviedb.org/t/p/w1280/gvOZN1NlAoL8iz9ghpES1zWA3w3.jpg',
    role: 'Lead Role',
    description: 'A powerful sorceress inhabiting a new body. This series built her massive international fandom.',
  },
  {
    id: 4,
    title: '박유리 · Park Yu-ri',
    project: 'Sweet Home',
    year: '2020',
    type: 'Netflix Original Series',
    image: 'https://www.themoviedb.org/t/p/w1280/ovLdkMclsr9NjkfRPgMaGDTHyGk.jpg',
    role: 'Supporting',
    description:
      'A brave survivor facing monsters. This dark thriller marked her global breakout to massive audiences.',
  },
];

export const filmography: FilmographyItem[] = [
  {
    year: '2026',
    title: 'We Are All Trying Here',
    role: 'LEAD ROLE',
    platform: 'JTBC',
    platformId: 'jtbc',
    character: 'Byeon Eun-ah',
    rating: '8.1',
    ageRating: '15+',
    watchUrl: 'https://www.netflix.com/watch/82189639?source=35',
    description:
      'A deeply emotional drama exploring the complex lives, struggles, and growth of individuals trying to find their place in a demanding society. Go Youn-jung delivers a poignant performance as Byeon Eun-ah, navigating the heavy expectations of modern life while searching for her own authentic path and healing from past wounds.',
    image: '/images/we_are_all_trying_here.webp',
  },
  {
    year: '2026',
    title: 'Can This Love Be Translated?',
    role: 'LEAD ROLE',
    platform: 'Netflix',
    platformId: 'netflix',
    character: 'Cha Hee-jin',
    rating: '8.4',
    ageRating: '15+',
    watchUrl: 'https://www.netflix.com/watch/81697769?source=35',
    description:
      'A global mega-hit romantic comedy depicting the relationship between a multilingual interpreter and a top global actress navigating love and misunderstandings. As Cha Hee-jin, she perfectly captures the glamorous yet isolated life of a superstar whose completely contrasting language of love creates hilarious and heart-fluttering moments.',
    image: '/images/can_this_love_be_translated.webp',
  },
  {
    year: '2026',
    title: 'The Secret Friends Club',
    role: 'Main Cast',
    platform: 'IQIYI',
    platformId: 'iqiyi',
    character: 'Go Youn-jung',
    rating: '8.1',
    ageRating: '',
    watchUrl:
      'https://iq.onelink.me/mY1d/GoogleTraffic?af_channel=Mediaaction&af_dp=iqyinter%3A%2F%2Fmobile%2Fregister_business%2Fqyclient&af_web_dp=https%3A%2F%2Fwww.iq.com%2Fplay%2F118z3skcx1d&version=2&deep_link_value=%257B%2522biz_id%2522%253A%2522102%2522%252C%2522biz_plugin%2522%253A%2522qiyiplayer%2522%252C%2522biz_params%2522%253A%257B%2522biz_sub_id%2522%253A%2522101%2522%252C%2522biz_params%2522%253A%2522aid%253D3665597111910701%2526tvid%253D6129048433025500%2526ctype%253D0%2526pc%253D0%2526video_type%253D0%2526playMode%253D1%2522%257D%252C%2522biz_extend_params%2522%253A%2522%2522%252C%2522biz_dynamic_params%2522%253A%2522%2522%252C%2522biz_statistics%2522%253A%2522%2522%257D',
    description:
      'An upcoming highly anticipated project. Further details regarding the plot and character remain tightly under wraps, but industry insiders suggest it will showcase a completely new facet of her acting repertoire.',
    image: '/images/secret_friends_club.webp',
  },
  {
    year: '2025',
    title: 'Resident Playbook',
    role: 'LEAD ROLE',
    platform: 'tvN',
    platformId: 'tvn',
    character: 'Oh Yi-young',
    rating: '8.7',
    ageRating: '15+',
    watchUrl: 'https://www.netflix.com/watch/81739042?source=35',
    description:
      'A highly anticipated spin-off of the beloved Hospital Playlist, following the exhausting yet heartwarming trials of first-year OB-GYN residents. Oh Yi-young represents the resilient spirit of a rookie doctor, learning the ropes of medicine, confronting life-and-death situations daily, and discovering the true meaning of empathy in the delivery room.',
    image: '/images/resident_playbook.webp',
  },
  {
    year: '2024',
    title: 'Light Shop',
    role: 'SUPPORTING',
    platform: 'Disney+',
    platformId: 'disney',
    character: 'Jang Hui-su',
    rating: '8.5',
    ageRating: '15+',
    watchUrl: 'https://www.disneyplus.com/en-de/browse/entity-9972e77a-0f8d-45c0-b58d-6625f4bb0c9f',
    description:
      'A mystery horror series where strangers with traumatic pasts are drawn to a mysterious light shop that holds the key to their past, present, and future. Her special appearance ties the narrative together, bringing a brief but emotionally resonant anchor to a story drenched in supernatural suspense.',
    image: '/images/light_shop.webp',
  },
  {
    year: '2023-2024',
    title: "Death's Game",
    role: 'SUPPORTING',
    platform: 'TVING',
    platformId: 'tving',
    character: 'Lee Ji-su',
    rating: '8.8',
    ageRating: '18+',
    watchUrl:
      'https://www.primevideo.com/dp/amzn1.dv.gti.ad72bda8-6001-4854-a18c-879ebbc4043b?autoplay=0&ref_=atv_cf_strg_wb',
    description:
      'A fantasy thriller where a man is punished by Death to experience 12 cycles of reincarnation and death. Ji-su plays a pivotal role in one of his most emotional lifetimes, serving as the heartbreaking emotional core that finally makes the protagonist realize the devastating weight of his choices.',
    image: "/images/death's_game.webp",
  },
  {
    year: '2020-2024',
    title: 'Sweet Home',
    role: 'SUPPORTING',
    platform: 'Netflix',
    platformId: 'netflix',
    character: 'Park Yu-ri',
    rating: '8.7',
    ageRating: '18+',
    watchUrl: 'https://www.netflix.com/watch/81061734?source=35',
    description:
      'An apocalyptic horror series where humans turn into savage monsters reflecting their deepest desires. Park Yu-ri is a brave survivor and caregiver with a tragic fate, using her medical knowledge and a crossbow to protect the residents of Green Home. This role marked her phenomenal breakout to global audiences.',
    image: '/images/sweet_home.webp',
  },
  {
    year: '2023',
    title: 'Moving',
    role: 'LEAD ROLE',
    platform: 'Disney+',
    platformId: 'disney',
    character: 'Jang Hui-soo',
    rating: '9.0',
    ageRating: '18+',
    watchUrl: 'https://www.apps.disneyplus.com/id/shows/moving/1260143902',
    description:
      'An action-packed superhero drama about teenagers with hidden superpowers and their parents fighting to protect them from exploitation. Portraying a high school student with regenerative healing powers, she delivered a masterclass in both raw action and vulnerable youth, earning her the Best New Actress award.',
    image: '/images/moving.webp',
  },
  {
    year: '2022-2023',
    title: 'Alchemy of Souls',
    role: 'LEAD ROLE',
    platform: 'tvN',
    platformId: 'tvn',
    character: 'Nak-su / Jin Bu-yeon',
    rating: '9.0',
    ageRating: '15+',
    watchUrl: 'https://www.apps.disneyplus.com/id/shows/moving/1260143902',
    description:
      'An epic fantasy romance set in the fictional nation of Daeho. She mesmerized viewers by flawlessly executing a dual role: transitioning from a fierce, legendary shadow assassin (Nak-su) to an amnesiac priestess with divine powers (Jin Bu-yeon). The visually stunning series cemented her as a leading lady.',
    image: '/images/alchemy_of_souls.webp',
  },
  {
    year: '2022',
    title: 'Hunt',
    role: 'SUPPORTING',
    platform: 'Netflix',
    platformId: 'netflix',
    character: 'Jo Yoo-jeong',
    rating: '7.6',
    ageRating: '15+',
    watchUrl: 'https://www.netflix.com/title/81644420',
    description:
      'An intense espionage action thriller following two rival intelligence agents tasked with finding a North Korean mole embedded deep within their agency. As Jo Yoo-jeong, a college student caught in the political crossfire, she held her own alongside industry veterans in her major feature film debut which premiered at Cannes.',
    image: '/images/hunt.webp',
  },
  {
    year: '2021',
    title: 'Law School',
    role: 'SUPPORTING',
    platform: 'JTBC',
    platformId: 'jtbc',
    character: 'Jeon Ye-seul',
    rating: '8.6',
    ageRating: '15+',
    watchUrl: 'https://www.netflix.com/watch/81413647?source=35',
    description:
      'A gripping legal drama where students and professors at a top law school are entangled in an unprecedented murder case. Ye-seul fights through an abusive relationship, transforming from a submissive victim into a fierce, empowered law student who ultimately uses the law to find her strength and justice.',
    image: '/images/law_school.webp',
  },
  {
    year: '2020',
    title: 'The School Nurse Files',
    role: 'GUEST',
    platform: 'Netflix',
    platformId: 'netflix',
    character: 'Choi Yoo-jin',
    rating: '7.1',
    ageRating: '15+',
    watchUrl: 'https://www.netflix.com/watch/81413647?source=35',
    description:
      'A quirky fantasy series about a school nurse wielding a glowing toy sword to fight jelly-like monsters born from human desires. Though her appearance was brief, her striking visuals and mysterious aura left a lasting impression on viewers.',
    image: '/images/school_nurse_files.webp',
  },
  {
    year: '2019',
    title: 'He is Psychometric',
    role: 'SUPPORTING',
    platform: 'tvN',
    platformId: 'tvn',
    character: 'Kim So-hyun',
    rating: '8.3',
    ageRating: '15+',
    watchUrl:
      'https://iq.onelink.me/mY1d/GoogleTraffic?af_channel=Mediaaction&af_dp=iqyinter%3A%2F%2Fmobile%2Fregister_business%2Fqyclient&af_web_dp=https%3A%2F%2Fwww.iq.com%2Fplay%2Fr8xbpxsn0h&version=2&deep_link_value=%257B%2522biz_id%2522%253A%2522102%2522%252C%2522biz_plugin%2522%253A%2522qiyiplayer%2522%252C%2522biz_params%2522%253A%257B%2522biz_sub_id%2522%253A%2522101%2522%252C%2522biz_params%2522%253A%2522aid%253D2711019753144301%2526tvid%253D6215682341933200%2526ctype%253D0%2526pc%253D0%2526video_type%253D0%2526playMode%253D1%2522%257D%252C%2522biz_extend_params%2522%253A%2522%2522%252C%2522biz_dynamic_params%2522%253A%2522%2522%252C%2522biz_statistics%2522%253A%2522%2522%257D',
    description:
      'A supernatural thriller romance about a boy with the ability to read secrets through touch. Making her acting debut, she played Kim So-hyun, an enigmatic childhood friend harboring a painful past. Her natural acting immediately caught the attention of casting directors across the industry.',
    image: '/images/he_is_psychometric.webp',
  },
];

export const awards: Award[] = [
  {
    year: '2024',
    ceremony: 'Blue Dragon Series Awards',
    category: 'Best New Actress',
    logoUrl: '/logos/blue-dragon-series.webp',
  },
  {
    year: '2023',
    ceremony: 'Asia Contents & Global OTT Awards',
    category: 'Best Newcomer Actress',
    logoUrl: '/logos/aca-ott.webp',
  },
  {
    year: '2025',
    ceremony: 'Fundex Awards',
    category: 'Best Actress of TV Drama',
    logoUrl: '/logos/fundex.webp',
  },
  {
    year: '2023',
    ceremony: 'Cine21 Film Awards',
    category: 'Best New Actress',
    logoUrl: '/logos/cine21.webp',
  },
  {
    year: '2025',
    ceremony: 'Marie Claire Asia Star Awards',
    category: 'Beyond Cinema Award',
    logoUrl: '/logos/marie-claire.webp',
  },
  {
    year: '2024',
    ceremony: 'Korea First Brand Awards',
    category: 'Rising Star Actress',
    logoUrl: '/logos/korea-first-brand.webp',
  },
];

export const galleryImages: GalleryItem[] = [
  {
    id: 1,
    image: '/brands/chanel.webp',
    caption: 'Chanel Fashion & Beauty',
    brand: 'Chanel',
    year: '2024 · Present',
    height: 800,
    category: 'Luxury Fashion',
    description: 'Global brand ambassador for Chanel, representing both fashion and beauty lines.',
  },
  {
    id: 2,
    image: '/brands/boucheron.webp',
    caption: 'Boucheron Fine Jewelry',
    brand: 'Boucheron',
    year: '2021',
    height: 700,
    category: 'Luxury Jewelry',
    description: 'Ambassador for the prestigious Parisian luxury jewelry house.',
  },
  {
    id: 3,
    image: '/brands/didier-dubot.webp',
    caption: 'Didier Dubot · New Muse',
    brand: 'Didier Dubot',
    year: '2025',
    height: 900,
    category: 'Jewelry',
    description: 'Named the new muse for the Korean jewelry brand in January 2025.',
  },
  {
    id: 4,
    image: '/brands/marithe-girbaud.webp',
    caption: 'Marithé et François Girbaud',
    brand: 'Marithé et François Girbaud',
    year: '2022',
    height: 600,
    category: 'Fashion',
    description: 'Brand muse for the iconic French-Korean fashion label.',
  },
  {
    id: 5,
    image: '/brands/ryo-hair.webp',
    caption: 'Ryo Hair — Global Ambassador',
    brand: 'Ryo Hair',
    year: '2023',
    height: 750,
    category: 'Beauty',
    description: 'Global ambassador for the premium Korean hair care brand.',
  },
  {
    id: 6,
    image: '/brands/discovery-expedition.webp',
    caption: 'Discovery Expedition',
    brand: 'Discovery Expedition',
    year: '2023',
    height: 650,
    category: 'Outdoor Apparel',
    description: 'Endorsement model for the outdoor lifestyle clothing brand.',
  },
  {
    id: 7,
    image: '/brands/nh-bank.webp',
    caption: 'NH Nonghyup Bank',
    brand: 'NH Nonghyup Bank',
    year: '2024',
    height: 500,
    category: 'Finance',
    description: "Endorsement model for one of Korea's largest financial institutions.",
  },
  {
    id: 8,
    image: '/brands/vodana.webp',
    caption: 'Vodana Hair Tools',
    brand: 'Vodana',
    year: '2023',
    height: 720,
    category: 'Beauty',
    description: 'Brand ambassador for the popular Korean hair styling tools brand.',
  },
];
