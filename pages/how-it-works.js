import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function HowItWorks() {
  return (
    <Layout 
      title="How Peti Works - 5 Simple Steps"
      description="Learn how Peti enables secure offline payments in 5 simple steps. Enter amount, tap to pay, instant confirmation. No internet needed at payment time."
      keywords="how Peti works, offline payment process, NFC payment steps, hardware payment system, secure offline transaction"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Step by Step</span>
          <h1>How Peti Works</h1>
          <p className={styles.heroSubtitle}>
            A simple 5-step process that makes payments work without internet.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className={styles.stepsContainer}>
            {/* Step 1 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Merchant Enters Amount</h3>
                <p>
                  Using the simple button interface on the Peti device, the merchant 
                  enters the payment amount. No app needed, no touchscreen complexity — 
                  just physical buttons that work every time.
                </p>
              </div>
              <div className={styles.stepVisual}>
                <span className={styles.stepIcon}>🔢</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Customer Taps to Pay</h3>
                <p>
                  The customer taps their card, NFC-enabled phone, or another Peti device 
                  on the merchant's device. The secure handshake happens instantly between 
                  the two devices.
                </p>
              </div>
              <div className={styles.stepVisual}>
                <span className={styles.stepIcon}>👆</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Offline Transaction Stored</h3>
                <p>
                  The transaction is recorded securely on both devices using 
                  hardware-level encryption. Each transaction gets a unique ID and 
                  timestamp. No data goes anywhere yet — it's all local and secure.
                </p>
              </div>
              <div className={styles.stepVisual}>
                <span className={styles.stepIcon}>💾</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Instant Confirmation</h3>
                <p>
                  Both parties see immediate confirmation on their screens. The merchant 
                  knows payment is received; the customer knows payment is made. 
                  LED indicators and audio cues provide clear feedback.
                </p>
              </div>
              <div className={styles.stepVisual}>
                <span className={styles.stepIcon}>✅</span>
              </div>
            </div>

            {/* Step 5 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h3>Automatic Sync When Online</h3>
                <p>
                  When the device connects to internet (WiFi, mobile data, or 
                  daily sync at home), all transactions are automatically uploaded 
                  to the banking system. Reconciliation happens seamlessly.
                </p>
              </div>
              <div className={styles.stepVisual}>
                <span className={styles.stepIcon}>🔄</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Behind the Scenes</h2>
            <p>What makes offline payments secure and reliable</p>
          </div>

          <div className={`grid grid-2 ${styles.features}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📒</div>
              <h3>Offline Ledger</h3>
              <p>
                Every Peti device maintains its own secure ledger of transactions. 
                This local database is encrypted and tamper-proof. Even if someone 
                tries to modify it, the integrity checks will catch it.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔑</div>
              <h3>Secure Transaction IDs</h3>
              <p>
                Each transaction gets a cryptographically unique ID that includes 
                device info, timestamp, and transaction details. This ID can be 
                verified later when the device syncs with the bank.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>Anti-Tampering Logic</h3>
              <p>
                Hardware-level protection detects any attempt to modify the device 
                or its data. If tampering is detected, the device locks down and 
                flags all pending transactions for review.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Daily Reconciliation</h3>
              <p>
                When devices sync, the system automatically matches transactions 
                between payer and payee devices. Discrepancies are flagged 
                immediately for resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>The Offline Advantage</h2>
              <p className={styles.lead}>
                Traditional payments need constant internet. Peti separates the 
                transaction from the settlement.
              </p>
              <ul className={styles.benefitList}>
                <li>
                  <span className={styles.benefitIcon}>⚡</span>
                  <div>
                    <strong>Transaction = Instant</strong>
                    <p>Happens locally, between devices, in under 2 seconds</p>
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}>🔄</span>
                  <div>
                    <strong>Settlement = Later</strong>
                    <p>Happens when internet is available, automatically</p>
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}>🔒</span>
                  <div>
                    <strong>Security = Always</strong>
                    <p>Hardware encryption protects every step</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.visual}>
              <div className={styles.comparisonBox}>
                <h4>Sync Schedule Options</h4>
                <div className={styles.syncOptions}>
                  <div className={styles.syncOption}>
                    <span>📶</span>
                    <div>
                      <strong>Auto-Sync</strong>
                      <p>Whenever WiFi or data is available</p>
                    </div>
                  </div>
                  <div className={styles.syncOption}>
                    <span>🌙</span>
                    <div>
                      <strong>Daily Sync</strong>
                      <p>Once a day when merchant goes home</p>
                    </div>
                  </div>
                  <div className={styles.syncOption}>
                    <span>🏪</span>
                    <div>
                      <strong>Hub Sync</strong>
                      <p>At designated sync points in villages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-title">
            <h2>Common Questions</h2>
            <p>What merchants ask us most</p>
          </div>

          <div className={`grid grid-2 ${styles.features}`}>
            <div className={styles.featureCard}>
              <h4>What if customer doesn't have NFC?</h4>
              <p>
                Peti works with multiple input methods. Customers can use 
                contactless cards, NFC phones, or even their own Peti device. 
                We're also working on QR code backup.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h4>How long can transactions stay offline?</h4>
              <p>
                Transactions can stay on device for up to 7 days. However, 
                we recommend daily sync for best experience. Longer offline 
                periods may require additional verification.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h4>What if device is lost or stolen?</h4>
              <p>
                Each device is registered to a merchant. Lost devices can be 
                remotely disabled. All data is encrypted — even with physical 
                access, transaction data cannot be extracted.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h4>How do refunds work?</h4>
              <p>
                Refunds are initiated through the device and follow the same 
                offline-first approach. The refund transaction is stored and 
                processed when devices sync.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>See It In Action</h2>
          <p>Request a demo to see how simple offline payments can be.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-accent btn-large">
              Request Demo
            </Link>
            <Link href="/hardware" className="btn btn-outline btn-large" style={{ borderColor: '#fff', color: '#fff' }}>
              Explore Hardware
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

