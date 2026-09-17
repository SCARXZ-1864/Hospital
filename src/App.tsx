import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Curtain } from "@/components/motion/Curtain";
import Home from "@/pages/Home";
import DoctorDetail from "@/pages/DoctorDetail";
import DepartmentDetail from "@/pages/DepartmentDetail";
import FacilityDetail from "@/pages/FacilityDetail";
import NotFound from "@/pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Curtain />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="popLayout" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors/:slug" element={<DoctorDetail />} />
            <Route path="/departments/:slug" element={<DepartmentDetail />} />
            <Route path="/facilities/:slug" element={<FacilityDetail />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
