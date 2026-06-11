import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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
            <a href="#about">About</a>
            <a href="#services">Services</a>
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
              <h2>Specialist Mobile, Software, Cloud & Engineering Talent</h2>
              <p>
                AZIQO is a specialist technology talent partner focused on
                Mobile, Software, Cloud and Engineering talent across startups,
                scale-ups and enterprise organisations.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="mailto:contact@aziqo.co.uk?subject=Hire%20Talent">
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
              <span>Frontend & Backend</span>
              <span>QA & Test Automation</span>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container two-column">
            <div>
              <p className="section-label">About</p>
              <h2>Technical hiring, understood properly.</h2>
            </div>
            <p className="lead">
              AZIQO is a UK-based specialist talent partner for technology and
              engineering teams, with mobile engineering as our flagship
              strength. Built with real software engineering experience, we
              understand technical roles beyond keywords and support hiring
              conversations with clarity, precision and care.
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

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="section-label">Contact</p>
              <h2>Start a conversation with AZIQO.</h2>
              <p className="lead">
                For hiring support, talent mapping, or a confidential discussion
                about mobile, software, cloud or engineering recruitment, get in
                touch.
              </p>
            </div>
            <div className="contact-card">
              <p>Email</p>
              <a href="mailto:contact@aziqo.co.uk">contact@aziqo.co.uk</a>
              <p>LinkedIn</p>
              <a href="https://www.linkedin.com/company/aziqo" target="_blank" rel="noreferrer">
                LinkedIn placeholder
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} AZIQO. All rights reserved.</p>
          <a href="mailto:contact@aziqo.co.uk">contact@aziqo.co.uk</a>
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
