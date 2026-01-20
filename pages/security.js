import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function Security() {
  return (
    <Layout 
      title="Peti Security - Bank-Grade Hardware Protection"
      description="Peti uses hardware-level security, encrypted transactions, secure element chip & tamper detection. Bank-grade protection for every offline payment."
      keywords="Peti security, payment device security, hardware encryption, secure element, tamper proof payment, bank grade security India"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Your Money, Protected</span>
          <h1>Security & Trust</h1>
          <p className={styles.heroSubtitle}>
            Built with the same security standards as your debit card.
          </p>
        </div>
      </section>

      {/* Simple Explanation */}
      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>How Peti Keeps Your Money Safe</h2>
              <p className={styles.lead}>
                Think of Peti like a secure locker for your transactions. 
                Every payment is locked with a unique key that only the 
                banking system can open.
              </p>
              <p>
                Unlike phone apps that can be hacked or copied, Peti uses 
                dedicated security hardware — the same technology that 
                protects your ATM card's chip.
              </p>
              <p>
                Even if someone steals the device, they can't see your 
                transactions or fake new ones. The security is built into 
                the physical device, not just software.
              </p>
            </div>
            <div className={styles.visual}>
              <div className={styles.securityDiagram}>
                <div className={styles.securityLayer}>
                  <span>🔒</span>
                  <strong>Hardware Security</strong>
                  <p>Physical chip protection</p>
                </div>
                <div className={styles.securityLayer}>
                  <span>🔐</span>
                  <strong>Encryption</strong>
                  <p>Data scrambled with keys</p>
                </div>
                <div className={styles.securityLayer}>
                  <span>✅</span>
                  <strong>Verification</strong>
                  <p>Bank confirms every sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Security Features</h2>
            <p>Multiple layers of protection for every transaction</p>
          </div>

          <div className={`grid grid-2 ${styles.securityGrid}`}>
            <div className={styles.securityCard}>
              <div className={styles.securityIcon}>🔐</div>
              <h4>Hardware-Level Security</h4>
              <p>
                Peti uses a secure element — a special chip that stores 
                sensitive information in a protected area. This is the same 
                technology used in credit cards, passports, and secure ID cards. 
                It's proven, tested, and trusted by banks worldwide.
              </p>
            </div>

            <div className={styles.securityCard}>
              <div className={styles.securityIcon}>🔒</div>
              <h4>Encrypted Transactions</h4>
              <p>
                Every transaction is encrypted before it's stored. Think of it 
                like writing in a secret code that only the bank can read. 
                Even if someone could access the device's memory, they'd only 
                see scrambled data.
              </p>
            </div>

            <div className={styles.securityCard}>
              <div className={styles.securityIcon}>👁️</div>
              <h4>No Raw Data Exposure</h4>
              <p>
                Peti never shows or stores sensitive card numbers in readable 
                form. Card data is immediately converted into secure tokens. 
                What's stored is a reference, not the actual card number.
              </p>
            </div>

            <div className={styles.securityCard}>
              <div className={styles.securityIcon}>🏦</div>
              <h4>Bank-Grade Standards</h4>
              <p>
                Our security approach follows the same principles used by 
                major banks and payment networks. We're building to meet 
                PCI DSS standards — the gold standard for payment security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why You Can Trust Peti</h2>
            <p>Simple answers to common concerns</p>
          </div>

          <div className={`grid grid-2 ${styles.features}`}>
            <div className={styles.featureCard}>
              <h4>What if someone steals my Peti device?</h4>
              <p>
                The device can be remotely disabled. All data is encrypted 
                and can't be extracted even with physical access. Pending 
                transactions are flagged and verified before settlement.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h4>Can someone create fake transactions?</h4>
              <p>
                No. Each transaction requires cryptographic signatures from 
                both devices involved. These signatures can't be forged 
                without the secure element — which can't be copied.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h4>How do you prevent double-spending?</h4>
              <p>
                Each transaction has a unique ID that's tracked across 
                the system. When devices sync, the banking system checks 
                for any duplicates or conflicts.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h4>What if there's a dispute?</h4>
              <p>
                Both devices keep signed records of every transaction. 
                These records are tamper-proof and can be used to verify 
                what actually happened.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h4>Is my personal data safe?</h4>
              <p>
                Peti stores minimal personal data. We don't need your 
                photos, contacts, or location. Just what's needed for 
                payment processing.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h4>How is this different from UPI security?</h4>
              <p>
                UPI relies on your phone's security and network encryption. 
                Peti adds dedicated hardware security — a physical barrier 
                that's much harder to breach than software alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="section section-cream">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>What We Don't Do</h2>
              <p className={styles.lead}>
                Being secure also means being honest about our limits.
              </p>
              <div className={styles.notList}>
                <div className={styles.notItem}>
                  <span className={styles.notIcon}>✕</span>
                  <div>
                    <strong>No cryptocurrency</strong>
                    <p>Peti works with real money, regulated by real banks</p>
                  </div>
                </div>
                <div className={styles.notItem}>
                  <span className={styles.notIcon}>✕</span>
                  <div>
                    <strong>No anonymous transactions</strong>
                    <p>All transactions are traceable for compliance</p>
                  </div>
                </div>
                <div className={styles.notItem}>
                  <span className={styles.notIcon}>✕</span>
                  <div>
                    <strong>No unrealistic promises</strong>
                    <p>We're building carefully, not rushing to market</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.visual}>
              <div className={styles.comparisonBox}>
                <h4>Our Security Commitment</h4>
                <ul className="check-list">
                  <li>Regular security audits</li>
                  <li>Responsible disclosure program</li>
                  <li>Transparent about limitations</li>
                  <li>Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Questions About Security?</h2>
          <p>We're happy to explain how Peti protects your transactions.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-accent btn-large">
              Contact Us
            </Link>
            <Link href="/how-it-works" className="btn btn-outline btn-large" style={{ borderColor: '#fff', color: '#fff' }}>
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

