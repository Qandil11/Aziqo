import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const contactEmail = "contact@aziqo.co.uk";
const websiteUrl = "https://aziqo.co.uk";
const linkedInUrl = "https://www.linkedin.com/company/120674408/";
const location = "Glasgow, United Kingdom";
const formspreeEndpoint = "https://formspree.io/f/meewrewp";

const problemAreas = [
  "Crashes and ANRs affecting user trust",
  "Slow screens, poor UX and performance issues",
  "Outdated SDKs, APIs and Play Store warnings",
  "Legacy Java code that needs Kotlin/Compose migration",
  "Previous developer disappeared or handover is unclear",
  "Firebase Crashlytics, Analytics and CI/CD missing",
  "Release, compliance or signing issues blocking launch",
  "AI, OCR or document automation features to add",
];

const serviceCards = [
  {
    title: "Android App Rescue",
    description:
      "Stabilise broken, inherited or unreliable Android apps with focused investigation, crash fixes and release-ready improvements.",
  },
  {
    title: "Mobile App Modernisation",
    description:
      "Modernise legacy codebases, improve architecture, upgrade dependencies and prepare apps for long-term maintainability.",
  },
  {
    title: "Kotlin & Jetpack Compose",
    description:
      "Build new Android features with Kotlin, Jetpack Compose, clean UI patterns and practical engineering discipline.",
  },
  {
    title: "Firebase, Analytics & CI/CD",
    description:
      "Set up Crashlytics, Analytics, build pipelines and release workflows so teams can see issues and ship with confidence.",
  },
  {
    title: "Play Store Release Support",
    description:
      "Resolve Play Console, API level, policy, signing, testing and compliance issues that delay mobile releases.",
  },
  {
    title: "AI Mobile Features",
    description:
      "Add useful AI-enabled mobile features such as OCR, document automation, structured extraction and workflow support.",
  },
  {
    title: "Ongoing App Maintenance",
    description:
      "Keep Android apps stable after launch with regular updates, monitoring, dependency upgrades and feature support.",
  },
];

const processSteps = [
  {
    title: "Review",
    description:
      "We inspect the app, codebase, crashes, Play Console status and delivery risks.",
  },
  {
    title: "Report",
    description:
      "You receive a clear health check summary with priorities, risks and recommended next steps.",
  },
  {
    title: "Fix or Build",
    description:
      "AZIQO helps fix urgent issues, modernise the app, build new features or support release.",
  },
];

const recruitmentSupport = [
  "Android, Kotlin and mobile engineering talent",
  "Software engineering, QA, cloud and DevOps roles",
  "Candidate shortlisting with technical understanding",
  "Practical hiring support for startups, agencies and growing teams",
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
            <a href="#problems">Problems</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#recruitment">Hiring</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Mobile software consultancy</p>
              <h1>Android App Rescue, Modernisation & AI Mobile Solutions</h1>
              <p>
                AZIQO helps startups, agencies, and growing businesses fix
                unstable Android apps, modernise legacy code, ship new mobile
                features, and access specialist engineering talent.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#contact">
                  Book a Free App Health Check
                </a>
                <a className="button button-secondary" href="#services">
                  View Services
                </a>
              </div>
            </div>
            <aside className="hero-panel software-panel" aria-label="AZIQO software focus">
              <div className="signal-card">
                <span>Android</span>
                <strong>Rescue unstable apps</strong>
              </div>
              <div className="signal-card">
                <span>Kotlin</span>
                <strong>Modernise legacy code</strong>
              </div>
              <div className="signal-card">
                <span>AI Mobile</span>
                <strong>OCR and automation features</strong>
              </div>
              <div className="signal-card">
                <span>Release</span>
                <strong>Crashlytics, CI/CD and Play Store support</strong>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-muted" id="problems">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Common Problems</p>
              <h2>When a mobile app is slowing the business down, AZIQO helps get it back under control.</h2>
            </div>
            <div className="problem-grid">
              {problemAreas.map((problem) => (
                <article className="problem-card" key={problem}>
                  <span aria-hidden="true">•</span>
                  <p>{problem}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Services</p>
              <h2>Focused Android, mobile and AI engineering support.</h2>
              <p className="lead">
                From urgent app rescue to planned modernisation, AZIQO supports
                businesses that need practical senior engineering input without
                adding unnecessary complexity.
              </p>
            </div>
            <div className="service-grid">
              {serviceCards.map((service) => (
                <article className="card service-card" key={service.title}>
                  <span className="card-marker" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">How It Works</p>
              <h2>A simple route from uncertainty to a clear technical plan.</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-card" key={step.title}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="recruitment">
          <div className="container two-column support-section">
            <div>
              <p className="section-label">Technology Hiring Support</p>
              <h2>Need engineering talent too?</h2>
              <p className="lead">
                Recruitment is a supporting AZIQO service, not the main focus of
                this website. When clients need trusted engineering talent, AZIQO
                can help with targeted shortlisting backed by real technical
                understanding.
              </p>
            </div>
            <div className="check-list">
              {recruitmentSupport.map((item) => (
                <div className="check-item" key={item}>
                  <span aria-hidden="true">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="about">
          <div className="container two-column">
            <div>
              <p className="section-label">About AZIQO</p>
              <h2>Led by real senior Android engineering experience.</h2>
            </div>
            <div>
              <p className="lead">
                AZIQO is led by Qandil Tariq, a UK-based Senior Android Engineer
                with 13+ years of software engineering experience across mobile,
                product delivery and technical problem solving.
              </p>
              <p className="lead">
                That engineering background shapes the way AZIQO works: beyond
                keywords, beyond generic advice, and focused on the technical
                realities that affect app stability, releases, users and teams.
              </p>
            </div>
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="section-label">Free App Health Check</p>
              <h2>Get a Free Android App Health Check.</h2>
              <p className="lead">
                Share what is happening with your app, codebase or release. AZIQO
                will review the situation and suggest a clear next step.
              </p>
              <div className="contact-card compact-contact">
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
            </div>
            <form
              className="form-card"
              action={formspreeEndpoint}
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="form_type" value="Android App Health Check" />
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
                What do you need help with?
                <select name="support_area" required defaultValue="">
                  <option value="" disabled>
                    Select an area
                  </option>
                  {serviceCards.map((service) => (
                    <option value={service.title} key={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Technology Hiring">Technology Hiring</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label>
                App details
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about the app, issue, deadline, current stack or release blocker."
                  required
                />
              </label>
              <button className="button button-primary" type="submit">
                Get a Free Android App Health Check
              </button>
            </form>
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
            <a href="#problems">Problems</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#recruitment">Hiring</a>
            <a href="#about">About</a>
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
