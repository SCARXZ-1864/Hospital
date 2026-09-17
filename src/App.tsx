import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import DoctorDetail from "@/pages/DoctorDetail";
import DepartmentDetail from "@/pages/DepartmentDetail";
import NotFound from "@/pages/NotFound";

function App() {
  const location = useLocation();

  // Detail pages are shorter than Home, so the scroll position a card was
  // clicked from can land past the bottom of the new page — reset it,
  // except for in-page hash navigation on Home (handled there instead).
  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="popLayout" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors/:slug" element={<DoctorDetail />} />
            <Route path="/departments/:slug" element={<DepartmentDetail />} />
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
