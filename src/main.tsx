import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const contactEmail = "contact@aziqo.co.uk";
const websiteUrl = "https://aziqo.co.uk";
const linkedInUrl = "https://www.linkedin.com/company/120674408/";
const location = "Glasgow, United Kingdom";
const formspreeEndpoint = "https://formspree.io/f/meewrewp";

const services = [
  "Accounting and finance recruitment",
  "CNC engineering recruitment",
  "Software engineering recruitment",
  "Mobile engineering talent sourcing",
  "Candidate shortlisting and screening",
  "Talent mapping for specialist roles",
  "Permanent recruitment support",
];

const sectors = [
  {
    title: "Accounting & Finance Recruitment",
    roles: [
      "Accounts Assistants",
      "Bookkeepers",
      "Payroll",
      "Credit Control",
      "Finance Assistants",
      "Management Accountants",
    ],
  },
  {
    title: "CNC Engineering",
    roles: [
      "CNC Operators",
      "CNC Millers",
      "CNC Turners",
      "Precision Engineering",
      "Manufacturing engineering roles",
    ],
  },
  {
    title: "Software Engineering",
    roles: [
      "Backend Engineering",
      "Frontend Engineering",
      "Full-Stack Engineering",
      "Cloud & DevOps",
      "AI & Data",
      "QA & Test Automation",
    ],
  },
  {
    title: "Mobile Engineering",
    roles: [
      "Android Development",
      "iOS Development",
      "Kotlin Multiplatform",
      "React Native",
      "Flutter & Cross-platform",
    ],
  },
];

const sectorOptions = [
  "Accounting & Finance Recruitment",
  "CNC Engineering",
  "Software Engineering",
  "Mobile Engineering",
  "Other",
];

const strengths = [
  "Built with real software engineering experience",
  "Deep mobile engineering specialism",
  "Focused support across accounting, CNC, software and mobile hiring",
  "Strong candidate-led approach",
  "Professional, responsive and relationship-focused",
];

function App() {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const submitButton = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]',
    );
    const originalButtonText = submitButton?.textContent ?? "";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      window.alert("Thank you. Your message has been sent.");
    } catch {
      window.alert(
        "Sorry, the form could not be sent. Please email contact@aziqo.co.uk directly.",
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  };

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="AZIQO home">
            AZIQO
          </a>
          <div className="nav-links">
            <a href="#about-us">About Us</a>
            <a href="#sectors">Sectors</a>
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
              <h2>Specialist recruitment across finance, engineering and technology</h2>
              <p>
                AZIQO combines deep technology recruitment expertise with
                practical hiring support across Accounting & Finance, CNC
                Engineering, Software Engineering and Mobile Engineering. Mobile
                Engineering remains our strongest specialist area.
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
              <span>Accounting & Finance Recruitment</span>
              <span>CNC Engineering</span>
              <span>Software Engineering</span>
              <span>Mobile Engineering</span>
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
              AZIQO is a UK-based recruitment partner built around specialist
              technology hiring expertise, with Mobile Engineering as our
              flagship strength. We also support employers across Accounting &
              Finance, CNC Engineering and Software Engineering recruitment,
              bringing the same clarity, responsiveness and role understanding
              to every search.
            </p>
          </div>
        </section>

        <section className="section section-muted" id="sectors">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Sectors We Cover</p>
              <h2>
                Focused hiring support across accounting, CNC, software and
                mobile roles.
              </h2>
            </div>
            <div className="sector-grid">
              {sectors.map((sector) => (
                <article className="sector-card" key={sector.title}>
                  <h3>{sector.title}</h3>
                  <ul>
                    {sector.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Services</p>
              <h2>
                Specialist recruitment support for finance, engineering and
                technology teams.
              </h2>
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
              <h2>A specialist partner for roles where detail matters.</h2>
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
                support hiring across Accounting & Finance, CNC Engineering,
                Software Engineering and Mobile Engineering roles.
              </p>
            </div>
            <form
              className="form-card"
              action={formspreeEndpoint}
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="form_type" value="Hire Talent" />
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
                Sector
                <select name="sector" required defaultValue="">
                  <option value="" disabled>
                    Select a sector
                  </option>
                  {sectorOptions.map((sector) => (
                    <option value={sector} key={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
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
                If you work across accounting, CNC, software or mobile roles,
                you can send your details for future opportunities that match
                your experience and goals.
              </p>
            </div>
            <form
              className="form-card"
              action={formspreeEndpoint}
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="form_type" value="Submit CV" />
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Role Category
                <select name="role_category" required defaultValue="">
                  <option value="" disabled>
                    Select a category
                  </option>
                  {sectorOptions.map((sector) => (
                    <option value={sector} key={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                LinkedIn URL
                <input
                  name="linkedin_url"
                  type="url"
                  placeholder="https://www.linkedin.com/in/your-profile"
                />
              </label>
              <label>
                Portfolio/GitHub URL
                <input
                  name="portfolio_url"
                  type="url"
                  placeholder="https://github.com/your-profile"
                />
              </label>
              <label>
                Role interested in
                <input
                  name="role_interested_in"
                  type="text"
                  placeholder="Accounts Assistant, CNC Miller, Backend Engineer..."
                  required
                />
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
              <p className="form-helper">
                Please email your CV directly to contact@aziqo.co.uk after
                submitting this form.
              </p>
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
                about accounting, CNC engineering, software or mobile
                recruitment, get in touch.
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
              <form
                className="form-card"
                action={formspreeEndpoint}
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <input type="hidden" name="form_type" value="Contact Form" />
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
            <a href="#sectors">Sectors</a>
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
