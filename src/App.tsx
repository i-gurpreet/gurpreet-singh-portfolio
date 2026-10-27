import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExploringSection } from './components/sections/ExploringSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';
import { CustomCursor } from './components/common/CustomCursor';
import { PageLoader } from './components/common/PageLoader';

export const AppContent: React.FC = () => {
  return (
    <div className="app-wrapper">
      <PageLoader />
      {/* Live Custom Cursor with Sample Switcher */}
      <CustomCursor />

      {/* Dynamic Ambient Background Aura & Grid */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />
        <div className="ambient-glow-3" />
      </div>

      {/* Main Navigation */}
      <Navbar />

      {/* Main Body with Senior Section Sequence */}
      <main className="main-content">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ExploringSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
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
