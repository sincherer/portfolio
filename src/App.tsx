import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Project from "./pages/Projects";
import About from "./pages/About";
import PulsifiCase01 from "./pages/PulsifiCase01";
import PulsifiCase02 from "./pages/PulsifiCase02";
import PulsifiCase03 from "./pages/PulsifiCase03";
import KnowledgeBaseCase from "./pages/KnowledgeBaseCase";
import TogaGoCase from "./pages/TogaGoCase";
import GoKudosCaseStudy from "./pages/GoKudos";

const App = () => {
  console.log("App rendering...");

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
        <Route path="portfolio" element={<Home />} />
        <Route path="portfolio/home" element={<Home />} />
        <Route path="portfolio/about" element={<About />} />
        <Route path="portfolio/articles" element={<Blog />} />
        <Route path="portfolio/articles/:id" element={<BlogPost />} />
        <Route path="portfolio/projects" element={<Project />} />
        <Route path="portfolio/projects/pulsifi-case-1" element={<PulsifiCase01 />} />
        <Route path="portfolio/projects/pulsifi-case-2" element={<PulsifiCase02 />} />
        <Route path="portfolio/projects/pulsifi-case-3" element={<PulsifiCase03 />} />
        <Route path="portfolio/projects/knowledge-base-case" element={<KnowledgeBaseCase />} />
        <Route path="portfolio/projects/togago-case" element={<TogaGoCase />} />
        <Route path="portfolio/projects/gokudos-case" element={<GoKudosCaseStudy />} />
      </Routes>
    </Layout>
  );
};

export default App;
