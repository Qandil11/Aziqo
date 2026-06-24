import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const contactEmail = "contact@aziqo.co.uk";
const websiteUrl = "https://aziqo.co.uk";
const linkedInUrl = "https://www.linkedin.com/company/120674408/";
const location = "Glasgow, United Kingdom";
const formspreeEndpoint = "https://formspree.io/f/meewrewp";

const pillars = [
  {
    title: "Recruitment",
    href: "#recruitment",
    image: "/images/recruitment.jpg",
    description:
      "Specialist hiring support across accounting, CNC engineering, software and mobile roles.",
  },
  {
    title: "UK Education Consultancy",
    href: "#education-consultancy",
    image: "/images/education-consultancy.jpg",
    description:
      "Guidance for students planning UK study, from course selection to application preparation.",
  },
  {
    title: "Software & IT Services",
    href: "#software-it-services",
    image: "/images/software-it-services.jpg",
    description:
      "Practical website, app, software and technical support for growing organisations.",
  },
];

const recruitmentSectors = [
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

const educationServices = [
  "UK university admissions guidance",
  "Course and university selection",
  "Personal statement support",
  "Application documentation support",
  "Student visa guidance and signposting",
  "Pre-arrival guidance for international students",
];

const softwareServices = [
  "Website development",
  "Mobile app development",
  "MVP and product build support",
  "Business software support",
  "Technical consulting",
  "Cloud and software delivery support",
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
  "Focused recruitment, education and software service support",
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
            <a href="#pillars">Services</a>
            <a href="#recruitment">Recruitment</a>
            <a href="#education-consultancy">Education</a>
            <a href="#software-it-services">Software & IT</a>
            <a href="#hire-talent">Hire Talent</a>
            <a href="#submit-cv">Submit CV</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Recruitment, education and software services</p>
              <h1>AZIQO</h1>
              <h2>Practical UK business and technology support</h2>
              <p>
                AZIQO supports clients across recruitment, UK education
                consultancy, and Software & IT services, combining practical
                business support with strong technology expertise.
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
              {pillars.map((pillar) => (
                <a href={pillar.href} key={pillar.title}>
                  {pillar.title}
                </a>
              ))}
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
              AZIQO is a UK-based partner built around specialist technology
              expertise, with Mobile Engineering as a flagship strength. We
              support employers with recruitment, students with UK education
              consultancy, and organisations with practical Software & IT
              services.
            </p>
          </div>
        </section>

        <section className="section section-muted" id="pillars">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">What We Do</p>
              <h2>Three clear service areas, built around practical outcomes.</h2>
            </div>
            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <a className="pillar-card" href={pillar.href} key={pillar.title}>
                  <img src={pillar.image} alt="" loading="lazy" />
                  <span className="card-marker" aria-hidden="true" />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="recruitment">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Recruitment</p>
              <h2>Specialist hiring support across finance, engineering and technology.</h2>
            </div>
            <div className="sector-grid">
              {recruitmentSectors.map((sector) => (
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

        <section className="section section-muted" id="education-consultancy">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">UK Education Consultancy</p>
              <h2>
                Student-focused support for UK admissions and study planning.
              </h2>
            </div>
            <div className="service-grid">
              {educationServices.map((service) => (
                <article className="card" key={service}>
                  <span className="card-marker" aria-hidden="true" />
                  <h3>{service}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="software-it-services">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Software & IT Services</p>
              <h2>Practical technical support for websites, apps and software delivery.</h2>
            </div>
            <div className="service-grid">
              {softwareServices.map((service) => (
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
              <h2>A practical partner for work where detail matters.</h2>
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
              <h2>Find specialist talent with confidence.</h2>
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
                For recruitment support, UK education consultancy, Software & IT
                services, or a confidential discussion about your next step, get
                in touch.
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
            <a href="#pillars">Services</a>
            <a href="#recruitment">Recruitment</a>
            <a href="#education-consultancy">Education</a>
            <a href="#software-it-services">Software & IT</a>
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
