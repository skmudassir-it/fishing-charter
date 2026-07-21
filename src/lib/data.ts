import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faWater, faFish, faAnchor, faShip, faUmbrellaBeach,
  faUsers, faStar, faMapMarkedAlt, faCalendarCheck,
  faLifeRing, faClock, faCheckCircle, faPhone, faEnvelope,
  faLocationDot, faAward, faCertificate, faHandshake,
  faPersonSwimming, faSailboat, faCompass, faGlobe
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  duration: string;
  capacity: string;
  price: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const siteConfig = {
  name: "ReelTime Fishing Charters",
  tagline: "Your Premier Gulf Coast Fishing Experience",
  description: "Experience world-class fishing charters along the Gulf Coast. From deep sea adventures to relaxing inshore trips, ReelTime delivers unforgettable fishing experiences for anglers of all skill levels.",
  phone: "(555) 234-5678",
  email: "captain@reeltimefishing.com",
  address: "456 Harbor Drive, Destin, FL 32541",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};

export const services: ServiceItem[] = [
  {
    slug: "deep-sea-fishing",
    title: "Deep Sea Fishing",
    description: "Head 20-50 miles offshore for trophy game fish including tuna, marlin, mahi-mahi, and wahoo on our fully equipped sportfishers.",
    icon: faShip,
    image: "/images/services/deep-sea-fishing.jpg",
    features: [
      "Full-day 8-12 hour trips",
      "Top-of-the-line Penn & Shimano gear",
      "Trolling, jigging & live bait techniques",
      "Fish cleaning & filleting included",
      "Air-conditioned cabin with restroom",
    ],
    duration: "8-12 hours",
    capacity: "Up to 6 anglers",
    price: "$1,200 - $1,800",
  },
  {
    slug: "inshore-fishing",
    title: "Inshore Fishing",
    description: "Explore the backwaters, bays, and grass flats for redfish, speckled trout, snook, and flounder in calm protected waters.",
    icon: faFish,
    image: "/images/services/inshore-fishing.jpg",
    features: [
      "Half-day 4-6 hour trips",
      "Light tackle spinning & fly gear",
      "Sight fishing for tailing redfish",
      "Perfect for beginners & families",
      "Shaded bay boat with cushioned seating",
    ],
    duration: "4-6 hours",
    capacity: "Up to 4 anglers",
    price: "$500 - $750",
  },
  {
    slug: "fly-fishing",
    title: "Fly Fishing Expeditions",
    description: "Stalk bonefish, permit, and tarpon on the flats with our expert fly fishing guides who know every honey hole along the coast.",
    icon: faCompass,
    image: "/images/services/fly-fishing.jpg",
    features: [
      "Full-day guided wade & skiff trips",
      "Premium Sage & Orvis fly rods provided",
      "Custom-tied local patterns included",
      "Instruction available for beginners",
      "Shallow-draft skiff for skinny water",
    ],
    duration: "6-8 hours",
    capacity: "Up to 2 anglers",
    price: "$650 - $850",
  },
  {
    slug: "sunset-cruises",
    title: "Sunset Cruises",
    description: "Wind down with a relaxing sunset cruise along the Emerald Coast. Perfect for couples, families, or small groups looking for a memorable evening on the water.",
    icon: faUmbrellaBeach,
    image: "/images/services/sunset-cruises.jpg",
    features: [
      "2-3 hour evening cruises",
      "Complimentary champagne & snacks",
      "Dolphin watching along the route",
      "Bluetooth sound system onboard",
      "Stunning photo opportunities",
    ],
    duration: "2-3 hours",
    capacity: "Up to 6 guests",
    price: "$400 - $600",
  },
  {
    slug: "corporate-charters",
    title: "Corporate & Group Charters",
    description: "Treat your team or clients to an unforgettable day on the water. Multi-boat charters available for large groups with catering options.",
    icon: faUsers,
    image: "/images/services/corporate-charters.jpg",
    features: [
      "Multi-boat coordination available",
      "Team-building fishing tournaments",
      "Catering & refreshment packages",
      "Branded merchandise options",
      "Professional photography add-on",
    ],
    duration: "4-8 hours",
    capacity: "Up to 30 guests (multi-boat)",
    price: "Custom quote",
  },
  {
    slug: "family-fishing",
    title: "Family Fishing Trips",
    description: "Kid-friendly fishing adventures designed for families. Our patient captains make sure everyone — from toddlers to grandparents — has a great time and catches fish.",
    icon: faAnchor,
    image: "/images/services/family-fishing.jpg",
    features: [
      "Kid-sized rods & tackle provided",
      "Patient, family-friendly captains",
      "Calm protected water routes",
      "Snacks & drinks included",
      "Guaranteed fish or next trip free",
    ],
    duration: "3-4 hours",
    capacity: "Up to 6 passengers",
    price: "$450 - $600",
  },
];

export const testimonials: TestimonialItem[] = [
  { name: "Mike Thornton", role: "Dallas, TX", text: "Best charter I've ever been on. Captain Dave put us on the tuna within an hour. We limited out by noon and had the time of our lives!", rating: 5 },
  { name: "Sarah & Jim Collins", role: "Atlanta, GA", text: "Took our kids on the family trip and they haven't stopped talking about it. Captain was so patient with our 7-year-old. Already booked our next trip!", rating: 5 },
  { name: "Robert Kensington", role: "Chicago, IL", text: "The corporate charter was flawless. Three boats, 24 people, and everyone caught fish. Our clients were blown away. Best team outing we've ever done.", rating: 5 },
  { name: "Lisa Martinez", role: "Nashville, TN", text: "The sunset cruise was magical. Dolphins swimming alongside the boat, champagne toast — it was the highlight of our anniversary trip.", rating: 5 },
  { name: "Tom Bradley", role: "Birmingham, AL", text: "As a fly fishing enthusiast, I can say these guides are the real deal. Put me on a 30-inch snook on the flats. World-class fly fishing right here.", rating: 5 },
  { name: "The Henderson Family", role: "Memphis, TN", text: "Three generations on one boat and everyone had a blast. Grandpa caught a 40-inch redfish! These memories will last a lifetime.", rating: 5 },
];

export const gallery: ProjectItem[] = [
  { title: "Monster Yellowfin Tuna", category: "Deep Sea", description: "120lb yellowfin caught 50 miles offshore", image: "/images/projects/project-1.jpg" },
  { title: "Redfish Grand Slam", category: "Inshore", description: "Triple tail redfish on the flats at sunrise", image: "/images/projects/project-2.jpg" },
  { title: "Family First Catch", category: "Family", description: "7-year-old's first red snapper — all smiles!", image: "/images/projects/project-3.jpg" },
  { title: "Tarpon on the Fly", category: "Fly Fishing", description: "80lb tarpon landed on 12wt fly rod", image: "/images/projects/project-4.jpg" },
  { title: "Dolphin Sunset Encounter", category: "Sunset Cruise", description: "Pod of dolphins riding the bow wave", image: "/images/projects/project-5.jpg" },
  { title: "Corporate Tournament Winners", category: "Corporate", description: "TechCorp annual fishing tournament champions", image: "/images/projects/project-6.jpg" },
  { title: "Mahi-Mahi Bonanza", category: "Deep Sea", description: "15 mahi-mahi in one afternoon — limit out!", image: "/images/projects/project-7.jpg" },
  { title: "Speckled Trout Slam", category: "Inshore", description: "25-inch gator trout on topwater lure", image: "/images/projects/project-8.jpg" },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Half-Day Inshore",
    price: "$500",
    duration: "4 hours",
    description: "Perfect for beginners and families — calm waters, constant action.",
    features: ["4 hours on the water", "Up to 4 anglers", "All tackle & bait included", "Fish cleaning service", "Snacks & bottled water", "Professional guide"],
  },
  {
    name: "Full-Day Offshore",
    price: "$1,200",
    duration: "8 hours",
    description: "The ultimate deep sea experience — chase pelagic monsters offshore.",
    features: ["8 hours on the water", "Up to 6 anglers", "Premium tackle & live bait", "Fish cleaning & vacuum packing", "Lunch & refreshments", "AC cabin & restroom"],
    highlighted: true,
  },
  {
    name: "Fly Fishing Expedition",
    price: "$650",
    duration: "6 hours",
    description: "Stalk trophy fish on the flats with expert fly guides.",
    features: ["6 hours guided fishing", "Up to 2 anglers", "Sage/Orvis fly rods & reels", "Custom-tied local flies", "Wading gear included", "Instruction for all levels"],
  },
  {
    name: "Sunset Cruise",
    price: "$400",
    duration: "2.5 hours",
    description: "Relax and unwind as you cruise into a breathtaking Gulf Coast sunset.",
    features: ["2.5 hour cruise", "Up to 6 guests", "Champagne & appetizers", "Dolphin watching", "Bluetooth music system", "Professional captain"],
  },
];

export const team: TeamMember[] = [
  { name: "Captain Dave Morrison", role: "Owner & Head Guide", image: "/images/team/team-1.svg", bio: "30+ years on the Gulf. USCG licensed master captain. Tournament champion with over 500 charters completed." },
  { name: "Captain Mike Rivera", role: "Offshore Specialist", image: "/images/team/team-2.svg", bio: "Deep sea expert with 15 years experience. Specializes in trolling for pelagic species. Holds multiple tournament records." },
  { name: "Sarah Chen", role: "Fly Fishing Guide", image: "/images/team/team-3.svg", bio: "FFI certified casting instructor. Expert in flats fishing for tarpon, bonefish, and permit. Passionate about conservation." },
];

export const faqs: FAQItem[] = [
  { q: "Do I need a fishing license?", a: "No — your charter includes a blanket fishing license that covers everyone on board. No need to purchase your own." },
  { q: "What should I bring?", a: "Sunscreen (non-spray), polarized sunglasses, a hat, comfortable clothing, and non-marking shoes. We provide all fishing gear, bait, ice, and bottled water. Feel free to bring snacks and drinks (no glass bottles)." },
  { q: "Can we keep the fish we catch?", a: "Absolutely! We clean and fillet your catch at the dock at no extra charge. For offshore trips, we also offer vacuum-sealed packaging so your fish stays fresh for the trip home." },
  { q: "What if the weather is bad?", a: "Safety is our top priority. If conditions are unsafe, we reschedule at no cost or provide a full refund. We monitor marine forecasts continuously and will contact you 24 hours before your trip if weather is a concern." },
  { q: "Are children welcome?", a: "Yes! We love introducing kids to fishing. Our family trips are specifically designed for young anglers. We provide kid-sized gear and our captains are experienced with children of all ages. Children under 12 must wear a life jacket at all times." },
  { q: "What's your cancellation policy?", a: "Free cancellation up to 48 hours before your trip. Cancellations within 48 hours receive a 50% refund. No-shows are not refunded. Weather cancellations by the captain are always fully refunded or rescheduled." },
  { q: "Do you offer multi-day packages?", a: "Yes! We offer 2-day and 3-day fishing packages with discounted rates. Multi-day packages include hotel recommendations and can mix different trip types (e.g., inshore one day, offshore the next). Contact us for custom multi-day pricing." },
  { q: "Is tipping the captain expected?", a: "Tipping is customary in the fishing charter industry, similar to restaurant service. 15-20% is standard for a great trip, but it's entirely at your discretion based on your experience." },
];
