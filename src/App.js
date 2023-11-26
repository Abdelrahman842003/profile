import * as React from "react";
import "./index.css";
import HomePage from "./Components/Home/HomePage";
import Skills from "./Components/skills/Skills";

import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "./Components/loaging/Loading";
import { AnimatePresence } from "framer-motion";
import Projects from "./Components/projects/Projects";
import ScrollToTopFab from "./Components/scroll/Scroll";
import Contact from "./Components/contact/Contact";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {isLoading ? (
            <Route path="/" element={<Loading />} />
          ) : (
            <Route path="/" element={<HomePage />} />
          )}
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
