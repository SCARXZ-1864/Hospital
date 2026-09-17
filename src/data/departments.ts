export interface Department {
  slug: string;
  name: string;
  shortBlurb: string;
  description: string;
  image: string;
  verified: boolean;
}

export const departments: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    shortBlurb:
      "State-of-the-art cardiac care facility offering comprehensive heart disease diagnosis, treatment, and prevention services.",
    description:
      "Our cardiology team provides expert heart care with advanced diagnostic and treatment options, from routine screening to management of complex cardiac conditions — combining modern equipment with attentive, ongoing follow-up.",
    image: "hosp8.jpg",
    verified: true,
  },
  {
    slug: "neurology",
    name: "Neurology",
    shortBlurb:
      "Expert care for disorders of the nervous system, brain, and spine with advanced diagnostic and therapeutic capabilities.",
    description:
      "We offer comprehensive care for neurological conditions and disorders, with a focus on accurate diagnosis and coordinated, long-term treatment plans for patients and their families.",
    image: "hosp9.jpg",
    verified: true,
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    shortBlurb:
      "Specialized healthcare for infants, children, and adolescents in a child-friendly environment.",
    description:
      "Our pediatric team, including a dedicated paediatrician and neonatologist, cares for infants, children, and adolescents in a warm, reassuring environment designed around young patients and their parents.",
    image: "hosp5.jpg",
    verified: true,
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    shortBlurb:
      "Complete care for musculoskeletal conditions, from sports injuries to joint replacements.",
    description:
      "From joint replacement and reconstruction surgery to spine care and sports injuries, our orthopedic surgeons manage the full spectrum of musculoskeletal conditions with modern surgical and rehabilitative techniques.",
    image: "hosp10.jpg",
    verified: true,
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    shortBlurb:
      "Comprehensive adult healthcare covering prevention, diagnosis, and treatment of various diseases.",
    description:
      "Our physicians provide preventive care and routine check-ups alongside specialized management of diabetes, rheumatologic conditions, kidney disease, and critical/intensive care needs.",
    image: "hosp4.jpg",
    verified: true,
  },
  {
    slug: "diagnostic-services",
    name: "Diagnostic Services",
    shortBlurb:
      "Advanced diagnostic testing and laboratory services with quick and accurate results.",
    description:
      "Our in-house diagnostic and laboratory services deliver fast, accurate results — supporting every department with the imaging and testing needed for confident, timely treatment decisions.",
    image: "hosp3.jpg",
    verified: true,
  },
];
