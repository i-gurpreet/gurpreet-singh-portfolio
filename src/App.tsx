import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { CustomCursor } from './components/common/CustomCursor';
import { PageLoader } from './components/common/PageLoader';

const ProjectsSection = lazy(() =>
  import('./components/sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const ExperienceSection = lazy(() =>
  import('./components/sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection }))
);
const SkillsSection = lazy(() =>
  import('./components/sections/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);
const AboutSection = lazy(() =>
  import('./components/sections/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const ExploringSection = lazy(() =>
  import('./components/sections/ExploringSection').then((m) => ({ default: m.ExploringSection }))
);
const AchievementsSection = lazy(() =>
  import('./components/sections/AchievementsSection').then((m) => ({
    default: m.AchievementsSection,
  }))
);
const ResumeSection = lazy(() =>
  import('./components/sections/ResumeSection').then((m) => ({ default: m.ResumeSection }))
);
const ContactSection = lazy(() =>
  import('./components/sections/ContactSection').then((m) => ({ default: m.ContactSection }))
);

export const AppContent: React.FC = () => {
  return (
    <div className="app-wrapper">
      <PageLoader />
      <CustomCursor />

      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />
        <div className="ambient-glow-3" />
      </div>

      <Navbar />

      <main className="main-content">
        <HeroSection />
        <Suspense fallback={null}>
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <AboutSection />
          <ExploringSection />
          <AchievementsSection />
          <ResumeSection />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
