import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { socials } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mikrajus@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact max-w-4xl mx-auto">
          <span className="section-eyebrow">Contact</span>
          <h2 id="contact-title" className="contact__heading">
            Let&rsquo;s build something meaningful.
          </h2>
          <p className="contact__sub">
            Looking for an engineer for an IoT project, software development, internship, or full-time role? I&rsquo;d love to connect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-left">
            {/* Quick Email & Direct Channels */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Direct Channels</h3>
                <p className="text-xs text-neutral-600 mb-6 font-medium">
                  Feel free to send a direct message via email or connect on LinkedIn.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m22 7-10 6L2 7"/>
                      </svg>
                      <span className="text-xs font-mono font-bold text-neutral-800">mikrajus@gmail.com</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 rounded text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-800 hover:bg-amber-500/25 transition-colors"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span className="text-xs font-mono font-bold text-neutral-800">+62 853-7274-7142</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-4 border-t border-neutral-200">
                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                  GitHub
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xl flex flex-col gap-4">
              <h3 className="text-lg font-bold text-neutral-900">Send a Message</h3>
              
              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 font-bold text-sm text-center my-auto">
                  ✓ Thank you! Your message has been prepared.
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Mikrajuz..."
                      className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button type="submit" className="btn btn--primary mt-2 w-full justify-center">
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
