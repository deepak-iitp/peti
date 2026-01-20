# Peti - Offline Payment Hardware Website

Peti is a hardware-based offline payment system designed for rural India, local shops, transport, small merchants, and low-internet environments.

**One-Line Mission:** Payments that work, even when the internet doesn't.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
peti/
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header
│   ├── Header.module.css
│   ├── Footer.js       # Site footer
│   ├── Footer.module.css
│   └── Layout.js       # Page layout wrapper
├── pages/              # Next.js pages (routes)
│   ├── _app.js         # App wrapper
│   ├── _document.js    # HTML document
│   ├── index.js        # Home page
│   ├── what-is-peti.js # What is Peti page
│   ├── why-offline.js  # Why Offline Payments page
│   ├── how-it-works.js # How Peti Works page
│   ├── hardware.js     # Hardware Overview page
│   ├── use-cases.js    # Use Cases page
│   ├── security.js     # Security & Trust page
│   ├── compliance.js   # Compliance & Roadmap page
│   ├── about.js        # About Peti page
│   ├── partner.js      # Partner signup page
│   └── contact.js      # Contact page
├── styles/             # CSS stylesheets
│   ├── globals.css     # Global styles & CSS variables
│   ├── Home.module.css # Home page styles
│   └── Pages.module.css # Shared page styles
├── public/             # Static assets
├── package.json
├── next.config.js
└── README.md
```

## 🎨 Design System

### Colors

- **Primary:** Dark Blue/Indigo (#1e3a5f) - Trust & reliability
- **Accent:** Green (#16a34a) - Money & success  
- **Background:** White / Light grey (#f8fafc)

### Typography

- Font: Mukta (Google Fonts) - Clean, readable, supports Hindi
- Mobile-first responsive typography

### Design Principles

- ✅ Clean and minimal
- ✅ No clutter
- ✅ Big icons
- ✅ Simple diagrams
- ✅ Works on 2G / low bandwidth
- ✅ Mobile-first

## 📄 Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, overview, CTAs |
| What is Peti? | `/what-is-peti` | Product explanation |
| Why Offline? | `/why-offline` | Problem & solution |
| How It Works | `/how-it-works` | Step-by-step flow |
| Hardware | `/hardware` | Device specifications |
| Use Cases | `/use-cases` | Industry applications |
| Security | `/security` | Trust & safety |
| Compliance | `/compliance` | Regulatory roadmap |
| About | `/about` | Vision & values |
| Partner | `/partner` | Partnership signup form |
| Contact | `/contact` | Contact form & info |

## 🔧 Tech Stack

- **Framework:** Next.js 14
- **Language:** JavaScript/React
- **Styling:** CSS Modules
- **Fonts:** Google Fonts (Mukta)

### Why This Stack?

- ✅ Lightweight and fast
- ✅ SEO friendly (SSR)
- ✅ Mobile-first
- ✅ Works well on low bandwidth
- ✅ Easy to deploy

## 🚀 Deployment

The site can be deployed to:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting

```bash
# Build for production
npm run build

# The output will be in .next folder
```

## 📝 Content Guidelines

### Tone
- Simple and non-technical
- Trustworthy
- Indian context friendly
- Clear and confident

### What to Avoid
- ❌ Crypto/blockchain hype
- ❌ Buzzwords
- ❌ Complex dashboards
- ❌ Flashy animations
- ❌ Misleading payment claims

## 🔜 Future Extensions (Not Built Yet)

- Merchant dashboard
- Transaction analytics
- Hardware management
- Government integrations

## 📞 Contact

- Email: booknow.official@gmail.com
- Location: G1, Sankara Colony, Chembur, Mumbai - 400043
- Company: DKAS Booknow Pvt Ltd

---

**Peti — Payments that work, even when the internet doesn't.**

Built with ❤️ in India 🇮🇳

