import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'

export default function WhyOffline() {
  return (
    <Layout 
      title="Why Offline Payments Matter for India"
      description="Digital payments fail when India needs them most. Learn why offline payment capability is essential for rural areas, kirana stores, and small merchants."
      keywords="offline payments India, internet failure payments, rural payment problems, UPI not working, payment solution rural India"
    >
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">The Why Behind Peti</span>
          <h1>Why Offline Payments?</h1>
          <p className={styles.heroSubtitle}>
            In a country where digital payments are growing but infrastructure lags behind, 
            offline capability isn't a luxury — it's a necessity.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>The Problems with Today's Payments</h2>
            <p>Digital payments have transformed India, but they still fail when it matters most</p>
          </div>
          
          <div className={`grid grid-2 ${styles.problemGrid}`}>
            <div className={styles.problemCard}>
              <div className={styles.problemHeader}>
                <span className={styles.problemIcon}>📵</span>
                <h3>Internet Failures</h3>
              </div>
              <p>
                Even in cities, networks drop. In rural areas, stable internet is rare. 
                When a customer is ready to pay but the network isn't, the sale is lost.
              </p>
              <div className={styles.stat}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>of India still has poor internet connectivity</span>
              </div>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemHeader}>
                <span className={styles.problemIcon}>📱</span>
                <h3>App Crashes</h3>
              </div>
              <p>
                Payment apps are getting heavier. Low-end phones can't keep up. 
                Apps crash, freeze, or take forever to load. Customers get frustrated.
              </p>
              <div className={styles.stat}>
                <span className={styles.statNumber}>60%</span>
                <span className={styles.statLabel}>of Indians use entry-level smartphones</span>
              </div>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemHeader}>
                <span className={styles.problemIcon}>⏱️</span>
                <h3>OTP & SMS Delays</h3>
              </div>
              <p>
                OTPs take too long to arrive or don't arrive at all. 
                Network congestion during festivals makes it worse. Payments time out.
              </p>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15-30s</span>
                <span className={styles.statLabel}>average OTP delay in peak hours</span>
              </div>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemHeader}>
                <span className={styles.problemIcon}>🔋</span>
                <h3>Smartphone Dependency</h3>
              </div>
              <p>
                Current digital payments require smartphones. Many customers and merchants 
                only have basic phones. Others face battery or storage issues.
              </p>
              <div className={styles.stat}>
                <span className={styles.statNumber}>300M+</span>
                <span className={styles.statLabel}>Indians still without smartphones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Real Payment Failures, Real Impact</h2>
            <p>Stories from merchants across India</p>
          </div>
          <div className={`grid grid-3 ${styles.storyGrid}`}>
            <div className={styles.storyCard}>
              <p className={styles.storyQuote}>
                "During Diwali rush, UPI stopped working for 2 hours. 
                I had to turn away customers. Lost at least ₹15,000 in sales."
              </p>
              <div className={styles.storyAuthor}>
                <span className={styles.storyIcon}>🏪</span>
                <div>
                  <strong>Ramesh Kumar</strong>
                  <span>Kirana Store, Bihar</span>
                </div>
              </div>
            </div>
            <div className={styles.storyCard}>
              <p className={styles.storyQuote}>
                "In my village, internet works for only 2-3 hours a day. 
                Customers can't always wait. They go to the shop that takes cash."
              </p>
              <div className={styles.storyAuthor}>
                <span className={styles.storyIcon}>🛒</span>
                <div>
                  <strong>Lakshmi Devi</strong>
                  <span>General Store, Rajasthan</span>
                </div>
              </div>
            </div>
            <div className={styles.storyCard}>
              <p className={styles.storyQuote}>
                "At the weekly mela, network gets so congested that nothing works. 
                Everyone goes back to cash because there's no other option."
              </p>
              <div className={styles.storyAuthor}>
                <span className={styles.storyIcon}>🎪</span>
                <div>
                  <strong>Mohammed Ismail</strong>
                  <span>Mela Vendor, UP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={styles.content}>
              <span className="badge badge-accent">The Solution</span>
              <h2>Hardware That Works Instantly</h2>
              <p className={styles.lead}>
                Offline payments solve these problems at the root — by not depending on 
                internet at the critical moment.
              </p>
              <ul className={styles.benefitList}>
                <li>
                  <span className={styles.benefitIcon}>⚡</span>
                  <div>
                    <strong>No Login Required</strong>
                    <p>Device is always ready. No passwords, no biometrics, no waiting.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}>🔄</span>
                  <div>
                    <strong>No App Updates</strong>
                    <p>Hardware works the same way every time. No surprises after updates.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}>🛡️</span>
                  <div>
                    <strong>Reliable During Outages</strong>
                    <p>Power cuts? Network down? Festival rush? Payments still work.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}>✨</span>
                  <div>
                    <strong>Instant Confirmation</strong>
                    <p>Both parties know immediately that payment is complete.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.visual}>
              <div className={styles.solutionBox}>
                <h4>Offline Advantages</h4>
                <div className={styles.advantageList}>
                  <div className={styles.advantage}>
                    <div className={styles.advantageBar} style={{ width: '100%' }}></div>
                    <span>Reliability</span>
                  </div>
                  <div className={styles.advantage}>
                    <div className={styles.advantageBar} style={{ width: '95%' }}></div>
                    <span>Speed</span>
                  </div>
                  <div className={styles.advantage}>
                    <div className={styles.advantageBar} style={{ width: '100%' }}></div>
                    <span>Works in Rural</span>
                  </div>
                  <div className={styles.advantage}>
                    <div className={styles.advantageBar} style={{ width: '90%' }}></div>
                    <span>No Phone Needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Offline Matters */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-title">
            <h2>When Offline Matters Most</h2>
            <p>Critical situations where online payments fail</p>
          </div>
          <div className={`grid grid-3 ${styles.situationGrid}`}>
            <div className={styles.situationCard}>
              <div className={styles.situationIcon}>🌧️</div>
              <h4>Natural Events</h4>
              <p>During floods, storms, or earthquakes when networks are first to fail</p>
            </div>
            <div className={styles.situationCard}>
              <div className={styles.situationIcon}>🎉</div>
              <h4>Festivals & Events</h4>
              <p>When millions transact at once and networks get overwhelmed</p>
            </div>
            <div className={styles.situationCard}>
              <div className={styles.situationIcon}>🚆</div>
              <h4>On the Move</h4>
              <p>In trains, buses, remote highways with no coverage</p>
            </div>
            <div className={styles.situationCard}>
              <div className={styles.situationIcon}>🏔️</div>
              <h4>Remote Areas</h4>
              <p>Hill stations, villages, border areas with weak signals</p>
            </div>
            <div className={styles.situationCard}>
              <div className={styles.situationIcon}>⚡</div>
              <h4>Power Outages</h4>
              <p>When cell towers go down but business must continue</p>
            </div>
            <div className={styles.situationCard}>
              <div className={styles.situationIcon}>🏟️</div>
              <h4>Crowded Venues</h4>
              <p>Stadiums, concerts, rallies where bandwidth is shared</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready for Payments That Actually Work?</h2>
          <p>Join merchants across India who never say "network problem" again.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-accent btn-large">
              Request Demo
            </Link>
            <Link href="/what-is-peti" className="btn btn-outline btn-large" style={{ borderColor: '#fff', color: '#fff' }}>
              Learn About Peti
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

