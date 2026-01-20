import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function About() {
  return (
    <Layout 
      title="About Peti - Made in India Payment Innovation"
      description="Peti exists to make payments simple, reliable & inclusive for all Indians. Hardware-first innovation built in India, solving real payment problems in rural areas."
      keywords="about Peti, Peti company, DKAS Booknow, made in India payment, financial inclusion India, rural payment startup"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Our Story</span>
          <h1>About Peti</h1>
          <p className={styles.heroSubtitle}>
            Making payments work for everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>Our Vision</h2>
              <p className={styles.lead}>
                Peti exists to make payments simple, reliable, and inclusive — 
                even where the internet fails.
              </p>
              <p>
                We believe every Indian deserves access to digital payments, 
                regardless of where they live or how good their internet is. 
                The current digital payment infrastructure works great in 
                cities but fails millions of people in smaller towns, villages, 
                and remote areas.
              </p>
              <p>
                We're building Peti to bridge this gap — not by asking people 
                to wait for better internet, but by making payments work 
                without it.
              </p>
            </div>
            <div className={styles.visual}>
              <div className={styles.comparisonBox}>
                <h4>One-Line Mission</h4>
                <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--primary)', margin: 0 }}>
                  Payments that work, even when the internet doesn't.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Why We Built Peti</h2>
            <p>The problem we saw and couldn't ignore</p>
          </div>

          <div className={`grid grid-3 ${styles.storyGrid}`}>
            <div className={styles.storyCard}>
              <p className={styles.storyQuote}>
                Digital India is great, but it only works where the internet 
                works. What about the India that doesn't have reliable 4G?
              </p>
            </div>
            <div className={styles.storyCard}>
              <p className={styles.storyQuote}>
                We saw shop owners apologizing for "network problems" every day. 
                Losing sales because technology designed for them was failing them.
              </p>
            </div>
            <div className={styles.storyCard}>
              <p className={styles.storyQuote}>
                The solution wasn't more apps or faster internet — it was 
                rethinking how payments should work in the real India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What We Believe In</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className={`grid grid-2 ${styles.valueGrid}`}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h4>Simplicity First</h4>
              <p>
                If it's not simple enough for a first-generation digital 
                user to understand, we haven't done our job. Complexity 
                is our enemy.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🏗️</div>
              <h4>Hardware-First Thinking</h4>
              <p>
                Software can fail, crash, or need updates. Hardware is 
                reliable, predictable, and trusted. We build on this foundation.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h4>Trust Over Speed</h4>
              <p>
                We'd rather grow slowly and earn trust than rush to market 
                and break it. Financial services require earned confidence.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🇮🇳</div>
              <h4>Built for India</h4>
              <p>
                We're not adapting foreign solutions. We're building from 
                the ground up for Indian conditions, regulations, and users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Made in India */}
      <section className="section section-cream">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>Made in India 🇮🇳</h2>
              <p className={styles.lead}>
                Peti is proudly built in India, for India.
              </p>
              <ul className="check-list">
                <li>Designed in India by people who understand Indian conditions</li>
                <li>Built to work with Indian banking and regulatory systems</li>
                <li>Data stays in India, processed by Indian partners</li>
                <li>Supporting Indian manufacturing and employment</li>
                <li>Focused on solving uniquely Indian challenges</li>
              </ul>
            </div>
            <div className={styles.visual}>
              <div className={styles.madeInBadge}>
                <span className={styles.flag}>🇮🇳</span>
                <div>
                  <strong>Built in India</strong>
                  <p>For India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What Drives Us</h2>
            <p>The impact we want to create</p>
          </div>

          <div className={`grid grid-3 ${styles.features}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏪</div>
              <h3>Empowering Small Merchants</h3>
              <p>
                Helping the kirana store, the tea stall, the vegetable vendor 
                accept digital payments without depending on unreliable internet.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌾</div>
              <h3>Connecting Rural India</h3>
              <p>
                Bringing digital payments to villages and towns where 
                current solutions simply don't work.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💫</div>
              <h3>Financial Inclusion</h3>
              <p>
                Making it possible for everyone to participate in the 
                digital economy, regardless of their internet access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Join Us in Building the Future</h2>
          <p>Whether as a partner, merchant, or supporter — be part of making payments truly inclusive.</p>
          <div className={styles.ctaButtons}>
            <Link href="/partner" className="btn btn-accent btn-large">
              Partner With Us
            </Link>
            <Link href="/contact" className="btn btn-outline btn-large" style={{ borderColor: '#fff', color: '#fff' }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

