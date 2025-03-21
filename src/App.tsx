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
import DesignThinking from "./pages/DesignThinking";
import AboutCher from "./pages/AboutCher";
import ChatBot from "./pages/ChatBot";
import UsecasePulsifi from "./pages/usecase-pulsifi";
import AnimationCase from "./pages/AnimationCase";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/cher" element={<AboutCher />} />
        <Route path="/articles" element={<Blog />} />
        <Route path="/articles/:id" element={<BlogPost />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/pulsifi-case-1" element={<PulsifiCase01 />} />
        <Route path="/projects/pulsifi-case-2" element={<PulsifiCase02 />} />
        <Route path="/projects/pulsifi-case-3" element={<PulsifiCase03 />} />
        <Route path="/projects/knowledge-base-case" element={<KnowledgeBaseCase />} />
        <Route path="/projects/togago-case" element={<TogaGoCase />} />
        <Route path="/projects/gokudos-case" element={<GoKudosCaseStudy />} />
        <Route path="/projects/design-thinking" element={<DesignThinking />} />
        <Route path="/projects/chatbot" element={<ChatBot />} />
        <Route path="/usecase-pulsifi" element={<UsecasePulsifi />} />
        <Route path="/animation-case" element={<AnimationCase />} />
      </Routes>
    </Layout>
  );
};

export default App;
