import React, { useRef, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import CourseContent from "./components/courseContent/CourseContent";
import { isPhone } from "./assets/constant/constants";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // console.log(window.innerWidth < 450)

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Routes>
          <Route
            path="/"
            element={
              <LayoutDefault>
                <Home />
              </LayoutDefault>
            }
          />
          {/* <Route
            path="/omnitech"
            element={
              <LayoutDefault>
                <Home />
              </LayoutDefault>
            }
          /> */}
          <Route
            path="/course/:id"
            element={
              <LayoutDefault>
                <CourseContent />
              </LayoutDefault>
            }
          />
        </Routes>
      )}
    />
  );
};

export default App;
