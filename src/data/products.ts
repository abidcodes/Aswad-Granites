export type Product = {
  id: string;
  name: string;
  category: "Black" | "White" | "Grey" | "Red" | "Brown" | "Blue" | "Green" | "Gold";
  finish: string[];
  pricePerSqft: number;
  origin: string;
  image: string;
  description: string;
  applications: string[];
  sizes: string[];
  popular?: boolean;
};

export const products: Product[] = [
  {
    id: "absolute-black",
    name: "Absolute Black",
    category: "Black",
    finish: ["Polished", "Honed", "Flamed"],
    pricePerSqft: 145,
    origin: "Andhra Pradesh",
    image:
      "/gallery/Black_granite_slab_on_display_20261007200955.jpg",
    description:
      "Deep jet-black granite with unmatched density and low porosity. The workhorse for countertops, flooring and monuments.",
    applications: ["Kitchen Countertops", "Flooring", "Wall Cladding", "Monuments"],
    sizes: ["Slabs 2cm / 3cm", "Tiles 60x60", "Cut-to-size"],
    popular: true,
  },
  {
    id: "black-galaxy",
    name: "Black Galaxy",
    category: "Black",
    finish: ["Polished"],
    pricePerSqft: 185,
    origin: "Andhra Pradesh",
    image:
      "/gallery/Black_granite_with_mineral_veins_20261007200955.jpg",
    description:
      "Iconic black granite with gold and white speckles resembling a starry galaxy. India's most exported stone.",
    applications: ["Countertops", "Lobby Flooring", "Reception Tables", "Export Slabs"],
    sizes: ["Slabs 2cm / 3cm", "Tiles", "Vanity Tops"],
    popular: true,
  },
  {
    id: "black-pearl",
    name: "Black Pearl",
    category: "Black",
    finish: ["Polished", "Honed"],
    pricePerSqft: 165,
    origin: "Karnataka",
    image:
      "/gallery/Black_granite_mineral_veins_texture_20261007200955.jpg",
    description:
      "Black granite with silver-grey shimmer. A premium alternative to Galaxy for modern kitchens.",
    applications: ["Countertops", "Island Tops", "Staircase", "Elevation"],
    sizes: ["Slabs 2cm / 3cm", "Cut-to-size"],
  },
  {
    id: "kashmir-white",
    name: "Kashmir White",
    category: "White",
    finish: ["Polished", "Honed"],
    pricePerSqft: 120,
    origin: "Tamil Nadu",
    image:
      "/gallery/Granite_slabs_displayed_in_showroom_20261007200955.jpg",
    description:
      "Elegant white-grey granite with dark speckles. Brightens kitchens and commercial lobbies.",
    applications: ["Flooring", "Countertops", "Hotels", "Apartments"],
    sizes: ["Slabs 2cm / 3cm", "Tiles 60x60 / 60x30"],
  },
  {
    id: "viscon-white",
    name: "Viscon White",
    category: "White",
    finish: ["Polished", "Honed"],
    pricePerSqft: 135,
    origin: "Tamil Nadu",
    image:
      "/gallery/Granite_showroom_with_stone_slabs_20261007200955.jpg",
    description:
      "Milky-white granite with swirling grey veins. High-end look for villas and showrooms.",
    applications: ["Flooring", "Wall Panels", "Countertops", "TV Walls"],
    sizes: ["Slabs 2cm / 3cm", "Tiles"],
    popular: true,
  },
  {
    id: "moon-white",
    name: "Moon White",
    category: "White",
    finish: ["Polished"],
    pricePerSqft: 105,
    origin: "Rajasthan",
    image:
      "/gallery/Granite_samples_inside_showroom_20261007200955.jpg",
    description:
      "Soft white granite with fine grains. Budget-friendly for large residential flooring.",
    applications: ["Flooring", "Apartments", "Corridors", "Stairs"],
    sizes: ["Slabs 2cm", "Tiles 60x60"],
  },
  {
    id: "steel-grey",
    name: "Steel Grey",
    category: "Grey",
    finish: ["Polished", "Flamed", "Honed"],
    pricePerSqft: 115,
    origin: "Telangana",
    image:
      "/gallery/Charcoal_granite_slabs_displayed_20261007200955.jpg",
    description:
      "Medium-grey granite with silver flecks. Outdoor-safe — ideal for paving and facades.",
    applications: ["Paving", "Facades", "Flooring", "Landscaping"],
    sizes: ["Slabs", "Pavers 60x30", "Kerbs"],
  },
  {
    id: "sira-grey",
    name: "Sira Grey",
    category: "Grey",
    finish: ["Polished", "Honed"],
    pricePerSqft: 95,
    origin: "Karnataka",
    image:
      "/gallery/Granite_slabs_in_stone_facility_20261007200955.jpg",
    description:
      "Light-grey uniform granite. Economical choice for commercial complexes and basements.",
    applications: ["Commercial Flooring", "Parking", "Steps", "Skirting"],
    sizes: ["Slabs 2cm", "Tiles"],
  },
  {
    id: "tan-brown",
    name: "Tan Brown",
    category: "Brown",
    finish: ["Polished", "Lapatura"],
    pricePerSqft: 135,
    origin: "Andhra Pradesh",
    image:
      "/gallery/Granite_surface_showing_mineral_._20261007200955.jpg",
    description:
      "Rich brown-black granite with tan mineral deposits. High demand in USA & Europe.",
    applications: ["Countertops", "Flooring", "Export Slabs", "Vanities"],
    sizes: ["Slabs 2cm / 3cm", "Tiles"],
    popular: true,
  },
  {
    id: "coffee-brown",
    name: "Coffee Brown",
    category: "Brown",
    finish: ["Polished"],
    pricePerSqft: 125,
    origin: "Andhra Pradesh",
    image:
      "/gallery/Granite_grains_macro_photograph_20261007200955.jpg",
    description:
      "Dark coffee-brown granite with black waves. Warm luxury for living rooms and bars.",
    applications: ["Flooring", "Bar Tops", "Fireplaces", "Tables"],
    sizes: ["Slabs 2cm / 3cm", "Cut-to-size"],
  },
  {
    id: "desert-brown",
    name: "Desert Brown",
    category: "Brown",
    finish: ["Polished", "Honed"],
    pricePerSqft: 110,
    origin: "Karnataka",
    image:
      "/gallery/Granite_slabs_demonstrating_vein._20261007200955.jpg",
    description:
      "Sandy-brown granite with wavy patterns. Earthy tone for farmhouses and resorts.",
    applications: ["Resort Flooring", "Patios", "Cladding", "Decks"],
    sizes: ["Slabs", "Tiles"],
  },
  {
    id: "imperial-red",
    name: "Imperial Red",
    category: "Red",
    finish: ["Polished", "Flamed"],
    pricePerSqft: 155,
    origin: "Karnataka",
    image:
      "/gallery/Polished_granite_surface_reflection_20261007200955.jpg",
    description:
      "Bold red-brown granite with black and grey grains. Statement flooring and facades.",
    applications: ["Facades", "Temples", "Lobby Flooring", "Entrances"],
    sizes: ["Slabs 2cm / 3cm", "Tiles"],
  },
  {
    id: "red-multi",
    name: "Red Multi Colour",
    category: "Red",
    finish: ["Polished"],
    pricePerSqft: 98,
    origin: "Tamil Nadu",
    image:
      "/gallery/Mineral_veins_in_black_granite_20261007200955.jpg",
    description:
      "Red-black-green multicolour granite. Vibrant and economical for temples and community halls.",
    applications: ["Temples", "Halls", "Flooring", "Platforms"],
    sizes: ["Slabs 2cm", "Tiles"],
  },
  {
    id: "blue-pearl",
    name: "Blue Pearl",
    category: "Blue",
    finish: ["Polished"],
    pricePerSqft: 220,
    origin: "Exotic Range",
    image:
      "/gallery/Black_granite_kitchen_island_20261007200955.jpg",
    description:
      "Shimmering blue-silver feldspar crystals. Luxury kitchens, hotel lobbies and yachts.",
    applications: ["Luxury Kitchens", "Hotel Lobbies", "Yachts", "Feature Walls"],
    sizes: ["Slabs 2cm / 3cm", "Cut-to-size"],
    popular: true,
  },
  {
    id: "hassan-green",
    name: "Hassan Green",
    category: "Green",
    finish: ["Polished", "Honed"],
    pricePerSqft: 140,
    origin: "Karnataka",
    image:
      "/gallery/Granite_slabs_in_modern_showroom_20261007200955.jpg",
    description:
      "Olive-green granite with moss-like texture. Distinctive for landscaping and accents.",
    applications: ["Landscaping", "Accent Walls", "Garden Benches", "Flooring"],
    sizes: ["Slabs", "Pavers", "Monuments"],
  },
  {
    id: "kuppam-green",
    name: "Kuppam Green",
    category: "Green",
    finish: ["Polished"],
    pricePerSqft: 150,
    origin: "Andhra Pradesh",
    image:
      "/gallery/Granite_showroom_interior_design._20261007200955.jpg",
    description:
      "Dark green granite with light-green veins. Premium export stone for Europe.",
    applications: ["Export Slabs", "Countertops", "Bathrooms", "Showrooms"],
    sizes: ["Slabs 2cm / 3cm", "Tiles"],
  },
  {
    id: "alaska-gold",
    name: "Alaska Gold",
    category: "Gold",
    finish: ["Polished", "Honed"],
    pricePerSqft: 195,
    origin: "Andhra Pradesh",
    image:
      "/gallery/Polished_granite_mirror_reflection_20261007200955.jpg",
    description:
      "Golden-white exotic granite with dramatic veining. Premium villas and showrooms.",
    applications: ["Villa Flooring", "Showrooms", "Staircase", "Dining Tables"],
    sizes: ["Slabs 2cm / 3cm", "Cut-to-size"],
    popular: true,
  },
  {
    id: "crystal-yellow",
    name: "Crystal Yellow",
    category: "Gold",
    finish: ["Polished"],
    pricePerSqft: 130,
    origin: "Karnataka",
    image:
      "/gallery/Granite_slabs_showing_polished_e._20261007200955.jpg",
    description:
      "Sunny yellow granite with brown speckles. Cheerful flooring for homes and schools.",
    applications: ["Home Flooring", "Schools", "Corridors", "Kitchen Slabs"],
    sizes: ["Slabs 2cm", "Tiles 60x60"],
  },
];

export const categories = [
  "All",
  "Black",
  "White",
  "Grey",
  "Brown",
  "Red",
  "Blue",
  "Green",
  "Gold",
] as const;
