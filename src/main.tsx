import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const contactEmail = "contact@aziqo.co.uk";
const websiteUrl = "https://aziqo.co.uk";
const linkedInUrl = "PASTE_AZIQO_LINKEDIN_COMPANY_PAGE_URL_HERE";
const location = "Glasgow, United Kingdom";
const contactFormAction = "PASTE_CONTACT_FORMSPREE_URL_HERE";
const hireTalentFormAction = "PASTE_HIRE_TALENT_FORMSPREE_URL_HERE";
const submitCvFormAction = "PASTE_SUBMIT_CV_FORMSPREE_URL_HERE";

const services = [
  "Mobile Engineering",
  "Android Development",
  "iOS Development",
  "Flutter & Cross-Platform Development",
  "React Native Development",
  "Kotlin Multiplatform",
  "Backend Engineering",
  "Frontend Engineering",
  "Full-Stack Engineering",
  "QA & Test Automation",
  "Cloud & DevOps Engineering",
  "AI & Machine Learning Recruitment",
];

const strengths = [
  "Built with real software engineering experience",
  "Deep mobile engineering specialism",
  "Technical understanding beyond keyword matching",
  "Strong candidate-led approach",
  "Professional, responsive and relationship-focused",
];

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="AZIQO home">
            AZIQO
          </a>
          <div className="nav-links">
            <a href="#about-us">About Us</a>
            <a href="#services">Services</a>
            <a href="#hire-talent">Hire Talent</a>
            <a href="#submit-cv">Submit CV</a>
            <a href="#why-aziqo">Why AZIQO</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Specialist technology talent partner</p>
              <h1>AZIQO</h1>
              <h2>Specialist Mobile, Software, Cloud, DevOps & AI Talent</h2>
              <p>
                AZIQO is a specialist technology talent partner focused on
                Mobile, Software, Cloud, DevOps and AI recruitment across
                startups, scale-ups and enterprise organisations.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#hire-talent">
                  Hire Talent
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>
            <aside className="hero-panel" aria-label="AZIQO focus areas">
              <span>Mobile Engineering</span>
              <span>Software Engineering</span>
              <span>Cloud & DevOps</span>
              <span>AI Recruitment</span>
              <span>Frontend & Backend</span>
              <span>QA & Test Automation</span>
            </aside>
          </div>
        </section>

        <section className="section" id="about-us">
          <div className="container two-column">
            <div>
              <p className="section-label">About Us</p>
              <h2>Technical hiring, understood properly.</h2>
            </div>
            <p className="lead">
              AZIQO is a specialist technology talent partner focused on Mobile,
              Software, Cloud, DevOps and AI recruitment across startups,
              scale-ups and enterprise organisations. Mobile engineering is our
              flagship strength, but our work spans the wider engineering teams
              that build, ship and scale modern technology products. Built with
              real software engineering experience, we understand technical roles
              beyond keywords and support hiring conversations with clarity,
              precision and care.
            </p>
          </div>
        </section>

        <section className="section section-muted" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Services</p>
              <h2>Focused talent support across product and engineering teams.</h2>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="card" key={service}>
                  <span className="card-marker" aria-hidden="true" />
                  <h3>{service}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="why-aziqo">
          <div className="container two-column">
            <div>
              <p className="section-label">Why AZIQO</p>
              <h2>A specialist partner for technical roles where detail matters.</h2>
            </div>
            <div className="check-list">
              {strengths.map((strength) => (
                <div className="check-item" key={strength}>
                  <span aria-hidden="true">✓</span>
                  <p>{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="hire-talent">
          <div className="container contact-layout">
            <div>
              <p className="section-label">Hire Talent</p>
              <h2>Find specialist technology talent with confidence.</h2>
              <p className="lead">
                Tell us about the role, team and hiring priorities. AZIQO can
                support permanent hiring, talent mapping and specialist sourcing
                across mobile, software, cloud, DevOps and AI roles.
              </p>
            </div>
            <form className="form-card" action={hireTalentFormAction} method="POST">
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Work email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Company
                <input name="company" type="text" autoComplete="organization" />
              </label>
              <label>
                Hiring requirement
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about the role, location, stack and timeline."
                  required
                />
              </label>
              <button className="button button-primary" type="submit">
                Send Hiring Brief
              </button>
            </form>
          </div>
        </section>

        <section className="section" id="submit-cv">
          <div className="container contact-layout">
            <div>
              <p className="section-label">Submit CV</p>
              <h2>Share your details for relevant technology opportunities.</h2>
              <p className="lead">
                If you work across mobile, software, cloud, DevOps, QA or AI,
                you can send your profile for future opportunities that match
                your experience and goals.
              </p>
            </div>
            <form
              className="form-card"
              action={submitCvFormAction}
              method="POST"
              encType="multipart/form-data"
            >
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Primary specialism
                <input
                  name="specialism"
                  type="text"
                  placeholder="Mobile, Backend, Cloud, DevOps, AI..."
                />
              </label>
              <label>
                CV
                <input name="cv" type="file" accept=".pdf,.doc,.docx" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  placeholder="A short note about your experience and next move."
                  required
                />
              </label>
              <button className="button button-primary" type="submit">
                Submit CV
              </button>
            </form>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="section-label">Contact</p>
              <h2>Start a conversation with AZIQO.</h2>
              <p className="lead">
                For hiring support, talent mapping, or a confidential discussion
                about mobile, software, cloud, DevOps or AI recruitment, get in
                touch.
              </p>
            </div>
            <div className="contact-stack">
              <div className="contact-card">
                <p>Email</p>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                <p>Website</p>
                <a href={websiteUrl}>{websiteUrl}</a>
                <p>LinkedIn</p>
                <a href={linkedInUrl} target="_blank" rel="noreferrer">
                  AZIQO on LinkedIn
                </a>
                <p>Location</p>
                <span className="contact-value">{location}</span>
              </div>
              <form className="form-card" action={contactFormAction} method="POST">
                <label>
                  Name
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} required />
                </label>
                <button className="button button-primary" type="submit">
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a className="footer-brand" href="#home">
              AZIQO
            </a>
            <p>© {new Date().getFullYear()} AZIQO. All rights reserved.</p>
          </div>
          <div className="footer-links" aria-label="Footer navigation">
            <a href="#about-us">About Us</a>
            <a href="#hire-talent">Hire Talent</a>
            <a href="#submit-cv">Submit CV</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href={websiteUrl}>{websiteUrl}</a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span>{location}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
