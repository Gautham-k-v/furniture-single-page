import { asset } from "../utils/asset";

export const filters = [
  "All",
  "Living Room",
  "Bedroom",
  "Dining",
  "Storage",
  "Workspace",
];

export const products = [
  {
    id: "aurora-sofa",
    name: "Aurora 3-Seater Sofa",
    category: "Living Room",
    type: "Sofas",
    price: "₹45,999",
    image: asset("images/prod-sofa.jpg"),
    alt: "Sage velvet sofa with tapered timber legs",
    summary:
      "A deep sofa in sage velvet, with a hardwood frame and tapered timber legs. Made to be the seat you actually use every evening.",
    details: [
      "Sage velvet upholstery",
      "Hardwood frame",
      "Tapered timber legs",
      "Generous seat depth",
      "W 210 cm · D 88 cm · H 84 cm",
    ],
  },
  {
    id: "teakwood-bed",
    name: "Teakwood King Bed",
    category: "Bedroom",
    type: "Beds",
    price: "₹68,999",
    image: asset("images/prod-bed.jpg"),
    alt: "Low timber platform bed dressed in neutral linen",
    summary:
      "A low teak platform bed with a quiet headboard. The grain stays visible under a natural oil finish.",
    details: [
      "Solid timber platform and headboard",
      "Natural oil finish",
      "Fits a king mattress",
      "Mattress sold separately",
      "Low profile, about 40 cm to the platform",
    ],
  },
  {
    id: "nordic-dining",
    name: "Nordic Dining Set",
    category: "Dining",
    type: "Dining Tables",
    price: "₹39,999",
    image: asset("images/prod-dining.jpg"),
    alt: "Light oak dining table with four wooden chairs",
    summary:
      "A light oak table with four wooden chairs. The lines are simple, and the finish is ready for everyday meals.",
    details: [
      "Seats four",
      "Light oak table and chair frames",
      "Upholstered chair seats",
      "Finished for daily use",
      "Table about 120 × 80 cm",
    ],
  },
  {
    id: "minimal-coffee",
    name: "Minimal Coffee Table",
    category: "Living Room",
    type: "Coffee Tables",
    price: "₹12,499",
    position: "center 78%",
    image: asset("images/prod-coffee.jpg"),
    alt: "Low coffee table with a pale stone top and wood legs, in front of a sofa",
    summary:
      "A low table with a pale stone top and solid wood legs. It sits in front of a sofa without crowding the room.",
    details: [
      "Pale stone top",
      "Solid wood legs",
      "Open, low base",
      "About 120 × 55 × 40 cm",
    ],
  },
  {
    id: "comfort-recliner",
    name: "Comfort Recliner",
    category: "Living Room",
    type: "Chairs",
    price: "₹32,999",
    image: asset("images/prod-recliner.jpg"),
    alt: "Sand upholstered lounge chair on an oak swivel base",
    summary:
      "A single lounge chair in sand fabric, on an oak swivel base. Easy to place by a window or in a reading corner.",
    details: [
      "Sand textured upholstery",
      "Oak swivel base",
      "Supportive high back",
      "W 80 cm · D 84 cm · H 96 cm",
    ],
  },
  {
    id: "signature-wardrobe",
    name: "Signature Wardrobe",
    category: "Storage",
    type: "Wardrobes",
    price: "₹49,999",
    image: asset("images/prod-wardrobe.jpg"),
    alt: "Warm timber wardrobe with two doors and drawers",
    summary:
      "A two-door wardrobe in warm timber, with a pair of drawers below. Simple hardware, and a finish that belongs in a bedroom.",
    details: [
      "Warm timber finish",
      "Two doors and two drawers",
      "Hanging space behind the doors",
      "Standing wardrobe",
      "About W 120 cm · D 58 cm · H 190 cm",
    ],
  },
];
