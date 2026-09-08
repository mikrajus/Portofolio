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
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
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
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
