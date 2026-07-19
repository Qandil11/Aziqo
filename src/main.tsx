import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const contactEmail = "contact@aziqo.co.uk";
const websiteUrl = "https://aziqo.co.uk";
const linkedInUrl = "https://www.linkedin.com/company/120674408/";
const location = "Glasgow, United Kingdom";
const formspreeEndpoint = "https://formspree.io/f/meewrewp";

const problemAreas = [
  "Mobile app crashes, ANRs and unstable releases",
  "Slow screens, poor UX and performance issues",
  "Outdated SDKs, APIs and app store warnings",
  "Legacy Android, iOS or cross-platform code",
  "Previous developer disappeared or handover is unclear",
  "Firebase, cloud, analytics and CI/CD missing",
  "Backend, API or database issues slowing product delivery",
  "AI, OCR or document automation features to add",
];

const proofPoints = [
  { value: "Build", label: "new mobile, backend and cloud features" },
  { value: "Rescue", label: "unstable products, releases and legacy code" },
  { value: "Scale", label: "systems, automation and engineering teams" },
];

const visualHighlights = [
  {
    title: "Mobile, cloud and API delivery",
    description:
      "Connect mobile products with the backend, cloud services and release workflows they need to run reliably.",
    image: "/images/mobile-cloud-engineering.jpg",
    alt: "Mobile app connected to cloud backend, APIs and software engineering panels",
  },
  {
    title: "AI automation for real workflows",
    description:
      "Use OCR, document capture and structured extraction to reduce manual work inside business processes.",
    image: "/images/ai-automation-workflow.jpg",
    alt: "Document automation workflow with mobile OCR capture and structured AI output",
  },
];

const serviceCards = [
  {
    icon: "MR",
    title: "Mobile App Rescue",
    description:
      "Stabilise broken, inherited or unreliable mobile apps with focused investigation, crash fixes and release-ready improvements.",
  },
  {
    icon: "MM",
    title: "Mobile App Modernisation",
    description:
      "Modernise legacy codebases, improve architecture, upgrade dependencies and prepare apps for long-term maintainability.",
  },
  {
    icon: "MI",
    title: "Android, iOS & Cross-Platform",
    description:
      "Build and improve Android, iOS, Flutter, React Native and Kotlin-based mobile products with practical engineering discipline.",
  },
  {
    icon: "CB",
    title: "Cloud, Backend & APIs",
    description:
      "Support Firebase, backend services, APIs, authentication, databases and cloud integrations that mobile products depend on.",
  },
  {
    icon: "RC",
    title: "Release, Analytics & CI/CD",
    description:
      "Set up analytics, Crashlytics, build pipelines, monitoring and App Store or Play Store release workflows.",
  },
  {
    icon: "AI",
    title: "AI & Automation Features",
    description:
      "Add useful AI-enabled features such as OCR, document automation, structured extraction and workflow support.",
  },
  {
    icon: "OS",
    title: "Ongoing Software Maintenance",
    description:
      "Keep apps, APIs and cloud systems stable after launch with monitoring, upgrades, fixes and feature support.",
  },
];

const processSteps = [
  {
    title: "Review",
    description:
      "We inspect the app, backend, cloud setup, analytics, release status and delivery risks.",
  },
  {
    title: "Report",
    description:
      "You receive a clear health check summary with priorities, risks and recommended next steps.",
  },
  {
    title: "Fix or Build",
    description:
      "AZIQO helps fix urgent issues, modernise systems, build new features or support release.",
  },
];

const recruitmentSupport = [
  "Mobile, backend and cloud engineering talent",
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
              <p className="eyebrow">Mobile, cloud and software consultancy</p>
              <h1>Mobile, Cloud & Software Engineering Solutions</h1>
              <p>
                AZIQO helps startups, agencies and growing businesses rescue
                unstable apps, modernise mobile and backend systems, build
                AI-enabled features, and access specialist engineering talent.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#contact">
                  Book a Free Technical Health Check
                </a>
                <a className="button button-secondary" href="#services">
                  View Services
                </a>
              </div>
            </div>
            <aside className="hero-visual" aria-label="Mobile and cloud health check visual">
              <div className="visual-toolbar">
                <span />
                <span />
                <span />
              </div>
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-header">
                    <span>System Health</span>
                    <strong>92%</strong>
                  </div>
                  <div className="metric-row">
                    <span>Mobile crashes</span>
                    <strong className="metric-good">-64%</strong>
                  </div>
                  <div className="metric-row">
                    <span>API status</span>
                    <strong>Ready</strong>
                  </div>
                  <div className="pulse-chart" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="diagnostic-card diagnostic-primary">
                <span>Mobile + Cloud</span>
                <strong>Priority fixes identified</strong>
              </div>
              <div className="diagnostic-card diagnostic-secondary">
                <span>Backend</span>
                <strong>API and data flow mapped</strong>
              </div>
            </aside>
          </div>
          <div className="container proof-strip" aria-label="AZIQO proof points">
            {proofPoints.map((point) => (
              <div className="proof-item" key={point.value}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-muted" id="problems">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Common Problems</p>
              <h2>When apps, APIs or cloud systems slow the business down, AZIQO helps get them back under control.</h2>
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

        <section className="section image-band" aria-label="AZIQO software visuals">
          <div className="container image-grid">
            {visualHighlights.map((visual) => (
              <article className="image-card" key={visual.title}>
                <img src={visual.image} alt={visual.alt} loading="lazy" />
                <div>
                  <h3>{visual.title}</h3>
                  <p>{visual.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section visual-section" aria-label="AZIQO delivery focus">
          <div className="container delivery-panel">
            <div className="delivery-copy">
              <p className="section-label">What AZIQO Helps With</p>
              <h2>Build, rescue and scale digital products without adding noise.</h2>
              <p>
                AZIQO is for businesses that need practical senior engineering
                help across mobile apps, backend services, cloud delivery and
                AI-enabled automation.
              </p>
              <a className="button button-primary" href="#contact">
                Discuss Your Project
              </a>
            </div>
            <div className="delivery-stack" aria-hidden="true">
              <article>
                <span>01</span>
                <strong>Build</strong>
                <p>Mobile apps, APIs, cloud setup and product features.</p>
              </article>
              <article>
                <span>02</span>
                <strong>Rescue</strong>
                <p>Crashes, slow screens, broken releases and legacy systems.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Scale</strong>
                <p>Automation, analytics, CI/CD, maintenance and hiring support.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Services</p>
              <h2>Focused mobile, cloud, backend and AI engineering support.</h2>
              <p className="lead">
                From urgent app rescue to backend, cloud and AI feature work,
                AZIQO supports businesses that need practical senior engineering
                input without adding unnecessary complexity.
              </p>
            </div>
            <div className="service-grid">
              {serviceCards.map((service) => (
                <article className="card service-card" key={service.title}>
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
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
              <h2>Led by real senior software engineering experience.</h2>
            </div>
            <div>
              <p className="lead">
                AZIQO is led by Qandil Tariq, a UK-based Senior Software
                Engineer with 13+ years of experience across mobile engineering,
                backend integration, product delivery and technical problem
                solving.
              </p>
              <p className="lead">
                That engineering background shapes the way AZIQO works: beyond
                keywords, beyond generic advice, and focused on the technical
                realities that affect app stability, cloud systems, releases,
                users and teams.
              </p>
            </div>
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="section-label">Free Technical Health Check</p>
              <h2>Get a Free Technical Health Check.</h2>
              <p className="lead">
                Share what is happening with your app, backend, cloud setup or
                release. AZIQO will review the situation and suggest a clear
                next step.
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
              <input type="hidden" name="form_type" value="Technical Health Check" />
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
                Project details
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about the app, backend, cloud setup, issue, deadline, stack or release blocker."
                  required
                />
              </label>
              <button className="button button-primary" type="submit">
                Get a Free Technical Health Check
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
