import { useEffect } from "react";
import { useLocation } from "react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { AboutFounders } from "@/components/sections/AboutFounders";
import { FacilitiesGallery } from "@/components/sections/FacilitiesGallery";
import { GallerySection } from "@/components/sections/GallerySection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <TrustStrip />
      <DepartmentsSection />
      <DoctorsSection />
      <AboutFounders />
      <FacilitiesGallery />
      <GallerySection />
      <AppointmentSection />
    </>
  );
}
