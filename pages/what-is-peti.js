import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function WhatIsPeti() {
  return (
    <Layout 
      title="What is Peti? - Smart Offline Payment Device"
      description="Peti is a smart payment device that allows people to send and receive money without internet. Hardware-based payments for kirana stores, vendors & rural merchants in India."
      keywords="what is Peti, offline payment device, smart payment hardware, no internet payment, rural India payments, merchant device"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Understanding Peti</span>
          <h1>What is Peti?</h1>
          <p className={styles.heroSubtitle}>
            A smart payment device that allows people to send and receive money without internet.
          </p>
        </div>
      </section>

      {/* Main Explanation */}
      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>Simple Explanation</h2>
              <p className={styles.lead}>
                Think of Peti as a dedicated payment machine — like an ATM, but for receiving payments. 
                It doesn't need a phone or internet to work at the time of payment.
              </p>
              <p>
                Peti stores transactions securely on the device itself. When internet becomes available, 
                all transactions automatically sync with the banking system. The merchant gets their money, 
                the customer's payment is processed — everything reconciles automatically.
              </p>
              <p>
                This is different from UPI or card machines that need constant internet. Peti works 
                first, syncs later.
              </p>
            </div>
            <div className={styles.visual}>
              <div className={styles.comparisonBox}>
                <h4>Traditional Payment</h4>
                <div className={styles.flow}>
                  <span>Customer</span>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.highlight}>Internet</span>
                  <span className={styles.arrow}>→</span>
                  <span>Bank</span>
                  <span className={styles.arrow}>→</span>
                  <span>Merchant</span>
                </div>
                <p className={styles.note}>If internet fails, payment fails ❌</p>
              </div>
              <div className={`${styles.comparisonBox} ${styles.petiBox}`}>
                <h4>Peti Payment</h4>
                <div className={styles.flow}>
                  <span>Customer</span>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.highlight}>Peti Device</span>
                  <span className={styles.arrow}>→</span>
                  <span>Done!</span>
                </div>
                <p className={styles.note}>Internet syncs later automatically ✅</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>What Makes Peti Different</h2>
            <p>Built from the ground up for real-world Indian conditions</p>
          </div>
          <div className={`grid grid-2 ${styles.features}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📵</div>
              <h3>No Internet Required at Payment Time</h3>
              <p>
                The transaction happens entirely between devices. No waiting for servers, 
                no timeout errors, no "please try again" messages.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💳</div>
              <h3>Works with Cards & NFC</h3>
              <p>
                Accept payments via contactless cards, NFC-enabled phones, or even 
                device-to-device taps. Multiple payment methods, one simple device.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🇮🇳</div>
              <h3>Designed for Indian Conditions</h3>
              <p>
                Built to handle heat, dust, power outages, and poor network coverage. 
                This isn't adapted foreign technology — it's made for India.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Built for Speed & Simplicity</h3>
              <p>
                No apps to download, no accounts to create, no passwords to remember. 
                Press buttons, tap to pay, done. That simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses Peti */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Who Uses Peti?</h2>
            <p>Built for merchants who can't afford payment failures</p>
          </div>
          <div className={`grid grid-3 ${styles.users}`}>
            <div className={styles.userCard}>
              <div className={styles.userIcon}>🏪</div>
              <h4>Kirana Stores</h4>
              <p>Small shop owners in areas with unreliable internet</p>
            </div>
            <div className={styles.userCard}>
              <div className={styles.userIcon}>🛒</div>
              <h4>Street Vendors</h4>
              <p>Mobile sellers at markets and on the move</p>
            </div>
            <div className={styles.userCard}>
              <div className={styles.userIcon}>🚌</div>
              <h4>Transport Operators</h4>
              <p>Bus conductors, auto drivers, taxi services</p>
            </div>
            <div className={styles.userCard}>
              <div className={styles.userIcon}>🎪</div>
              <h4>Event Organizers</h4>
              <p>Mela and fair vendors handling crowds</p>
            </div>
            <div className={styles.userCard}>
              <div className={styles.userIcon}>🌾</div>
              <h4>Rural Merchants</h4>
              <p>Village shops far from cities</p>
            </div>
            <div className={styles.userCard}>
              <div className={styles.userIcon}>🏥</div>
              <h4>Health Workers</h4>
              <p>Mobile health camps in remote areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Not a Regular App */}
      <section className="section section-cream">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>Peti is NOT a Payment App</h2>
              <p className={styles.lead}>
                Let's be clear about what Peti is and isn't.
              </p>
              <div className={styles.notList}>
                <div className={styles.notItem}>
                  <span className={styles.notIcon}>✕</span>
                  <div>
                    <strong>Not an app</strong>
                    <p>No downloading, no updates, no smartphone required</p>
                  </div>
                </div>
                <div className={styles.notItem}>
                  <span className={styles.notIcon}>✕</span>
                  <div>
                    <strong>Not dependent on internet</strong>
                    <p>Works completely offline at the time of transaction</p>
                  </div>
                </div>
                <div className={styles.notItem}>
                  <span className={styles.notIcon}>✕</span>
                  <div>
                    <strong>Not complicated</strong>
                    <p>Physical buttons, clear display, instant confirmation</p>
                  </div>
                </div>
              </div>
              <div className={styles.isList}>
                <div className={styles.isItem}>
                  <span className={styles.isIcon}>✓</span>
                  <div>
                    <strong>It's hardware</strong>
                    <p>A dedicated device built only for payments</p>
                  </div>
                </div>
                <div className={styles.isItem}>
                  <span className={styles.isIcon}>✓</span>
                  <div>
                    <strong>It's reliable</strong>
                    <p>No crashes, no freezes, no "try again later"</p>
                  </div>
                </div>
                <div className={styles.isItem}>
                  <span className={styles.isIcon}>✓</span>
                  <div>
                    <strong>It's trustworthy</strong>
                    <p>Bank-grade security built into the chip</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.visual}>
              <div className={styles.devicePreview}>
                <div className={styles.deviceFrame}>
                  <div className={styles.screen}>
                    <span className={styles.screenText}>₹ 150</span>
                    <span className={styles.screenStatus}>Payment Complete</span>
                  </div>
                  <div className={styles.buttons}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to See Peti in Action?</h2>
          <p>Request a demo and see how offline payments can work for you.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-accent btn-large">
              Request Demo
            </Link>
            <Link href="/how-it-works" className="btn btn-outline btn-large" style={{ borderColor: '#fff', color: '#fff' }}>
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

