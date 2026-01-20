import Link from 'next/link'
import Layout from '../components/Layout'
import ImageSlideshow from '../components/ImageSlideshow'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout
      title="Offline Payments for Rural India"
      description="Peti enables secure offline payments using smart hardware. Accept payments without internet at kirana stores, transport, events & rural markets. No apps needed."
      keywords="offline payment India, kirana store payment device, rural payment solution, no internet payment, NFC payment device, merchant hardware, Peti device"
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Offline-First Payment Technology</span>
          <h1 className={styles.heroTitle}>
            Offline Payments.<br />
            <span className={styles.highlight}>Real India. Real Fast.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Pay even when the internet doesn't work.
          </p>
          <p className={styles.heroDesc}>
            Peti enables secure, device-to-device payments using smart hardware — 
            no apps, no internet dependency.
          </p>
          <div className={styles.heroCta}>
            <Link href="/contact" className="btn btn-accent btn-large">
              Request Demo
            </Link>
            <Link href="/partner" className="btn btn-outline btn-large">
              Partner With Us
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>0</span>
              <span className={styles.statLabel}>Internet Required</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>&lt;2s</span>
              <span className={styles.statLabel}>Transaction Time</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Offline Capable</span>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <ImageSlideshow />
        </div>
      </section>

      {/* Problem Section */}
      <section className={`section section-light`}>
        <div className="container">
          <div className="section-title">
            <h2>The Problem with Current Payments</h2>
            <p>Digital payments fail when India needs them most</p>
          </div>
          <div className={`grid grid-4 ${styles.problems}`}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>📵</div>
              <h4>No Internet</h4>
              <p>Rural areas often have weak or no connectivity</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>📱</div>
              <h4>App Crashes</h4>
              <p>Payment apps freeze on low-end phones</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>⏱️</div>
              <h4>OTP Delays</h4>
              <p>SMS delays cause failed transactions</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🔋</div>
              <h4>Phone Dependency</h4>
              <p>Not everyone has a smartphone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section">
        <div className="container">
          <div className={styles.solution}>
            <div className={styles.solutionContent}>
              <span className="badge badge-accent">The Solution</span>
              <h2>Hardware-First Payments</h2>
              <p className={styles.solutionDesc}>
                Peti is a smart payment device that works without internet. 
                Transactions happen securely between devices, then sync 
                automatically when connectivity is available.
              </p>
              <ul className="check-list">
                <li>No internet required at time of payment</li>
                <li>Works with cards, NFC, or device taps</li>
                <li>Designed for Indian conditions</li>
                <li>Built for speed and simplicity</li>
                <li>Bank-grade security built in</li>
              </ul>
              <Link href="/how-it-works" className="btn btn-primary mt-lg">
                See How It Works
              </Link>
            </div>
            <div className={styles.solutionVisual}>
              <div className={styles.flowDiagram}>
                <div className={styles.flowStep}>
                  <div className={styles.flowIcon}>1️⃣</div>
                  <span>Enter Amount</span>
                </div>
                <div className={styles.flowArrow}>→</div>
                <div className={styles.flowStep}>
                  <div className={styles.flowIcon}>2️⃣</div>
                  <span>Customer Taps</span>
                </div>
                <div className={styles.flowArrow}>→</div>
                <div className={styles.flowStep}>
                  <div className={styles.flowIcon}>3️⃣</div>
                  <span>Done!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-title">
            <h2>Built for Real India</h2>
            <p>Peti works where traditional payments fail</p>
          </div>
          <div className={`grid grid-3 ${styles.useCases}`}>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🏪</div>
              <h3>Kirana Stores</h3>
              <p>Accept payments instantly, even during network outages. No more "UPI not working" moments.</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🚌</div>
              <h3>Local Transport</h3>
              <p>Collect fares in buses, autos, and taxis without waiting for internet connection.</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🎪</div>
              <h3>Events & Melas</h3>
              <p>Handle high-volume transactions at fairs and events where networks get congested.</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🌾</div>
              <h3>Rural Markets</h3>
              <p>Enable digital payments in villages with poor connectivity.</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>⚡</div>
              <h3>Emergencies</h3>
              <p>Payments work even during disasters when networks fail.</p>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🏥</div>
              <h3>Remote Clinics</h3>
              <p>Collect fees at health camps in areas with no coverage.</p>
            </div>
          </div>
          <div className="text-center mt-xl">
            <Link href="/use-cases" className="btn btn-primary">
              Explore All Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trust}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🔒</div>
              <h4>Bank-Grade Security</h4>
              <p>Hardware encryption protects every transaction</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🇮🇳</div>
              <h4>Made in India</h4>
              <p>Designed for Indian conditions and regulations</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>⚡</div>
              <h4>Instant Confirmation</h4>
              <p>Know your payment went through immediately</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🔄</div>
              <h4>Auto Reconciliation</h4>
              <p>Transactions sync automatically when online</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Join the Offline Payment Movement</h2>
            <p>
              Be part of building payment infrastructure that works for all of India — 
              not just cities with 4G.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/partner" className="btn btn-accent btn-large">
                Become a Partner
              </Link>
              <Link href="/contact" className="btn btn-outline btn-large" style={{ borderColor: '#fff', color: '#fff' }}>
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

