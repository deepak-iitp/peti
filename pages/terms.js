import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function Terms() {
  return (
    <Layout 
      title="Terms of Service"
      description="Peti's terms of service - rules and guidelines for using our offline payment services. Governed by Indian law."
      keywords="Peti terms of service, payment terms, merchant agreement"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <h1>Terms of Service</h1>
          <p className={styles.heroSubtitle}>
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Peti's services, you agree to be bound by these 
              Terms of Service. If you do not agree to these terms, please do not 
              use our services.
            </p>

            <h3>Description of Services</h3>
            <p>
              Peti provides hardware-based payment processing services that enable 
              offline transactions. Our services include:
            </p>
            <ul className="check-list">
              <li>Peti payment devices for merchants</li>
              <li>Payment processing and settlement services</li>
              <li>Transaction reporting and reconciliation</li>
              <li>Customer support and device maintenance</li>
            </ul>

            <h3>Eligibility</h3>
            <p>
              To use Peti services, you must:
            </p>
            <ul className="check-list">
              <li>Be at least 18 years old</li>
              <li>Have a valid business registration (for merchants)</li>
              <li>Complete our KYC verification process</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3>User Responsibilities</h3>
            <p>As a user of Peti services, you agree to:</p>
            <ul className="check-list">
              <li>Provide accurate and complete information</li>
              <li>Keep your device and credentials secure</li>
              <li>Use the services only for lawful purposes</li>
              <li>Report any suspicious activity immediately</li>
              <li>Not attempt to tamper with or modify the device</li>
            </ul>

            <h3>Payment Terms</h3>
            <p>
              Transaction settlements are processed according to your merchant 
              agreement. Settlement timelines may vary based on connectivity and 
              banking partner requirements. We are not responsible for delays 
              caused by network issues or banking systems.
            </p>

            <h3>Device Usage</h3>
            <p>
              Peti devices remain our property unless otherwise specified in your 
              agreement. You are responsible for the care and security of the 
              device. Damaged or lost devices may incur replacement charges.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              Peti is not liable for any indirect, incidental, or consequential 
              damages arising from the use of our services. Our liability is 
              limited to the fees paid for the specific transaction in question.
            </p>

            <h3>Termination</h3>
            <p>
              Either party may terminate the service agreement with appropriate 
              notice. Upon termination, you must return all Peti devices and 
              settle any outstanding amounts.
            </p>

            <h3>Changes to Terms</h3>
            <p>
              We may modify these terms at any time. Continued use of our services 
              after changes constitutes acceptance of the new terms.
            </p>

            <h3>Governing Law</h3>
            <p>
              These terms are governed by the laws of India. Any disputes shall 
              be subject to the exclusive jurisdiction of courts in Mumbai, 
              Maharashtra.
            </p>

            <h3>Contact</h3>
            <p>
              For questions about these Terms of Service, contact us at:
            </p>
            <p>
              <strong>Email:</strong> booknow.official@gmail.com<br />
              <strong>Address:</strong> G1, Sankara Colony, Chembur, Mumbai - 400043
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

