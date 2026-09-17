export interface Facility {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const facilities: Facility[] = [
  {
    slug: "emergency-medicine",
    name: "Emergency Medicine",
    description:
      "24/7 emergency care facility equipped with advanced life support systems and trauma care capabilities.",
    image: "hosp16.jpg",
  },
  {
    slug: "intensive-care-unit",
    name: "Intensive Care Unit",
    description:
      "State-of-the-art ICU with continuous monitoring and specialized care for critical patients.",
    image: "hosp17.jpg",
  },
  {
    slug: "diagnostic-imaging-center",
    name: "Diagnostic Imaging Center",
    description:
      "Advanced imaging services including X-ray and ultrasound with rapid reporting.",
    image: "hosp18.jpg",
  },
  {
    slug: "inpatient-wards",
    name: "Inpatient Wards",
    description:
      "Comfortable private and semi-private rooms with modern amenities for patient recovery.",
    image: "hosp19.jpg",
  },
  {
    slug: "rehabilitation-center",
    name: "Rehabilitation Center",
    description:
      "Comprehensive rehabilitation services with physical, occupational, and speech therapy.",
    image: "hosp20.jpg",
  },
  {
    slug: "outpatient-clinics",
    name: "Outpatient Clinics",
    description:
      "Modern outpatient facilities for consultations, minor procedures, and follow-up care.",
    image: "hosp2.jpg",
  },
];

export const galleryImages = [
  "hosp1.jpg",
  "hosp2.jpg",
  "hosp3.jpg",
  "hosp4.jpg",
  "hosp5.jpg",
  "hosp7.jpg",
  "hosp8.jpg",
  "hosp9.jpg",
  "hosp10.jpg",
];
