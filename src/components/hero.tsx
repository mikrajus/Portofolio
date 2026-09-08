import SideRays from "@/components/SideRays";
import { socials } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__rays">
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
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide mb-4 w-fit shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block -ml-4" />
            Available for Opportunities & Projects
          </div>

          <p className="hero__role">Computer Engineering Graduate (S.T.)</p>
          <h1 className="hero__title">Mikrajuz Sulthan, S.T.</h1>
          <p className="hero__tagline">
            Embedded Systems &middot; IoT &middot; Software
          </p>
          <p className="hero__intro">
            Computer Engineering graduate from Syiah Kuala University (GPA 3.52 / 4.00).
            I design connected, embedded systems — bridging hardware and
            software to solve real-world problems.
          </p>

          <div className="hero__actions flex-wrap gap-3">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="btn btn--ghost border border-amber-500/50 hover:bg-amber-500/10 text-amber-300">
              <svg className="w-4 h-4 mr-1.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact
            </a>
          </div>

          <div className="hero__meta">
            <p className="hero__meta-label">Find me on</p>
            <div className="hero__socials">
              <a
                className="hero__social"
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.03-.02-2.01-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.24 2.74.12 3.03.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"></path>
                </svg>
              </a>
              <a
                className="hero__social"
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"></path>
                </svg>
              </a>
              <a className="hero__social" href={socials.email} aria-label="Email">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-10 6L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait">
            <img
              src="/assets/images/profile.webp"
              alt="Portrait of Mikrajuz Sulthan"
              width="440"
              height="440"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
