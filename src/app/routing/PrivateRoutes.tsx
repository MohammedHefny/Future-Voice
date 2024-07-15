import { lazy, useEffect, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLang } from "../i18n/Metronici18n";
import AboutUs from "../pages/about-us/about-us";
import Services from "../pages/services/Services";
import Solutions from "../pages/solutions/solutions";
import Milestone from "../pages/milestone/milestone";
import Projects from "../pages/projects/projects";
import ClientAndPartner from "../pages/client-and-partner/client-and-partner";
import ContactUs from "../pages/contact-us/contact-us";
import Faqs from "../pages/faqs/faqs";
import Blogs from "../pages/blogs/blogs";
import Blog from "../pages/blogs/blog";
import Certificates from "../pages/certificates/certificates";
const Layout = lazy(() => import("../layout/Layout"));
require("../assets/style-basic.css");

//Home Page
const HomeWorkspace = lazy(() =>
  import("../pages/home/home").then((module) => ({
    default: module.Home,
  }))
);

const PrivateRoutes = () => {
  const lang = useLang();

  useEffect(() => {
    if (lang === "ar") {
      require("../assets/style-ar.css");
    } else if (lang === "en") {
      require("../assets/style-en.css");
    }
  }, []);

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route>
            <Route index element={<Navigate to="/home" />} />
            {/* Home Page Route */}
            <Route path="/home" element={<HomeWorkspace />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/milestone" element={<Milestone />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/client-and-partner" element={<ClientAndPartner />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blog" element={<Blog />} />
            {/* Catch-all route - render HomeWorkspace for unmatched paths */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export { PrivateRoutes };
