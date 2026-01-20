import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>₹</span>
              <span className={styles.logoText}>Peti</span>
            </Link>
            <p className={styles.tagline}>
              Payments that work, even when the internet doesn't.
            </p>
            <p className={styles.madeIn}>
              🇮🇳 Built in India, for India
            </p>
          </div>

          {/* Product Links */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Product</h4>
            <ul className={styles.linkList}>
              <li><Link href="/what-is-peti">What is Peti?</Link></li>
              <li><Link href="/why-offline">Why Offline?</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/hardware">Hardware</Link></li>
              <li><Link href="/use-cases">Use Cases</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/compliance">Compliance</Link></li>
              <li><Link href="/partner">Partner With Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>✉</span>
                <a href="mailto:booknow.official@gmail.com">booknow.official@gmail.com</a>
              </li>
              <li>
                <span className={styles.contactIcon}>☎</span>
                <a href="tel:+917667446309">+91 76674 46309</a>
              </li>
              <li>
                <span className={styles.contactIcon}>📍</span>
                <span>Chembur, Mumbai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} DKAS Booknow Pvt Ltd. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

