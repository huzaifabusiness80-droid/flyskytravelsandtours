export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  heroImage: string;
  tagline: string;
  overview: string;
  benefits: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "visa-processing": {
    slug: "visa-processing",
    title: "Visa Processing & Consultancy",
    shortDesc: "Certified visa file preparation and high approval advisory for Schengen, UK, USA, UAE, Turkey & worldwide destinations.",
    heroImage: "/visa_service.jpg",
    tagline: "High Approval Rates & Expert File Preparation",
    overview: "Fly Sky Travel & Tourism (Govt. LIC # LHR 10981) provides professional visa consultancy for visit, tourist, business, and study visas worldwide. Our team meticulously reviews documentation, prepares strong cover letters, assists with biometric appointments, and ensures complete embassy compliance.",
    benefits: [
      "Expert Document Auditing & Verification",
      "Embassy-Standard Cover Letter & Itinerary Preparation",
      "Fast-Track Appointment Booking Assistance",
      "Transparent Consultancy with Zero Hidden Charges",
      "Comprehensive Schengen, UK, USA & Gulf Visa Expertise"
    ],
    keyFeatures: [
      {
        title: "Schengen Visa (Europe)",
        description: "Full file preparation for Germany, France, Italy, Spain, Switzerland, and 27 European Schengen countries."
      },
      {
        title: "UK & USA Visit Visas",
        description: "Standard visitor visa (6 months to 10 years) guidance, DS-160 filling, financial structuring, and interview preparation."
      },
      {
        title: "UAE & Gulf E-Visas",
        description: "Quick 30-days, 60-days, and multiple-entry tourist visas for Dubai, Bahrain, Qatar, Saudi Arabia, and Oman."
      },
      {
        title: "East Asia & Far East",
        description: "Fast processing for Turkey, Baku (Azerbaijan), Malaysia, Thailand, Singapore, and Japan tourist visas."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Initial Profile Assessment",
        description: "We review your travel history, financial documents, and purpose of travel to recommend the best visa path."
      },
      {
        step: "02",
        title: "Document Compilation & Drafting",
        description: "Our experts draft tailored cover letters, travel itineraries, hotel vouchers, and flight reservations."
      },
      {
        step: "03",
        title: "Submission & Biometrics Booking",
        description: "We secure your embassy/VFS/Gerry's appointment slot and ensure your file meets all compliance criteria."
      },
      {
        step: "04",
        title: "Visa Issuance & Delivery",
        description: "Receive your approved visa sticker or electronic e-visa with complete briefing for immigration clearance."
      }
    ],
    faqs: [
      {
        question: "How long does visa processing take?",
        answer: "E-visas for UAE, Baku, or Malaysia typically take 2-4 working days. Sticker visas for Schengen, UK, or USA take 15 to 30 working days depending on embassy workload."
      },
      {
        question: "What documents are required for visit visa file preparation?",
        answer: "Original passport, CNIC copy, bank statement (last 6 months with account maintenance certificate), source of income proof (job letter or business NTN), and photographs."
      },
      {
        question: "Does Fly Sky Travel guarantee visa approval?",
        answer: "No agency can legally guarantee visa issuance as approval is strictly the sole authority of the embassy/consulate. However, our licensed file preparation ensures maximum approval chances with zero documentation errors."
      }
    ]
  },

  "air-ticketing": {
    slug: "air-ticketing",
    title: "Air Ticketing & Flight Booking",
    shortDesc: "Instant airline bookings with discounted corporate fares on all domestic and international carriers worldwide.",
    heroImage: "/flight_service.jpg",
    tagline: "Best Airfares Guaranteed On Global Airlines",
    overview: "With direct access to global airline reservation systems (GDS), Fly Sky Travel & Tourism provides the most competitive fares on domestic and international flights. Whether you need economy, premium economy, or business class tickets, our ticketing desk is available 24/7.",
    benefits: [
      "Direct IATA Partner Airline Fares",
      "Instant Seat Reservations & Ticket Issuance",
      "Flexible Date Changes, Cancellations & Re-issuance Support",
      "Group Bookings & Corporate Flight Management",
      "Baggage Allowance Upgrades & Special Meal Requests"
    ],
    keyFeatures: [
      {
        title: "International Flights",
        description: "Direct & connecting flights via Emirates, Qatar Airways, Turkish Airlines, Saudia, Etihad, Fly Jinnah, and Gulf Air."
      },
      {
        title: "Domestic Pakistan Flights",
        description: "Best rates for PIA, Airblue, Serene Air, and Fly Jinnah across Karachi, Lahore, Islamabad, Multan, and Skardu."
      },
      {
        title: "Umrah Flights",
        description: "Dedicated direct and indirect flights to Jeddah and Madinah with 5-liter Zamzam allowance included."
      },
      {
        title: "Corporate & Group Travel",
        description: "Special discounted group rates for families, corporate teams, and pilgrim groups with easy installments."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Share Route & Dates",
        description: "Send us your departure city, destination, travel dates, and number of passengers."
      },
      {
        step: "02",
        title: "Compare Options & Fares",
        description: "We provide multiple airline options with timings, baggage allowance, and lowest available rates."
      },
      {
        step: "03",
        title: "Instant Booking & Issuance",
        description: "Select your preferred flight and receive your official electronic ticket (e-ticket) immediately via WhatsApp/Email."
      },
      {
        step: "04",
        title: "Pre-Flight Support",
        description: "We handle seat selection, online check-in, and provide live flight status alerts until you land."
      }
    ],
    faqs: [
      {
        question: "Can I hold a flight seat before paying?",
        answer: "Yes, depending on airline fare rules, we can hold confirmed seats for 12 to 24 hours to give you time to confirm your schedule."
      },
      {
        question: "What happens if my flight gets delayed or cancelled?",
        answer: "Our 24/7 dedicated support team coordinates directly with the airline to reschedule your flight or claim applicable refunds without hassle."
      },
      {
        question: "Do you offer student and youth baggage discounts?",
        answer: "Yes, we arrange extra baggage allowances and special student discounts on selected international airlines."
      }
    ]
  },

  "tour-packages": {
    slug: "tour-packages",
    title: "Worldwide Tour Packages",
    shortDesc: "Tailor-made holiday packages with handpicked luxury hotels, airport transfers, sightseeing tours, and visa support.",
    heroImage: "/tours_service.jpg",
    tagline: "Unforgettable Holiday Experiences Across the World",
    overview: "Explore stunning global destinations with Fly Sky Travel & Tourism's expertly curated tour packages. From Dubai's futuristic marvels to Baku's historical charm and Turkey's breathtaking landscapes, we ensure a seamless and luxurious travel experience from departure to return.",
    benefits: [
      "Customized Day-by-Day Tour Itineraries",
      "Verified 3-Star, 4-Star & 5-Star Hotel Accommodations",
      "Private & Shared Air-Conditioned Airport Transfers",
      "English/Urdu-speaking Professional Local Tour Guides",
      "Complete Visa Assistance & Flight Ticketing Included"
    ],
    keyFeatures: [
      {
        title: "Dubai & Abu Dhabi Tours",
        description: "Burj Khalifa, Desert Safari with BBQ dinner, Marina Dhow Cruise, Dubai Mall, and Ferrari World Abu Dhabi."
      },
      {
        title: "Baku & Azerbaijan Discovery",
        description: "Old City Baku, Flame Towers, Gobustan Rock Art, Fire Temple, and mountain excursion to Gabala & Shahdag."
      },
      {
        title: "Turkey Spectacular",
        description: "Istanbul Bosphorus Cruise, Blue Mosque, Cappadocia Hot Air Balloons, Antalya beaches, and Pamukkale."
      },
      {
        title: "Far East Holidays (Thailand & Malaysia)",
        description: "Bangkok city tours, Pattaya Coral Island, Phuket beaches, Kuala Lumpur Twin Towers, and Genting Highlands."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Choose Your Destination",
        description: "Select your desired country, travel dates, and travel group size (family, couple, solo, or friends)."
      },
      {
        step: "02",
        title: "Customized Itinerary Creation",
        description: "Our travel specialist designs a tailored itinerary with hotel choices and preferred sightseeing activities."
      },
      {
        step: "03",
        title: "Visa & Booking Confirmation",
        description: "We process your entry visas, issue flights, and confirm hotel and transfer vouchers."
      },
      {
        step: "04",
        title: "Fly & Enjoy Hassle-Free",
        description: "Experience your dream vacation with 24/7 emergency support and on-ground guide assistance."
      }
    ],
    faqs: [
      {
        question: "Can tour packages be customized according to my budget?",
        answer: "Absolutely. Every tour package can be personalized with your choice of hotel category, private vs shared transport, and custom excursions."
      },
      {
        question: "Are flights and visas included in the tour price?",
        answer: "We offer both all-inclusive packages (flights + visa + hotels + tours) as well as land-only packages for travelers who already have tickets."
      },
      {
        question: "Is Fly Sky Travel suitable for family and senior citizen tours?",
        answer: "Yes, our itineraries are specially designed with comfortable pacing, central hotels, and private transfers suited for families and elderly travelers."
      }
    ]
  },

  "umrah-services": {
    slug: "umrah-services",
    title: "Executive Umrah & Hajj Services",
    shortDesc: "Complete pilgrimage arrangements with hotels near Haramain, fast e-visa issuance, and VIP ground transportation.",
    heroImage: "/destinations/dubai.jpg",
    tagline: "Spiritual Journey Handled With Care & Reverence",
    overview: "Fly Sky Travel & Tourism provides executive Umrah packages designed to make your spiritual pilgrimage comfortable and peaceful. We arrange verified hotels within walking distance of Masjid al-Haram and Masjid an-Nabawi, instant electronic Umrah visas, and dependable private transfers.",
    benefits: [
      "Instant Umrah Visa Processing (Nusuk Certified)",
      "Accommodations within 50 to 500 Meters of Haramain",
      "Private High-Speed Train & Luxury Vehicle Transfers",
      "Historical Ziyarat Tours in Makkah & Madinah",
      "Dedicated 24/7 Ground Support in Saudi Arabia"
    ],
    keyFeatures: [
      {
        title: "5-Star Luxury Umrah Packages",
        description: "Premium clock tower & Haram front hotels (Fairmont, Swissotel, Pullman Zamzam, Oberoi Madinah)."
      },
      {
        title: "Economy & Standard Packages",
        description: "Clean, comfortable, and affordable 3-star & 4-star hotels with shuttle service or short walking distance."
      },
      {
        title: "Customized Family Umrah",
        description: "Private room configurations, special assistance for elderly pilgrims, wheelchairs, and tailored schedules."
      },
      {
        title: "Holy Ziyarat Excursions",
        description: "Guided visits to Cave of Hira, Cave of Thawr, Mount Uhud, Masjid Quba, and battlefields with knowledgeable guides."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Select Package & Dates",
        description: "Tell us your desired departure date, duration (7, 14, 21 days), and budget preference."
      },
      {
        step: "02",
        title: "Instant Umrah Visa Processing",
        description: "Send your passport copies for quick digital Umrah visa processing within 24-48 hours."
      },
      {
        step: "03",
        title: "Flight & Hotel Confirmation",
        description: "Direct flight ticketing to Jeddah/Madinah and confirmed hotel booking vouchers."
      },
      {
        step: "04",
        title: "Departure & Ground Support",
        description: "Receive full guidance, Zamzam verification, and round-the-clock coordinator assistance in the Holy Cities."
      }
    ],
    faqs: [
      {
        question: "Can females travel for Umrah without a Mahram?",
        answer: "Yes, under current Saudi regulations, females of all ages can travel for Umrah without a Mahram."
      },
      {
        question: "How long is the Umrah visa valid for?",
        answer: "The Umrah e-visa is typically valid for 90 days from the date of issue with multiple entry options available."
      },
      {
        question: "Do your packages include Haramain high-speed train tickets?",
        answer: "Yes, we can include high-speed train tickets between Makkah and Madinah for a fast, comfortable 2-hour journey."
      }
    ]
  },

  "hotel-bookings": {
    slug: "hotel-bookings",
    title: "Worldwide & Domestic Hotel Bookings",
    shortDesc: "Discounted corporate rates on verified 3-star, 4-star, and 5-star hotels worldwide with instant booking vouchers.",
    heroImage: "/destinations/bahrain.jpg",
    tagline: "Comfortable Stays At The Best Negotiated Rates",
    overview: "Fly Sky Travel & Tourism partners with top global hotel aggregators to offer verified accommodations across 100+ countries. Whether traveling for business, leisure, or family vacations, we provide central, safe, and vetted hotel stays at rates lower than public booking portals.",
    benefits: [
      "Access to Over 500,000+ Verified Properties Worldwide",
      "Instant Hotel Confirmation Vouchers Accepted by Embassies",
      "Central Locations Near Public Transit & Prime Attractions",
      "Flexible Cancellation & Pay-at-Hotel Options",
      "Special Rates for Corporate, Family & Group Bookings"
    ],
    keyFeatures: [
      {
        title: "Luxury 5-Star Resorts & Hotels",
        description: "Premium stays at Marriott, Hilton, Hyatt, InterContinental, and Shangri-La with complimentary breakfast."
      },
      {
        title: "Budget & Boutique Stays",
        description: "Safe, highly-rated 3-star and 4-star boutique hotels offering high comfort at accessible price points."
      },
      {
        title: "Embassy-Verified Bookings",
        description: "Official confirmed hotel booking vouchers suitable for visa applications and immigration checks."
      },
      {
        title: "Domestic Pakistan Resorts",
        description: "Premium stays in Hunza, Skardu, Murree, Bhurban, Swat, Naran, and Malam Jabba."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Specify Destination & Dates",
        description: "Tell us the city, check-in/check-out dates, room type, and number of guests."
      },
      {
        step: "02",
        title: "Review Curated Hotel Options",
        description: "We provide photos, location details, amenities, and negotiated discounted pricing."
      },
      {
        step: "03",
        title: "Instant Voucher Issuance",
        description: "Receive your official confirmed hotel voucher with hotel contact details and reservation code."
      },
      {
        step: "04",
        title: "Check-in Without Stress",
        description: "Show your passport and voucher at hotel reception for a smooth, hassle-free check-in experience."
      }
    ],
    faqs: [
      {
        question: "Are these hotel vouchers valid for visa applications?",
        answer: "Yes, all our hotel reservations are 100% verified and verifiable by embassies and consulates."
      },
      {
        question: "Can I request early check-in or late check-out?",
        answer: "Yes, our team coordinates directly with the hotel management to accommodate early check-in or late check-out requests."
      },
      {
        question: "Can I pay in Pakistani Rupees (PKR)?",
        answer: "Yes, all international and domestic hotel bookings can be paid easily in PKR through bank transfer or cash at our Vehari office."
      }
    ]
  },

  "travel-insurance": {
    slug: "travel-insurance",
    title: "Comprehensive Travel Insurance",
    shortDesc: "Schengen-approved international travel insurance covering medical emergencies, flight cancellations, and baggage loss.",
    heroImage: "/destinations/turkey.jpg",
    tagline: "Total Travel Protection Wherever You Go",
    overview: "Travel with complete peace of mind with Fly Sky Travel & Tourism's comprehensive international travel health insurance. Our policies satisfy all mandatory embassy visa requirements, including minimum €30,000 / $50,000 medical coverage for Schengen and worldwide destinations.",
    benefits: [
      "100% Embassy & Schengen Visa Compliant Policies",
      "Emergency Medical & Hospitalization Coverage (Up to $50,000+)",
      "Compensation for Lost, Delayed, or Damaged Baggage",
      "Flight Delay & Trip Cancellation Protection",
      "Instant Digital Policy Issuance Within Minutes"
    ],
    keyFeatures: [
      {
        title: "Schengen Visa Insurance",
        description: "Mandatory €30,000 medical coverage accepted by all 29 Schengen member embassies with zero deductible."
      },
      {
        title: "Worldwide Comprehensive Plans",
        description: "Coverage for USA, UK, Canada, Australia, Far East, and Gulf countries with 24/7 global emergency assistance."
      },
      {
        title: "Family & Senior Citizen Plans",
        description: "Cost-effective family packages and specialized travel insurance options for elderly travelers."
      },
      {
        title: "Annual Multi-Trip Policies",
        description: "Budget-friendly annual coverage for frequent business travelers and international tourists."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Share Travel Details",
        description: "Provide traveler passport details, destination countries, and departure/return dates."
      },
      {
        step: "02",
        title: "Select Coverage Plan",
        description: "Choose from standard Schengen (€30K), Executive ($50K), or Worldwide ($100K) coverage plans."
      },
      {
        step: "03",
        title: "Instant Policy Issuance",
        description: "Your official policy document with unique verification number and QR code is issued in minutes."
      },
      {
        step: "04",
        title: "Travel Protected",
        description: "Carry your insurance policy for visa appointment and international immigration with 24/7 helpline access."
      }
    ],
    faqs: [
      {
        question: "Is this travel insurance accepted by European Schengen embassies?",
        answer: "Yes, our policies are issued through top A-rated insurance providers and 100% accepted by all Schengen, UK, and worldwide embassies."
      },
      {
        question: "How fast can I get my travel insurance policy?",
        answer: "We issue and deliver digital insurance policies via WhatsApp and email within 10 to 15 minutes of receiving your details."
      },
      {
        question: "What if my visa gets rejected? Can I refund the insurance?",
        answer: "Yes, if a visa is unfortunately refused, insurance policies can be cancelled and refunded prior to policy start date with embassy refusal letter."
      }
    ]
  }
};
