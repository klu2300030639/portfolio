import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { GithubStats } from './components/GithubStats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      
      <CustomCursor />

      {/* Responsive Faded Background Wallpaper */}
      <div className="bg-wallpaper" />

      {/* Ambient Grid Overlay */}
      <div className="bg-mesh">
        <div className="mesh-ball-1"></div>
        <div className="mesh-ball-2"></div>
        <div className="mesh-ball-3"></div>
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}

export default App;