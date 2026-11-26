import { Download } from './components/Download';
import { ExperienceSection } from './components/ExperienceSection';
import { ExploreVoya } from './components/ExploreVoya';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Nav } from './components/Nav';
import { Showcase } from './components/Showcase';
import { WhyVoya } from './components/WhyVoya';
import { experiences } from './content';
import { useSectionNavigation } from './useSectionNavigation';

export default function App() {
  useSectionNavigation();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <ExploreVoya />
        <HowItWorks />
        {experiences.map((exp, i) => (
          <ExperienceSection key={exp.id} exp={exp} reverse={i % 2 === 1} />
        ))}
        <Showcase />
        <WhyVoya />
        <Download />
      </main>
      <Footer />
    </>
  );
}
