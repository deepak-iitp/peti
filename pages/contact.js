import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function Contact() {
  return (
    <Layout 
      title="Contact Peti - Request Demo or Partnership"
      description="Contact the Peti team for demos, partnerships, or questions. Located in Mumbai. Email: booknow.official@gmail.com, Phone: +91 7667446309"
      keywords="contact Peti, Peti demo, Peti phone number, Peti email, offline payment demo India"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Get In Touch</span>
          <h1>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>✉️</div>
              <h4>Email Us</h4>
              <a href="mailto:booknow.official@gmail.com">booknow.official@gmail.com</a>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>📞</div>
              <h4>Call Us</h4>
              <a href="tel:+917667446309">+91 76674 46309</a>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>📍</div>
              <h4>Visit Us</h4>
              <p>G1, Sankara Colony, Chembur, Mumbai - 400043</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section section-light">
        <div className="container">
          <div className={styles.formContainer}>
            <div className={styles.formTitle}>
              <h2>Send Us a Message</h2>
              <p>Fill out the form and we'll get back to you.</p>
            </div>
            <div className={styles.googleFormEmbed}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScGGJsL1cOnjEHL4DmeLULLr8GV25jlMlv88SSctVc0Gin-IA/viewform?embedded=true" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Common Questions</h2>
            <p>Quick answers to frequent inquiries</p>
          </div>

          <div className={`grid grid-2 ${styles.features}`}>
            <div className={styles.featureCard}>
              <h4>How can I get a Peti device?</h4>
              <p>
                We're currently in pilot phase. Fill out the partner form 
                to express interest, and we'll contact you when devices 
                are available in your area.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h4>Is Peti available in my city?</h4>
              <p>
                We're starting with limited pilots in select cities. 
                We're expanding gradually. Let us know your location 
                and we'll keep you updated.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h4>What does a demo look like?</h4>
              <p>
                We can do video call demos or in-person demos in select 
                cities. You'll see the actual device and how offline 
                payments work in real-time.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h4>How much does Peti cost?</h4>
              <p>
                Pricing depends on partnership type and volume. Contact 
                us for specific pricing. Pilot participants get special 
                early-adopter rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section section-cream">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <h2>When to Reach Us</h2>
              <p className={styles.lead}>
                Our team is available during business hours to help you.
              </p>
              <div className={styles.hours}>
                <div className={styles.hoursRow}>
                  <span>Monday - Friday</span>
                  <strong>9:00 AM - 6:00 PM IST</strong>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <strong>10:00 AM - 2:00 PM IST</strong>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sunday</span>
                  <strong>Closed</strong>
                </div>
              </div>
              <p className={styles.hoursNote}>
                For urgent pilot-related issues, participants have access 
                to dedicated support lines.
              </p>
            </div>
            <div className={styles.visual}>
              <div className={styles.comparisonBox}>
                <h4>Response Times</h4>
                <div className={styles.responseList}>
                  <div className={styles.responseItem}>
                    <span>Email</span>
                    <strong>24-48 hours</strong>
                  </div>
                  <div className={styles.responseItem}>
                    <span>Phone</span>
                    <strong>Same day</strong>
                  </div>
                  <div className={styles.responseItem}>
                    <span>Demo requests</span>
                    <strong>2-3 days</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

