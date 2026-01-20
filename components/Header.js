import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/what-is-peti', label: 'What is Peti?' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/hardware', label: 'Hardware' },
    { href: '/security', label: 'Security' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>₹</span>
          <span className={styles.logoText}>Peti</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.navActions}>
            <Link href="/partner" className={styles.btnOutline}>
              Partner With Us
            </Link>
            <Link href="/contact" className={styles.btnPrimary}>
              Request Demo
            </Link>
          </div>
        </nav>

        <button 
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ''}`}></span>
        </button>
      </div>
    </header>
  )
}

