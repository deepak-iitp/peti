import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title, description, keywords }) {
  const router = useRouter()
  const siteUrl = 'https://peti.money'
  const currentUrl = `${siteUrl}${router.asPath}`
  
  const siteTitle = title ? `${title} | Peti - Offline Payment Device` : 'Peti - Offline Payment Hardware for Rural India | No Internet Required'
  const siteDescription = description || 'Peti enables secure, device-to-device payments using smart hardware — no apps, no internet dependency. Accept payments even when internet fails. Built for kirana stores, transport & rural India.'
  const siteKeywords = keywords || 'offline payment, payment device, rural payment, kirana store payment, no internet payment, India payment hardware, NFC payment, merchant payment device, Peti'

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Peti",
    "legalName": "DKAS Booknow Pvt Ltd",
    "url": siteUrl,
    "description": siteDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "G1, Sankara Colony",
      "addressLocality": "Chembur",
      "addressRegion": "Mumbai",
      "postalCode": "400043",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7667446309",
      "email": "booknow.official@gmail.com",
      "contactType": "customer service"
    },
    "sameAs": []
  }

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Peti - Offline Payment Device",
    "description": "Smart hardware payment device that works without internet. Accept payments via NFC, cards, and device taps even in areas with no connectivity.",
    "brand": {
      "@type": "Brand",
      "name": "Peti"
    },
    "category": "Payment Hardware",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "priceCurrency": "INR"
    }
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="DKAS Booknow Pvt Ltd" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`${siteUrl}/images/og-image.jpg`} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Peti" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteUrl}/images/og-image.jpg`} />
        
        {/* Geographic Tags for India */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0596;72.8879" />
        <meta name="ICBM" content="19.0596, 72.8879" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
        />
      </Head>

      <a href="#main" className="skip-link">Skip to main content</a>
      
      <Header />
      
      <main id="main">
        {children}
      </main>
      
      <Footer />
    </>
  )
}

