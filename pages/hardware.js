import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function Hardware() {
  return (
    <Layout 
      title="Peti Hardware - Compact Offline Payment Device"
      description="Peti device specifications: NFC-enabled, 4-6 months battery life, weather resistant, physical buttons. Designed for Indian merchants and harsh conditions."
      keywords="Peti device, payment hardware, NFC payment terminal, offline POS device, merchant payment device India, rugged payment terminal"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">The Device</span>
          <h1>Hardware Overview</h1>
          <p className={styles.heroSubtitle}>
            A compact, rugged payment device built specifically for Indian merchants.
          </p>
        </div>
      </section>

      {/* Device Preview */}
      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.visual}>
              <div className={styles.devicePreview}>
                <div className={styles.deviceFrame} style={{ width: '280px' }}>
                  <div className={styles.screen}>
                    <span className={styles.screenText}>₹ 500</span>
                    <span className={styles.screenStatus}>Tap Card to Pay</span>
                  </div>
                  <div className={styles.buttons}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h2>Built for Real-World Use</h2>
              <p className={styles.lead}>
                Peti isn't a smartphone accessory or an app — it's a dedicated 
                payment device that works independently.
              </p>
              <ul className="check-list">
                <li>Compact handheld design that fits in your pocket</li>
                <li>NFC enabled for contactless payments</li>
                <li>Physical buttons for reliable input</li>
                <li>4-6 months battery life on watch battery</li>
                <li>Works completely without a phone</li>
                <li>Rugged design for Indian conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Device Specifications</h2>
            <p>Engineered for reliability and simplicity</p>
          </div>

          <div className={`grid grid-4 ${styles.specGrid}`}>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>📏</div>
              <h4>Compact Size</h4>
              <p>Fits in palm, pocket, or cash drawer</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>🔋</div>
              <h4>Long Battery</h4>
              <p>4-6 months on watch battery</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>📶</div>
              <h4>NFC Reader</h4>
              <p>Reads cards and phones instantly</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>🖥️</div>
              <h4>Clear Display</h4>
              <p>Easy to read in sunlight</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>🔘</div>
              <h4>Physical Buttons</h4>
              <p>Tactile feedback, works with wet hands</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>💡</div>
              <h4>LED Indicators</h4>
              <p>Visual status at a glance</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>🔊</div>
              <h4>Audio Alerts</h4>
              <p>Confirmation sounds for busy environments</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>🌡️</div>
              <h4>Weather Resistant</h4>
              <p>Works in heat, dust, and humidity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Built-in Security</h2>
            <p>Hardware-level protection for every transaction</p>
          </div>

          <div className={`grid grid-3 ${styles.features}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔐</div>
              <h3>Secure Element</h3>
              <p>
                Dedicated security chip stores keys and processes transactions 
                in an isolated environment. Same technology used in credit cards.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💾</div>
              <h3>Encrypted Storage</h3>
              <p>
                All transaction data is encrypted before storage. Even if someone 
                accesses the memory, the data is unreadable without proper keys.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>Tamper Detection</h3>
              <p>
                Physical and logical tamper detection. Any attempt to open or 
                modify the device triggers security lockdown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interface */}
      <section className="section section-cream">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>Simple Button Interface</h2>
              <p className={styles.lead}>
                No touchscreen complexity. Just three buttons that do everything.
              </p>
              
              <div className={styles.buttonGuide}>
                <div className={styles.buttonItem}>
                  <div className={styles.buttonIcon}>◀</div>
                  <div>
                    <strong>Left Button</strong>
                    <p>Delete / Back / Cancel</p>
                  </div>
                </div>
                <div className={styles.buttonItem}>
                  <div className={styles.buttonIcon} style={{ background: 'var(--accent)' }}>●</div>
                  <div>
                    <strong>Center Button</strong>
                    <p>Confirm / Enter / OK</p>
                  </div>
                </div>
                <div className={styles.buttonItem}>
                  <div className={styles.buttonIcon}>▶</div>
                  <div>
                    <strong>Right Button</strong>
                    <p>Next / Options / Menu</p>
                  </div>
                </div>
              </div>

              <p>
                Physical buttons work in all conditions — wet hands, gloves, 
                bright sunlight. No mis-taps, no accidental touches.
              </p>
            </div>
            <div className={styles.visual}>
              <div className={styles.interfaceDemo}>
                <div className={styles.demoScreen}>
                  <div className={styles.demoAmount}>₹ 1,250</div>
                  <div className={styles.demoHint}>Press ● to confirm</div>
                </div>
                <div className={styles.demoButtons}>
                  <span>◀</span>
                  <span className={styles.centerBtn}>●</span>
                  <span>▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Durability */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Built for Indian Conditions</h2>
            <p>Tested to handle real-world challenges</p>
          </div>

          <div className={`grid grid-4 ${styles.specGrid}`}>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>☀️</div>
              <h4>Heat Resistant</h4>
              <p>Works up to 50°C</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>💧</div>
              <h4>Splash Proof</h4>
              <p>Handles rain and spills</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>🌪️</div>
              <h4>Dust Resistant</h4>
              <p>Sealed against fine particles</p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>💪</div>
              <h4>Drop Tested</h4>
              <p>Survives 1.5m drops</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Get Your Peti Device</h2>
          <p>Join our pilot program and be among the first to experience offline payments.</p>
          <div className={styles.ctaButtons}>
            <Link href="/partner" className="btn btn-accent btn-large">
              Join Pilot Program
            </Link>
            <Link href="/contact" className="btn btn-outline btn-large" style={{ borderColor: '#fff', color: '#fff' }}>
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

