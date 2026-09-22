export interface SubServiceDetail {
  parentSlug: string;
  parentTitle: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  priceOrFee: string;
  durationOrProcessing: string;
  validity: string;
  overview: string;
  requirements: string[];
  inclusions: string[];
  stepsOrItinerary: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const subServicesData: Record<string, SubServiceDetail> = {
  // ==================== 1. VISA SERVICES ====================
  "schengen-visa": {
    parentSlug: "visa-processing",
    parentTitle: "Visa Processing",
    slug: "schengen-visa",
    title: "Schengen Visit & Tourist Visa",
    subtitle: "Complete documentation & appointment booking for France, Germany, Italy, Spain, Switzerland & 29 EU nations.",
    badge: "Most Requested Europe",
    image: "/destinations/paris.jpg",
    priceOrFee: "Consultancy: PKR 25,000",
    durationOrProcessing: "15 to 30 Working Days",
    validity: "Up to 90 Days (Single/Multiple Entry)",
    overview: "Applying for a Schengen visa requires strict document compliance. Fly Sky Travel & Tourism (Govt. LIC # LHR 10981) prepares airtight application files with embassy-compliant day-by-day travel itineraries, confirmed flight reservations, verifiable hotel vouchers, and mandatory €30,000 Schengen insurance.",
    requirements: [
      "Original Passport valid for at least 6 months with previous passports",
      "CNIC Copy & 2 Passport-size photographs (35mm x 45mm, white background)",
      "Bank Statement (Last 6 months with Bank Account Maintenance Certificate)",
      "Employment Letter / Salary Slips OR Business NTN, FBR Tax Returns & Chamber Certificate",
      "FRC (Family Registration Certificate) / MRC if travelling with family"
    ],
    inclusions: [
      "Embassy Form Filing & VFS/Gerry's Appointment Booking",
      "Customized Day-by-Day European Travel Itinerary",
      "Verifiable Return Flight Reservation & Hotel Bookings",
      "Schengen-Approved €30,000 Travel Health Insurance",
      "Professional Cover Letter & Sponsorship File Auditing"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Document Review",
        description: "We audit your bank statements, ties to Pakistan, and travel history to build a compelling case."
      },
      {
        title: "Step 2: Appointment & Form Submission",
        description: "We book your biometric submission slot at VFS Global / Gerry's / Embassy."
      },
      {
        title: "Step 3: Cover Letter & Travel Vouchers",
        description: "Preparation of embassy-format cover letter, confirmed hotel vouchers, and flight itineraries."
      },
      {
        title: "Step 4: Submission & Passport Retrieval",
        description: "Appear for your biometric appointment with the file prepared and await visa decision."
      }
    ],
    faqs: [
      {
        question: "Which Schengen country is easiest to apply for from Pakistan?",
        answer: "Approval depends on your itinerary and travel profile. Countries like Italy, Spain, France, and Germany are frequently processed when documentation and financial ties are properly presented."
      },
      {
        question: "How much bank balance is required for Schengen visa?",
        answer: "We recommend a closing balance of at least PKR 1.5M to 2.5M per person with healthy monthly transactions reflecting legitimate income."
      }
    ]
  },

  "uk-visa": {
    parentSlug: "visa-processing",
    parentTitle: "Visa Processing",
    slug: "uk-visa",
    title: "UK Standard Visitor Visa",
    subtitle: "Professional UK Visa application filing, financial structuring, and documentation support for 6-month to 10-year visas.",
    badge: "Certified UK File Preparation",
    image: "/destinations/london.jpg",
    priceOrFee: "Consultancy: PKR 30,000",
    durationOrProcessing: "3 to 6 Weeks",
    validity: "6 Months / 2 Years / 5 Years / 10 Years",
    overview: "UK Visas and Immigration (UKVI) requires clear proof of financial origin and strong ties to Pakistan. Our specialists at Fly Sky Travel assist with online form filling, financial justification, sponsor documentation, and booking your VFS biometric appointment.",
    requirements: [
      "Original Passport and all previous passports",
      "Last 6 Months Bank Statement with genuine funds justification",
      "Source of Wealth & Income proof (Salary slips, Tax returns, Property docs)",
      "UK Sponsor Invitation Letter, British Passport/BRP Copy & Utility bills (if sponsored)",
      "Detailed Cover Letter stating exact reason for visit"
    ],
    inclusions: [
      "Complete UKVI Online Visa Application Submission",
      "Financial Summary & Fund Origin Legal Structuring",
      "Self-Upload of all scanned documents on VFS portal",
      "Biometric Appointment Booking at Lahore/Islamabad/Mirpur",
      "Interview Pre-Briefing & Guidance"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Case Evaluation",
        description: "Analyze your income sources and bank balance to prevent refusal triggers."
      },
      {
        title: "Step 2: UKVI Online Form Completion",
        description: "Accurate submission of UKVI application without discrepancies."
      },
      {
        title: "Step 3: Document Upload on VFS",
        description: "High-resolution indexing of all required documents to the UKVI database."
      },
      {
        title: "Step 4: Biometrics & Decision",
        description: "Biometric submission at VFS centre followed by passport collection."
      }
    ],
    faqs: [
      {
        question: "Can I apply for a 2-year or 5-year UK visa directly?",
        answer: "Yes, you can apply for 2, 5, or 10-year visas, although having prior travel history to the UK is highly advantageous."
      }
    ]
  },

  "usa-visa": {
    parentSlug: "visa-processing",
    parentTitle: "Visa Processing",
    slug: "usa-visa",
    title: "USA B1/B2 Tourist & Business Visa",
    subtitle: "DS-160 application form drafting, US Embassy Islamabad/Karachi interview appointment scheduling, and mock interview preparation.",
    badge: "5-10 Years Multi-Entry",
    image: "/destinations/dubai.jpg",
    priceOrFee: "Consultancy: PKR 35,000",
    durationOrProcessing: "Subject to Interview Date",
    validity: "5 to 10 Years Multiple Entry",
    overview: "Securing a US B1/B2 visa hinges upon an error-free DS-160 form and a confident embassy interview. Fly Sky Travel helps you complete your DS-160 form with 100% accuracy, finds the earliest available interview slots, and provides comprehensive interview preparation.",
    requirements: [
      "Valid Passport with at least 6 months validity beyond intended stay",
      "Confirmation Page of Form DS-160 with barcode",
      "MRV Fee Payment Receipt and Appointment Confirmation letter",
      "Photograph (2x2 inches, white background, no eyeglasses)",
      "Supporting financial, business, and property documents"
    ],
    inclusions: [
      "Accurate DS-160 Form Filling & Electronic Submission",
      "US Visa CGI Portal Account Creation & Fee Payment Assistance",
      "Interview Slot Booking (Islamabad or Karachi Consulate)",
      "Comprehensive Mock Interview Session & Dossier Review",
      "Emergency Appointment Expedited Request (if eligible)"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: DS-160 Data Input",
        description: "Meticulous preparation of your DS-160 profile without mistakes."
      },
      {
        title: "Step 2: MRV Fee & Appointment",
        description: "Payment of MRV fee and reserving the best available appointment date."
      },
      {
        title: "Step 3: Interview Coaching",
        description: "One-on-one preparation on standard US consular officer questions."
      },
      {
        title: "Step 4: Visa Interview & Approval",
        description: "Appear at US Embassy and receive your 5 or 10-year stamped passport."
      }
    ],
    faqs: [
      {
        question: "How soon can I get a US visa interview appointment?",
        answer: "Appointment wait times vary. We continuously monitor embassy slots to secure early dates and expedited options for our clients."
      }
    ]
  },

  "uae-visa": {
    parentSlug: "visa-processing",
    parentTitle: "Visa Processing",
    slug: "uae-visa",
    title: "UAE & Dubai Tourist E-Visas (30 & 60 Days)",
    subtitle: "Fast-track digital e-visa issuance for Dubai, Abu Dhabi, and Sharjah with instant approval in 24 to 48 hours.",
    badge: "Instant Approval in 24-48 Hrs",
    image: "/destinations/dubai.jpg",
    priceOrFee: "Starting from PKR 28,000",
    durationOrProcessing: "24 to 48 Hours",
    validity: "30 Days or 60 Days",
    overview: "Get quick Dubai and UAE tourist visas through Fly Sky Travel & Tourism. We provide direct GDRFA / ICP verified e-visas for families, individuals, and business travelers with mandatory COVID/medical insurance and OK-to-Board updates.",
    requirements: [
      "Clear Color Passport Scan (Page 1 & 2) valid for 6 months",
      "Passport-sized photograph with white background",
      "CNIC copy of traveler",
      "Return Flight Ticket & Hotel Voucher (arranged by us)"
    ],
    inclusions: [
      "Direct Official ICP / GDRFA E-Visa Issuance",
      "Mandatory UAE Travel & Health Insurance",
      "Airline OK-to-Board (OTB) Verification Support",
      "Dubai Airport Meet & Greet Guidance"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Send Passport Copy",
        description: "WhatsApp your passport copy and photograph to our desk."
      },
      {
        title: "Step 2: E-Visa Processing",
        description: "Direct submission to Dubai Immigration authority."
      },
      {
        title: "Step 3: Receive PDF Visa",
        description: "Receive your authentic digital visa PDF via WhatsApp within 24-48 hours."
      }
    ],
    faqs: [
      {
        question: "Can I extend my Dubai visit visa without exiting the country?",
        answer: "Yes, 30-day and 60-day in-country visa extensions are available through our agency."
      }
    ]
  },

  "turkey-visa": {
    parentSlug: "visa-processing",
    parentTitle: "Visa Processing",
    slug: "turkey-visa",
    title: "Turkey Tourist Sticker & E-Visa",
    subtitle: "Complete Anatolia Gerry's sticker visa file preparation or instant Turkish E-Visa for valid US/UK/Schengen visa holders.",
    badge: "Fast Track File Prep",
    image: "/destinations/turkey.jpg",
    priceOrFee: "Starting from PKR 18,000",
    durationOrProcessing: "10 to 15 Working Days",
    validity: "Up to 90 Days Single/Multiple Entry",
    overview: "Explore Istanbul, Cappadocia, and Antalya with our authorized Turkey visa support. We handle Anatolia visa appointments, complete file preparation, confirmed hotel vouchers, flight reservations, and health insurance.",
    requirements: [
      "Original Passport valid for 8 months",
      "Anatolia Biometric Photo (5x5 cm, white background)",
      "Bank Statement (Last 3 months with Account Maintenance Letter)",
      "Police Character Certificate & NTN / Job Proof",
      "Family Registration Certificate (FRC) for families"
    ],
    inclusions: [
      "Anatolia Visa Application Form Submission",
      "Confirmed Turkish Flight & Hotel Reservation Vouchers",
      "Mandatory Turkish Health Insurance Policy",
      "Customized Istanbul & Cappadocia Tour Itinerary",
      "Biometric Appointment Booking"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Document Auditing",
        description: "Check bank statements and character certificate for Anatolia standards."
      },
      {
        title: "Step 2: Form & Vouchers",
        description: "Drafting travel itinerary and issuing verifiable vouchers."
      },
      {
        title: "Step 3: Anatolia Submission",
        description: "Submission of file at Anatolia Visa Application Centre."
      }
    ],
    faqs: [
      {
        question: "Can I get an instant Turkey e-visa online?",
        answer: "Yes! If you hold a valid physical visa or residence permit from USA, UK, Ireland, or any Schengen country, we can issue your official Turkish e-visa in 15 minutes."
      }
    ]
  },

  "azerbaijan-visa": {
    parentSlug: "visa-processing",
    parentTitle: "Visa Processing",
    slug: "azerbaijan-visa",
    title: "Baku (Azerbaijan) ASAN E-Visa",
    subtitle: "Guaranteed 3-day standard or 3-hour urgent electronic visa for Baku city and Gabala mountain tours.",
    badge: "99.9% Instant Approval",
    image: "/destinations/azerbaijan.jpg",
    priceOrFee: "Standard: PKR 14,500 | Urgent: PKR 24,000",
    durationOrProcessing: "3 Working Days or 3 Hours (Urgent)",
    validity: "90 Days Validity (30 Days Stay)",
    overview: "Azerbaijan ASAN electronic visa is simple and fast. Fly Sky Travel issues authentic electronic visas directly linked with the State Migration Service of the Republic of Azerbaijan.",
    requirements: [
      "Clear Color Passport Scan (valid for minimum 6 months)",
      "CNIC Copy of the applicant",
      "Target Travel Dates & Hotel Address in Baku"
    ],
    inclusions: [
      "Official ASAN Government Portal Visa Filing",
      "Instant Electronic Delivery via WhatsApp / Email",
      "Baku Hotel Voucher & Airport Transfer Coordination",
      "Baggage & Flight Advisory"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Send Passport Scan",
        description: "WhatsApp your passport copy to our team."
      },
      {
        title: "Step 2: ASAN Portal Payment",
        description: "We process visa fees and submit your application."
      },
      {
        title: "Step 3: Instant Visa Delivery",
        description: "Receive your PDF e-visa ready for boarding."
      }
    ],
    faqs: [
      {
        question: "Do I need to visit an embassy for Baku visa?",
        answer: "No, the entire Azerbaijan visa is 100% digital with no embassy visit or biometrics required."
      }
    ]
  },

  "malaysia-thailand-visa": {
    parentSlug: "visa-processing",
    parentTitle: "Visa Processing",
    slug: "malaysia-thailand-visa",
    title: "Malaysia & Thailand Tourist Visas",
    subtitle: "Fast E-Visa for Malaysia and Royal Thai Embassy sticker visa file preparation with fast approvals.",
    badge: "Popular Far East Visas",
    image: "/destinations/malaysia.jpg",
    priceOrFee: "Starting from PKR 16,500",
    durationOrProcessing: "3 to 7 Working Days",
    validity: "30 Days to 3 Months",
    overview: "Plan your dream vacation to Kuala Lumpur, Genting, Bangkok, and Phuket. Fly Sky Travel handles direct Malaysia eVisa and Thailand visa documentation with confirmed flight and hotel reservations.",
    requirements: [
      "Original Passport valid for at least 6 months",
      "Photographs with white background",
      "Bank Statement (Last 6 months) with Account Maintenance Letter",
      "CNIC copy and Job letter / Business NTN"
    ],
    inclusions: [
      "Official eVisa & Embassy File Preparation",
      "Confirmed Return Air Ticket & Hotel Vouchers",
      "Visa Fee Payment & Tracking",
      "Express Delivery of Approved Visa"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Submit Documents",
        description: "Provide passport and bank statement."
      },
      {
        title: "Step 2: Embassy Filing",
        description: "Submission to Malaysian / Thai visa systems."
      },
      {
        title: "Step 3: Visa Issued",
        description: "Receive stamped passport or digital eVisa."
      }
    ],
    faqs: [
      {
        question: "Can I combine Malaysia and Thailand on one trip?",
        answer: "Yes, we arrange dual visa packages for travelers visiting both countries in a single holiday itinerary."
      }
    ]
  },

  // ==================== 2. AIR TICKETING ====================
  "international-flights": {
    parentSlug: "air-ticketing",
    parentTitle: "Air Ticketing",
    slug: "international-flights",
    title: "International Flight Bookings & Fares",
    subtitle: "Direct & connecting flights to UK, USA, Europe, UAE, Saudi Arabia, Far East, and Australia on premier global airlines.",
    badge: "Direct IATA Fares",
    image: "/flight_service.jpg",
    priceOrFee: "Best Market Rates Guaranteed",
    durationOrProcessing: "Instant Confirmation",
    validity: "Official E-Ticket with PNR",
    overview: "Fly Sky Travel provides direct access to all major world airlines: Emirates, Qatar Airways, Turkish Airlines, Saudia, Etihad, FlyDubai, Gulf Air, and PIA. We guarantee transparent pricing, instant booking confirmation, and full refund/date change management.",
    requirements: [
      "Passport details of all passengers",
      "Destination airport and preferred travel dates",
      "Visa confirmation for target country"
    ],
    inclusions: [
      "Instant E-ticket issuance with live airline PNR",
      "Seat selection, baggage weight upgrade, and meal requests",
      "24/7 flight rescheduling, cancellation & refund assistance",
      "Student & family group special discounts"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Inquire Routes",
        description: "Share your travel route, luggage needs, and dates."
      },
      {
        title: "Step 2: Compare Airline Rates",
        description: "We give you top 3 airline quotes with timings."
      },
      {
        title: "Step 3: Instant Ticket Issuance",
        description: "Confirm and receive your e-ticket via WhatsApp."
      }
    ],
    faqs: [
      {
        question: "Can I hold a flight seat before paying?",
        answer: "Yes, we can hold confirmed airline seats for 12-24 hours without immediate payment depending on airline fare rules."
      }
    ]
  },

  "domestic-flights": {
    parentSlug: "air-ticketing",
    parentTitle: "Air Ticketing",
    slug: "domestic-flights",
    title: "Domestic Pakistan Flights",
    subtitle: "Lowest airfares on flights connecting Karachi, Lahore, Islamabad, Multan, Skardu, Gilgit, and Quetta (PIA, Airblue, Serene, Fly Jinnah).",
    badge: "Lowest Domestic Rates",
    image: "/flight_service.jpg",
    priceOrFee: "Instant Best Fare Quotes",
    durationOrProcessing: "Instant Issuance (5 Minutes)",
    validity: "Domestic Airline E-Ticket",
    overview: "Book cheap domestic tickets across all active Pakistani carriers including Pakistan International Airlines (PIA), Airblue, Serene Air, AirSial, and Fly Jinnah.",
    requirements: [
      "CNIC number and full name as per CNIC for adults",
      "B-Form / Child birth certificate for infants and children"
    ],
    inclusions: [
      "Direct GDS ticketing with transparent lowest rates",
      "Baggage allowance confirmation (20kg to 40kg)",
      "Instant SMS and WhatsApp ticket delivery",
      "Priority assistance for Skardu/Northern flights"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Share Travel Route",
        description: "e.g. Multan to Karachi, or Lahore to Skardu."
      },
      {
        title: "Step 2: Select Flight Time",
        description: "Pick morning, afternoon, or evening flight."
      },
      {
        title: "Step 3: Fly Confidently",
        description: "Receive instant ticket and check in seamlessly."
      }
    ],
    faqs: [
      {
        question: "Are Skardu and Gilgit flights weather dependent?",
        answer: "Yes, Northern Pakistan flights are subject to visual flight rules. Our team monitors flight status and manages rebooking if flights are disrupted."
      }
    ]
  },

  "umrah-flights": {
    parentSlug: "air-ticketing",
    parentTitle: "Air Ticketing",
    slug: "umrah-flights",
    title: "Umrah Flights (Jeddah & Madinah)",
    subtitle: "Dedicated pilgrim flights on Saudia, PIA, Airblue, Serene Air, and Gulf Air with 5-liter Zamzam allowance included.",
    badge: "Zamzam Allowance Included",
    image: "/destinations/dubai.jpg",
    priceOrFee: "Starting from PKR 135,000",
    durationOrProcessing: "Instant Booking",
    validity: "Umrah Sector Return Ticket",
    overview: "Traveling for Umrah requires reliable, comfortable flight schedules directly into Jeddah or Prince Mohammad Bin Abdulaziz International Airport in Madinah. We specialize in individual and group Umrah departures.",
    requirements: [
      "Valid Umrah E-Visa or Tourist Visa",
      "Original Passport valid for 6 months"
    ],
    inclusions: [
      "Direct flights to Jeddah (JED) or Madinah (MED)",
      "5-Liter Zamzam water allowance guaranteed",
      "Group coordination and family seating arrangements",
      "Round-the-clock airport arrival support"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Choose Sector",
        description: "Direct to Madinah or Jeddah based on your package."
      },
      {
        title: "Step 2: Lock Special Pilgrim Fares",
        description: "Get group discounted rates for families."
      },
      {
        title: "Step 3: Receive Full Travel Pack",
        description: "Ticket + Visa + Hotel Vouchers in one bundle."
      }
    ],
    faqs: [
      {
        question: "Can I land in Madinah and depart from Jeddah?",
        answer: "Yes, open-jaw itineraries (e.g. In: Madinah / Out: Jeddah) are our most recommended option to avoid long bus transfers."
      }
    ]
  },

  // ==================== 3. TOUR PACKAGES ====================
  "dubai-tour": {
    parentSlug: "tour-packages",
    parentTitle: "Tour Packages",
    slug: "dubai-tour",
    title: "Dubai Deluxe Explorer (5 Days / 4 Nights)",
    subtitle: "All-inclusive Dubai vacation with Burj Khalifa 124th floor, Desert Safari with BBQ dinner, Marina Dhow Cruise, and 4-star hotel stay.",
    badge: "Top Seller Tour",
    image: "/destinations/dubai.jpg",
    priceOrFee: "PKR 145,000 / Person",
    durationOrProcessing: "5 Days / 4 Nights",
    validity: "Year-Round Departures",
    overview: "Experience the ultimate luxury of Dubai with our complete guided tour. Includes 4-star central hotel, daily buffet breakfast, private airport transfers, Desert Safari with dune bashing, Dhow Cruise dinner, and city sightseeing.",
    requirements: [
      "Passport scan valid for 6 months",
      "UAE Tourist Visa (included in package)",
      "Passport-size photograph"
    ],
    inclusions: [
      "4 Nights in 4-Star Hotel in Deira / Bur Dubai with Breakfast",
      "Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner",
      "Marina Dhow Cruise with International Buffet Dinner",
      "Burj Khalifa 124th Floor Observation Deck Tickets",
      "Roundtrip Airport Transfers in Air-Conditioned Vehicle"
    ],
    stepsOrItinerary: [
      {
        title: "Day 1: Arrival & Marina Dhow Cruise",
        description: "Airport pick up, hotel check-in, evening Marina Dhow Cruise dinner."
      },
      {
        title: "Day 2: Dubai City Tour & Burj Khalifa",
        description: "Half-day Dubai city tour, Dubai Mall, and Burj Khalifa observation deck."
      },
      {
        title: "Day 3: Desert Safari Adventure",
        description: "Afternoon 4x4 dune bashing, camel ride, Tanoura dance, and BBQ dinner."
      },
      {
        title: "Day 4: Free Day for Shopping / Abu Dhabi",
        description: "Explore Gold Souk, Global Village, or optional Abu Dhabi day tour."
      },
      {
        title: "Day 5: Departure",
        description: "Breakfast at hotel and transfer to Dubai Airport for departure."
      }
    ],
    faqs: [
      {
        question: "Is visa and flight included in this price?",
        answer: "The base package covers hotel, tours, transfers, and visa. Airfare can be included at current live rates."
      }
    ]
  },

  "turkey-tour": {
    parentSlug: "tour-packages",
    parentTitle: "Tour Packages",
    slug: "turkey-tour",
    title: "Grand Turkey & Cappadocia Magic (7 Days / 6 Nights)",
    subtitle: "Explore Istanbul's historic treasures, Bosphorus Cruise, and the breathtaking fairy chimneys & hot air balloons of Cappadocia.",
    badge: "Best Cultural Holiday",
    image: "/destinations/turkey.jpg",
    priceOrFee: "PKR 285,000 / Person",
    durationOrProcessing: "7 Days / 6 Nights",
    validity: "Spring, Summer & Autumn",
    overview: "Discover the wonders of Turkey spanning two continents. Includes boutique cave hotel in Cappadocia, 4-star central Istanbul stay, domestic flights between Istanbul & Cappadocia, and guided excursions.",
    requirements: [
      "Valid Passport and Turkish Tourist Visa",
      "Travel Insurance (included)"
    ],
    inclusions: [
      "3 Nights Istanbul 4-Star Hotel + 3 Nights Cappadocia Cave Hotel",
      "Istanbul Old City Tour: Blue Mosque, Hagia Sophia & Grand Bazaar",
      "Bosphorus Sunset Cruise with Live Entertainment",
      "Cappadocia Red Tour: Goreme Open Air Museum & Fairy Chimneys",
      "Domestic Flights between Istanbul and Cappadocia with transfers"
    ],
    stepsOrItinerary: [
      {
        title: "Day 1-3: Istanbul Historical Marvels",
        description: "Arrival in Istanbul, Sultanahmet walking tour, Topkapi Palace, and Bosphorus cruise."
      },
      {
        title: "Day 4-6: Cappadocia Fairy Tale",
        description: "Flight to Cappadocia, cave hotel check-in, optional Hot Air Balloon flight, and valley tours."
      },
      {
        title: "Day 7: Istanbul Return & Departure",
        description: "Domestic flight to Istanbul and onward departure to Pakistan."
      }
    ],
    faqs: [
      {
        question: "Can we book the Hot Air Balloon ride in advance?",
        answer: "Yes, we pre-book Cappadocia hot air balloon slots to ensure guaranteed availability during peak seasons."
      }
    ]
  },

  "baku-tour": {
    parentSlug: "tour-packages",
    parentTitle: "Tour Packages",
    slug: "baku-tour",
    title: "Baku & Gabala Mountain Discovery (5 Days / 4 Nights)",
    subtitle: "Old City Baku, Flame Towers, Fire Temple, and scenic cable car ride in Gabala Caucasus Mountains.",
    badge: "Trending Family Destination",
    image: "/destinations/azerbaijan.jpg",
    priceOrFee: "PKR 165,000 / Person",
    durationOrProcessing: "5 Days / 4 Nights",
    validity: "All Seasons (Snow in Winter)",
    overview: "Azerbaijan offers the perfect mix of European charm and modern architecture. Enjoy Baku city sights, Gobustan mud volcanoes, and an unforgettable day trip to Gabala's mountain lakes and Tufandag cable cars.",
    requirements: [
      "Passport scan and ASAN E-Visa (included)"
    ],
    inclusions: [
      "4 Nights in 4-Star Central Baku Hotel with Breakfast",
      "Full Day Baku City Tour (Old City, Maiden Tower, Flame Towers, Boulevard)",
      "Full Day Gabala Tour (Nohur Lake, 7 Gozel Waterfall, Tufandag Cable Car)",
      "Gobustan & Fire Temple Excursion",
      "Private AC Vehicle Transfers throughout the trip"
    ],
    stepsOrItinerary: [
      {
        title: "Day 1: Welcome to Baku",
        description: "Airport pickup, hotel check-in, evening walk at Nizami Street."
      },
      {
        title: "Day 2: Baku Historical City Tour",
        description: "Icherisheher (Old City), Maiden Tower, Shirvanshahs Palace, and Highland Park."
      },
      {
        title: "Day 3: Scenic Gabala Excursion",
        description: "Full-day excursion to Gabala mountains, cable car ride, and Nohur Lake."
      },
      {
        title: "Day 4: Gobustan & Fire Mountain",
        description: "Visit petroglyphs, Mud Volcanoes, and Yanar Dag (Burning Mountain)."
      },
      {
        title: "Day 5: Departure",
        description: "Breakfast and transfer to Heydar Aliyev International Airport."
      }
    ],
    faqs: [
      {
        question: "Is Pakistani food easily available in Baku?",
        answer: "Yes, Baku has numerous authentic Pakistani and halal restaurants on Nizami Street and Old City."
      }
    ]
  },

  "malaysia-tour": {
    parentSlug: "tour-packages",
    parentTitle: "Tour Packages",
    slug: "malaysia-tour",
    title: "Discover Malaysia & Langkawi (6 Days / 5 Nights)",
    subtitle: "Petronas Twin Towers, Batu Caves, Genting Highlands Cable Car & pristine beaches of Langkawi Island.",
    badge: "Popular Island & City Tour",
    image: "/destinations/malaysia.jpg",
    priceOrFee: "PKR 195,000 / Person",
    durationOrProcessing: "6 Days / 5 Nights",
    validity: "All Seasons",
    overview: "Experience the ultimate Malaysian tropical adventure. Includes 4-star Kuala Lumpur hotel, Genting Highlands theme park excursion, cable car ride, and Langkawi island hopping.",
    requirements: [
      "Passport scan valid for 6 months",
      "Malaysia eVisa (included)"
    ],
    inclusions: [
      "3 Nights in Kuala Lumpur + 2 Nights in Langkawi Resort",
      "Kuala Lumpur City Tour & Batu Caves Exploration",
      "Genting Highlands Day Trip with Two-Way Cable Car",
      "Langkawi Island Hopping with Boat Ride & Eagle Square",
      "All Airport & Inter-Hotel Transfers"
    ],
    stepsOrItinerary: [
      {
        title: "Day 1: Arrival in Kuala Lumpur",
        description: "Transfer to hotel, evening visit to Bukit Bintang."
      },
      {
        title: "Day 2: KL City Tour & Twin Towers",
        description: "Petronas Towers, King's Palace, National Mosque."
      },
      {
        title: "Day 3: Genting Highlands Excursion",
        description: "Batu Caves and Genting cable car experience."
      },
      {
        title: "Day 4-5: Langkawi Island Paradise",
        description: "Flight to Langkawi, island hopping, and beach relaxation."
      },
      {
        title: "Day 6: Departure",
        description: "Transfer to airport for return flight."
      }
    ],
    faqs: [
      {
        question: "Can this package be customized for honeymoon couples?",
        answer: "Yes, we provide romantic beach dinner setups and private island tours for honeymooners."
      }
    ]
  },

  "thailand-tour": {
    parentSlug: "tour-packages",
    parentTitle: "Tour Packages",
    slug: "thailand-tour",
    title: "Thailand Bangkok & Phuket (6 Days / 5 Nights)",
    subtitle: "Bangkok Grand Palace, Chao Phraya dinner cruise, Phuket James Bond Island & Phi Phi Island speed boat tour.",
    badge: "Best Beach Holiday",
    image: "/destinations/thailand.jpg",
    priceOrFee: "PKR 175,000 / Person",
    durationOrProcessing: "6 Days / 5 Nights",
    validity: "Year-Round",
    overview: "Experience Thailand's electric city life and world-famous tropical islands. Includes 4-star hotels in Bangkok and Phuket, Phi Phi Island tour with lunch, and luxury dinner cruise.",
    requirements: [
      "Valid Passport and Thai Tourist Visa"
    ],
    inclusions: [
      "3 Nights Phuket Beach Resort + 2 Nights Bangkok Central Hotel",
      "Phi Phi Island Speedboat Tour with Buffet Lunch & Snorkeling",
      "Chao Phraya River Princess Luxury Dinner Cruise in Bangkok",
      "Bangkok City & Temple Tour (Wat Traimit & Wat Pho)",
      "Private AC Transfers throughout"
    ],
    stepsOrItinerary: [
      {
        title: "Day 1: Phuket Arrival",
        description: "Pickup from Phuket Airport, check-in at Patong beach hotel."
      },
      {
        title: "Day 2: Phi Phi Island Adventure",
        description: "Speedboat excursion to Maya Bay and snorkeling."
      },
      {
        title: "Day 3: Phuket to Bangkok Flight",
        description: "Domestic flight to Bangkok, evening Chaophraya dinner cruise."
      },
      {
        title: "Day 4: Bangkok City & Shopping",
        description: "City temple tour and shopping at MBK / Siam Paragon."
      },
      {
        title: "Day 5-6: Safari World & Departure",
        description: "Optional Safari World and transfer to Suvarnabhumi Airport."
      }
    ],
    faqs: [
      {
        question: "Are halal food options available in Phuket and Bangkok?",
        answer: "Yes, halal restaurants and seafood are abundant across Bangkok, Patong, and Phuket."
      }
    ]
  },

  // ==================== 4. UMRAH & HAJJ ====================
  "luxury-umrah": {
    parentSlug: "umrah-services",
    parentTitle: "Umrah Services",
    slug: "luxury-umrah",
    title: "5-Star Luxury VIP Umrah",
    subtitle: "Front-row Haram view hotels (Fairmont Clock Tower / Pullman Zamzam / Oberoi Madinah), private GMC transfers & high-speed train.",
    badge: "5-Star Haram Front View",
    image: "/destinations/dubai.jpg",
    priceOrFee: "Starting from PKR 390,000",
    durationOrProcessing: "7, 10, or 14 Days",
    validity: "Available Year-Round",
    overview: "Perform your Umrah with absolute comfort and tranquility. Our 5-star executive packages place you steps away from the Holy Kaaba and Masjid an-Nabawi with lavish amenities, private chauffeur transfers, and Haramain bullet train tickets.",
    requirements: [
      "Original Passport valid for 6 months",
      "Digital Passport Photo with white background"
    ],
    inclusions: [
      "5-Star Clock Tower / Haram Front Hotels with Daily Breakfast",
      "Instant Digital Umrah E-Visa (Nusuk Platform)",
      "Private GMC Yukon / VIP Vehicle Transfers",
      "Haramain High-Speed Train Tickets between Makkah & Madinah",
      "Historical Ziyarat Tours with Dedicated Guide in Both Holy Cities"
    ],
    stepsOrItinerary: [
      {
        title: "Arrival: Madinah or Jeddah",
        description: "VIP meet & assist at airport and private luxury transfer to hotel."
      },
      {
        title: "Spiritual Days in Makkah & Madinah",
        description: "Stay in 5-star comfort right in front of the Haram courts."
      },
      {
        title: "Guided Ziyarat Tours",
        description: "Visit Cave of Hira, Cave of Thawr, Mount Uhud, and Masjid Quba."
      }
    ],
    faqs: [
      {
        question: "Are wheelchair services available for elderly pilgrims?",
        answer: "Yes, we arrange private wheelchair attendants and specialized accessible rooms upon request."
      }
    ]
  },

  "economy-umrah": {
    parentSlug: "umrah-services",
    parentTitle: "Umrah Services",
    slug: "economy-umrah",
    title: "Economy & Standard Budget Umrah",
    subtitle: "Affordable and clean 3-star & 4-star hotels with 24-hour shuttle service, flights, visa, and group transport.",
    badge: "Best Value for Pilgrims",
    image: "/destinations/dubai.jpg",
    priceOrFee: "Starting from PKR 210,000",
    durationOrProcessing: "14 to 21 Days",
    validity: "Regular Group Departures",
    overview: "Perform your holy obligation within an affordable budget. Our economy packages guarantee verified, comfortable hotels, complete visa support, and hassle-free shared or private transport.",
    requirements: [
      "Passport scan and photographs",
      "Vaccination proof as per Saudi requirements"
    ],
    inclusions: [
      "Clean 3-Star Hotels with 24/7 Free Bus Shuttle to Haram",
      "Umrah E-Visa with Comprehensive Medical Insurance",
      "Air-Conditioned Bus Transfers between Jeddah, Makkah & Madinah",
      "Group Ziyarat of Holy Sites in Makkah and Madinah",
      "5-Liter Zamzam Allowance on Departure"
    ],
    stepsOrItinerary: [
      {
        title: "Departure from Pakistan",
        description: "Group flight to Jeddah or Madinah with pre-briefing."
      },
      {
        title: "Makkah Stay & Umrah Rituals",
        description: "Accompanied group Umrah guidance."
      },
      {
        title: "Madinah Stay & Ziyarat",
        description: "Prayers in Riyazul Jannah and historical landmarks."
      }
    ],
    faqs: [
      {
        question: "How far are the economy hotels from the Haram?",
        answer: "Our economy hotels are typically 800 to 1200 meters from Haram with dedicated 24-hour free AC shuttle buses dropping right at the courtyard."
      }
    ]
  },

  "family-umrah": {
    parentSlug: "umrah-services",
    parentTitle: "Umrah Services",
    slug: "family-umrah",
    title: "Customized Family Umrah Packages",
    subtitle: "Private quad/triple family room configurations, private vehicle transfers, and flexible departure dates.",
    badge: "Tailored For Families",
    image: "/destinations/dubai.jpg",
    priceOrFee: "Custom Family Quotes",
    durationOrProcessing: "10 to 15 Days",
    validity: "Flexible Family Schedules",
    overview: "Specially designed for families with children or senior citizens. We offer customized room arrangements, private family vehicle transport, and personalized pacing.",
    requirements: [
      "Passport copies of all family members",
      "FRC (Family Registration Certificate)"
    ],
    inclusions: [
      "Family Suite or Interconnected Quad Rooms near Haram",
      "Private Family Van (HiAce / Hyundai H1) for all transfers",
      "Umrah E-Visas for the entire family",
      "Personalized Ziyarat schedule suited for kids and elders"
    ],
    stepsOrItinerary: [
      {
        title: "Customized Planning",
        description: "Tailoring dates around school vacations and holidays."
      },
      {
        title: "Dedicated Family Chauffeur",
        description: "Private airport and inter-city transportation."
      }
    ],
    faqs: [
      {
        question: "Can we request baby cots or extra beds in hotel rooms?",
        answer: "Yes, baby cots and extra rollaway beds can be pre-arranged with hotel reception."
      }
    ]
  },

  // ==================== 5. HOTEL BOOKINGS ====================
  "international-hotels": {
    parentSlug: "hotel-bookings",
    parentTitle: "Hotel Bookings",
    slug: "international-hotels",
    title: "Worldwide International Hotel Reservations",
    subtitle: "Corporate negotiated rates on 500,000+ verified hotels across UAE, UK, Europe, USA, Far East, and Saudi Arabia.",
    badge: "Discounted Corporate Rates",
    image: "/destinations/bahrain.jpg",
    priceOrFee: "Discounted Corporate Rates",
    durationOrProcessing: "Instant Confirmation Voucher",
    validity: "Worldwide Access",
    overview: "Book 3-star, 4-star, and 5-star international hotels through Fly Sky Travel & Tourism. We offer wholesale B2B rates often lower than retail booking websites with transparent cancellation terms.",
    requirements: [
      "City, check-in and check-out dates",
      "Room type (Single, Double, Twin, Family Suite)"
    ],
    inclusions: [
      "Instant hotel booking voucher with hotel confirmation code",
      "Complimentary breakfast & WiFi on selected properties",
      "Flexible payment in Pakistani Rupees (PKR)",
      "Free date amendment and cancellation options"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Inquire Hotel Options",
        description: "Tell us your city and preferred budget."
      },
      {
        title: "Step 2: Choose Room & Location",
        description: "We provide vetted options near city center."
      },
      {
        title: "Step 3: Receive Official Voucher",
        description: "Instant PDF voucher for visa and check-in."
      }
    ],
    faqs: [
      {
        question: "Can I pay in PKR for hotels in Europe or USA?",
        answer: "Yes, you can pay 100% in PKR via bank transfer or cash at our Vehari office."
      }
    ]
  },

  "domestic-hotels": {
    parentSlug: "hotel-bookings",
    parentTitle: "Hotel Bookings",
    slug: "domestic-hotels",
    title: "Pakistan Domestic Hotels & Northern Resorts",
    subtitle: "Premium resort bookings in Hunza, Skardu, Murree, Bhurban, Swat, Naran, and luxury city hotels in Lahore, Islamabad, Karachi.",
    badge: "Verified Northern Resorts",
    image: "/destinations/azerbaijan.jpg",
    priceOrFee: "Special Partner Tariffs",
    durationOrProcessing: "Instant Confirmation",
    validity: "Across All Pakistan",
    overview: "Planning a scenic road trip or mountain getaway? We partner with leading resorts including Serena Hotels, Pearl Continental, Shangrila Resort Skardu, and boutique lodges across Gilgit-Baltistan and KP.",
    requirements: [
      "Destination and stay dates",
      "Number of guests and room requirements"
    ],
    inclusions: [
      "Verified room confirmation with picturesque views",
      "Breakfast and heating arrangements in Northern areas",
      "Special discounts on corporate and family group bookings"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Pick Your Destination",
        description: "Select Hunza, Skardu, Murree, or Swat."
      },
      {
        title: "Step 2: Reserve Verified Stay",
        description: "Guaranteed heated rooms and best mountain views."
      }
    ],
    faqs: [
      {
        question: "Are heating facilities guaranteed in winter stays?",
        answer: "Yes, we exclusively partner with properties featuring continuous generator backup and central heating."
      }
    ]
  },

  // ==================== 6. TRAVEL INSURANCE ====================
  "schengen-insurance": {
    parentSlug: "travel-insurance",
    parentTitle: "Travel Insurance",
    slug: "schengen-insurance",
    title: "Schengen Embassy Approved Travel Insurance",
    subtitle: "Official, verifiable travel health insurance compliant with European Schengen visa requirements (€30,000 / $50,000 coverage).",
    badge: "100% Embassy Compliant",
    image: "/destinations/turkey.jpg",
    priceOrFee: "Starting from PKR 4,500",
    durationOrProcessing: "Issued in 15 Minutes",
    validity: "From 7 Days to 1 Year Multi-Trip",
    overview: "All European Schengen embassies require mandatory minimum €30,000 medical emergency and repatriation insurance. Fly Sky Travel issues A-rated, QR-coded, verifiable insurance policies accepted by all 29 Schengen member states.",
    requirements: [
      "Passport scan and CNIC copy",
      "Exact travel start date and return date"
    ],
    inclusions: [
      "Emergency Medical Expenses & Hospitalization (Up to €30,000 / $50,000)",
      "Medical Repatriation & Emergency Evacuation",
      "Checked Baggage Loss & Flight Delay Coverage",
      "24/7 International Emergency Assistance Hotline",
      "Verifiable QR-coded Digital Policy PDF"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Share Travel Dates",
        description: "WhatsApp your passport scan and travel dates."
      },
      {
        title: "Step 2: Instant Policy Issuance",
        description: "Policy generated with unique policy number and QR code."
      },
      {
        title: "Step 3: Print & Submit with Visa File",
        description: "Ready for your VFS/Embassy visa file submission."
      }
    ],
    faqs: [
      {
        question: "Is this policy accepted if I visit multiple Schengen countries?",
        answer: "Yes, the policy covers all 29 Schengen countries across the entire European zone."
      }
    ]
  },

  "worldwide-insurance": {
    parentSlug: "travel-insurance",
    parentTitle: "Travel Insurance",
    slug: "worldwide-insurance",
    title: "Worldwide Comprehensive Travel Insurance",
    subtitle: "Complete protection for USA, UK, Canada, Australia, UAE, Turkey, and Far East with up to $100,000 medical coverage.",
    badge: "Worldwide Total Protection",
    image: "/destinations/turkey.jpg",
    priceOrFee: "Starting from PKR 6,000",
    durationOrProcessing: "Issued in 15 Minutes",
    validity: "Custom Duration or Annual Plan",
    overview: "Medical emergencies abroad can be financially catastrophic. Protect yourself and your family with our comprehensive international travel insurance covering unexpected sickness, accidents, trip cancellation, and lost luggage.",
    requirements: [
      "Passport scan of traveler(s)",
      "Destination country and duration of stay"
    ],
    inclusions: [
      "Medical & Hospitalization Coverage (Up to $100,000)",
      "Trip Cancellation & Interruption Compensation",
      "Loss of Passport & Critical Documents Assistance",
      "Accidental Death & Permanent Disability Benefit",
      "Worldwide 24-Hour Multi-Lingual Helpdesk"
    ],
    stepsOrItinerary: [
      {
        title: "Step 1: Choose Coverage Limit",
        description: "$50,000 or $100,000 coverage."
      },
      {
        title: "Step 2: Fast WhatsApp Delivery",
        description: "Receive your authentic policy within minutes."
      }
    ],
    faqs: [
      {
        question: "Are senior citizens covered?",
        answer: "Yes, we offer specialized senior citizen plans up to 85 years of age."
      }
    ]
  }
};
