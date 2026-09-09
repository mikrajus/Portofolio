import { ThemeProvider } from "@/lib/theme-context";
import { PortfolioProvider } from "@/lib/portfolio-context";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CommandMenu from "@/components/command-menu";
import AdminDashboard from "@/components/admin-dashboard";
import SideRays from "@/components/SideRays";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        {/* Sticky Background Rays: Stays fixed at the top of the viewport when scrolling */}
        <div className="fixed top-0 left-0 right-0 h-screen pointer-events-none z-0 overflow-hidden">
          <SideRays
            speed={2.5}
            rayColor1="#84CC16"
            rayColor2="#0a71e3"
            intensity={2}
            spread={2}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1.0}
          />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main id="home">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <CommandMenu />
          <AdminDashboard />
        </div>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
