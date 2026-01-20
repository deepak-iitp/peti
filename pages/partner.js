import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function Partner() {
  return (
    <Layout 
      title="Partner With Peti - Merchant & Distributor Program"
      description="Join Peti as a merchant, distributor or institutional partner. Be part of building offline payment infrastructure for India. Early adopter benefits available."
      keywords="Peti partner, merchant signup, distributor program, payment device partner, pilot program India, Peti merchant"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Join the Movement</span>
          <h1>Partner With Us</h1>
          <p className={styles.heroSubtitle}>
            Be part of building payment infrastructure that works for all of India.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Ways to Partner</h2>
            <p>Different ways to join the Peti ecosystem</p>
          </div>

          <div className={`grid grid-3 ${styles.features}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏪</div>
              <h3>Merchants</h3>
              <p>
                Use Peti at your store, shop, or business. Accept payments 
                even when internet fails. Be part of our pilot program.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤝</div>
              <h3>Distribution Partners</h3>
              <p>
                Help us reach merchants across India. Become a local 
                distributor or reseller of Peti devices.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏛️</div>
              <h3>Institutional Partners</h3>
              <p>
                Banks, NBFCs, government bodies, and large organizations 
                looking to enable offline payments at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section section-light">
        <div className="container">
          <div className={styles.formContainer}>
            <div className={styles.formTitle}>
              <h2>Join the Offline Payment Movement</h2>
              <p>Fill out this form and we'll get back to you soon.</p>
            </div>
            <div className={styles.googleFormEmbed}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSewpaMZfrpNJqsQd974an9jdbopZYpt1LZw09ggqhpYS8mYaQ/viewform?embedded=true" 
                width="100%" 
                height="900" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Partner Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why Partner With Peti?</h2>
            <p>Benefits of joining early</p>
          </div>

          <div className={`grid grid-2 ${styles.features}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🥇</div>
              <h3>Early Mover Advantage</h3>
              <p>
                Be among the first to offer offline payments in your area. 
                Stand out from competitors who still depend on internet.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Shape the Product</h3>
              <p>
                Pilot partners get direct input into product development. 
                Help us build features that matter to real merchants.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Competitive Pricing</h3>
              <p>
                Early partners receive preferential pricing and terms. 
                Lock in favorable rates before we scale.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤝</div>
              <h3>Dedicated Support</h3>
              <p>
                Direct access to our team during pilot phase. 
                Get help whenever you need it, in Hindi or English.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

