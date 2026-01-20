import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function UseCases() {
  return (
    <Layout 
      title="Peti Use Cases - Kirana, Transport, Events & More"
      description="Peti works for kirana stores, local transport, melas, rural markets, healthcare camps & emergencies. Accept payments where internet fails."
      keywords="kirana store payment, bus fare collection, mela payment, rural market payment, offline payment use cases, emergency payments India"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Real-World Applications</span>
          <h1>Use Cases</h1>
          <p className={styles.heroSubtitle}>
            See how Peti is solving payment problems across India's diverse economy.
          </p>
        </div>
      </section>

      {/* Kirana Stores */}
      <section className="section">
        <div className="container">
          <div className={styles.useCaseDetail}>
            <div className={styles.useCaseHeader}>
              <span className={styles.useCaseEmoji}>🏪</span>
              <h3>Kirana Stores</h3>
            </div>
            <p>
              India's 12 million kirana stores are the backbone of retail. They serve 
              customers who expect digital payments but can't wait for networks to cooperate.
              Peti ensures no sale is lost to "network problem."
            </p>
            <ul className="check-list">
              <li>Accept payments during network outages that typically last 10-30 minutes</li>
              <li>Handle peak hour rush without transaction failures</li>
              <li>Keep business running during planned maintenance windows</li>
            </ul>
          </div>

          <div className={styles.useCaseDetail}>
            <div className={styles.useCaseHeader}>
              <span className={styles.useCaseEmoji}>🚌</span>
              <h3>Local Transport</h3>
            </div>
            <p>
              Buses, autos, and taxis move through areas with varying network coverage. 
              Passengers want to pay digitally but can't wait for network connection. 
              Peti enables instant fare collection anywhere on the route.
            </p>
            <ul className="check-list">
              <li>Collect fares in tunnels, rural stretches, and underground metros</li>
              <li>No delays during boarding — tap and go in 2 seconds</li>
              <li>Works for conductors across entire bus routes without connectivity gaps</li>
            </ul>
          </div>

          <div className={styles.useCaseDetail}>
            <div className={styles.useCaseHeader}>
              <span className={styles.useCaseEmoji}>🎪</span>
              <h3>Events & Fairs</h3>
            </div>
            <p>
              Melas, fairs, and events bring thousands of people into small areas. 
              Mobile networks get congested immediately. Vendors lose sales because 
              every payment app shows "Server Error." Peti works regardless of network load.
            </p>
            <ul className="check-list">
              <li>Handle high-volume transactions even when networks are completely jammed</li>
              <li>No dependency on cellular towers or WiFi availability</li>
              <li>Each vendor works independently — no shared infrastructure failures</li>
            </ul>
          </div>

          <div className={styles.useCaseDetail}>
            <div className={styles.useCaseHeader}>
              <span className={styles.useCaseEmoji}>🌾</span>
              <h3>Rural Markets</h3>
            </div>
            <p>
              Weekly haats and village markets happen in areas where internet is 
              a luxury, not a given. Farmers and traders want to go digital but 
              infrastructure hasn't caught up. Peti bridges this gap.
            </p>
            <ul className="check-list">
              <li>Enable digital payments in areas with zero mobile coverage</li>
              <li>Sync transactions when traders return to town with connectivity</li>
              <li>Bring financial inclusion to the last mile of rural India</li>
            </ul>
          </div>

          <div className={styles.useCaseDetail}>
            <div className={styles.useCaseHeader}>
              <span className={styles.useCaseEmoji}>⚡</span>
              <h3>Emergency Situations</h3>
            </div>
            <p>
              During floods, earthquakes, or other emergencies, communication 
              infrastructure fails first. But commerce doesn't stop — people need 
              to buy essentials. Peti ensures payments work when everything else fails.
            </p>
            <ul className="check-list">
              <li>Critical payments work during natural disasters and emergencies</li>
              <li>Relief distribution centers can accept digital payments offline</li>
              <li>Essential services remain accessible when networks go down</li>
            </ul>
          </div>

          <div className={styles.useCaseDetail}>
            <div className={styles.useCaseHeader}>
              <span className={styles.useCaseEmoji}>🏥</span>
              <h3>Healthcare Camps</h3>
            </div>
            <p>
              Mobile health camps operate in remote villages with no connectivity. 
              Collecting fees or processing subsidies requires reliable payment 
              processing. Peti enables healthcare access without cash dependency.
            </p>
            <ul className="check-list">
              <li>Process consultation fees in remote health camps</li>
              <li>Enable cashless medicine purchases in areas with no banking</li>
              <li>Integrate with government health schemes for subsidy processing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Applications */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>More Applications</h2>
            <p>Peti is versatile across industries</p>
          </div>

          <div className={`grid grid-3 ${styles.features}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏫</div>
              <h3>Schools & Institutions</h3>
              <p>
                Collect fees, canteen payments, and event charges without 
                network dependency. Works for schools in remote areas.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏛️</div>
              <h3>Government Services</h3>
              <p>
                Enable cashless payments at gram panchayats, block offices, 
                and government camps in areas without banking infrastructure.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚐</div>
              <h3>Mobile Vendors</h3>
              <p>
                Street food vendors, delivery services, and mobile shops 
                can accept payments anywhere without worrying about coverage.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⛽</div>
              <h3>Petrol Pumps</h3>
              <p>
                Highway petrol pumps in remote areas can process payments 
                even when network is down. Essential for long-distance travelers.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎭</div>
              <h3>Tourism</h3>
              <p>
                Tourist spots, heritage sites, and adventure locations 
                can accept digital payments regardless of connectivity.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚜</div>
              <h3>Agriculture</h3>
              <p>
                Farm-gate transactions, equipment rentals, and input 
                purchases can happen digitally in fields far from towns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Have a Use Case in Mind?</h2>
          <p>Tell us about your payment challenges. We'd love to explore how Peti can help.</p>
          <div className={styles.ctaButtons}>
            <Link href="/partner" className="btn btn-accent btn-large">
              Partner With Us
            </Link>
            <Link href="/contact" className="btn btn-outline btn-large" style={{ borderColor: '#fff', color: '#fff' }}>
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

