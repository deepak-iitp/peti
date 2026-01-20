import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function Privacy() {
  return (
    <Layout 
      title="Privacy Policy"
      description="Peti's privacy policy - how we collect, use, and protect your data. Data stored in India, compliant with Indian regulations."
      keywords="Peti privacy policy, data protection, payment data security"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className={styles.heroSubtitle}>
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Introduction</h2>
            <p>
              Peti ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your 
              information when you use our services and website.
            </p>

            <h3>Information We Collect</h3>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="check-list">
              <li>Name and contact information (phone, email, address)</li>
              <li>Business details for merchants (business name, type, location)</li>
              <li>Transaction data processed through Peti devices</li>
              <li>Device information for security and fraud prevention</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul className="check-list">
              <li>Process payments and provide our services</li>
              <li>Communicate with you about your account and transactions</li>
              <li>Improve and develop our products and services</li>
              <li>Comply with legal obligations and prevent fraud</li>
            </ul>

            <h3>Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to 
              protect your personal information. All transaction data is encrypted 
              and stored securely. Our hardware devices use bank-grade security 
              measures.
            </p>

            <h3>Data Localization</h3>
            <p>
              All data collected through Peti is stored and processed within India, 
              in compliance with Indian data protection regulations.
            </p>

            <h3>Your Rights</h3>
            <p>You have the right to:</p>
            <ul className="check-list">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h3>Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <p>
              <strong>Email:</strong> booknow.official@gmail.com<br />
              <strong>Address:</strong> G1, Sankara Colony, Chembur, Mumbai - 400043
            </p>

            <h3>Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify 
              you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

