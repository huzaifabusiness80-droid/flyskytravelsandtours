import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { servicesData } from "../app/data/servicesData";
import { subServicesData } from "../app/data/subServicesData";

const prisma = new PrismaClient();

const initialPackages = [
  {
    slug: "dubai-deluxe",
    title: "Dubai Deluxe Explorer",
    category: "City Tours, Desert Safari, Burj Khalifa",
    duration: "5 days",
    price: "PKR 145,000",
    originalPrice: "PKR 165,000",
    imageSrc: "/destinations/dubai.jpg",
    rating: 5,
    reviewsCount: 28,
    isSale: true,
    link: "/services/tour-packages/dubai-tour",
    order: 1,
  },
  {
    slug: "grand-turkey",
    title: "Grand Turkey & Cappadocia",
    category: "Istanbul, Bosphorus, Hot Air Balloon",
    duration: "7 days",
    price: "PKR 285,000",
    originalPrice: "PKR 310,000",
    imageSrc: "/destinations/turkey.jpg",
    rating: 5,
    reviewsCount: 34,
    isSale: false,
    link: "/services/tour-packages/turkey-tour",
    order: 2,
  },
  {
    slug: "baku-azerbaijan",
    title: "Baku & Gabala Mountain Tour",
    category: "Shahdag Snow, City Tours, Historic",
    duration: "5 days",
    price: "PKR 165,000",
    originalPrice: "PKR 185,000",
    imageSrc: "/destinations/azerbaijan.jpg",
    rating: 5,
    reviewsCount: 19,
    isSale: true,
    link: "/services/tour-packages/baku-tour",
    order: 3,
  },
  {
    slug: "malaysia-escape",
    title: "Discover Malaysia & Langkawi",
    category: "Kuala Lumpur, Genting Cable Car, Beach",
    duration: "6 days",
    price: "PKR 195,000",
    originalPrice: "PKR 215,000",
    imageSrc: "/destinations/malaysia.jpg",
    rating: 5,
    reviewsCount: 22,
    isSale: false,
    link: "/services/tour-packages/malaysia-tour",
    order: 4,
  },
  {
    slug: "thailand-island",
    title: "Thailand Bangkok & Phuket",
    category: "Island Hopping, City Tours, Beaches",
    duration: "6 days",
    price: "PKR 175,000",
    originalPrice: "PKR 195,000",
    imageSrc: "/destinations/thailand.jpg",
    rating: 5,
    reviewsCount: 16,
    isSale: false,
    link: "/services/tour-packages/thailand-tour",
    order: 5,
  },
  {
    slug: "london-uk",
    title: "London & UK Experience",
    category: "Iconic Landmarks, Shopping, Urban",
    duration: "8 days",
    price: "PKR 490,000",
    originalPrice: "PKR 520,000",
    imageSrc: "/destinations/london.jpg",
    rating: 5,
    reviewsCount: 12,
    isSale: false,
    link: "/services/visa-processing/uk-visa",
    order: 6,
  },
];

const initialDestinations = [
  {
    name: "Dubai",
    country: "UAE",
    imageSrc: "/destinations/dubai.jpg",
    visaType: "5 Year Multiple & Tourist",
    processingTime: "24-48 Hours",
    highlight: "Done Base Tourist Visa",
    link: "/services/visa-processing/uae-visa",
    category: "middle-east",
    order: 1,
  },
  {
    name: "Bahrain",
    country: "Bahrain",
    imageSrc: "/destinations/bahrain.jpg",
    visaType: "Single & Multiple Entry",
    processingTime: "3-5 Working Days",
    highlight: "Stunning Views & Visit Visa",
    link: "/services/visa-processing",
    category: "middle-east",
    order: 2,
  },
  {
    name: "Turkey",
    country: "Turkey",
    imageSrc: "/destinations/turkey.jpg",
    visaType: "E-Visa & Sticker Visa",
    processingTime: "Hassle-Free Approval",
    highlight: "Istanbul & Cappadocia",
    link: "/services/visa-processing/turkey-visa",
    category: "europe",
    order: 3,
  },
  {
    name: "Malaysia",
    country: "Malaysia",
    imageSrc: "/destinations/malaysia.jpg",
    visaType: "E-Visa & Tourist Visa",
    processingTime: "Quick Approval",
    highlight: "Kuala Lumpur & Islands",
    link: "/services/tour-packages/malaysia-tour",
    category: "asia",
    order: 4,
  },
  {
    name: "Thailand",
    country: "Thailand",
    imageSrc: "/destinations/thailand.jpg",
    visaType: "Tourist Visa",
    processingTime: "Fast Processing",
    highlight: "Bangkok & Phuket Tours",
    link: "/services/tour-packages/thailand-tour",
    category: "asia",
    order: 5,
  },
  {
    name: "Azerbaijan",
    country: "Azerbaijan",
    imageSrc: "/destinations/azerbaijan.jpg",
    visaType: "ASAN E-Visa",
    processingTime: "3 Hours / 3 Days",
    highlight: "Baku City & Mountains",
    link: "/services/visa-processing/azerbaijan-visa",
    category: "europe",
    order: 6,
  },
  {
    name: "Singapore",
    country: "Singapore",
    imageSrc: "/destinations/singapore.jpg",
    visaType: "E-Visa Facility",
    processingTime: "Fast Track",
    highlight: "Marina Bay & City Tours",
    link: "/services/visa-processing",
    category: "asia",
    order: 7,
  },
  {
    name: "Egypt",
    country: "Egypt",
    imageSrc: "/destinations/egypt.jpg",
    visaType: "Tourist & Visit Visa",
    processingTime: "Smooth Processing",
    highlight: "Pyramids & Historic Tours",
    link: "/services/visa-processing",
    category: "middle-east",
    order: 8,
  },
];

async function main() {
  console.log("🌱 Starting Neon PostgreSQL Database Seed...");

  // 1. Seed Admin Account
  const hashedPassword = await bcrypt.hash("Admin@FlySky2026!", 10);
  const admin = await prisma.admin.upsert({
    where: { email: "admin@flyskytravel.com" },
    update: {},
    create: {
      email: "admin@flyskytravel.com",
      password: hashedPassword,
      name: "Fly Sky Admin",
      role: "SUPER_ADMIN",
    },
  });
  console.log(`✅ Admin account initialized: ${admin.email}`);

  // 2. Seed Services
  let serviceOrder = 1;
  for (const [slug, service] of Object.entries(servicesData)) {
    await prisma.service.upsert({
      where: { slug },
      update: {
        title: service.title,
        shortDesc: service.shortDesc,
        heroImage: service.heroImage,
        tagline: service.tagline,
        overview: service.overview,
        benefits: service.benefits,
        order: serviceOrder++,
      },
      create: {
        slug: service.slug,
        title: service.title,
        shortDesc: service.shortDesc,
        heroImage: service.heroImage,
        tagline: service.tagline,
        overview: service.overview,
        benefits: service.benefits,
        order: serviceOrder++,
      },
    });
  }
  console.log("✅ Core Services seeded successfully.");

  // 3. Seed Sub-Services
  for (const [slug, sub] of Object.entries(subServicesData)) {
    await prisma.subService.upsert({
      where: { slug },
      update: {
        parentSlug: sub.parentSlug,
        parentTitle: sub.parentTitle,
        title: sub.title,
        subtitle: sub.subtitle,
        badge: sub.badge,
        image: sub.image,
        priceOrFee: sub.priceOrFee,
        durationOrProcessing: sub.durationOrProcessing,
        validity: sub.validity,
        overview: sub.overview,
        requirements: sub.requirements,
        inclusions: sub.inclusions,
        stepsOrItinerary: sub.stepsOrItinerary,
        faqs: sub.faqs,
      },
      create: {
        slug: sub.slug,
        parentSlug: sub.parentSlug,
        parentTitle: sub.parentTitle,
        title: sub.title,
        subtitle: sub.subtitle,
        badge: sub.badge,
        image: sub.image,
        priceOrFee: sub.priceOrFee,
        durationOrProcessing: sub.durationOrProcessing,
        validity: sub.validity,
        overview: sub.overview,
        requirements: sub.requirements,
        inclusions: sub.inclusions,
        stepsOrItinerary: sub.stepsOrItinerary,
        faqs: sub.faqs,
      },
    });
  }
  console.log("✅ Sub-Services (Visas, Tours, Flights, Umrah) seeded successfully.");

  // 4. Seed Featured Tour Packages
  for (const pkg of initialPackages) {
    await prisma.package.upsert({
      where: { slug: pkg.slug },
      update: pkg,
      create: pkg,
    });
  }
  console.log("✅ Featured Tour Packages seeded successfully.");

  // 5. Seed Popular Destinations
  for (const dest of initialDestinations) {
    const existing = await prisma.destination.findFirst({
      where: { name: dest.name },
    });
    if (existing) {
      await prisma.destination.update({
        where: { id: existing.id },
        data: dest,
      });
    } else {
      await prisma.destination.create({
        data: dest,
      });
    }
  }
  console.log("✅ Popular Destinations seeded successfully.");

  console.log("🚀 Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
