import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function Compliance() {
  return (
    <Layout 
      title="Compliance & Roadmap - RBI Aligned"
      description="Peti is built with Indian regulations in mind. Working towards RBI compliance, PCI DSS certification & banking partnerships. Transparent about our stage."
      keywords="Peti compliance, RBI payment regulations, PCI DSS India, payment certification, fintech compliance India"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Regulatory Alignment</span>
          <h1>Compliance & Future Roadmap</h1>
          <p className={styles.heroSubtitle}>
            Building payment infrastructure that works within India's regulatory framework.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>Our Approach to Compliance</h2>
              <p className={styles.lead}>
                Peti is being built with Indian regulations in mind from day one. 
                We're not trying to work around rules — we're working with them.
              </p>
              <p>
                Offline payments are new territory for Indian fintech. We're 
                actively engaging with regulators, banking partners, and industry 
                bodies to ensure Peti meets all requirements before we scale.
              </p>
              <p>
                We believe that gaining trust through proper compliance is 
                essential for building lasting payment infrastructure.
              </p>
            </div>
            <div className={styles.visual}>
              <div className={styles.comparisonBox}>
                <h4>Key Principles</h4>
                <ul className="check-list">
                  <li>Transparency with regulators</li>
                  <li>Bank partnership model</li>
                  <li>KYC/AML compliance</li>
                  <li>Data localization in India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Alignment */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Regulatory Alignment</h2>
            <p>How we're aligning with Indian payment regulations</p>
          </div>

          <div className={`grid grid-2 ${styles.features}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏛️</div>
              <h3>RBI Guidelines</h3>
              <p>
                We're designing Peti to work within RBI's framework for 
                payment systems. Our banking partners provide the regulated 
                infrastructure, while we provide the offline capability.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3>KYC Requirements</h3>
              <p>
                All merchants using Peti go through proper KYC verification. 
                We maintain full audit trails and ensure every transaction 
                can be traced back to verified parties.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🇮🇳</div>
              <h3>Data Localization</h3>
              <p>
                All transaction data stays in India. We're committed to 
                data localization requirements and working with Indian 
                data centers for all processing.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔐</div>
              <h3>Security Standards</h3>
              <p>
                Working towards PCI DSS certification and aligning with 
                RBI's cybersecurity framework for payment aggregators. 
                Security audits are part of our regular process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Roadmap</h2>
            <p>Where we are and where we're headed</p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h4>✅ Foundation (Completed)</h4>
              <p>
                Core technology development, security architecture design, 
                initial banking partnerships exploration.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <h4>🔄 Current Phase: Pilot Programs</h4>
              <p>
                Limited pilots with select merchants to test real-world 
                performance. Gathering feedback, improving UX, validating 
                security in field conditions.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <h4>⏳ Next: Certification & Partnerships</h4>
              <p>
                Working towards formal certifications. Finalizing banking 
                partnerships. Preparing for regulatory approvals needed 
                for scale.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <h4>🎯 Future: Scale & Government Integration</h4>
              <p>
                Broader merchant rollout. Integration with government 
                payment systems. Support for institutional use cases 
                like transport and healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-title">
            <h2>Partnership Model</h2>
            <p>Working with established institutions</p>
          </div>

          <div className={`grid grid-3 ${styles.features}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏦</div>
              <h3>Banking Partners</h3>
              <p>
                Peti works through banking partnerships, not around them. 
                Banks provide the regulated settlement infrastructure; 
                we provide offline capability.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤝</div>
              <h3>Payment Networks</h3>
              <p>
                Exploring integration with existing payment networks 
                to ensure Peti transactions settle through familiar, 
                trusted channels.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏛️</div>
              <h3>Government Bodies</h3>
              <p>
                Open to working with state and central government 
                initiatives for financial inclusion and digital 
                payment adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Note */}
      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>A Note on Where We Stand</h2>
              <p className={styles.lead}>
                We believe in being transparent about our stage.
              </p>
              <p>
                Peti is currently in pilot phase. We're testing with 
                select merchants, refining our technology, and working 
                towards formal certifications.
              </p>
              <p>
                We're not yet authorized for wide-scale deployment. 
                Our pilot programs are limited and conducted under 
                controlled conditions with banking partner oversight.
              </p>
              <p>
                We share our roadmap not as promises but as direction. 
                Regulatory timelines are not entirely in our control, 
                and we'll only scale when properly authorized.
              </p>
            </div>
            <div className={styles.visual}>
              <div className={`${styles.comparisonBox} ${styles.petiBox}`}>
                <h4>Our Commitment</h4>
                <p>
                  We will not mislead users about our regulatory status. 
                  We will not launch without proper approvals. We will 
                  be patient in building trust the right way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Interested in Our Progress?</h2>
          <p>Join our pilot program or partner with us to shape the future of offline payments.</p>
          <div className={styles.ctaButtons}>
            <Link href="/partner" className="btn btn-accent btn-large">
              Partner With Us
            </Link>
            <Link href="/contact" className="btn btn-outline btn-large" style={{ borderColor: '#fff', color: '#fff' }}>
              Get Updates
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

